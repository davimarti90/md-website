import nodemailer from 'nodemailer'

export function getTransport() {
  const user = process.env.MAIL_FROM
  const pass = process.env.MAIL_APP_PASSWORD
  if (!user || !pass) throw new Error('Missing MAIL_FROM/MAIL_APP_PASSWORD env vars')
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass }
  })
}

export async function sendMail({ to, subject, html, replyTo }: { to: string, subject: string, html: string, replyTo?: string }) {
  const fromName = process.env.MAIL_FROM_NAME || 'MD Interstate Moving'
  const from = `${fromName} <${process.env.MAIL_FROM}>`
  const transporter = getTransport()
  await transporter.sendMail({ from, to, subject, html, replyTo })
}
