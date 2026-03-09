// src/pages/OwnerSignUp.jsx
import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!formData.agreeTerms) {
      setError('You must agree to the Terms of Service');
      setLoading(false);
      return;
    }

    // → Replace this block with your real API call
    try {
      // Example:
      // const res = await fetch('/api/owner/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: formData.fullName,
      //     email: formData.email,
      //     phone: formData.phone,
      //     password: formData.password,
      //   })
      // });
      // const data = await res.json();
      // if (!res.ok) throw new Error(data.message || 'Registration failed');

      // Simulate success
      await new Promise(r => setTimeout(r, 1800));

      setSuccess('Account created successfully! Redirecting to dashboard...');
      setTimeout(() => {
        window.location.href = '/owner/dashboard';
      }, 2000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Sign Up Success:', credentialResponse);
    // Send token to backend to create/link account
    alert('Google sign-up successful! (demo - send token to backend)');
    setTimeout(() => {
      window.location.href = '/owner/dashboard';
    }, 1500);
  };

  const handleGoogleFailure = () => {
    setError('Google sign-up failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com">
      <div
        style={{
            marginTop: '90px',
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0a001f 0%, #1a0033 50%, #0f0c29 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 16px',
        }}
      >
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
          <div className="orb orb-5" />

          <div className="stars" />
          <div className="particles" />
        </div>

        {/* Sign Up Card */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'rgba(20, 25, 45, 0.65)',
            backdropFilter: 'blur(22px)',
            borderRadius: '28px',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.75), inset 0 0 60px rgba(99,102,241,0.15)',
            padding: '52px 48px',
            width: '100%',
            maxWidth: '500px',
            color: 'white',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '7px',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f472b6)',
              boxShadow: '0 8px 30px rgba(139,92,246,0.7)',
            }}
          />

          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h1
              style={{
                fontSize: '3.2rem',
                fontWeight: '900',
                margin: '0 0 10px',
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-2px',
              }}
            >
              MSB
            </h1>
            <p style={{ color: '#c7d2fe', fontSize: '1.25rem', margin: 0 }}>
              Create Your Owner Account
            </p>
          </div>

          {error && (
            <div
              style={{
                background: 'rgba(220,38,38,0.25)',
                color: '#fca5a5',
                padding: '14px',
                borderRadius: '12px',
                marginBottom: '28px',
                textAlign: 'center',
                border: '1px solid rgba(220,38,38,0.4)',
              }}
            >
              {error}
            </div>
          )}

          {success && (
            <div
              style={{
                background: 'rgba(34,197,94,0.25)',
                color: '#86efac',
                padding: '14px',
                borderRadius: '12px',
                marginBottom: '28px',
                textAlign: 'center',
                border: '1px solid rgba(34,197,94,0.4)',
              }}
            >
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="fullName" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Inderjeet Singh"
                required
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '14px',
                  color: 'white',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#60a5fa';
                  e.target.style.boxShadow = '0 0 0 4px rgba(96,165,250,0.25)';
                }}
                onBlur={e => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.borderColor = 'rgba(255,255,255,0.16)';
                }}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="enter your emailm"
                required
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '14px',
                  color: 'white',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#60a5fa';
                  e.target.style.boxShadow = '0 0 0 4px rgba(96,165,250,0.25)';
                }}
                onBlur={e => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.borderColor = 'rgba(255,255,255,0.16)';
                }}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                Phone Number (with country code)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '14px',
                  color: 'white',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#60a5fa';
                  e.target.style.boxShadow = '0 0 0 4px rgba(96,165,250,0.25)';
                }}
                onBlur={e => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.borderColor = 'rgba(255,255,255,0.16)';
                }}
              />
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="enter password"
                required
                minLength={8}
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '14px',
                  color: 'white',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#60a5fa';
                  e.target.style.boxShadow = '0 0 0 4px rgba(96,165,250,0.25)';
                }}
                onBlur={e => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.borderColor = 'rgba(255,255,255,0.16)';
                }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder=" Confirm Password"
                required
                style={{
                  width: '100%',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '14px',
                  color: 'white',
                  fontSize: '1.05rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#60a5fa';
                  e.target.style.boxShadow = '0 0 0 4px rgba(96,165,250,0.25)';
                }}
                onBlur={e => {
                  e.target.style.boxShadow = 'none';
                  e.target.style.borderColor = 'rgba(255,255,255,0.16)';
                }}
              />
            </div>

            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                style={{ width: '20px', height: '20px', accentColor: '#3b82f6' }}
              />
              <label htmlFor="agreeTerms" style={{ color: '#cbd5e1', fontSize: '0.98rem' }}>
                I agree to the{' '}
                <a href="" style={{ color: '#818cf8', textDecoration: 'underline' }}>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="" style={{ color: '#818cf8', textDecoration: 'underline' }}>
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                background: loading ? 'rgba(59,130,246,0.55)' : 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)',
                color: 'white',
                border: 'none',
                borderRadius: '14px',
                fontSize: '1.1rem',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                boxShadow: loading ? 'none' : '0 10px 30px rgba(59,130,246,0.45)',
              }}
              onMouseOver={e => !loading && (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseOut={e => !loading && (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {loading ? 'Creating account...' : 'Create Owner Account'}
            </button>
          </form>

          {/* Google Sign Up */}
          <div style={{ margin: '32px 0', textAlign: 'center' }}>
            <div style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '16px' }}>
              or sign up with
            </div>

            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap={false}
              theme="filled_blue"
              size="large"
              text="signup_with"
              shape="rectangular"
              logo_alignment="left"
              width="100%"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px', fontSize: '1rem' }}>
            <p style={{ color: '#cbd5e1' }}>
              Already have an account?{' '}
              <a href="/signin" style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none' }}>
                Sign in here
              </a>
            </p>
          </div>
        </div>

        {/* CSS animations (same as login page) */}
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
          .orb-3 { width: 240px; height: 240px; top: 25%; left: 5%;  animation: float3 46s infinite ease-in-out; }
          .orb-4 { width: 200px; height: 200px; bottom: 15%; right: 10%; animation: float4 52s infinite ease-in-out; }
          .orb-5 { width: 180px; height: 180px; top: 60%; left: 8%;   animation: float5 48s infinite ease-in-out; }

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
    </GoogleOAuthProvider>
  );
}