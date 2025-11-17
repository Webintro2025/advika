import nodemailer from 'nodemailer'

let transporter = null

function canSendMail() {
  return (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  )
}

if (canSendMail()) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
} else {
  console.warn('Email transport not configured. OTP emails will not be sent.')
}

export async function sendOtpEmail(to, otp) {
  if (!transporter) {
    console.warn('sendOtpEmail called but transporter is not configured')
    return
  }

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
