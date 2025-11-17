import prisma from '../../../../lib/prisma'

export async function DELETE(req) {
  try {
    const url = new URL(req.url)
    const cartItemId = url.searchParams.get('cartItemId')
    if (!cartItemId) return new Response(JSON.stringify({ error: 'cartItemId required' }), { status: 400 })

    const item = await prisma.cartItem.findUnique({ where: { id: Number(cartItemId) } })
    if (!item) return new Response(JSON.stringify({ error: 'Item not found' }), { status: 404 })

    await prisma.cartItem.delete({ where: { id: Number(cartItemId) } })
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
