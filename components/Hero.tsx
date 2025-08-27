// app/components/Hero.tsx
"use client";

import heroBg from "@/public/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[82vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Fast. Safe. Professional.
        </h1>
        <p className="mt-4 md:mt-6 text-neutral-200 md:text-lg max-w-2xl mx-auto">
          State & Interstate Moving — <b>No Broker Fee.</b>
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <a href="#quote" className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold">
            Get Your Free Quote
          </a>
          <a href="#services" className="px-5 py-3 rounded-xl border border-neutral-300/40 text-white hover:bg-white/10">
            Our Services
          </a>
          <a href="mailto:support@mdinterstatemoving.com" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

