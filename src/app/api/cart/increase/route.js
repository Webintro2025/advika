import prisma from '../../../../lib/prisma'

export async function POST(req) {
  try {
    const { cartItemId, amount } = await req.json()
    const inc = Number(amount) || 1
    const item = await prisma.cartItem.findUnique({ where: { id: Number(cartItemId) } })
    if (!item) return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404 })

    const updated = await prisma.cartItem.update({ where: { id: item.id }, data: { quantity: item.quantity + inc } })
    return new Response(JSON.stringify(updated), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
