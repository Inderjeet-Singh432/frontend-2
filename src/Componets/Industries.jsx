const industries = [
  "Agriculture", "Automotive", "Banking & Finance", "Energy & Utilities",
  "Healthcare", "Manufacturing", "Retail & E-commerce", "Logistics & Supply Chain",
  "Education", "Real Estate", "Hospitality", "Government & Public Sector"
];

export default function Industries() {
  return (
    <section style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Tailored IT consulting, software solutions, and digital transformation strategies for every sector.
        </p>
        <div className="grid-3">
          {industries.map((ind, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <h3>{ind}</h3>
              <p>Custom solutions that drive efficiency and growth in {ind.toLowerCase()} industry.</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="btn">Explore All Industries</a>
        </div>
      </div>
    </section>
  )
}