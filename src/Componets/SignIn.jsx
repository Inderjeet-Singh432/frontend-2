// src/pages/OwnerLogin.jsx
import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { toast } from 'react-toastify';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // → Replace with your real API call
        await new Promise(r => setTimeout(r, 1400)); // demo delay

        if (email.includes('@') && password.length >= 6) {
            alert('Login successful! (demo)');
           let data = {
            email: email,
            password: password
        }
        ApiServices.Login(data)
            .then((res) => {
                if (res?.data?.success) {
                    alert(res?.data?.message)
                    sessionStorage.setItem("userid", res?.data?.data?.userid)
                    sessionStorage.setItem("email", res?.data?.data?.userEmail)
                    sessionStorage.setItem("token", res?.data?.token)
                    sessionStorage.setItem("userType", res?.data?.data?.userType)

                    setEmail("")
                    setPassword("")
                    if (res.data.data.userType == "1") {
                        setTimeout(() => {
                            nav("/admin")
                        }, 1000)
                    }
                    if (res.data.data.userType == "2") {
                        setTimeout(() => {
                            setLoad(false)
                            nav("/owner")
                        }, 4000)
                    }
                }

                else {
                    setLoad(false)
                    toast.error(res.data.message)
                }
            })

            .catch((err) => {
                setLoad(false)
                console.log("database is not conected", err);
                toast.error("Something went wrong!!")
            })
        } else {
            setError('Invalid credentials. Try again.');
        }
        setLoading(false);
    };

    const handleGoogleSuccess = (credentialResponse) => {
        console.log('Google Login Success:', credentialResponse);
        // Send to backend: credentialResponse.credential (ID token)
        alert('Google login successful! (demo)');
        window.location.href = '/owner/dashboard';
    };

    const handleGoogleFailure = () => {
        setError('Google login failed. Please try again.');
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com">
            <div
                style={{
                    marginTop: '80px',
                    position: 'relative',
                    minHeight: '100vh',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #0a001f 0%, #1a0033 50%, #0f0c29 100%)',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                }}
            >
                {/* Background elements – no hanging baubles/lamps */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                    {/* Floating orbs */}
                    <div className="orb orb-1" />
                    <div className="orb orb-2" />
                    <div className="orb orb-3" />
                    <div className="orb orb-4" />
                    <div className="orb orb-5" />

                    {/* Twinkling stars */}
                    <div className="stars" />

                    {/* Gentle particle drift */}
                    <div className="particles" />
                </div>

                {/* Login Card */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'rgba(20, 25, 45, 0.65)',
                        backdropFilter: 'blur(22px)',
                        borderRadius: '28px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        boxShadow: '0 40px 100px rgba(0,0,0,0.75), inset 0 0 60px rgba(99,102,241,0.15)',
                        padding: '56px 52px',
                        width: '100%',
                        maxWidth: '480px',
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

                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h1
                            style={{
                                fontSize: '3.4rem',
                                fontWeight: '900',
                                margin: '0 0 12px',
                                background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #ec4899)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '-3px',
                            }}
                        >
                            MSB
                        </h1>
                        <p style={{ color: '#c7d2fe', fontSize: '1.3rem', margin: 0 }}>
                            Owner Portal • Grow Your Business
                        </p>
                    </div>

                    {error && (
                        <div
                            style={{
                                background: 'rgba(220,38,38,0.25)',
                                color: '#fca5a5',
                                padding: '16px',
                                borderRadius: '14px',
                                marginBottom: '36px',
                                textAlign: 'center',
                                border: '1px solid rgba(220,38,38,0.4)',
                            }}
                        >
                            {error}
                        </div>
                    )}
                    {/* form start */}
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '32px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '12px', color: '#e0e7ff', fontWeight: 500, fontSize: '1.05rem' }}>
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="enter your email"
                                required
                                style={{
                                    width: '100%',
                                    padding: '18px 20px',
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.16)',
                                    borderRadius: '16px',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    transition: 'all 0.3s',
                                    outline: 'none',
                                }}
                                onFocus={e => {
                                    e.target.style.borderColor = '#60a5fa';
                                    e.target.style.boxShadow = '0 0 0 5px rgba(96,165,250,0.3)';
                                }}
                                onBlur={e => {
                                    e.target.style.boxShadow = 'none';
                                    e.target.style.borderColor = 'rgba(255,255,255,0.16)';
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '44px' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '12px', color: '#e0e7ff', fontWeight: 500, fontSize: '1.05rem' }}>
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="enter password"
                                required
                                style={{
                                    width: '100%',
                                    padding: '18px 20px',
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.16)',
                                    borderRadius: '16px',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    transition: 'all 0.3s',
                                    outline: 'none',
                                }}
                                onFocus={e => {
                                    e.target.style.borderColor = '#60a5fa';
                                    e.target.style.boxShadow = '0 0 0 5px rgba(96,165,250,0.3)';
                                }}
                                onBlur={e => {
                                    e.target.style.boxShadow = 'none';
                                    e.target.style.borderColor = 'rgba(255,255,255,0.16)';
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '18px',
                                background: loading ? 'rgba(59,130,246,0.55)' : 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #ec4899)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '16px',
                                fontSize: '1.15rem',
                                fontWeight: 700,
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s',
                                boxShadow: loading ? 'none' : '0 14px 40px rgba(59,130,246,0.5)',
                            }}
                            onMouseOver={e => !loading && (e.currentTarget.style.transform = 'translateY(-4px)')}
                            onMouseOut={e => !loading && (e.currentTarget.style.transform = 'translateY(0)')}
                        >
                            {loading ? 'Signing in...' : 'Sign In to Dashboard'}
                        </button>
                    </form>
                    {/* form end */}

                    {/* Google Sign In */}
                    <div style={{ margin: '32px 0', textAlign: 'center' }}>
                        <div style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '16px' }}>
                            or continue with
                        </div>
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleFailure}
                            useOneTap={false}
                            theme="filled_blue"
                            size="large"
                            text="signin_with"
                            shape="rectangular"
                            logo_alignment="left"
                            width="100%"
                        />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '1rem' }}>
                        <a href="" style={{ color: '#a5b4fc', textDecoration: 'none' }}>
                            Forgot password?
                        </a>
                        <p style={{ marginTop: '24px', color: '#cbd5e1' }}>
                            New to MSB?{' '}
                            <a href="/signup" style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none' }}>
                                Create free owner account
                            </a>
                        </p>
                    </div>
                </div>

                {/* CSS – removed all bauble-related styles */}
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