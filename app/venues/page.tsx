import PageHeader from "@/components/PageHeader";

export default function VenuesPage() {
    return (
        <main>
            <PageHeader
                title="Our Venues"
                subtitle="Where the Action Happens"
            />

            <section className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginBottom: '60px' }}>
                    {/* Venue Item */}
                    <div style={{ display: 'flex', gap: '30px', background: 'var(--color-bg-card)', padding: '20px', borderRadius: '8px' }}>
                        <div style={{ flex: '1', minHeight: '200px', background: '#233554' }}>
                            {/* Placeholder for map or image */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8892b0' }}>
                                Map / Image
                            </div>
                        </div>
                        <div style={{ flex: '1' }}>
                            <h2 style={{ marginBottom: '15px' }}>Algonquin College</h2>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px' }}>
                                Our premier facility featuring a full-sized international futsal court, spectator seating, and change rooms.
                            </p>
                            <p><strong>Address:</strong> 1385 Woodroffe Ave, Ottawa, ON</p>
                            <a href="#" className="btn btn-primary" style={{ marginTop: '20px' }}>Get Directions</a>
                        </div>
                    </div>

                    {/* Venue Item */}
                    <div style={{ display: 'flex', gap: '30px', background: 'var(--color-bg-card)', padding: '20px', borderRadius: '8px' }}>
                        <div style={{ flex: '1', minHeight: '200px', background: '#233554' }}>
                            {/* Placeholder for map or image */}
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8892b0' }}>
                                Map / Image
                            </div>
                        </div>
                        <div style={{ flex: '1' }}>
                            <h2 style={{ marginBottom: '15px' }}>Carleton University</h2>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px' }}>
                                High-performance hardwood courts used for our Division 1 and University leagues.
                            </p>
                            <p><strong>Address:</strong> 1125 Colonel By Dr, Ottawa, ON</p>
                            <a href="#" className="btn btn-primary" style={{ marginTop: '20px' }}>Get Directions</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
