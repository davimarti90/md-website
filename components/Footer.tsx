export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-md py-10 grid md:grid-cols-3 gap-8 text-white/70">
        <div>
          <h3 className="text-white font-semibold mb-3">MD Interstate Moving LLC</h3>
          <p>Fast. Safe. Professional. Your move, our mission.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>Email: mdinterstatemovingllc@gmail.com</li>
            <li>Service area: Interstate (USA)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>Phone: +1 908-625-9955</li>
            <li>Email: admin@mdinterstatemoving.com</li>
            <li>Address: 134 Somerset 2 Fl, North Plainfield, NJ 07060</li>
            <li>Service area: Interstate (USA) — based in New Jersey</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white/50 pb-8">© {new Date().getFullYear()} MD Interstate Moving LLC</div>
    </footer>
  );
}