import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendOtpEmail(to, otp) {
  const from = process.env.FROM_EMAIL || process.env.SMTP_USER
  const subject = 'Your OTP for login'
  const text = `Your OTP code is ${otp}. It is valid for 10 minutes.`
  const html = `<p>Your OTP code is <strong>${otp}</strong>. It is valid for 10 minutes.</p>`

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  })
}
