'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="container-md h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/md-mark-128.png" alt="MD monogram" width={32} height={32} className="rounded-xl" />
          <span className="hidden sm:inline font-semibold">MD Interstate Moving</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#process" className="hover:text-white">Process</Link>
          <Link href="#testimonials" className="hover:text-white">Reviews</Link>
          <Link href="/contact" className="btn-primary">Get a Quote</Link>
        </nav>
        <button className="md:hidden btn-ghost px-3 py-2" onClick={()=>setOpen(!open)} aria-label="Toggle menu">Menu</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container-md py-4 flex flex-col gap-4">
            <Link href="#services" onClick={()=>setOpen(false)}>Services</Link>
            <Link href="#process" onClick={()=>setOpen(false)}>Process</Link>
            <Link href="#testimonials" onClick={()=>setOpen(false)}>Reviews</Link>
            <Link href="/contact" className="btn-primary w-max" onClick={()=>setOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  )
}
