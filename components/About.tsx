// components/About.tsx (o donde tengas este componente)
export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Imagen About - usa /public/images/about.jpg */}
          <div className="relative w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.08)]">
              <img
                src="/images/about.jpg?v=6" // cache-busting, NO usar /public/ en la ruta
                alt="MD Interstate Moving — professional team handling your move with care"
                className="block h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">MD Interstate Moving</span>
            </h2>
            <p className="text-base/7 text-white/80">
              We are a New Jersey–based interstate moving team focused on premium service: careful packing,
              reliable scheduling, and clear communication from quote to delivery. Our process combines
              years of field experience with modern tools to keep your move organized and safe.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Trained movers, labeled inventory, and protective materials for furniture & electronics.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Transparent estimates with services & payments broken down—no surprises.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Tech-enabled workflow to track documents, signatures, and your job number.
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200 backdrop-blur-sm transition hover:border-yellow-400/60 hover:bg-yellow-400/20"
              >
                Explore our services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
