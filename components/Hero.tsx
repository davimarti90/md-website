// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Fondo */}
      <Image
        src="/images/hero-bg.jpg"
        alt="MD Interstate Moving — hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Oscurecer para legibilidad */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Fast. Safe. Professional.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90">
          State & Interstate Moving — <span className="font-semibold">No Broker Fees</span>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#contact" className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold transition">
            Get Your Free Quote
          </a>
          <a href="#services" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition">
            Our Services
          </a>
          <a href="tel:+19086259955" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition">
            Call +1 (908) 625-9955
          </a>
        </div>
      </div>
    </section>
  );
}
