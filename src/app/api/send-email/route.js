import { NextResponse } from "next/server";
import { sendOrderEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, phoneNumber, email, message } = body;

    if (!fullName || !phoneNumber || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 },
      );
    }

    const ownerEmail = process.env.SMTP_USER;
    if (!ownerEmail) {
      return NextResponse.json(
        { success: false, error: "Email not configured" },
        { status: 500 },
      );
    }

    // Reuse mail transporter via sendOrderEmail? Better to send simple custom mail here.
    // But sendOrderEmail expects order/items, so instead we can construct a simple mail
    // using nodemailer transport inside lib/mail in the future.

    const subject = `New Consultation Request from ${fullName}`;
    const text = `New consultation enquiry received.\n\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`;
    const html = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    // Lazy import transporter setup via sendOtpEmail (it uses same transporter)
    const { default: nodemailer } = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: ownerEmail,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
