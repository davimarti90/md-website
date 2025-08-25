'use client'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function CTA() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus('loading'); setError('')
    const form = e.currentTarget
    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLInputElement).value.trim()
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed')
      setStatus('ok'); form.reset()
    } catch (err:any) {
      setStatus('error'); setError(err.message || 'Error sending')
    } finally {
      setTimeout(()=>setStatus('idle'), 3500)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl">
      <input name="name" placeholder="Full name" required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:ring-2 focus:ring-mdGold"/>
      <input name="email" type="email" placeholder="you@example.com" required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:ring-2 focus:ring-mdGold"/>
      <input name="message" placeholder="Your message" required className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:ring-2 focus:ring-mdGold"/>
      <button type="submit" disabled={status==='loading'} className="btn-primary w-max">{status==='loading' ? 'Sending…' : 'Send'}</button>
      {status==='ok' && <p className="text-green-500 text-sm">Message sent ✅</p>}
      {status==='error' && <p className="text-red-400 text-sm">Error: {error}</p>}
    </form>
  )
}
