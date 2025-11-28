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

export async function sendOrderEmail(to, order, items = []) {
  if (!transporter) {
    console.warn('sendOrderEmail called but transporter is not configured')
    return
  }

  const from = process.env.FROM_EMAIL || process.env.SMTP_USER
  const subject = `New Order Received - #${order.orderNumber}`

  const lines = items.map((it) => {
    const name = it.product?.name || 'Item'
    const qty = it.quantity || 1
    const price = Number(it.price || it.product?.price || 0)
    const lineTotal = price * qty
    return `${name} x ${qty} = ₹${lineTotal.toFixed(2)}`
  })

  const total = order.totalAmount?.toFixed(2) ?? '0.00'

  // Shipping / customer details
  const customerName = order.shippingName || 'N/A'
  const customerPhone = order.shippingPhone || 'N/A'
  const customerAddress = order.shippingAddress || 'N/A'

  const text = `A new order has been placed.

Order Number: ${order.orderNumber}
Total: ₹${total}

Customer Details:
Name: ${customerName}
Phone: ${customerPhone}
Address: ${customerAddress}

Items:
${lines.join('\n')}`

  const htmlLines = lines.map((l) => `<li>${l}</li>`).join('')
  const html = `
    <h2>New Order Received</h2>
    <p><strong>Order Number:</strong> ${order.orderNumber}</p>
    <p><strong>Total:</strong> ₹${total}</p>

    <h3>Customer Details</h3>
    <p><strong>Name:</strong> ${customerName}</p>
    <p><strong>Phone:</strong> ${customerPhone}</p>
    <p><strong>Address:</strong><br/>${customerAddress}</p>

    <h3>Items</h3>
    <ul>${htmlLines}</ul>
  `

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  })
}
