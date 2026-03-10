// src/pages/OwnerLogin.jsx
import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { toast } from 'react-toastify';
import ApiServices from '../ApiServices';
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';     // for show/hide password icon

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic client-side check (optional but recommended)
        if (!email || !password) {
            toast.warn("Please fill in all fields");
            return;
        }

        setLoading(true);
        setError('');

        let data = {
            email: email,
            password: password
        };

        try {
            const res = await ApiServices.Login(data);

            if (res?.data?.success) {
                toast.success(res?.data?.message || "Login successful");

                sessionStorage.setItem("userid", res?.data?.data?.userid);
                sessionStorage.setItem("email", res?.data?.data?.userEmail);
                sessionStorage.setItem("token", res?.data?.token);
                sessionStorage.setItem("userType", res?.data?.data?.userType);

                setEmail("");
                setPassword("");

                // Redirect based on user type
                if (res.data.data.userType === "1") {
                    setTimeout(() => navigate("/admin"), 800);
                } else if (res.data.data.userType === "2") {
                    setTimeout(() => navigate("/owner"), 1200);
                }
            } else {
                toast.error(res.data.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        toast.success("Google login successful! (demo mode)");
        // Here you would normally send credentialResponse.credential to backend
        setTimeout(() => {
            navigate('/owner/dashboard');
        }, 1200);
    };

    const handleGoogleFailure = () => {
        toast.error('Google login failed. Please try again.');
    };

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"}>
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

                    {/* Form + Loader overlay */}
                    <div style={{ position: 'relative' }}>
                        <form 
                            onSubmit={handleSubmit} 
                            style={{ 
                                opacity: loading ? 0.4 : 1, 
                                pointerEvents: loading ? 'none' : 'auto',
                                transition: 'opacity 0.4s ease'
                            }}
                        >
                            {/* Email */}
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
                                    disabled={loading}
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

                            {/* Password with show/hide toggle */}
                            <div style={{ marginBottom: '44px', position: 'relative' }}>
                                <label htmlFor="password" style={{ display: 'block', marginBottom: '12px', color: '#e0e7ff', fontWeight: 500, fontSize: '1.05rem' }}>
                                    Password
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="enter password"
                                        required
                                        disabled={loading}
                                        style={{
                                            width: '100%',
                                            padding: '18px 48px 18px 20px',
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
                                            padding: '0',
                                        }}
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    padding: '18px',
                                    background: loading 
                                        ? 'rgba(59,130,246,0.55)' 
                                        : 'linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #ec4899)',
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

                        {/* Loader overlay when loading = true */}
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
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    border: '6px solid rgba(255,255,255,0.15)',
                                    borderTop: '6px solid #a78bfa',
                                    borderRadius: '50%',
                                    animation: 'spin 1.1s linear infinite',
                                    marginBottom: '24px'
                                }} />
                                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 600 }}>
                                    Authenticating...
                                </h3>
                                <p style={{ margin: '12px 0 0', color: '#c7d2fe', fontSize: '1rem' }}>
                                    Please wait
                                </p>
                            </div>
                        )}
                    </div>

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

                {/* Global styles (keep your existing ones + add spinner animation) */}
                <style jsx global>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    /* Your existing orb, stars, particles styles remain unchanged */
                    .orb { ... } /* your existing orb styles */
                    @keyframes float1 { ... } /* etc. */
                `}</style>
            </div>
        </GoogleOAuthProvider>
    );
}