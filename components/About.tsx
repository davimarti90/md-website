// components/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Imagen About: contain en mobile para no cortar, cover en desktop para llenar */}
          <div className="relative w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.08)] md:aspect-[16/10]">
              <Image
                src="/about.jpg"            // asegúrate: public/about.jpg (minúsculas)
                alt="MD Interstate Moving team handling your move with care"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain md:object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Texto más grande y respirado */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              25 Years, New Tech, <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Same Craft</span>
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              We’re a New Jersey–based interstate moving team focused on premium service: careful packing, reliable scheduling, and clear communication—from quote to delivery. Modern tools + years of craft = a smooth move.
            </p>

            <ul className="grid gap-3 text-white/80 md:grid-cols-2 md:gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Trained movers, labeled inventory, and proper protection for furniture & electronics.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Transparent estimates—services & payments broken down, no surprises.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Tech-enabled workflow for documents, signatures, and your job number.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Licensed &amp; Insured. No brokers.
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center rounded-2xl border border-yellow-400/40 bg-yellow-400/10 px-5 py-3 text-sm font-semibold text-yellow-100 backdrop-blur transition hover:border-yellow-400 hover:bg-yellow-400/20 md:text-base"
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
