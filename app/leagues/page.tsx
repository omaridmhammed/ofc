import PageHeader from "@/components/PageHeader";

export default function LeaguesPage() {
    return (
        <main>
            <PageHeader
                title="Our Leagues"
                subtitle="Divisions for Every Skill Level"
                image="/ofc/leagues-bg.png"
            />

            <section className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>

                    {/* League Card 1 */}
                    <div style={{
                        background: 'var(--color-bg-card)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        padding: '30px',
                        borderRadius: '8px'
                    }}>
                        <h2 style={{ color: 'var(--color-primary)' }}>Premier Division</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            For elite players and competitive teams. Matches are officiated by certified referees.
                        </p>
                        <ul style={{ marginBottom: '20px', color: 'var(--color-text-main)' }}>
                            <li>• Sunday Nights</li>
                            <li>• Algonquin College</li>
                            <li>• $1200 / Team</li>
                        </ul>
                        <a href="#" className="btn btn-primary">View Standings</a>
                    </div>

                    {/* League Card 2 */}
                    <div style={{
                        background: 'var(--color-bg-card)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        padding: '30px',
                        borderRadius: '8px'
                    }}>
                        <h2 style={{ color: '#ff9f1c' }}>Division 1 (Recreational)</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            Perfect for corporate teams and friends looking for a good run. Fun first!
                        </p>
                        <ul style={{ marginBottom: '20px', color: 'var(--color-text-main)' }}>
                            <li>• Wednesday Nights</li>
                            <li>• Carleton U</li>
                            <li>• $950 / Team</li>
                        </ul>
                        <a href="#" className="btn btn-primary">View Standings</a>
                    </div>

                    {/* League Card 3 */}
                    <div style={{
                        background: 'var(--color-bg-card)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        padding: '30px',
                        borderRadius: '8px'
                    }}>
                        <h2 style={{ color: '#2ec4b6' }}>Women's Division</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            Growing the women's game in Ottawa. Open to all skill levels.
                        </p>
                        <ul style={{ marginBottom: '20px', color: 'var(--color-text-main)' }}>
                            <li>• Tuesday Nights</li>
                            <li>• Various Venues</li>
                            <li>• $900 / Team</li>
                        </ul>
                        <a href="#" className="btn btn-primary">View Standings</a>
                    </div>

                </div>
            </section>
        </main>
    );
}
