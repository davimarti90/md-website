// app/components/Hero.tsx
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"], // bold/extrabold para el título
});

export default function Hero() {
  return (
    <section
      className="relative isolate"
      style={{ minHeight: "85vh" }}
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-bg.jpg?v=5"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center block"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,.50)" }} />
      </div>

      <div className="container-md py-24 lg:py-32">
        {/* Badge superior (igual que antes) */}
        <p
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium text-white/85"
          style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(6px)" }}
        >
          <span>Licensed</span>
          <span className="opacity-40">•</span>
          <span>Insured</span>
          <span className="opacity-40">•</span>
          <span>Since 2000s</span>
        </p>

        {/* Título MARCA — opción 1 (Luxury Grotesk) */}
        <h1
          className={`${jakarta.className} max-w-5xl font-extrabold leading-[1.05] tracking-tight`}
        >
          {/* Línea 1: “MD” en dorado premium */}
          <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
            <span className="bg-gradient-to-r from-[#FFD54A] via-[#F4C542] to-[#E6B325] bg-clip-text text-transparent">
              MD
            </span>
          </span>

          {/* Línea 2: “INTERSTATE MOVING” uppercase con tracking amplio */}
          <span className="mt-1 block text-white/95 uppercase tracking-[.14em] text-2xl sm:text-3xl lg:text-4xl">
            Interstate Moving
          </span>
        </h1>

        {/* Slogan */}
        <p className="mt-6 max-w-3xl text-2xl md:text-3xl font-semibold" style={{ color: "#D4AF37" }}>
          No Brokers. Just Movers.
        </p>

        {/* Soporte corto */}
        <p className="mt-4 max-w-3xl text-lg md:text-xl leading-relaxed text-white/85">
          Premium interstate & same-day NJ moves — direct team, transparent pricing.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary text-base md:text-lg">Get a Free Quote</a>
          <a href="#services" className="btn-ghost text-base md:text-lg">See Services</a>
          <a href="mailto:admin@mdinterstatemoving.com" className="btn-ghost text-base md:text-lg">Email Us</a>
        </div>
      </div>
    </section>
  );
}
