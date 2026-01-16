import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Shield, Zap, ArrowLeft, Users, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacebookSearchWiki = () => {
    return (
        <div className="page-container fb-wiki">
            <div className="wiki-nav-header">
                <Link to="/facebook-search" className="back-link">
                    <ArrowLeft size={20} /> Back to Facebook Search
                </Link>
                <h1>Facebook Search Documentation</h1>
            </div>

            <div className="content-wrapper wiki-content">
                <section className="wiki-intro">
                    <p className="lead">
                        <strong>Facebook Search</strong> enhances your Facebook experience with powerful search capabilities, advanced filtering, and privacy tools. Built with a modern Material 3 design for Android.
                    </p>
                </section>

                <section className="wiki-section">
                    <h2>Core Features</h2>
                    <ul className="feature-list">
                        <li><strong>Friend Request Filtering:</strong> Filter by mutual friends count (min/max).</li>
                        <li><strong>Location-Based Filtering:</strong> Narrow down searches by City, Country, or Town.</li>
                        <li><strong>Message Status Filtering:</strong> View requests by Pending, Blocked, Approved, or Read status.</li>
                        <li><strong>Engagement Filter:</strong> Find requests from people who commented on mutual friends' posts.</li>
                        <li><strong>Verified Accounts:</strong> Filter specifically for verified profiles.</li>
                        <li><strong>Favorites System:</strong> Prioritize specific requests.</li>
                        <li><strong>Global Search:</strong> Search across all request data instantly.</li>
                    </ul>
                </section>

                <section className="wiki-section">
                    <h2>Technical Architecture</h2>
                    <p>The app is built using modern Android development practices:</p>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <h3><Smartphone className="inline-icon" size={18} /> Front-End</h3>
                            <ul>
                                <li>Jetpack Compose (Material 3)</li>
                                <li>MVVM Architecture</li>
                                <li>Navigation Component</li>
                            </ul>
                        </div>
                        <div className="tech-card">
                            <h3><Zap className="inline-icon" size={18} /> Backend & Data</h3>
                            <ul>
                                <li>Room Database (CRUD)</li>
                                <li>DataStore (Preferences)</li>
                                <li>Flow & Coroutines</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Planned Extensions</h2>
                    <ul className="feature-list">
                        <li><strong>Ad Manager Pro:</strong> Cross-platform ad campaign management.</li>
                        <li><strong>Demographics Analytics:</strong> Audience insights and breakdowns.</li>
                        <li><strong>Business Insights:</strong> Performance metrics and competitor tracking.</li>
                        <li><strong>Privacy Guard:</strong> Enhanced privacy controls.</li>
                    </ul>
                </section>

                <section className="wiki-section">
                    <h2>Installation</h2>
                    <div className="code-block">
                        # Development Build
                        ./gradlew assembleDebug
                    </div>
                </section>

            </div>

            <style>{`
        .fb-wiki {
          background-color: #0d1117;
          color: #e6edf3;
          min-height: 100vh;
          padding-top: 2rem;
          font-family: 'Inter', sans-serif;
        }

        .wiki-nav-header {
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem 2rem;
          margin-bottom: 2rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #3b82f6;
          text-decoration: none;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .back-link:hover { text-decoration: underline; }

        .wiki-nav-header h1 {
          font-size: 2.5rem;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .wiki-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem 4rem 2rem;
        }

        .wiki-intro .lead {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #8b949e;
          border-left: 4px solid #3b82f6;
          padding-left: 1rem;
          margin-bottom: 2rem;
        }

        .wiki-section { margin-bottom: 3rem; }

        .wiki-section h2 {
          color: #fff;
          border-bottom: 1px solid #30363d;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .wiki-section h3 { color: #3b82f6; margin-top: 0; display: flex; align-items: center; gap: 0.5rem; }

        .feature-list {
          padding-left: 1.2rem;
          line-height: 1.6;
        }

        .feature-list li {
          margin-bottom: 0.8rem;
          color: #c9d1d9;
        }
        
        .feature-list li strong { color: #fff; }

        .tech-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-top: 1rem;
        }
        
        .tech-card {
            background: #161b22;
            border: 1px solid #30363d;
            padding: 1.5rem;
            border-radius: 8px;
        }
        
        .tech-card ul { padding-left: 1.2rem; margin: 0.5rem 0 0 0; }
        .tech-card li { margin-bottom: 0.4rem; color: #8b949e; }

        .code-block {
          background: #161b22;
          border: 1px solid #30363d;
          padding: 1rem;
          font-family: 'Courier New', monospace;
          color: #58a6ff;
          border-radius: 4px;
          margin: 1rem 0;
          overflow-x: auto;
        }
        
        @media (max-width: 600px) {
            .tech-grid { grid-template-columns: 1fr; }
        }

      `}</style>
        </div>
    );
};

export default FacebookSearchWiki;
