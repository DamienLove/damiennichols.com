import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, Terminal, Database, Shield, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionAndLore = () => {
    return (
        <div className="page-container betamax-wiki">
            <div className="wiki-nav-header">
                <Link to="/betamax" className="back-link">
                    <ArrowLeft size={20} /> Return to The Deck
                </Link>
                <h1>Vision & Lore</h1>
            </div>

            <div className="content-wrapper wiki-content">
                <section className="wiki-intro">
                    <p className="lead-text">
                        A cyberpunk reality where code is law. Engage with the system via "The Terminal" or the graphical "Deck".
                    </p>
                </section>

                <section className="wiki-section">
                    <h2>The Aesthetic</h2>
                    <p>The UI is built with a "Dark Mode First" philosophy, heavily inspired by:</p>
                    <ul className="feature-list">
                        <li><strong>Synthwave & Cyberpunk:</strong> Neon glows, CRT scanlines, monospaced fonts.</li>
                        <li><strong>Retro-Tech:</strong> Terminal interfaces, cassette tape motifs (hence "Beta Max").</li>
                        <li><strong>High Contrast:</strong> Designed for late-night coding sessions.</li>
                    </ul>
                </section>

                <section className="wiki-section">
                    <h2>Terminology</h2>
                    <p>We don't use standard industry terms. We use <strong>The Language of the Deck</strong>:</p>
                    <div className="term-grid">
                        <div className="term-card">
                            <h3>Architects</h3>
                            <p>Developers who build worlds.</p>
                        </div>
                        <div className="term-card">
                            <h3>Scouts</h3>
                            <p>Testers who explore and verify.</p>
                        </div>
                        <div className="term-card">
                            <h3>Anomalies</h3>
                            <p>Bugs or glitches found in the system.</p>
                        </div>
                        <div className="term-card">
                            <h3>The Deck</h3>
                            <p>The central mission control interface.</p>
                        </div>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>The Economy of Quality</h2>
                    <p>In Beta Max, <strong>Reputation Points (RP)</strong> are everything.</p>
                    <ul className="feature-list">
                        <li><Zap size={16} className="inline-icon" /> <strong>Earn RP</strong> by submitting verified Anomaly Logs.</li>
                        <li><Shield size={16} className="inline-icon" /> <strong>Lose RP</strong> for submitting duplicates, spam, or "features" disguised as bugs.</li>
                        <li><Database size={16} className="inline-icon" /> <strong>Rank Up:</strong> High RP grants access to exclusive "Black Operations" (Private Betas).</li>
                    </ul>
                </section>

                <section className="wiki-section">
                    <h2>Project History (The Pivots)</h2>
                    <p>The road to Beta Max was paved with iteration:</p>
                    <ol className="history-list">
                        <li><strong>"Bug Store":</strong> The MVP. A simple marketplace for bugs. Too transactional.</li>
                        <li><strong>"Vanguard":</strong> Rebranded for "early access". Felt too generic.</li>
                        <li><strong>"Apex":</strong> Introduced the competitive economy. Good, but lacked soul.</li>
                        <li><strong>"Vector":</strong> The shift to "Recon" and "Anomaly" terms.</li>
                        <li><strong>"BETA MAX":</strong> The final form. Fully embraced the retro-future aesthetic and AI-driven interfaces.</li>
                    </ol>
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
          max-width: 800px;
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
        
        .back-link:hover {
            text-decoration: underline;
            text-shadow: 0 0 8px rgba(255, 0, 85, 0.5);
        }

        .wiki-nav-header h1 {
          font-size: 2.5rem;
          color: #00ffff;
          text-shadow: 2px 2px 0px #ff0055;
          font-family: 'Courier New', monospace;
          letter-spacing: -1px;
          margin: 0;
        }

        .wiki-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem 4rem 2rem;
        }

        .wiki-intro .lead-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #a0a0a0;
          border-left: 4px solid #ff0055;
          padding-left: 1rem;
          background: rgba(255, 0, 85, 0.05);
          padding: 1rem;
        }

        .wiki-section {
          margin-bottom: 3rem;
        }

        .wiki-section h2 {
          color: #00ffff;
          border-bottom: 1px solid #333;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Courier New', monospace;
        }

        .feature-list, .history-list {
          padding-left: 1.2rem;
          line-height: 1.6;
        }

        .feature-list li, .history-list li {
            margin-bottom: 0.8rem;
            color: #ccc;
        }
        
        .feature-list li strong, .history-list li strong {
            color: #fff;
        }
        
        .term-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .term-card {
            background: #0a0a15;
            border: 1px solid #333;
            padding: 1rem;
            border-radius: 4px;
        }
        
        .term-card h3 {
            color: #ff0055;
            margin-top: 0;
            font-size: 1.1rem;
            font-family: 'Courier New', monospace;
        }
        
        .term-card p {
            margin: 0.5rem 0 0 0;
            font-size: 0.9rem;
            color: #aaa;
        }
        
        .inline-icon {
            vertical-align: text-bottom;
            margin-right: 0.5rem;
            color: #00ffff;
        }

      `}</style>
        </div>
    );
};

export default VisionAndLore;
