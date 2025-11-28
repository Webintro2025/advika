import crypto from "crypto";
import prisma from "@/lib/prisma";
import { sendOrderEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return Response.json(
        { success: false, error: "Missing payment details" },
        { status: 400 },
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    const signString = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(signString)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return Response.json(
        { success: false, error: "Invalid signature" },
        { status: 400 },
      );
    }

    // Signature sahi hai -> Payment SUCCESS mark karo
    await prisma.payment.updateMany({
      where: { razorpayOrderId: razorpay_order_id },
      data: {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "SUCCESS",
      },
    });

    // Related order ko fetch + update karo
    const order = await prisma.order.findFirst({
      where: { razorpayOrderId: razorpay_order_id },
      include: {
        items: { include: { product: true } },
      },
    });

    if (order) {
      await prisma.order.update({
        where: { id: order.id },
        data: { status: "PAID" },
      });

      // Owner ko email bhejo
      const ownerEmail = process.env.SMTP_USER;
      if (ownerEmail) {
        try {
          await sendOrderEmail(ownerEmail, order, order.items);
        } catch (e) {
          console.error("Failed to send order email:", e);
        }
      }
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Razorpay verify error:", error);
    return Response.json(
      { success: false, error: "Failed to verify payment" },
      { status: 500 },
    );
  }
}
