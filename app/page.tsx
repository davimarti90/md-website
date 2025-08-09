import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import CTA from "../components/CTA";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";

export default function Page() {
  return (
    <>
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
    </>
  );
}
