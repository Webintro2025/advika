import prisma from '../../../../lib/prisma'

export async function POST(req) {
  try {
    const { cartItemId, amount } = await req.json()
    const dec = Number(amount) || 1
    const item = await prisma.cartItem.findUnique({ where: { id: Number(cartItemId) } })
    if (!item) return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404 })

    const newQty = item.quantity - dec
    if (newQty <= 0) {
      // remove item
      await prisma.cartItem.delete({ where: { id: item.id } })
      return new Response(JSON.stringify({ ok: true, removed: true }), { status: 200 })
    }

    const updated = await prisma.cartItem.update({ where: { id: item.id }, data: { quantity: newQty } })
    return new Response(JSON.stringify(updated), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
