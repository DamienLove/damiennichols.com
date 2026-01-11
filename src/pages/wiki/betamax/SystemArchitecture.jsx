import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Smartphone, Globe, Shield, Activity, ArrowLeft, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const SystemArchitecture = () => {
    return (
        <div className="page-container betamax-wiki">
            <div className="wiki-nav-header">
                <Link to="/betamax" className="back-link">
                    <ArrowLeft size={20} /> Return to The Deck
                </Link>
                <h1>System Architecture</h1>
            </div>

            <div className="content-wrapper wiki-content">

                <section className="wiki-section">
                    <h2>🏗 Tech Stack</h2>

                    <div className="stack-grid">
                        <div className="stack-card">
                            <h3><Smartphone className="inline-icon" size={20} /> Android Application (app/)</h3>
                            <p className="description">The primary interface for Scouts performing Recon.</p>
                            <ul className="stack-list">
                                <li><strong>Language:</strong> Kotlin 2.0.0</li>
                                <li><strong>UI Framework:</strong> Jetpack Compose</li>
                                <li><strong>Architecture:</strong> MVVM (Model-View-ViewModel)</li>
                                <li><strong>Local Data:</strong> Room Database (SQLite abstraction)</li>
                            </ul>
                            <div className="feature-highlight">
                                <strong>Key Features:</strong>
                                <ul>
                                    <li>Device Recon: Scans for beta apps.</li>
                                    <li>Terminal Interface: CLI for power users.</li>
                                    <li>Visual Dashboard: GUI for missions.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="stack-card">
                            <h3><Globe className="inline-icon" size={20} /> Web Portal (betamax-portal/)</h3>
                            <p className="description">Command center for Architects and Scout onboarding.</p>
                            <ul className="stack-list">
                                <li><strong>Framework:</strong> React 18 (via Vite)</li>
                                <li><strong>Styling:</strong> Tailwind CSS v4 + Lucide Icons</li>
                                <li><strong>State:</strong> React Context (AuthContext)</li>
                                <li><strong>Hosting:</strong> Firebase Hosting</li>
                            </ul>
                        </div>

                        <div className="stack-card">
                            <h3><Server className="inline-icon" size={20} /> Backend & Infrastructure</h3>
                            <ul className="stack-list">
                                <li><strong>Platform:</strong> Google Firebase</li>
                                <li><strong>Auth:</strong> Firebase Authentication (Email/Pass + Google)</li>
                                <li><strong>Database:</strong> Cloud Firestore</li>
                            </ul>
                            <div className="feature-highlight">
                                <ul>
                                    <li><strong>Security:</strong> Role-based rules (Architects vs. Scouts).</li>
                                    <li><strong>Data Model:</strong> Missions, Anomalies, Users, Leaderboards.</li>
                                    <li><strong>AI Core:</strong> Integrated "Query Core" (Natural Language to BMQL).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>🧩 Key Components</h2>

                    <div className="component-block">
                        <h3>The "Query Core"</h3>
                        <p>An intelligent translation layer that converts natural language requests (e.g., "Show me all critical bugs in the last 24 hours") into structured database queries (BMQL).</p>
                    </div>

                    <div className="component-block">
                        <h3>The "Deck" Interface</h3>
                        <p>The unified visual language system that spans both web and mobile, ensuring a consistent cyberpunk aesthetic and user experience.</p>
                    </div>
                </section>

            </div>

            <style>{`
        .betamax-wiki {
          background-color: #050510;
          color: #e0e0e0;
          min-height: 100vh;
          padding-top: 2rem;
          font-family: 'Inter', sans-serif;
        }

        .wiki-nav-header {
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid #333;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff0055;
          text-decoration: none;
          margin-bottom: 1rem;
          font-family: 'Courier New', monospace;
          font-weight: bold;
        }
        
        .back-link:hover { text-decoration: underline; text-shadow: 0 0 8px rgba(255, 0, 85, 0.5); }

        .wiki-nav-header h1 {
          font-size: 2.5rem;
          color: #00ffff;
          text-shadow: 2px 2px 0px #ff0055;
          font-family: 'Courier New', monospace;
          letter-spacing: -1px;
          margin: 0;
        }

        .wiki-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem 4rem 2rem;
        }

        .wiki-section { margin-bottom: 4rem; }

        .wiki-section h2 {
          color: #00ffff;
          border-bottom: 1px solid #333;
          padding-bottom: 0.5rem;
          margin-bottom: 2rem;
          font-family: 'Courier New', monospace;
        }
        
        .stack-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .stack-card {
            background: #0a0a15;
            border: 1px solid #333;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .stack-card h3 {
            color: #ff0055;
            margin-top: 0;
            display: flex;
            align-items: center;
            font-family: 'Courier New', monospace;
        }
        
        .description { color: #aaa; font-style: italic; margin-bottom: 1rem; }
        
        .stack-list { padding-left: 1.2rem; margin-bottom: 1.5rem; }
        .stack-list li { margin-bottom: 0.5rem; color: #ccc; }
        .stack-list li strong { color: #fff; }
        
        .feature-highlight {
            background: rgba(0, 255, 255, 0.05);
            border-left: 3px solid #00ffff;
            padding: 1rem;
            font-size: 0.9rem;
        }
        
        .feature-highlight ul { padding-left: 1.2rem; margin: 0.5rem 0 0 0; }
        .feature-highlight li { color: #b0e0e6; margin-bottom: 0.3rem; }
        
        .component-block {
            background: #0f0f1a;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            border-left: 4px solid #ff0055;
        }
        
        .component-block h3 { color: #fff; margin-top: 0; font-family: 'Courier New', monospace; }
        .component-block p { color: #bbb; margin: 0; line-height: 1.6; }
        
        .inline-icon { margin-right: 0.75rem; color: #00ffff; }

      `}</style>
        </div>
    );
};

export default SystemArchitecture;
