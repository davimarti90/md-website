// components/Process.tsx
export default function Process() {
  const steps = [
    { n: "01", t: "Estimate", d: "We scope your move, list items, and agree on services & timeline." },
    { n: "02", t: "Pack & Protect", d: "Furniture wrapped, boxes labeled, fragile items handled with care." },
    { n: "03", t: "Load & Route", d: "Efficient loading and routing to keep your schedule tight." },
    { n: "04", t: "Deliver & Setup", d: "On-time arrival, careful placement, assembly, and final checks." },
  ];

  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-3xl font-bold tracking-tight md:mb-14 md:text-5xl">Our Process</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="mb-3 text-sm font-semibold text-yellow-300/90 md:text-base">{s.n}</div>
              <div className="mb-2 text-xl font-bold md:text-2xl">{s.t}</div>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
