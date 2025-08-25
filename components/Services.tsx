import Image from 'next/image'

export default function Services() {
  const services = [
    { title: "Same-Day New Jersey Moves", desc: "Pickup & delivery the same day across NJ. Precise scheduling, condo/HOA friendly." },
    { title: "Interstate Moves", desc: "State-to-state relocations with guaranteed delivery windows and real-time updates." },
    { title: "Platinum Packing", desc: "Premium packing for glass, TVs, art and antiques with custom crating and foam corners." },
    { title: "Furniture Protection", desc: "Blankets, shrink wrap and door/jamb protection every time." },
    { title: "Storage Options", desc: "Short & long-term, climate-aware storage when you need it." },
    { title: "Special Items", desc: "Pianos, safes, oversized items — planned and handled with care." },
  ]
  return (
    <div>
      <section className="relative overflow-hidden rounded-2xl mb-10 border border-white/10">
        <Image src="/images/services-hero.jpg" alt="" fill className="object-cover opacity-30 -z-10" />
        <div className="p-10 md:p-14">
          <h2 className="text-3xl md:text-5xl font-bold">Our Professional State & Interstate Moving Services</h2>
          <p className="lead mt-3 max-w-2xl">
            From local moves within New Jersey — with same-day pickup and delivery — to full interstate relocations,
            we handle every step with precision, safety, and care. Always with transparent pricing and no brokers involved.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3 className="text-xl font-semibold mb-2 text-mdGold">{s.title}</h3>
            <p className="text-white/75">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
