import prisma from '../../../../lib/prisma'
import jwt from 'jsonwebtoken'

export async function POST(req) {
  try {
    const { email, otp } = await req.json()
    if (!email || !otp) {
      return new Response(JSON.stringify({ error: 'Missing email or otp' }), { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !user.otp || !user.otpExpiresAt) {
      return new Response(JSON.stringify({ error: 'Invalid or expired OTP' }), { status: 400 })
    }

    const now = new Date()
    if (user.otp !== otp || user.otpExpiresAt < now) {
      return new Response(JSON.stringify({ error: 'Invalid or expired OTP' }), { status: 400 })
    }

    // clear OTP fields
    await prisma.user.update({ where: { email }, data: { otp: null, otpExpiresAt: null } })

    // issue a JWT token (simple session token). Make sure to set JWT_SECRET in env.
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'change-this-secret', { expiresIn: '7d' })

    return new Response(JSON.stringify({ ok: true, token }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
