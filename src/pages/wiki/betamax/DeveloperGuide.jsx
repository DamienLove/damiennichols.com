import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Flame, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeveloperGuide = () => {
    return (
        <div className="page-container betamax-wiki">
            <div className="wiki-nav-header">
                <Link to="/betamax" className="back-link">
                    <ArrowLeft size={20} /> Return to The Deck
                </Link>
                <h1>Developer Guide</h1>
            </div>

            <div className="content-wrapper wiki-content">

                <section className="wiki-section">
                    <h2>🛠️ Build Environment</h2>

                    <div className="subsection">
                        <h3>Prerequisites</h3>
                        <ul className="req-list">
                            <li><strong>JDK:</strong> Version 17 or higher (Required for Gradle 8.11).</li>
                            <li><strong>Android Studio:</strong> Ladybug or newer recommended.</li>
                            <li><strong>Node.js:</strong> v18+ (for Portal).</li>
                            <li><strong>Firebase CLI:</strong> Authenticated with the project.</li>
                        </ul>
                    </div>

                    <div className="subsection">
                        <h3>Android Build (app/)</h3>
                        <p>The Android project uses Gradle 8.11 and Kotlin 2.0.0.</p>
                        <div className="code-block">
                            <span className="comment"># Clean and Build Debug APK</span><br />
                            ./gradlew clean assembleDebug
                        </div>
                        <p className="path-ref">Artifact Location: <span className="path">app/build/outputs/apk/debug/app-debug.apk</span></p>
                    </div>

                    <div className="subsection">
                        <h3>Portal Build (betamax-portal/)</h3>
                        <p>The web portal is a standard Vite project.</p>
                        <div className="code-block">
                            cd betamax-portal<br />
                            npm install<br />
                            npm run dev   <span className="comment"># Local development server</span><br />
                            npm run build <span className="comment"># Production build to dist/</span>
                        </div>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>🚀 Deployment Protocols</h2>

                    <div className="protocol-card warning">
                        <h3><Flame className="inline-icon" /> The "Scorched Earth" Protocol</h3>
                        <p>A hard reset mechanism. Use with extreme caution. This obliterates all local test data to simulate a fresh install environment.</p>
                    </div>

                    <div className="protocol-card">
                        <h3><Server className="inline-icon" /> Firebase Deployment</h3>
                        <p>Deploy the web portal and security rules:</p>
                        <div className="code-block small">
                            firebase deploy
                        </div>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>⚠️ Troubleshooting</h2>
                    <div className="issue-block">
                        <h4>AAPT / Resource Errors</h4>
                        <p>Common when resource IDs conflict. Run <code>./gradlew clean</code> to resolve ghost resources.</p>
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
        .subsection h3 { color: #ff0055; font-family: 'Courier New', monospace; margin-bottom: 1rem; }
        
        .req-list { padding-left: 1.2rem; }
        .req-list li { margin-bottom: 0.5rem; color: #ccc; }
        .req-list li strong { color: #fff; }

        .code-block {
            background: #000;
            border: 1px solid #333;
            padding: 1rem;
            font-family: 'Courier New', monospace;
            color: #0f0;
            border-radius: 4px;
            font-size: 0.9rem;
            margin: 1rem 0;
            overflow-x: auto;
        }
        
        .code-block.small { display: inline-block; margin: 0.5rem 0 0 0; }
        
        .comment { color: #666; font-style: italic; }
        
        .path-ref { font-size: 0.9rem; color: #aaa; }
        .path { color: #00ffff; font-family: 'Courier New', monospace; }
        
        .protocol-card {
            background: #0a0a15;
            border: 1px solid #333;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
        }
        
        .protocol-card.warning {
            border-color: #ff4444;
            background: rgba(255, 68, 68, 0.05);
        }
        
        .protocol-card h3 { margin-top: 0; color: #fff; display: flex; align-items: center; }
        
        .issue-block {
            background: #151515;
            padding: 1rem;
            border-left: 3px solid #ffb347;
        }
        .issue-block h4 { margin: 0 0 0.5rem 0; color: #ffb347; }
        .issue-block p { margin: 0; color: #ccc; } 

        .inline-icon { margin-right: 0.5rem; }
        
        .protocol-card.warning .inline-icon { color: #ff4444; }
        .protocol-card:not(.warning) .inline-icon { color: #00ffff; }

      `}</style>
        </div>
    );
};

export default DeveloperGuide;
