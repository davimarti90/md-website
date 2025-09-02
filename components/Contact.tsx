// app/components/Contact.tsx
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 scroll-mt-24 lg:scroll-mt-28">
      <div className="container-md">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get a Quote</h2>
          <p className="mt-2 max-w-2xl text-white/80">
            Tell us the basics and we’ll send a precise estimate and scheduling options.
          </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
