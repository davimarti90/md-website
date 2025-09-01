export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-md py-10 grid md:grid-cols-3 gap-8 text-white/70">
        <div>
          <h3 className="text-white font-semibold mb-3">MD Interstate Moving</h3>
          <p>Fast. Safe. Professional. Your move, our mission.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>Email: support@mdinterstatemoving.com</li>
            <li>Phone: +1 908-625-9955</li>
            <li>Service: New Jersey & Interstate (USA)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>Licensed & Insured</li>
            <li>No Broker Fee • Direct Movers</li>
            <li>© {new Date().getFullYear()} MD Interstate Moving</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
