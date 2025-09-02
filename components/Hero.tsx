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
        {/* Overlay base */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,.45)" }} />
        {/* Gradiente desde la izquierda para mejor contraste del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="container-md py-24 lg:py-32">
        {/* Badge superior (igual) */}
        <p
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium text-white/80"
          style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(6px)" }}
        >
          <span>25 Years</span><span className="opacity-50">•</span><span>Licensed</span>
          <span className="opacity-50">•</span><span>Insured</span>
        </p>

        {/* Título principal: más compacto + sombra sutil */}
        <h1
          className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.98]"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,.45)" }}
        >
          <span className="block">No Broker Fee.</span>
          <span className="block">Just Movers</span>
        </h1>

        {/* Subtítulo dorado con más presencia */}
        <p
          className="mt-4 max-w-3xl text-2xl md:text-3xl font-semibold tracking-wide"
          style={{ color: "#D4AF37" }}
        >
          Premium interstate & same-day NJ moves.
        </p>

        {/* Soporte (igual) */}
        <p className="mt-4 max-w-3xl text-white/80 text-base md:text-lg">
          We’re a direct moving company — <strong>No Broker Fee</strong>. One team from quote to delivery.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">Get a Free Quote</a>
          <a href="#services" className="btn-ghost">See Services</a>
          <a href="mailto:admin@mdinterstatemoving.com" className="btn-ghost">Email Us</a>
        </div>
      </div>
    </section>
  );
}
