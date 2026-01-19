
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Lock, CreditCard, CheckCircle, Key } from 'lucide-react';

export default function UniverseConnectedReader() {
    const { currentUser, userProfile } = useAuth();

    if (!currentUser) return <Navigate to="/login" state={{ from: location }} />;

    const [redeemKey, setRedeemKey] = React.useState('');
    const [redeemStatus, setRedeemStatus] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleRedeem = async (e) => {
        e.preventDefault();
        setLoading(true);
        setRedeemStatus('');

        try {
            // Find key
            const keysRef = collection(db, "license_keys");
            const q = query(keysRef, where("key", "==", redeemKey.trim()), where("status", "==", "active"));
            const snapshot = await getDocs(q);

            if (snapshot.empty) {
                setRedeemStatus('Invalid or used key.');
                setLoading(false);
                return;
            }

            const keyDoc = snapshot.docs[0];

            // Mark key as used
            await updateDoc(doc(db, "license_keys", keyDoc.id), {
                status: "used",
                usedBy: currentUser.uid,
                usedAt: serverTimestamp()
            });

            // Grant access to user
            await updateDoc(doc(db, "users", currentUser.uid), {
                hasPurchased: true
            });

            // Reload page (or wait for context update)
            window.location.reload();

        } catch (err) {
            console.error(err);
            setRedeemStatus('Error redeeming key.');
        }
        setLoading(false);
    };

    const Paywall = () => (
        <div className="paywall-container">
            <div className="paywall-card glass-card">
                <Lock size={64} className="lock-icon" />
                <h2>Unlock The Universe</h2>
                <p>Access the complete original manuscript of <strong>Universe Connected</strong>.</p>

                <div className="price-tag">$4.99</div>

                <ul className="benefits-list">
                    <li><CheckCircle size={16} /> Instant Digital Access (PDF)</li>
                    <li><CheckCircle size={16} /> Reader-friendly format</li>
                    <li><CheckCircle size={16} /> Support the Author</li>
                </ul>

                <a
                    href="#"
                    className="btn btn-primary full-width"
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Payment Gateway Integration Required. Please configure Stripe or use Manual Admin Approval.");
                    }}
                >
                    <CreditCard size={20} /> Purchase Now
                </a>

                <div className="divider"><span>OR</span></div>

                <form onSubmit={handleRedeem} className="redeem-form">
                    <div className="input-group">
                        <Key size={18} className="input-icon" />
                        <input
                            type="text"
                            placeholder="Enter License Key"
                            value={redeemKey}
                            onChange={(e) => setRedeemKey(e.target.value)}
                            className="glass-input"
                        />
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-secondary full-width">
                        {loading ? 'Verifying...' : 'Redeem Key'}
                    </button>
                    {redeemStatus && <p className="error-msg">{redeemStatus}</p>}
                </form>

                <p className="tiny-text">Secure payment processing via Stripe</p>
            </div>
            <style>{`
        .paywall-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4rem 1rem;
            min-height: 60vh;
        }
        .paywall-card {
            text-align: center;
            max-width: 400px;
            padding: 3rem;
            border: 2px solid var(--color-primary);
        }
        .lock-icon { color: var(--color-primary); margin-bottom: 1.5rem; }
        .price-tag { 
            font-size: 3rem; 
            font-weight: 800; 
            color: #fff; 
            margin: 1.5rem 0;
            text-shadow: 0 0 20px rgba(100,108,255,0.5);
        }
        .benefits-list {
            list-style: none;
            padding: 0;
            text-align: left;
            margin-bottom: 2rem;
        }
        .benefits-list li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            color: #ccc;
        }
        .tiny-text { font-size: 0.8rem; color: #666; margin-top: 1rem; }
        
        .divider {
            display: flex;
            align-items: center;
            text-align: center;
            margin: 1.5rem 0;
            color: #666;
            font-size: 0.8rem;
        }
        .divider::before, .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #444;
        }
        .divider span { margin: 0 10px; }

        .redeem-form {
            text-align: left;
        }
        .input-group {
            position: relative;
            margin-bottom: 1rem;
        }
        .input-icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: #888;
        }
        .glass-input {
            width: 100%;
            padding: 0.8rem 0.8rem 0.8rem 2.5rem;
            background: rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.2);
            color: white;
            border-radius: 4px;
        }
        .glass-input:focus { outline: none; border-color: var(--color-primary); }
        
        .error-msg { color: #ff5050; font-size: 0.85rem; margin-top: 0.5rem; text-align: center; }

      `}</style>
        </div>
    );

    const Reader = () => (
        <div className="reader-container">
            <div className="reader-toolbar">
                <span>Universe Connected (Original)</span>
                <a href="/assets/books/UniverseConnected_Original.pdf" download className="btn btn-small btn-secondary">Download PDF</a>
            </div>
            <iframe
                src="/assets/books/UniverseConnected_Original.pdf"
                className="pdf-viewer"
                title="Universe Connected Reader"
            />
            <style>{`
        .reader-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            padding-top: 70px;
        }
        .reader-toolbar {
            padding: 1rem 2rem;
            background: #111;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #333;
        }
        .pdf-viewer {
            flex: 1;
            width: 100%;
            border: none;
        }
      `}</style>
        </div>
    );

    return userProfile?.hasPurchased ? <Reader /> : <Paywall />;
}
