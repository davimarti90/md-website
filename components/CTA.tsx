import Link from "next/link";
export default function CTA() {
  return (
    <div className="card text-center">
      <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready to move?</h3>
      <p className="text-white/75 mb-8">Get a fast, accurate quote today. Our interstate specialists will guide you every step.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
        <a className="btn-ghost" href="mailto:mdinterstatemovingllc@gmail.com?subject=Moving%20Quote">Email Us</a>
      </div>
    </div>
  );
}