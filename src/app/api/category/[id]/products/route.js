import prisma from '../../../../../lib/prisma'

export async function GET(req, { params }) {
  try {
    let id = params && params.id ? parseInt(params.id, 10) : NaN

    // fallback: try to parse id from request URL if params not set (some clients may call wrong path)
    if (Number.isNaN(id)) {
      try {
        const reqUrl = typeof req.url === 'string' ? new URL(req.url, 'http://localhost') : null
        if (reqUrl) {
          const parts = reqUrl.pathname.split('/').filter(Boolean)
          const catIndex = parts.indexOf('category')
          if (catIndex !== -1 && parts.length > catIndex + 1) {
            const maybe = parts[catIndex + 1]
            const parsed = parseInt(maybe, 10)
            if (!Number.isNaN(parsed)) {
              id = parsed
            }
          }
        }
      } catch (e) {
        // ignore fallback parse errors
      }
    }

    if (Number.isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid category id' }), { status: 400 })
    const [productsRaw, count] = await Promise.all([
      prisma.product.findMany({
        where: { categoryId: id },
        include: { images: true, category: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where: { categoryId: id } }),
    ])

    // normalize image URLs to absolute
    let origin = ''
    try { origin = new URL(req.url).origin } catch (e) { origin = '' }

    const products = productsRaw.map((p) => {
      const imgs = (p.images || []).map((img) => {
        const raw = img.url || ''
        const url = raw && String(raw).startsWith('http') ? raw : `${origin}${raw.startsWith('/') ? raw : '/' + raw}`
        return { ...img, url }
      })
      const imageUrls = imgs.map((i) => i.url)
      return { ...p, images: imgs, imageUrls }
    })

    return new Response(JSON.stringify({ ok: true, count, products }), { status: 200 })
  } catch (err) {
    console.error('Category products error:', err)
    const payload = { error: 'Server error' }
    // expose detail in dev for debugging
    if (process.env.NODE_ENV !== 'production') {
      payload.detail = err.message
      payload.stack = err.stack
    }
    return new Response(JSON.stringify(payload), { status: 500 })
  }
}
