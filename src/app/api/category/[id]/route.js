import prisma from '../../../../lib/prisma'

export async function GET(req, { params }) {
  try {
    const id = parseInt(params.id, 10)
    if (Number.isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 })

    const category = await prisma.category.findUnique({ where: { id } })
    if (!category) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })

    return new Response(JSON.stringify(category), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function PUT(req, { params }) {
  try {
    const id = parseInt(params.id, 10)
    if (Number.isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 })

    const { name } = await req.json()
    if (!name || typeof name !== 'string' || !name.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 })
    }

    // ensure name is unique
    const existing = await prisma.category.findUnique({ where: { name } })
    if (existing && existing.id !== id) {
      return new Response(JSON.stringify({ error: 'Category name already in use' }), { status: 409 })
    }

    const updated = await prisma.category.update({ where: { id }, data: { name: name.trim() } })
    return new Response(JSON.stringify(updated), { status: 200 })
  } catch (err) {
    console.error(err)
    if (err.code === 'P2025') {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
    }
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = parseInt(params.id, 10)
    if (Number.isNaN(id)) return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 })

    await prisma.category.delete({ where: { id } })
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    if (err.code === 'P2025') {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
    }
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
