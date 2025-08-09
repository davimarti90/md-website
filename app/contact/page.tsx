import ContactForm from "../components/ContactForm";
export default function ContactPage() {
  return (
    <div className="section container-md">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Get Your Free Moving Quote</h1>
      <p className="text-white/70 mb-10 max-w-3xl">Tell us the basics of your move and we’ll get back to you fast.</p>
      <ContactForm />
    </div>
  );
}
