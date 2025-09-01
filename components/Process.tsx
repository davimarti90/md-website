// components/Process.tsx
import Image from "next/image";

const steps = [
  { n: "01", t: "Free Quote", d: "Tell us the basics and get a fast, clear estimate." },
  { n: "02", t: "Plan & Protect", d: "We schedule, label, wrap and protect every item." },
  { n: "03", t: "Move Day", d: "Professional crew, careful handling, real-time coordination." },
  { n: "04", t: "Delivery & Setup", d: "Furniture placed and assembled — you just enjoy." },
];

export default function Process() {
  return (
    <section id="process" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Texto / pasos */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">How We Move</h2>
          <ol className="space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <div className="shrink-0 h-10 w-10 rounded-full bg-amber-500 text-black font-bold grid place-items-center">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{s.t}</h3>
                  <p className="text-white/70 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Imagen */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden">
          <Image
            src="/images/process.jpg"
            alt="MD Interstate Moving — process"
            fill
            className="object-cover"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
