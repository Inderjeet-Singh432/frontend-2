export default function Footer() {
  return (
    <footer  style={{marginTop:"100px"}}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>PENNEP</h3>
          <p style={{ marginBottom: '2rem' }}>
            Innovate. Transform. Succeed.<br />
            Your trusted partner in business consulting and IT solutions.
          </p>
          <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
            © {new Date().getFullYear()} PENNEP. All rights reserved.<br />
            <a href="#" style={{ color: '#60a5fa' }}>Privacy Policy</a> • <a href="#" style={{ color: '#60a5fa' }}>Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}