import Razorpay from "razorpay";
import prisma from "@/lib/prisma";

// Create Razorpay order + local Order/Payment rows
export async function POST(req) {
  try {
    const body = await req.json();
    const amount = body.amount ?? 50000; // in paise from frontend
    const userId = body.userId ?? null; // optional, if logged-in user hai
    const cartId = body.cartId ?? null; // optional, agar cart se aa raha hai
    const shippingName = body.shippingName ?? null;
    const shippingPhone = body.shippingPhone ?? null;
    const shippingAddress = body.shippingAddress ?? null;

    // Razorpay instance
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // 1) Pehle Razorpay order banao
    const razorpayOrder = await instance.orders.create({
      amount,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    // 2) Cart items nikaal ke Order + OrderItem rows banao
    const totalAmount = amount / 100; // paise -> rupees

    let itemsForOrder = [];
    if (cartId) {
      const cart = await prisma.cart.findUnique({
        where: { id: Number(cartId) },
        include: { items: { include: { product: true } } },
      });
      if (cart) {
        itemsForOrder = cart.items;
      }
    }

    const order = await prisma.order.create({
      data: {
        orderNumber: razorpayOrder.id, // ya koi custom UUID
        userId,
        cartId,
        totalAmount,
        currency: "INR",
        razorpayOrderId: razorpayOrder.id,
        status: "PENDING",
        shippingName,
        shippingPhone,
        shippingAddress,
        items: {
          create: itemsForOrder.map((it) => ({
            productId: it.productId,
            quantity: it.quantity,
            price: it.product?.price ?? 0,
          })),
        },
      },
    });

    // 3) DB me Payment row create karo (PENDING)
    await prisma.payment.create({
      data: {
        orderId: order.id,
        amount: totalAmount,
        currency: "INR",
        razorpayOrderId: razorpayOrder.id,
        status: "PENDING",
      },
    });

    // Frontend ko Razorpay order details + local orderId bhej do
    return Response.json({
      success: true,
      razorpayOrder,
      orderId: order.id,
    });
  } catch (error) {
    console.error("Razorpay Error:", error);
    return Response.json(
      { success: false, error: "Failed to create order" },
      { status: 500 },
    );
  }
}
