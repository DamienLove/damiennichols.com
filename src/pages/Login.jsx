
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, ArrowRight } from 'lucide-react';

export default function Login() {
    const { login, register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/books";

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        try {
            if (isRegistering) {
                await register(email, password);
            } else {
                await login(email, password);
            }
            navigate(from, { replace: true });
        } catch (err) {
            setError('Failed to ' + (isRegistering ? 'register' : 'sign in') + ': ' + err.message);
        }
    }

    return (
        <div className="page-container login-page">
            <div className="auth-card-wrapper">
                <motion.div
                    className="auth-card glass-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="auth-header">
                        <Shield size={48} className="auth-icon" />
                        <h2>{isRegistering ? 'Create Account' : 'Welcome Back'}</h2>
                        <p className="text-muted">Access the Universe Connected Archives</p>
                    </div>

                    {error && <div className="error-banner">{error}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label><Mail size={16} /> Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="glass-input"
                            />
                        </div>
                        <div className="form-group">
                            <label><Lock size={16} /> Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="glass-input"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary full-width">
                            {isRegistering ? 'Sign Up' : 'Log In'} <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>
                            {isRegistering ? 'Already have an account?' : "Don't have an account?"}
                            <button
                                className="btn-link"
                                onClick={() => setIsRegistering(!isRegistering)}
                            >
                                {isRegistering ? 'Log In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .login-page {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
          background: radial-gradient(circle at center, #1a1a2e 0%, #000 100%);
        }

        .auth-card {
          width: 100%;
          max-width: 400px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(30, 30, 40, 0.6);
          backdrop-filter: blur(12px);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: #aaa;
          font-size: 0.9rem;
        }

        .glass-input {
          width: 100%;
          padding: 0.8rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          font-size: 1rem;
        }

        .glass-input:focus {
          border-color: var(--color-primary);
          outline: none;
        }

        .full-width {
          width: 100%;
          justify-content: center;
          margin-top: 1rem;
        }

        .auth-footer {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
          color: #888;
        }

        .btn-link {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          font-weight: 600;
          margin-left: 0.5rem;
        }

        .error-banner {
          background: rgba(255, 80, 80, 0.2);
          border: 1px solid #ff5050;
          color: #ffaaaa;
          padding: 0.8rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
      `}</style>
        </div>
    );
}
