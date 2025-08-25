import CTA from '@/components/CTA'

export default function ContactPage() {
  return (
    <main className="section container-md">
      <h1 className="text-3xl md:text-5xl font-extrabold">Contact MD Interstate Moving</h1>
      <p className="lead mt-3 max-w-2xl">
        We’re a direct mover (no brokers). Use the form and we’ll confirm by email within hours.
      </p>
      <div className="mt-8">
        <CTA />
      </div>
    </main>
  )
}
