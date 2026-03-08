export default function Contact() {
  return (
    <>
      <section id="contact" className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Ready to transform your business with the right technology and strategy?
          Let's discuss how PENNEP can help you achieve your goals.
        </p>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form style={{ display: 'grid', gap: '1.2rem' }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}