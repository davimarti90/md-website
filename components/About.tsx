// components/About.tsx
export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Imagen: simple, no se recorta y siempre se muestra */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
              <img
                src="/about.jpg"  // <-- MISMA ruta que probaste en el navegador
                alt="MD Interstate Moving — professional team"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* Texto (sin tocar mucho para no romper nada visual) */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              25 Years, New Tech, <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Same Craft</span>
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              New Jersey–based interstate moving team focused on premium service: careful packing, reliable scheduling, and clear communication—from quote to delivery.
            </p>
            <ul className="space-y-3 text-white/85">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Trained movers, labeled inventory, protective materials for furniture & electronics.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Transparent estimates—services & payments broken down, no surprises.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Tech-enabled workflow for documents, signatures, and your job number.
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 text-sm font-semibold text-yellow-100 backdrop-blur transition hover:border-yellow-400 hover:bg-yellow-400/20 md:text-base"
              >
                Explore our services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
