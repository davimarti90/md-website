import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendMail } from '@/lib/mailer' // Next resolverá mailer.js sin problema

export const runtime = 'nodejs'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
  phone: z.string().optional(),
  subject: z.string().optional()
})

export async function POST(req: NextRequest) {
  try {
    const json = await req.json()
    const data = schema.parse(json)

    const to = process.env.MAIL_TO || 'support@mdinterstatemoving.com'
    const html = `
      <h2>New website lead</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ''}
      <p><strong>Message:</strong><br/>${data.message.replace(/\n/g,'<br/>')}</p>
      <hr/>
      <p>Sent ${new Date().toLocaleString()}</p>
    `
    await sendMail({
      to,
      subject: `New Quote Request — ${data.name}`,
      html,
      replyTo: data.email
    })

    return NextResponse.json({ ok: true, message: 'Email sent' })
  } catch (err: any) {
    const msg = err?.message || 'Invalid request'
    return NextResponse.json({ ok: false, error: msg }, { status: 400 })
  }
}
