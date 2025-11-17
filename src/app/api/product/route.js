import prisma from '../../../lib/prisma'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      include: { category: true, images: true },
    })
    return new Response(JSON.stringify(products), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function POST(req) {
  try {
    // Support both JSON and multipart/form-data (for file uploads from Postman)
    const contentType = req.headers.get('content-type') || ''
    let name, description, price, categoryId, imageUrls

    // helper to save uploaded files (File objects) to public/uploads and return public URLs
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
        // basic size limit: 10MB
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

      // collect image files under 'images' (allow multiple)
      const files = form.getAll('images') || []
      const saved = await saveUploadedFiles(files)
      imageUrls = saved.length ? saved : undefined
    } else {
      let body
      try {
        body = await req.json()
      } catch (err) {
        const raw = await req.text().catch(() => '')
        return new Response(
          JSON.stringify({ error: 'Invalid JSON body', detail: err.message, raw: raw.slice(0, 1000) }),
          { status: 400 }
        )
      }
      ;({ name, description, price, categoryId, imageUrls } = body)
    }
    if (!name || typeof name !== 'string' || !name.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 })
    }
    const catId = Number(categoryId)
    if (!Number.isInteger(catId)) {
      return new Response(JSON.stringify({ error: 'Valid categoryId is required' }), { status: 400 })
    }

    // ensure category exists
    const category = await prisma.category.findUnique({ where: { id: catId } })
    if (!category) return new Response(JSON.stringify({ error: 'Category not found' }), { status: 404 })

    const product = await prisma.product.create({
      data: {
        name: name.trim(),
        description: description ? String(description) : null,
        price: typeof price === 'number' ? price : parseFloat(price) || 0,
        category: { connect: { id: catId } },
        images: imageUrls && Array.isArray(imageUrls) ? { create: imageUrls.filter(Boolean).map((u) => ({ url: String(u) })) } : undefined,
      },
      include: { category: true, images: true },
    })

    return new Response(JSON.stringify(product), { status: 201 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
