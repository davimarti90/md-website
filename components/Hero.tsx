import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image src="/hero-bg.jpg" alt="Moving truck" fill className="object-cover" />
      </div>
      <div className="container-md py-24 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Fast. Safe. Professional.<br />
            <span className="text-mdYellow">Your move, our mission.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80">Interstate moving done right: licensed crews, careful packing, transparent pricing, on-time delivery.</p>
          <div className="mt-10 flex items-center gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="#services" className="btn-ghost">See Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}