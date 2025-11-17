import prisma from '../../../../lib/prisma'
import { sendOtpEmail } from '../../../../lib/mail'

export async function POST(req) {
  try {
    const { email } = await req.json()
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 })
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000))
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    // create or update the user with OTP
    await prisma.user.upsert({
      where: { email },
      create: { email, otp, otpExpiresAt },
      update: { otp, otpExpiresAt },
    })

    // send email (best-effort)
    try {
      await sendOtpEmail(email, otp)
    } catch (e) {
      console.error('Failed to send OTP email', e)
      // do not fail the whole request because of email issues; still record OTP in DB
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
