// components/About.tsx
import Image from "next/image";
import aboutImg from "/public/about.jpg"; // Asegúrate: public/about.jpg (minúsculas)

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Imagen About - import estático, sin query params */}
          <div className="relative w-full">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_35px_rgba(255,255,255,0.08)]"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={aboutImg}
                alt="MD Interstate Moving — professional team handling your move with care"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              25 Years, New Tech, <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Same Craft</span>
            </h2>
            <p className="text-base/7 text-white/80">
              MD Interstate Moving is a New Jersey–based moving company. After two decades on the road, we rebuilt our operations with modern tools so you get
              faster estimates, smarter planning, and the same careful hands we’re known for — always with transparent pricing and no brokers involved.
            </p>
            <ul className="grid gap-3 text-white/80 md:grid-cols-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                No Broker Fee — talk to the crew that will move you
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Licensed &amp; Insured
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Tech-assisted estimates &amp; routing
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                Transparent pricing &amp; guaranteed delivery windows
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
  );
}
