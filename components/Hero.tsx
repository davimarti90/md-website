// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo visual opcional */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Fast. Safe. <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Professional.</span>
            </h1>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Your move, our mission. Interstate moving with transparent pricing, careful packing, and on-time delivery—no brokers involved.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-yellow-400/50 bg-yellow-400/10 px-5 py-3 text-sm font-semibold text-yellow-100 backdrop-blur transition hover:border-yellow-400 hover:bg-yellow-400/20 md:text-base"
              >
                Explore Services
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10 md:text-base"
              >
                Why MD Interstate Moving
              </a>
            </div>
          </div>

          {/* Imagen: sin recortes feos (cover en desktop, contain en mobile) */}
          <div className="relative w-full">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)] md:aspect-[21/9]">
              <Image
                src="/hero.jpg"             // coloca la imagen en public/hero.jpg
                alt="MD Interstate Moving truck"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain md:object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
