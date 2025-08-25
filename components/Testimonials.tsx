export function Testimonials() {
  const items = [
    { name: "Juliana T.", text: "Team David and Mauro was great! Very attentive and helpful." },
    { name: "Irene D.", text: "Outstanding job — organized, polite, and finished everything same day." },
    { name: "Deborah D.", text: "Exceptional with my 88-year-old mom — professional and caring throughout." },
    { name: "Ashley N.", text: "Nothing short of perfect! Fast, efficient and kind — easiest move ever." },
    { name: "Paulie P.", text: "From RI to MD in one day. Professional, careful, and fast." },
    { name: "Zyarrie P.", text: "Very friendly, very fast, very kind. Wonderful job." },
  ]
  return (
    <section className="rounded-2xl border border-white/10 bg-black p-6 md:p-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow">
            <blockquote className="text-white/90">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-mdGold font-semibold">— {t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
