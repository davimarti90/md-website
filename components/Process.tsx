// app/components/Process.tsx
"use client";

import processBg from "@/public/process.jpg";

const steps = [
  { n: "01", t: "Request your quote", d: "Tell us the basics—origin, destination, date, and inventory." },
  { n: "02", t: "No-broker transparent price", d: "Direct with MD Interstate Moving. No middlemen, no hidden fees." },
  { n: "03", t: "Pack & protect", d: "We pad-wrap furniture, protect floors and doorways, and secure fragile items." },
  { n: "04", t: "Pickup & same-day NJ delivery", d: "In-state (NJ) moves can be done end-to-end in the same day." },
  { n: "05", t: "Unload & placement", d: "We place items where you want them and remove all packing materials." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-16 md:py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${processBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="container px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <div className="mt-10 grid md:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-amber-400 font-extrabold text-xl">{s.n}</div>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="mt-1 text-neutral-200 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
