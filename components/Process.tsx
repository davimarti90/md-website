export default function Process() {
  const steps = [
    { n: 1, t: "Virtual or On-site Estimate", d: "We assess volume, access, and timing to give you a precise quote." },
    { n: 2, t: "Packing & Loading", d: "Careful protection, inventory, and secure loading." },
    { n: 3, t: "Transport & Tracking", d: "Interstate transit with updates and guaranteed delivery windows." },
    { n: 4, t: "Delivery & Setup", d: "Room-by-room placement, reassembly, and debris removal." },
  ];
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-10">How It Works</h2>
      <ol className="grid md:grid-cols-2 gap-6">
        {steps.map((s) => (
          <li key={s.n} className="card">
            <div className="text-mdYellow font-bold">Step {s.n}</div>
            <div className="text-xl font-semibold mt-1">{s.t}</div>
            <p className="text-white/75 mt-2">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}