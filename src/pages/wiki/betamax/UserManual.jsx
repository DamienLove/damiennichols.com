import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Shield, AlertTriangle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserManual = () => {
    return (
        <div className="page-container betamax-wiki">
            <div className="wiki-nav-header">
                <Link to="/betamax" className="back-link">
                    <ArrowLeft size={20} /> Return to The Deck
                </Link>
                <h1>User Manual</h1>
            </div>

            <div className="content-wrapper wiki-content">

                <section className="wiki-section">
                    <h2>🕵️ For Scouts (Testers)</h2>

                    <div className="subsection">
                        <h3>Getting Started</h3>
                        <ol className="step-list">
                            <li><strong>Initialize:</strong> Log in via the Portal or App.</li>
                            <li><strong>Take the Test:</strong> Complete the "Scout Qualification" exam to prove your technical aptitude.</li>
                            <li><strong>Join a Mission:</strong> Browse the "Available Betas" list.</li>
                        </ol>
                    </div>

                    <div className="subsection">
                        <h3>Operation Modes</h3>
                        <p>You can interact with Beta Max in two ways:</p>

                        <div className="mode-grid">
                            <div className="mode-card">
                                <h4><Layout className="inline-icon" size={18} /> 1. Visual Mode (GUI)</h4>
                                <p>The standard graphical interface.</p>
                                <ul>
                                    <li><strong>Dashboard:</strong> View your current rank, RP (Reputation Points), and active missions.</li>
                                    <li><strong>Mission Card:</strong> Tap to view details, download links, and known anomalies.</li>
                                </ul>
                            </div>

                            <div className="mode-card">
                                <h4><Terminal className="inline-icon" size={18} /> 2. Terminal Mode (CLI)</h4>
                                <p>For elite users. Access via "Terminal" tab.</p>
                                <div className="code-block">
                                    <span className="prompt">{'>'}</span> help<br />
                                    <span className="prompt">{'>'}</span> list missions<br />
                                    <span className="prompt">{'>'}</span> scan<br />
                                    <span className="prompt">{'>'}</span> gui
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>Submitting an Anomaly Log</h3>
                        <p>When you find a bug:</p>
                        <ol className="step-list">
                            <li>Navigate to the active Mission.</li>
                            <li>Select "Log Anomaly".</li>
                            <li><strong>Severity:</strong> Choose carefully (Cosmetic, Minor, Major, Critical).</li>
                            <li><strong>Description:</strong> Be precise. Vague reports earn zero RP.</li>
                            <li><strong>Evidence:</strong> Attach screenshots or logs (if supported).</li>
                        </ol>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>👷 For Architects (Developers)</h2>
                    <div className="subsection">
                        <h3>Registering a Mission</h3>
                        <p>Architects create "Missions" (Beta Tests) via the Web Portal. You define:</p>
                        <ul>
                            <li>Mission Objectives</li>
                            <li>Target Device Profiles</li>
                            <li>Reward Pool (RP)</li>
                        </ul>
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
          max-width: 800px;
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
        
        .subsection { margin-bottom: 2.5rem; }
        
        .subsection h3 { color: #ff0055; font-family: 'Courier New', monospace; }

        .step-list { padding-left: 1.2rem; line-height: 1.7; }
        .step-list li { margin-bottom: 0.5rem; color: #ccc; }
        .step-list li strong { color: #fff; }
        
        .mode-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .mode-card {
            background: #0a0a15;
            border: 1px solid #333;
            padding: 1.5rem;
            border-radius: 8px;
        }
        
        .mode-card h4 { margin-top: 0; color: #fff; display: flex; align-items: center; }
        
        .code-block {
            background: #000;
            border: 1px solid #333;
            padding: 1rem;
            font-family: 'Courier New', monospace;
            color: #0f0;
            border-radius: 4px;
            font-size: 0.9rem;
        }
        
        .prompt { color: #ff0055; margin-right: 0.5rem; }
        
        .inline-icon { margin-right: 0.5rem; color: #00ffff; }

      `}</style>
        </div>
    );
};

export default UserManual;
