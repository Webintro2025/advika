import prisma from '../../../lib/prisma'

// GET: returns the cart for a userId (or guest cart if userId not provided)
export async function GET(req) {
  try {
    const url = new URL(req.url)
    const cartId = url.searchParams.get('cartId') ? parseInt(url.searchParams.get('cartId'), 10) : null
    const userId = url.searchParams.get('userId') ? parseInt(url.searchParams.get('userId'), 10) : null

    let cart = null
    if (cartId) {
      cart = await prisma.cart.findUnique({ where: { id: cartId }, include: { items: { include: { product: true } } } })
    } else if (userId) {
      cart = await prisma.cart.findFirst({ where: { userId }, include: { items: { include: { product: true } } } })
    } else {
      // for guest, return the latest cart
      cart = await prisma.cart.findFirst({ include: { items: { include: { product: true } } }, orderBy: { updatedAt: 'desc' } })
    }

    if (!cart) {
      // return an empty cart structure
      return new Response(JSON.stringify({ items: [] }), { status: 200 })
    }

    return new Response(JSON.stringify(cart), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

// POST: add product to cart (or increase quantity if exists)
export async function POST(req) {
  try {
    const { cartId, userId, productId, quantity } = await req.json()
    const qty = Number(quantity) || 1

    // validate product
    const product = await prisma.product.findUnique({ where: { id: Number(productId) } })
    if (!product) return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 })

    let cart = null
    if (cartId) cart = await prisma.cart.findUnique({ where: { id: Number(cartId) } })
    if (!cart) {
      cart = await prisma.cart.create({ data: { userId: userId ? Number(userId) : null } })
    }

    // check if item exists
    const existing = await prisma.cartItem.findFirst({ where: { cartId: cart.id, productId: Number(productId) } })
    if (existing) {
      const updated = await prisma.cartItem.update({ where: { id: existing.id }, data: { quantity: existing.quantity + qty } })
      return new Response(JSON.stringify(updated), { status: 200 })
    }

    const item = await prisma.cartItem.create({ data: { cartId: cart.id, productId: Number(productId), quantity: qty }, include: { product: true } })
    return new Response(JSON.stringify({ cartId: cart.id, item }), { status: 201 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
