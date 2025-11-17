import prisma from '../../../lib/prisma'

export async function GET() {
  try {
    const categories = await prisma.category.findMany({ orderBy: { createdAt: 'desc' } })
    return new Response(JSON.stringify(categories), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function POST(req) {
  try {
    const { name } = await req.json()
    if (!name || typeof name !== 'string' || !name.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 })
    }

    const existing = await prisma.category.findUnique({ where: { name } })
    if (existing) {
      return new Response(JSON.stringify({ error: 'Category already exists' }), { status: 409 })
    }

    const category = await prisma.category.create({ data: { name: name.trim() } })
    return new Response(JSON.stringify(category), { status: 201 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
