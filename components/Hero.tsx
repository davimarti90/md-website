import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover opacity-25 -z-10" priority />
      <div className="container-md py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="badge mb-4">25 Years • Licensed • Insured</div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            No Brokers. Just Movers.<br/>
            <span className="text-mdGold">Premium interstate & same-day NJ moves.</span>
          </h1>
          <p className="mt-6 text-lg lead">
            We’re a direct moving company — <strong>No Broker Fee</strong>. One team from quote to delivery.
            Technology-enabled planning, careful packing, on-time arrivals.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="#services" className="btn-ghost">See Services</a>
            <a href="mailto:admin@mdinterstatemoving.com" className="btn-ghost">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
