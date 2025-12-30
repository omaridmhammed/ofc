import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                subtitle="Get in Touch with Futsal Ottawa"
            />

            <section className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto 60px auto' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px' }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #233554', background: '#112240', color: 'white' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #233554', background: '#112240', color: 'white' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px' }}>Message</label>
                            <textarea rows={5} style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #233554', background: '#112240', color: 'white' }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-solid">Send Message</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
