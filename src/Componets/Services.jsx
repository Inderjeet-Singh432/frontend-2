import styled from 'styled-components';

export default function Services() {
  return (
    <section className="container">
      <h2 className="section-title">Strategic and Proven</h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
        Business Evolution Services tailored to your needs
      </p>
      <div className="grid-3">
        <div className="card">
          <h3>Business Analysis</h3>
          <p>Deep insights into your operations and strategy.</p>
        </div>
        <div className="card">
          
          <h3>Cloud Computing</h3>
          <p>Secure, scalable cloud solutions for modern business.</p>
        </div>
        <div className="card">
          <h3>Software Development</h3>
          <p>Custom applications built for performance & growth.</p>
        </div>
        {/* add more */}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="#" className="btn">All Services</a>
      </div>
    </section>
  )
}