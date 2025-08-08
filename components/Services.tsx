export default function Services() {
  const services = [
    { title: "Interstate Moves", desc: "Full-service state-to-state relocations with guaranteed delivery windows." },
    { title: "Packing & Unpacking", desc: "Professional packing, labeling, and room-by-room setup on arrival." },
    { title: "Furniture Protection", desc: "Blankets, shrink wrap, and custom crating for TVs, glass, and art." },
    { title: "Storage Solutions", desc: "Short and long-term storage with secure, climate-aware options." },
  ];
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-10">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card">
            <h3 className="text-xl font-semibold mb-2 text-mdYellow">{s.title}</h3>
            <p className="text-white/75">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}