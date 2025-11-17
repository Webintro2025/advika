import prisma from '../../../../lib/prisma'

export async function GET(req, { params }) {
  try {
    // try multiple ways to find a numeric id
    let id = NaN
    try {
      // direct param
      if (params && params.id !== undefined) {
        const rawParam = String(params.id)
        // direct parse
        id = parseInt(rawParam, 10)
        if (Number.isNaN(id)) {
          // try decode and extract digits
          const decoded = decodeURIComponent(rawParam)
          const m = String(decoded).match(/(\d+)/)
          if (m) id = parseInt(m[1], 10)
        }
      }
    } catch (e) {
      // ignore parsing errors
    }

    // fallback: attempt to extract from the request URL path
    if (Number.isNaN(id)) {
      try {
        const url = new URL(req.url)
        const segments = url.pathname.split('/').filter(Boolean)
        // find last numeric segment
        for (let i = segments.length - 1; i >= 0; i--) {
          const m = String(segments[i]).match(/^(?:.*?)(\d+)(?:.*?)$/)
          if (m) {
            id = parseInt(m[1], 10)
            break
          }
        }
      } catch (e) {
        // ignore
      }
    }

    if (Number.isNaN(id)) {
      const debug = { receivedParam: params && params.id, reqUrl: req.url }
      console.debug('GET /api/product/[id] invalid id - debug:', debug)
      return new Response(JSON.stringify({ error: 'Invalid id', debug }), { status: 400 })
    }

    const product = await prisma.product.findUnique({ where: { id }, include: { category: true, images: true } })
    if (!product) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })

    // normalize image URLs to absolute (helps when src needs full URL)
    let origin = null
    try {
      origin = new URL(req.url).origin
    } catch (e) {
      origin = ''
    }

    const images = (product.images || []).map((img) => {
      const raw = img.url || ''
      const url = raw && String(raw).startsWith('http') ? raw : `${origin}${raw.startsWith('/') ? raw : '/' + raw}`
      return { ...img, url }
    })
    const imageUrls = images.map((i) => i.url)

    const normalized = { ...product, images, imageUrls }
    return new Response(JSON.stringify(normalized), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    const id = parseInt(params.id, 10)
    if (Number.isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 })

    // Support JSON and multipart/form-data for updates (allow uploading new images)
    const contentType = req.headers.get('content-type') || ''
    let name, description, price, categoryId, imageUrls

    const saveUploadedFiles = async (files) => {
      const urls = []
      if (!files || files.length === 0) return urls
      const fs = await import('fs')
      const path = await import('path')
      const { randomUUID } = await import('crypto')
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
      try { fs.mkdirSync(uploadsDir, { recursive: true }) } catch (e) {}

      for (const f of files) {
        if (!f || typeof f.name !== 'string') continue
        const originalName = f.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')
        const filename = `${Date.now()}-${randomUUID()}-${originalName}`
        const filePath = path.join(uploadsDir, filename)
        const buffer = Buffer.from(await f.arrayBuffer())
        if (buffer.length > 10 * 1024 * 1024) continue
        fs.writeFileSync(filePath, buffer)
        urls.push(`/uploads/${filename}`)
      }
      return urls
    }

    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData()
      name = form.get('name') ? String(form.get('name')) : undefined
      description = form.get('description') ? String(form.get('description')) : undefined
      price = form.get('price') ? Number(form.get('price')) : undefined
      categoryId = form.get('categoryId') ? Number(form.get('categoryId')) : undefined
      const files = form.getAll('images') || []
      const saved = await saveUploadedFiles(files)
      imageUrls = saved.length ? saved : undefined
    } else {
      const body = await req.json()
      ;({ name, description, price, categoryId, imageUrls } = body)
    }

    const data = {}
    if (name && typeof name === 'string' && name.trim()) data.name = name.trim()
    if (description !== undefined) data.description = description === null ? null : String(description)
    if (price !== undefined) data.price = typeof price === 'number' ? price : parseFloat(price) || 0
    if (categoryId !== undefined) {
      const catId = Number(categoryId)
      if (!Number.isInteger(catId)) return new Response(JSON.stringify({ error: 'Valid categoryId required' }), { status: 400 })
      // ensure category exists
      const category = await prisma.category.findUnique({ where: { id: catId } })
      if (!category) return new Response(JSON.stringify({ error: 'Category not found' }), { status: 404 })
      data.category = { connect: { id: catId } }
    }

    // handle images replacement when imageUrls provided (array of urls)
    if (imageUrls !== undefined) {
      if (imageUrls === null) {
        // remove all images
        data.images = { deleteMany: {} }
      } else if (Array.isArray(imageUrls)) {
        data.images = { deleteMany: {}, create: imageUrls.filter(Boolean).map((u) => ({ url: String(u) })) }
      }
    }

  const updated = await prisma.product.update({ where: { id }, data, include: { category: true, images: true } })
    return new Response(JSON.stringify(updated), { status: 200 })
  } catch (err) {
    console.error(err)
    if (err.code === 'P2025') return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = parseInt(params.id, 10)
    if (Number.isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 })

    await prisma.product.delete({ where: { id } })
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    if (err.code === 'P2025') return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
