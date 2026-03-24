// src/pages/OwnerLogin.jsx
import React, { useState } from 'react';
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


    return (
        <>
            <div
                style={{
                    marginTop: '90px',
                    position: 'relative',
                    minHeight: '100vh',
                    overflow: 'hidden',
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
                        background: 'rgb(43, 71, 106)',
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
                           Sign In Your Account
                        </p>
                    </div>

                    {error && (
                        <div

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

                            {/* Email */}
                            <div style={{ marginBottom: '28px' }}>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', color: '#e0e7ff', fontWeight: 500 }}>
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"

                                    placeholder="enter your email"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '16px 18px',
                                        background: 'rgb(255, 255, 255)',
                                        border: '1px solid rgba(255,255,255,0.16)',
                                        borderRadius: '14px',
                                        color: 'black',
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
                                            background: 'rgb(255, 255, 255)',
                                            border: '1px solid rgba(255,255,255,0.16)',
                                            borderRadius: '16px',
                                            color: 'black',
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
                                {loading ? 'Creating account...' : 'Sign in'}
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
                                    Sign In into your account
                                </h3>
                                <p style={{ margin: '12px 0 0', color: '#c7d2fe', fontSize: '1rem' }}>
                                    Please wait
                                </p>
                            </div>
                        )}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '36px', fontSize: '1rem' }}>
                        <p style={{ color: '#cbd5e1' }}>
                            Create new account?{' '}
                            <a href="/signup" style={{ color: '#818cf8', fontWeight: 600, textDecoration: 'none' }}>
                                Sign up here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}