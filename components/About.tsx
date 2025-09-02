// components/About.tsx
import React from "react";

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Imagen simple: debe existir EXACTO en public/about.jpg */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/about.jpg"
                alt="MD Interstate Moving — professional team"
                className="block w-full h-auto"
                loading="eager"
              />
            </div>
          </div>

          {/* Texto mínimo para no cambiar tu copy */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">About</h2>
            <p className="text-white/80">
              Interstate moving with transparent pricing, careful packing, and reliable delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
// permite también: import { About } from '@/components/About'
export { About };
