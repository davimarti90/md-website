import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import CTA from "../components/CTA";

export default function Page() {
  return (
    <>
      <Hero />
      <section id="services" className="section container-md"><Services /></section>
      <section id="process" className="section container-md"><Process /></section>
      <section id="contact" className="section container-md"><CTA /></section>
    </>
  );
}
