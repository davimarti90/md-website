// app/components/Services.tsx
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
    <section
      id="services"
      className="relative isolate"
      style={{ minHeight: "60vh" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/images/services-hero.jpg?v=5"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center block"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,.55)" }} />
      </div>

      <div className="container-md py-20 lg:py-28">
        {/* Tipografía más grande */}
        <h2 className="text-4xl md:text-5xl font-extrabold">State & Interstate Moving — Same-day NJ Delivery</h2>
        <p className="mt-3 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
          Direct team. No intermediaries. Licensed & insured.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="card">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{it.title}</h3>
              <p className="mt-1 text-base md:text-lg leading-relaxed text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
