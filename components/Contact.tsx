// app/components/Contact.tsx
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 scroll-mt-24 lg:scroll-mt-28">
      <div className="container-md">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get a Quote</h2>
        <p className="mt-2 text-white/80 max-w-2xl">
          Tell us the basics and we’ll reach out with a precise estimate and schedule options.
        </p>

        <div className="mt-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
