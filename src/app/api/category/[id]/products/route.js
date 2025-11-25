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

    // normalize image URLs to absolute using env-based base URL
    const envBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'

    const products = productsRaw.map((p) => {
      const imgs = (p.images || []).map((img) => {
        const raw = img.url || ''
        let url = raw

        if (raw && String(raw).startsWith('http://localhost')) {
          // replace any localhost URLs with the configured base
          url = raw.replace(/^http:\/\/localhost(?::\d+)?/i, envBase)
        } else if (raw && !String(raw).startsWith('http')) {
          // relative path -> prefix with env base
          url = `${envBase}${raw.startsWith('/') ? raw : '/' + raw}`
        }

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
