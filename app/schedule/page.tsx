import PageHeader from "@/components/PageHeader";

export default function SchedulePage() {
    return (
        <main>
            <PageHeader
                title="Match Schedule"
                subtitle="Upcoming Fixtures & Results"
            />

            <section className="container">
                {/* Mock Schedule Table */}
                <div style={{ background: 'var(--color-bg-card)', borderRadius: '8px', overflow: 'hidden', marginBottom: '60px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--color-text-main)' }}>
                        <thead>
                            <tr style={{ background: 'rgba(100, 255, 218, 0.1)', textAlign: 'left' }}>
                                <th style={{ padding: '15px' }}>Date</th>
                                <th style={{ padding: '15px' }}>Time</th>
                                <th style={{ padding: '15px' }}>Home Team</th>
                                <th style={{ padding: '15px' }}>Away Team</th>
                                <th style={{ padding: '15px' }}>Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px' }}>Oct 12</td>
                                <td style={{ padding: '15px', color: 'var(--color-primary)' }}>18:00</td>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>Ottawa City FC</td>
                                <td style={{ padding: '15px' }}>Westboro United</td>
                                <td style={{ padding: '15px', color: 'var(--color-text-muted)' }}>Algonquin College</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px' }}>Oct 12</td>
                                <td style={{ padding: '15px', color: 'var(--color-primary)' }}>19:00</td>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>Futsal Kings</td>
                                <td style={{ padding: '15px' }}>Downtown Strikers</td>
                                <td style={{ padding: '15px', color: 'var(--color-text-muted)' }}>Algonquin College</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px' }}>Oct 13</td>
                                <td style={{ padding: '15px', color: 'var(--color-primary)' }}>20:00</td>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>Gatineau Galaxy</td>
                                <td style={{ padding: '15px' }}>Barrhaven Blues</td>
                                <td style={{ padding: '15px', color: 'var(--color-text-muted)' }}>Carleton U</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
