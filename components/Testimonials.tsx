export function Testimonials() {
  const items = [
    { name: "Michelle R.", text: "Flawless interstate move from NJ to FL. The team was careful and on time." },
    { name: "Jason P.", text: "Transparent pricing and great communication throughout the process." },
    { name: "Alicia M.", text: "Packed our glass and TVs perfectly. Delivery right on schedule." },
  ];
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-bold mb-10">What Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <figure key={t.name} className="card">
            <blockquote className="text-white/80">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-mdYellow font-semibold">— {t.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
