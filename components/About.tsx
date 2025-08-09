export function About() {
  return (
    <div className="card">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">About Us</h2>
      <p className="text-white/75">
        MD Interstate Moving LLC is a New Jersey–based interstate moving company
        focused on safe handling, on-time delivery, and clear communication.
        From packing and protection to delivery and setup, our licensed crews
        make long-distance moving stress-free.
      </p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-white/80">
        <li>📍 HQ: 134 Somerset 2 Fl, North Plainfield, NJ 07060</li>
        <li>📞 +1 908-625-9955</li>
        <li>📬 mdinterstatemovingllc@gmail.com</li>
        <li>🧭 Service: Interstate (USA)</li>
      </ul>
    </div>
  );
}
