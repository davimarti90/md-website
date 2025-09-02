// components/About.tsx
import Image from 'next/image'

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2 card">
        {/* Texto (mismo contenido, tipografía 2025 y sin “clamp”) */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            25 Years, <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">New Tech</span>, Same Craft
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-white/80">
            MD Interstate Moving is a New Jersey–based moving company. After two decades on the road,
            we rebuilt our operations with modern tools so you get <em>faster estimates, smarter planning,</em>
            and the same careful hands we’re known for — always with transparent pricing and no brokers involved.
          </p>

          <ul className="grid gap-3 text-base text-white/85 sm:grid-cols-2">
            <li className="flex gap-2">
              <span>✓</span>
              <span>No Broker Fee — talk to the crew that will move you</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Licensed &amp; Insured</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Tech-assisted estimates &amp; routing</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Transparent pricing &amp; guaranteed delivery windows</span>
            </li>
          </ul>
        </div>

        {/* Imagen (no recortes en mobile, cover en desktop) */}
        <div className="relative rounded-2xl border border-white/10 overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
            <Image
              src="/images/about.jpg" // asegúrate que exista en public/images/about.jpg
              alt="MD Interstate Moving — professional, careful, tech-enabled moves"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain md:object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
export { About } // soporta import default y nombrado
