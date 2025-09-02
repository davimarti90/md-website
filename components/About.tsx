// components/About.tsx
import Image from "next/image";

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Imagen fija, directa desde /public/about.jpg */}
          <div className="relative w-full">
            <div className="rounded-2xl border border-white/10 overflow-hidden inline-block">
              <Image
                src="/about.jpg"               // debe existir EXACTO en public/about.jpg
                alt="MD Interstate Moving — professional team"
                width={1200}
                height={900}
                priority
                unoptimized
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
// 👇 Esto permite importar también como nombrado: `import { About } from '@/components/About'`
export { About };
