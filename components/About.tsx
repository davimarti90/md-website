import Image from 'next/image'

export function About() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center card">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">25 Years, New Tech, Same Craft</h2>
        <p className="lead">
          MD Interstate Moving is a New Jersey–based moving company. After two decades on the road,
          we rebuilt our operations with modern tools so you get <em>faster estimates, smarter planning,</em>
          and the same careful hands we’re known for — always with transparent pricing and no brokers involved.
        </p>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/80">
          <li>✓ No Broker Fee — talk to the crew that will move you</li>
          <li>✓ Licensed & Insured</li>
          <li>✓ Tech-assisted estimates & routing</li>
          <li>✓ Transparent pricing & guaranteed delivery windows</li>
        </ul>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-glow">
        <Image src="/images/about.jpg" alt="MD Interstate Moving team — professional, careful, tech-enabled moves" fill className="object-cover" />
      </div>
    </div>
  )
}
