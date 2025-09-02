// components/TopBar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export default function TopBar() {
  const [useJpg, setUseJpg] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container-md flex items-center justify-between py-3">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 md:h-11 md:w-11 overflow-hidden rounded-lg ring-1 ring-white/10 bg-white/5">
            <Image
              src={useJpg ? "/images/logo-3d.jpg?v=1" : "/images/logo-3d.png?v=1"}
              alt="MD Interstate Moving logo"
              width={44}
              height={44}
              priority
              className="h-full w-full object-contain"
              onError={() => setUseJpg(true)}
            />
          </span>
          <span className="text-lg md:text-xl font-bold tracking-wide">
            MD <span className="text-white/90">Interstate Moving</span>
          </span>
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="btn-primary py-2 px-4 text-sm font-semibold">Get a Free Quote</a>
        </nav>

        {/* CTA móvil */}
        <div className="md:hidden">
          <a href="#contact" className="btn-primary px-3 py-2 text-sm">Quote</a>
        </div>
      </div>
    </header>
  );
}
