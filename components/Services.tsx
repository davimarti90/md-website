// app/components/Services.tsx
"use client";

import servicesHero from "@/public/services-hero.jpg";
import platinumImg from "@/public/platinum-packing.jpg";

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${servicesHero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(30%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="container px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-bold">Moving Services</h2>
        <p className="mt-2 text-neutral-200 max-w-3xl">
          State & Interstate moves, with emphasis on **same-day pickup & delivery within New Jersey**.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Local & State Moves (NJ same-day)",
            "Interstate Moves (East Coast & beyond)",
            "Packing & Unpacking",
            "Heavy / Specialty Items",
            "Storage Coordination",
            "Furniture Protection (blankets, wrap)",
          ].map((t) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="font-semibold">{t}</h3>
            </div>
          ))}

          {/* Platinum Packing (premium) */}
          <div
            className="md:col-span-3 rounded-2xl overflow-hidden border border-amber-500/40"
            style={{
              backgroundImage: `url(${platinumImg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/60 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-amber-400">Platinum Packing</h3>
              <p className="mt-2 max-w-3xl text-neutral-200">
                White-glove packing with extreme care: double-wrapping, custom padding, inventory tags, and priority handling from door to door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

