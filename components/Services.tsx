// components/Services.tsx
import Image from "next/image";

const items = [
  { title: "Local (NJ Same-Day)", desc: "Pick up & delivery the same day inside New Jersey." },
  { title: "Interstate", desc: "Door-to-door moves across the U.S. — fast and safe." },
  { title: "Packing & Unpacking", desc: "Full packing, labeling and room-by-room setup." },
  { title: "Platinum Packing", desc: "Premium white-glove service with extra protection." },
  { title: "Furniture Protection", desc: "Wrapping, padding and disassembly/assembly." },
  { title: "Storage & Logistics", desc: "Short/long-term storage and flexible scheduling." },
];

export default function Services() {
  return (
    <section id="services" className="section container-md max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Imagen lateral */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden">
          <Image
            src="/images/services-hero.jpg"
            alt="MD Interstate Moving — services"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Lista de servicios */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">State & Interstate Moving</h2>
          <p className="text-white/80 mb-8">
            We specialize in **state** and **interstate** moves. For New Jersey,
            we offer **same-day pick up & delivery** when possible.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <li key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold text-white">{it.title}</h3>
                <p className="text-sm text-white/70 mt-1">{it.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
