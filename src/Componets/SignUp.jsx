// src/pages/OwnerSignUp.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ApiServices from '../ApiServices';           // ← imported API service
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic client-side validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim()) {
      setError('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    try {
      // Call your real API service (adjust method name if it's different, e.g. ApiServices.registerOwner)
      const res = await ApiServices.OwnerSignUp(payload);   // ← real API call

      if (res?.data?.success) {
        toast.success(res?.data?.message || 'Account created successfully!');
        
        // Optional: auto-login or redirect
        setTimeout(() => {
          window.location.href = '/owner/dashboard'; // or '/signin' if you want to force login
        }, 1500);
      } else {
        toast.error(res?.data?.message || 'Registration failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      toast.error(err?.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
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
        {/* Background elements */}
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

          <div style={{ position: 'relative' }}>
            <form
              onSubmit={handleSubmit}
              style={{
                opacity: loading ? 0.4 : 1,
                pointerEvents: loading ? 'none' : 'auto',
                transition: 'opacity 0.4s ease',
              }}
            >
              {/* Full Name */}
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

              {/* Email */}
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
                  placeholder="yourname@example.com"
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

              {/* Password with toggle */}
              <div style={{ marginBottom: '28px', position: 'relative' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    required
                    minLength={6}
                    style={{
                      width: '100%',
                      padding: '16px 48px 16px 18px',
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
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#a5b4fc',
                      fontSize: '1.4rem',
                      cursor: 'pointer',
                    }}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password with toggle */}
              <div style={{ marginBottom: '32px', position: 'relative' }}>
                <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                  Confirm Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    style={{
                      width: '100%',
                      padding: '16px 48px 16px 18px',
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
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: '#a5b4fc',
                      fontSize: '1.4rem',
                      cursor: 'pointer',
                    }}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
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

            {/* Loader Overlay */}
            {loading && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(20, 25, 45, 0.75)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  color: 'white',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    border: '6px solid rgba(255,255,255,0.15)',
                    borderTop: '6px solid #a78bfa',
                    borderRadius: '50%',
                    animation: 'spin 1.1s linear infinite',
                    marginBottom: '24px',
                  }}
                />
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 600 }}>
                  Creating your account...
                </h3>
                <p style={{ margin: '12px 0 0', color: '#c7d2fe', fontSize: '1rem' }}>
                  Please wait
                </p>
              </div>
            )}
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

        {/* Global styles + spinner animation */}
        <style jsx global>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Your existing orb, stars, particles styles remain unchanged */
          .orb { position: absolute; border-radius: 50%; background: linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.4)); box-shadow: 0 0 80px rgba(99,102,241,0.7); backdrop-filter: blur(12px); }
          .orb-1 { width: 340px; height: 340px; top: -160px; left: -160px; animation: float1 34s infinite ease-in-out; }
          /* ... rest of your animations ... */
        `}</style>
      </div>
  );
}