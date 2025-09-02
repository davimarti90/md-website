// app/components/Process.tsx
const steps = [
  { n: "01", t: "Free Quote", d: "Tell us the basics and get a fast, clear estimate." },
  { n: "02", t: "Plan & Protect", d: "We schedule, label, wrap and protect every item." },
  { n: "03", t: "Move Day", d: "Professional crew, careful handling, real-time coordination." },
  { n: "04", t: "Delivery & Setup", d: "Furniture placed and assembled — you just enjoy." },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative isolate"
      style={{ minHeight: "60vh" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/images/process.jpg?v=5"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center block"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,.6)" }} />
      </div>

      <div className="container-md py-20 lg:py-28">
        <h2 className="text-3xl md:text-4xl font-extrabold">Our Process</h2>
        <p className="mt-3 max-w-2xl text-white/80">From quote to delivery, one team. No broker hand-offs.</p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-4">
              <div className="shrink-0 h-10 w-10 rounded-full" style={{ background: "#D4AF37", color: "#000" }}>
                <div className="grid place-items-center h-full font-bold">{s.n}</div>
              </div>
              <div>
                <h3 className="te
