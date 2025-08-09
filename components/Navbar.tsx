"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-mdDark/70 border-b border-white/10">
      <div className="container-md flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/md_logo_2.png" alt="MD Interstate Moving" width={40} height={40} className="rounded-xl" />
          <span className="font-bold tracking-wide">MD Interstate Moving</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#process" className="hover:text-white">Process</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <a href="mailto:admin@mdinterstatemoving.com" className="btn-primary">Email</a>
        </nav>
        <button className="md:hidden btn-ghost px-3 py-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <span>Menu</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container-md py-4 flex flex-col gap-4">
            <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="#process" onClick={() => setOpen(false)}>Process</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <a href="mailto:admin@mdinterstatemoving.com" className="btn-primary w-max" onClick={() => setOpen(false)}>Email</a>
          </div>
        </div>
      )}
    </header>
  );
}