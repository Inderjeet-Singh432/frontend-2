const testimonials = [
  {
    name: "Puneet Gupta",
    role: "Founder, TechNova Solutions",
    text: "PENNEP transformed our outdated website into a high-converting e-commerce platform. Their SEO and digital marketing support doubled our leads in just 6 months."
  },
  {
    name: "Dinesh Arora",
    role: "CEO, MediCore Healthcare",
    text: "Professional, responsive, and truly understand business needs. The custom hospital management software they built saved us 40% in operational costs."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, RetailPro",
    text: "Excellent UI/UX design and fast delivery. Their team feels like an extension of our in-house team."
  }
];

export default function Testimonials() {
  return (
    <section className="container">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="grid-3">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <p>“{t.text}”</p>
            <p style={{ marginTop: '1.5rem', fontWeight: '600' }}>
              — {t.name}<br />
              <span style={{ fontWeight: 'normal', color: '#666', fontSize: '0.95rem' }}>{t.role}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}