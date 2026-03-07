const blogs = [
  { title: "SEO Roadmap for 2026: What’s Changing?", desc: "Core Web Vitals, AI content detection, zero-click searches — prepare your strategy now." },
  { title: "UX Best Practices in Modern Software Development", desc: "How small UX decisions create massive user retention and conversion impact." },
  { title: "Why Healthcare Needs Specialized IT Consulting in 2025", desc: "Compliance, telehealth, data security — the unique challenges and solutions." },
  { title: "AI-Powered Digital Marketing: Tools & Strategies", desc: "From predictive analytics to hyper-personalized campaigns — the new standard." }
];

export default function Blogs() {
  return (
    <section style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">Featured Insights</h2>
        <div className="grid-3">
          {blogs.map((post, i) => (
            <div key={i} className="card">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <a href="#" style={{ color: '#0066ff', fontWeight: '600', textDecoration: 'none' }}>
                Read More →
              </a>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#" className="btn">View All Blogs</a>
        </div>
      </div>
    </section>
  )
}