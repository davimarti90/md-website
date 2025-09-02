// app/components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative isolate"
      style={{ minHeight: "80vh" }}
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
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,.45)" }} />
      </div>

      <div className="container-md py-24 lg:py-32">
        <p
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium text-white/80"
          style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(6px)" }}
        >
          <span>25 Years</span><span className="opacity-50">•</span><span>Licensed</span>
          <span className="opacity-50">•</span><span>Insured</span>
        </p>

        {/* Títulos más grandes y modernos */}
        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          No Brokers. Just Movers.
        </h1>

        <p className="mt-4 max-w-2xl text-2xl md:text-3xl font-semibold" style={{ color: "#D4AF37" }}>
          Premium interstate & same-day NJ moves.
        </p>

        <p className="mt-4 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
          We’re a direct moving company — <strong>No Broker Fee</strong>. One team from quote to delivery.
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
