// app/test/page.tsx
export default function TestImages() {
  return (
    <main style={{ background: "#0B0B0E", color: "white", minHeight: "100vh", padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Debug Images</h1>

      <p>Directas de /public/images. Si esto se ve en producción, las rutas, DNS y Vercel están bien.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginTop: 24, maxWidth: 1000 }}>
        <div style={{ position: "relative", height: 280, overflow: "hidden", borderRadius: 12, border: "1px solid rgba(255,255,255,.1)" }}>
          <img src="/images/hero-bg.jpg?v=6" alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "relative", height: 280, overflow: "hidden", borderRadius: 12, border: "1px solid rgba(255,255,255,.1)" }}>
          <img src="/images/services-hero.jpg?v=6" alt="services" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "relative", height: 280, overflow: "hidden", borderRadius: 12, border: "1px solid rgba(255,255,255,.1)" }}>
          <img src="/images/process.jpg?v=6" alt="process" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </main>
  );
}
