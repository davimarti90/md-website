"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData(e.currentTarget);
      const params = new URLSearchParams({
        subject: `Quote Request — ${String(fd.get("name") || "")}`,
        body: `Name: ${fd.get("name")}
Phone: ${fd.get("phone")}
Email: ${fd.get("email")}
From: ${fd.get("from")}
To: ${fd.get("to")}
Move date: ${fd.get("date")}
Notes: ${fd.get("notes")}`
      });
      window.location.href = `mailto:mdinterstatemovingllc@gmail.com?${params.toString()}`;
      setSent(true);
    } finally { setLoading(false); }
  }

  if (sent) {
    return (
      <div className="card">
        <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
        <p className="text-white/70">We’ve opened your email client with the details. Send it and we’ll reply fast.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
      <input className="card" name="name" placeholder="Full name" required />
      <input className="card" name="phone" placeholder="Phone" required />
      <input className="card md:col-span-2" name="email" placeholder="Email" type="email" required />
      <input className="card" name="from" placeholder="Moving from (City, ST)" required />
      <input className="card" name="to" placeholder="Moving to (City, ST)" required />
      <input className="card" name="date" placeholder="Target move date" />
      <textarea className="card md:col-span-2" name="notes" placeholder="Notes (volume, bedrooms, access, special items)" rows={5} />
      <div className="md:col-span-2 flex gap-3">
        <button type="submit" className="btn-primary" disabled={loading}>{loading ? "Sending…" : "Request Quote"}</button>
        <a className="btn-ghost" href="mailto:mdinterstatemovingllc@gmail.com">Email Instead</a>
      </div>
    </form>
  );
}