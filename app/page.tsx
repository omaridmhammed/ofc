import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Quick Teaser Section */}
      <section className="container" style={{ padding: '60px 20px' }}>
        <h2>Latest News</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ background: 'var(--color-bg-card)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Winter Registration Open</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px' }}>
              Secure your team's spot for the upcoming Winter 2026 season. Spots are limited!
            </p>
            <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Read More →</a>
          </div>
          <div style={{ background: 'var(--color-bg-card)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Match Week 5 Highlights</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px' }}>
              Check out the top goals and saves from this week's Premier Division action.
            </p>
            <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Watch Now →</a>
          </div>
          <div style={{ background: 'var(--color-bg-card)', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>New Futsal Academy</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px' }}>
              Registration for youth development camps is now live for ages 8-14.
            </p>
            <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Learn More →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
