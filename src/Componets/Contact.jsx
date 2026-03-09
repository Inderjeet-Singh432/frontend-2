// src/pages/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      style={{
        marginTop: '60px',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a001f 0%, #1a0033 50%, #0f0c29 100%)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Background effects */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
        <div className="orb orb-5" />

        <div className="stars" />
        <div className="particles" />
      </div>

      {/* Main Content – compact single-screen layout */}
      <div style={{ position: 'relative', zIndex: 1, padding: '60px 20px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header – smaller */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1
              style={{
                fontSize: '2.4rem',
                fontWeight: '800',
                marginBottom: '10px',
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get in Touch
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#c7d2fe', maxWidth: '680px', margin: '0 auto' }}>
              Questions about listings, bookings or partnerships? We're here to help!
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Left – Info + Form */}
            <div>
              {/* Contact Cards – smaller */}
              <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                {[
                  { icon: '📍', title: 'Location', text: 'Chandigarh, India\nSector 17 (HQ)' },
                  { icon: '📧', title: 'Email', text: 'support@pennep.com' },
                  { icon: '📞', title: 'Phone', text: '+91 98765 43210' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(30, 41, 59, 0.65)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      padding: '16px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      transition: 'transform 0.25s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                    <div>
                      <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', color: '#a5b4fc' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', whiteSpace: 'pre-line', color: '#cbd5e1' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form – smaller inputs */}
              <div
                style={{
                  background: 'rgba(30, 41, 59, 0.7)',
                  backdropFilter: 'blur(14px)',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center' }}>Send Message</h2>

                {error && <div style={{ color: '#fca5a5', marginBottom: '16px', textAlign: 'center', fontSize: '0.92rem' }}>{error}</div>}
                {submitted && (
                  <div style={{ color: '#86efac', marginBottom: '16px', textAlign: 'center', fontSize: '0.92rem', fontWeight: 500 }}>
                    Thank you! Message sent.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <input name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required style={inputStyle} />
                  <input name="email" type="email" placeholder="Email *" value={formData.email} onChange={handleChange} required style={inputStyle} />
                  <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} style={inputStyle} />
                  <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} required rows={4} style={{ ...inputStyle, resize: 'vertical' }} />

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>

            {/* Map – compact */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
                background: 'rgba(30,41,59,0.65)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ padding: '16px 24px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#a5b4fc' }}>Find Us</h3>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Chandigarh, Sector 17</p>
              </div>

              <div style={{ height: '320px' }}>
                <iframe
                  title="PENNEP Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789012!2d76.78000000000001!3d30.740000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sSector%2017%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Social – smaller & tighter */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: '#a5b4fc' }}>Connect With Us</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '1.6rem' }}>
              <a href="#" style={{ color: '#60a5fa', transition: 'all 0.25s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}>LinkedIn</a>
              <a href="#" style={{ color: '#60a5fa', transition: 'all 0.25s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}>X</a>
              <a href="#" style={{ color: '#60a5fa', transition: 'all 0.25s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}>Instagram</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background CSS – same as before */}
      <style jsx global>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.4));
          box-shadow: 0 0 80px rgba(99,102,241,0.7);
          backdrop-filter: blur(12px);
        }
        .orb-1 { width: 340px; height: 340px; top: -160px; left: -160px; animation: float1 34s infinite ease-in-out; }
        .orb-2 { width: 280px; height: 280px; bottom: -130px; right: -130px; animation: float2 40s infinite ease-in-out; }
        .orb-3 { width: 240px; height: 240px; top: 25%; left: 5%; animation: float3 46s infinite ease-in-out; }
        .orb-4 { width: 200px; height: 200px; bottom: 15%; right: 10%; animation: float4 52s infinite ease-in-out; }
        .orb-5 { width: 180px; height: 180px; top: 60%; left: 8%; animation: float5 48s infinite ease-in-out; }

        @keyframes float1 { 0%,100% { transform: translate(0,0) rotate(0deg) scale(1); } 50% { transform: translate(180px,200px) rotate(180deg) scale(1.15); } }
        @keyframes float2 { 0%,100% { transform: translate(0,0) rotate(0deg) scale(1); } 50% { transform: translate(-200px,-180px) rotate(-180deg) scale(1.2); } }
        @keyframes float3 { 0%,100% { transform: translate(0,0) rotate(0deg) scale(1); } 50% { transform: translate(240px,160px) rotate(160deg) scale(1.12); } }
        @keyframes float4 { 0%,100% { transform: translate(0,0) rotate(0deg) scale(1); } 50% { transform: translate(-220px,-140px) rotate(-180deg) scale(1.16); } }
        @keyframes float5 { 0%,100% { transform: translate(0,0) rotate(0deg) scale(1); } 50% { transform: translate(160px,120px) rotate(140deg) scale(1.1); } }

        .stars {
          position: absolute;
          inset: 0;
          background: transparent;
          pointer-events: none;
          opacity: 0.65;
        }
        .stars::before, .stars::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, white 1px, transparent 1px);
          background-size: 70px 70px;
          animation: twinkle 12s infinite alternate;
        }
        .stars::after {
          background-size: 90px 90px;
          animation-delay: 6s;
          opacity: 0.75;
        }
        @keyframes twinkle {
          0% { opacity: 0.45; }
          100% { opacity: 0.95; }
        }

        .particles {
          position: absolute;
          inset: 0;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="5" cy="5" r="1.2" fill="rgba(255,255,255,0.45)"/></svg>') repeat;
          animation: particleDrift 180s linear infinite;
          opacity: 0.18;
        }
        @keyframes particleDrift {
          from { background-position: 0 0; }
          to { background-position: -500px -500px; }
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  marginBottom: '16px',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.18)',
  borderRadius: '10px',
  color: 'white',
  fontSize: '0.95rem',
  outline: 'none',
};