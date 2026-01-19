
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { Users, Check, X, Search, Shield, Key, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const { currentUser, userProfile } = useAuth();
    const [users, setUsers] = useState([]);
    const [keys, setKeys] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Basic security check (client-side only, Firestore rules should enforce this)
    useEffect(() => {
        if (!loading && (!currentUser || currentUser.email !== 'me@damiennichols.com')) {
            alert("Access Denied");
            navigate('/');
        }
    }, [currentUser, loading, navigate]);

    useEffect(() => {
        async function fetchData() {
            try {
                const usersSnap = await getDocs(collection(db, "users"));
                setUsers(usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                const keysQuery = query(collection(db, "license_keys"), orderBy("createdAt", "desc"));
                const keysSnap = await getDocs(keysQuery);
                setKeys(keysSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch data", err);
            }
        }
        if (currentUser && currentUser.email === 'me@damiennichols.com') {
            fetchData();
        }
    }, [currentUser]);

    const generateKey = async () => {
        try {
            const newKey = "UC-" + Math.random().toString(36).substr(2, 4).toUpperCase() + "-" + Math.random().toString(36).substr(2, 4).toUpperCase() + "-" + Math.random().toString(36).substr(2, 4).toUpperCase();

            const docRef = await addDoc(collection(db, "license_keys"), {
                key: newKey,
                status: "active",
                createdAt: serverTimestamp(),
                generatedBy: currentUser.email
            });

            setKeys([{ id: docRef.id, key: newKey, status: "active", createdAt: new Date() }, ...keys]);
        } catch (err) {
            console.error("Error generating key", err);
        }
    };

    const togglePaidStatus = async (userId, currentStatus) => {
        try {
            const userRef = doc(db, "users", userId);
            await updateDoc(userRef, { hasPurchased: !currentStatus });
            // Update local state
            setUsers(users.map(u => u.id === userId ? { ...u, hasPurchased: !currentStatus } : u));
        } catch (err) {
            console.error("Failed to update user", err);
            alert("Error updating user");
        }
    };

    if (!currentUser || currentUser.email !== 'me@damiennichols.com') return null;

    return (
        <div className="page-container admin-page">
            <div className="admin-wrapper">
                <h1><Shield className="icon-large" /> Admin Portal</h1>
                <p className="subtitle">Manage user access to Universe Connected</p>

                <div className="admin-section">
                    <h2><Users size={20} /> User Management</h2>
                    <div className="users-list glass-card">
                        <div className="list-header">
                            <span>User</span>
                            <span>Status</span>
                            <span>Action</span>
                        </div>

                        {loading ? <p>Loading users...</p> : (
                            users.map(user => (
                                <div key={user.id} className="user-row">
                                    <div className="user-info">
                                        <span className="user-email">{user.email || 'No Email'}</span>
                                        <span className="user-id">{user.id}</span>
                                    </div>
                                    <div className={`status-badge ${user.hasPurchased ? 'paid' : 'free'}`}>
                                        {user.hasPurchased ? 'PAID ACCESS' : 'RESTRICTED'}
                                    </div>
                                    <button
                                        onClick={() => togglePaidStatus(user.id, user.hasPurchased)}
                                        className={`btn-toggle ${user.hasPurchased ? 'revoke' : 'grant'}`}
                                    >
                                        {user.hasPurchased ? 'Revoke Access' : 'Grant Access'}
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="admin-section" style={{ marginTop: '3rem' }}>
                    <div className="section-header-row">
                        <h2><Key size={20} /> License Keys</h2>
                        <button onClick={generateKey} className="btn btn-primary btn-sm">
                            <Plus size={16} /> Generate New Key
                        </button>
                    </div>

                    <div className="keys-grid">
                        {keys.map(keyDoc => (
                            <div key={keyDoc.id} className={`key-card ${keyDoc.status}`}>
                                <div className="key-code">{keyDoc.key}</div>
                                <div className="key-status">
                                    {keyDoc.status === 'active' ? (
                                        <span className="status-active"><Check size={12} /> Available</span>
                                    ) : (
                                        <span className="status-used"><X size={12} /> Used by {users.find(u => u.id === keyDoc.usedBy)?.email || 'User'}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .admin-page {
          padding-top: 100px;
          min-height: 100vh;
        }
        .admin-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
        }
        .icon-large { vertical-align: middle; margin-right: 0.5rem; }
        .subtitle { color: #888; margin-bottom: 2rem; }
        
        .admin-section h2 { margin-bottom: 1rem; color: #fff; display: flex; align-items: center; gap: 0.5rem; }
        .section-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }

        .keys-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }

        .key-card {
          background: rgba(255,255,255,0.05);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .key-code {
          font-family: monospace;
          font-size: 1.2rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .key-card.used .key-code {
          color: #666;
          text-decoration: line-through;
        }

        .status-active { color: #00ff80; font-size: 0.85rem; display: flex; align-items: center; gap: 0.25rem; }
        .status-used { color: #ff5050; font-size: 0.85rem; display: flex; align-items: center; gap: 0.25rem; }

        .users-list {
          padding: 0;
          overflow: hidden;
        }

        .list-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 1.5rem;
          background: rgba(255,255,255,0.05);
          font-weight: 600;
          color: var(--color-primary);
        }

        .user-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }
        .user-email { font-size: 1.1rem; color: #fff; }
        .user-id { font-size: 0.8rem; color: #666; font-family: monospace; }

        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          text-align: center;
          width: fit-content;
        }
        .status-badge.paid { background: rgba(0, 255, 128, 0.2); color: #00ff80; }
        .status-badge.free { background: rgba(255, 50, 50, 0.2); color: #ff3232; }

        .btn-toggle {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-toggle.grant { background: var(--color-primary); color: #fff; }
        .btn-toggle.revoke { background: rgba(255,255,255,0.1); color: #aaa; }
        .btn-toggle:hover { opacity: 0.9; transform: translateY(-1px); }

      `}</style>
        </div>
    );
}
