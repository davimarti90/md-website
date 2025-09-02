// app/components/Hero.tsx
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"], // bold/extrabold
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
        {/* Badge superior */}
        <p
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium text-white/85 mx-auto"
          style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(6px)" }}
        >
          <span>Licensed</span>
          <span className="opacity-40">•</span>
          <span>Insured</span>
          <span className="opacity-40">•</span>
          <span>Since 2000s</span>
        </p>

        {/* Título centrado y simétrico */}
        <header className={`${jakarta.className} text-center mx-auto max-w-6xl`}>
          {/* Línea 1: MD en dorado (protagonista) */}
          <div className="font-extrabold leading-[1.04] tracking-tight">
            <span className="block text-6xl sm:text-7xl lg:text-8xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
              <span className="bg-gradient-to-r from-[#FFD54A] via-[#F4C542] to-[#E6B325] bg-clip-text text-transparent">
                MD
              </span>
            </span>
          </div>

          {/* Línea 2: INTERSTATE MOVING — mismo tamaño, en negrita */}
          <div className="mt-1 font-extrabold uppercase text-white/95 tracking-[.12em]">
            <span className="inline-block text-4xl sm:text-5xl lg:text-6xl">INTERSTATE</span>
            <span className="inline-block mx-3 text-4xl sm:text-5xl lg:text-6xl"> </span>
            <span className="inline-block text-4xl sm:text-5xl lg:text-6xl">MOVING</span>
          </div>
        </header>

        {/* Slogan: más grande, MAYÚSCULAS, sin punto, centrado */}
        <p className="mt-6 text-center mx-auto max-w-5xl text-2xl md:text-4xl font-extrabold tracking-wide uppercase" style={{ color: "#D4AF37" }}>
          NO BROKER FEE JUST MOVERS
        </p>

        {/* Soporte corto (centrado) */}
        <p className="mt-4 text-center mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-white/85">
          Premium interstate & same-day NJ moves — direct team, transparent pricing.
        </p>

        {/* CTA centrado */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary text-base md:text-lg">Get a Free Quote</a>
          <a href="#services" className="btn-ghost text-base md:text-lg">See Services</a>
          <a href="mailto:admin@mdinterstatemoving.com" className="btn-ghost text-base md:text-lg">Email Us</a>
        </div>
      </div>
    </section>
  );
}
