// app/components/TopBar.tsx
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container-md flex items-center justify-between py-3">
        {/* Logo + Nombre */}
        <Link href="/" className="flex items-center gap-3">
          {/* ⚠️ Cambia el src si tu archivo tiene otro nombre/extension */}
          <span className="inline-flex h-10 w-10 overflow-hidden rounded-lg ring-1 ring-white/10 bg-white/5">
            <img
              src="/images/logo-3d.png"
              alt="MD Interstate Moving logo"
              className="h-full w-full object-contain"
              loading="eager"
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
    </div>
  );
}
