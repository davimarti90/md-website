// app/components/Hero.tsx
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

        {/* NOMBRE MÁS GRANDE */}
        <h1 className="max-w-5xl font-extrabold tracking-tight leading-[1.03] text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
          <span className="block">MD Interstate Moving</span>
          <span className="mt-2 block bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            No Brokers. Just Movers.
          </span>
        </h1>

        <p className="mt-5 max-w-3xl text-2xl md:text-3xl font-semibold" style={{ color: "#D4AF37" }}>
          Premium interstate & same-day NJ moves — direct team, transparent pricing.
        </p>

        <p className="mt-4 max-w-3xl text-lg md:text-xl leading-relaxed text-white/85">
          Trained crew from quote to delivery. No broker hand-offs, no surprises. Licensed &amp; insured.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary text-base md:text-lg">Get a Free Quote</a>
          <a href="#services" className="btn-ghost text-base md:text-lg">See Services</a>
          <a href="mailto:admin@mdinterstatemoving.com" className="btn-ghost text-base md:text-lg">Email Us</a>
        </div>
      </div>
    </section>
  );
}
