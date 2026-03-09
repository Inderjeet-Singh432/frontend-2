export default function Footer() {
  return (
 <>
 <footer 
  style={{
    backgroundColor: '#0f172a', // dark navy - professional tech look
    color: 'white',
    padding: '80px 20px 40px',
    marginTop: '10px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  }}
>
  <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px 32px',
        marginBottom: '40px',
      }}
    >
      {/* Column 1 - Brand + Tagline */}
      <div>
        <h3 style={{ 
          fontSize: '1.6rem', 
          marginBottom: '1.2rem',
          letterSpacing: '-0.5px'
        }}>
          MSB
        </h3>
        <p style={{ 
          opacity: 0.9, 
          lineHeight: 1.6, 
          marginBottom: '1.8rem' 
        }}>
          Innovate. Transform. Succeed.<br />
          Your trusted partner in business consulting, digital transformation and IT solutions.
        </p>
        
        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
          <a href="https://linkedin.com/company/pennep" aria-label="LinkedIn" style={{ color: 'white', opacity: 0.8, fontSize: '1.4rem' }}>in</a>
          <a href="https://twitter.com/pennep" aria-label="X / Twitter" style={{ color: 'white', opacity: 0.8, fontSize: '1.4rem' }}>𝕏</a>
          <a href="#" aria-label="Facebook" style={{ color: 'white', opacity: 0.8, fontSize: '1.4rem' }}>fb</a>
          <a href="#" aria-label="YouTube" style={{ color: 'white', opacity: 0.8, fontSize: '1.4rem' }}>▶</a>
        </div>
      </div>

      {/* Column 2 - Quick Links */}
      <div>
        <h4 style={{ fontSize: '1.15rem', marginBottom: '1.4rem', color: '#94a3b8' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2.1 }}>
          <li><a href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About Us</a></li>
          <li><a href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Services</a></li>
          <li><a href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Case Studies</a></li>
          <li><a href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Insights & Blog</a></li>
        </ul>
      </div>


      {/* Column 4 - Contact + Newsletter */}
      <div>
        <h4 style={{ fontSize: '1.15rem', marginBottom: '1.4rem', color: '#94a3b8' }}>Get in Touch</h4>
        <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
          contact@pennep.com<br />
          +91 98765 43210<br />
          Jalandhar | Punjab 
        </p>
    
      </div>
    </div>

    {/* Bottom bar */}
    <div style={{
      borderTop: '1px solid #334155',
      paddingTop: '0',
      textAlign: 'center',
      fontSize: '0.9rem',
      opacity: 0.7,
    }}>
      <p>
        © {new Date().getFullYear()} PENNEP. All rights reserved.
      </p>
      <p style={{ marginTop: '8px' }}>
        <a href="" style={{ color: '#94a3b8', margin: '0 12px' }}>Privacy Policy</a>
        <span>•</span>
        <a href="" style={{ color: '#94a3b8', margin: '0 12px' }}>Terms of Service</a>
        <span>•</span>
        <a href="" style={{ color: '#94a3b8', margin: '0 12px' }}>Cookie Policy</a>
      </p>
    </div>
  </div>
</footer>
 </>
  )
}