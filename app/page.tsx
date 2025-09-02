import TopBar from "@/components/TopBar";
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import About from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <TopBar />
      <Hero />
      <section id="services" className="section container-md">
        <Services />
      </section>
      <section id="about" className="section container-md">
        <About />
      </section>
      <section id="process" className="section container-md">
        <Process />
      </section>
      <section id="testimonials" className="section container-md">
        <Testimonials />
      </section>
      <section id="contact" className="section container-md">
        <CTA />
      </section>
       <Contact />
    </>
  )
}
