// components/Services.tsx
export default function Services() {
  const items = [
    { title: "Interstate Moves", desc: "Coast-to-coast planning, careful packing, and on-time delivery." },
    { title: "Packing & Materials", desc: "Shrink-wrap, blankets, boxes—labeled and handled with care." },
    { title: "Assembly & Disassembly", desc: "Beds, frames, desks, appliances—organized and secured." },
    { title: "Inventory & Tracking", desc: "Clear labels + digital workflow to keep everything in sync." },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Services</h2>
          <a href="#process" className="text-sm font-semibold text-yellow-200 hover:underline md:text-base">See our process →</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-3 text-xl font-semibold md:text-2xl">{s.title}</div>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
