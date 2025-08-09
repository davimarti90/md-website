import Link from "next/link";
export default function CTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
      <a className="btn-ghost" href="mailto:mdinterstatemovingllc@gmail.com?subject=Moving%20Quote">Email Us</a>
      <a className="btn-ghost" href="tel:+19086259955">Call Now</a>
    </div>
  );
}