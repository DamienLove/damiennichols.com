import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, GitBranch, Terminal, ExternalLink, ArrowLeft, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const QAVerifyWiki = () => {
    return (
        <div className="page-container qa-wiki">
            <div className="wiki-nav-header">
                <Link to="/qa-verify" className="back-link">
                    <ArrowLeft size={20} /> Back to QA Verify
                </Link>
                <h1>QA Verify & Track Wiki</h1>
            </div>

            <div className="content-wrapper wiki-content">
                <section className="wiki-intro">
                    <p className="lead">
                        <strong>QA Verify & Track</strong> is a cross‑platform QA assistant that lets testers manage repos, issues, pull requests, and AI-assisted bug analysis from web and Android. It keeps verification tied to build numbers and filters out issues already tagged for a given build via status comments.
                    </p>
                </section>

                <section className="wiki-section">
                    <h2>Key Features</h2>
                    <ul className="feature-list">
                        <li><strong>Auth & Sync:</strong> Firebase Auth (email/password, Google) with per-user Firestore <code>user_settings/&#x7B;uid&#x7D;</code> storage.</li>
                        <li><strong>Repo Configuration:</strong> Add/edit/delete GitHub repos, store PAT per repo, manage apps/build numbers.</li>
                        <li><strong>Build-Aware Filtering:</strong> Issues are hidden when the latest status comment matches or exceeds the current build (e.g., “closed v126”).</li>
                        <li><strong>PR Workflow:</strong> View PRs, approve/merge, close, resolve conflicts (update branch), undo close.</li>
                        <li><strong>AI Analysis:</strong> Gemini summaries per issue (requires API key).</li>
                        <li><strong>Quick Issue:</strong> Fast overlay to file issues to the selected repo.</li>
                        <li><strong>Mobile-Friendly UI:</strong> Dark-first, compact cards, bottom nav for Projects/Config.</li>
                    </ul>
                </section>

                <section className="wiki-section">
                    <h2>Environment & Setup</h2>
                    <div className="code-block">
                        npm install<br />
                        npm run dev -- --host --port 4173
                    </div>
                    <p>Open <code>http://localhost:4173</code> to view locally.</p>

                    <h3>Environment Variables (.env.local)</h3>
                    <div className="code-block">
                        VITE_FIREBASE_API_KEY=...<br />
                        VITE_FIREBASE_AUTH_DOMAIN=...<br />
                        VITE_FIREBASE_PROJECT_ID=...<br />
                        # Optional for AI<br />
                        VITE_GEMINI_API_KEY=your_gemini_key
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Build-Aware Issue Filtering</h2>
                    <p>
                        The sync process inspects the latest status comment matching the pattern <code>open|closed|blocked v&#x7B;num&#x7D;</code>.
                        If the comment build number is ≥ target build, the issue is hidden for that run.
                    </p>
                    <ul>
                        <li><strong>Sync Button:</strong> Uses entered build number unchanged.</li>
                        <li><strong>Store Button:</strong> Auto-populates or bumps the build number before sync.</li>
                    </ul>
                </section>

                <section className="wiki-section">
                    <h2>Deployment</h2>
                    <div className="subsection">
                        <h3>Web</h3>
                        <div className="code-block">
                            npm run build<br />
                            firebase deploy --only hosting
                        </div>
                    </div>
                    <div className="subsection">
                        <h3>Android</h3>
                        <p>Build debug APK at <code>androidApp/app/build/outputs/apk/debug/app-debug.apk</code></p>
                        <div className="code-block">
                            cd androidApp && ./gradlew assembleDebug
                        </div>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Troubleshooting</h2>
                    <ul className="issue-list">
                        <li><strong>Blank page / AI crash:</strong> Ensure <code>VITE_GEMINI_API_KEY</code> is set or runs without AI.</li>
                        <li><strong>“Insufficient privileges” on Save:</strong> User must be signed in; Firestore rules scoped to uid.</li>
                        <li><strong>Sync shows old issues:</strong> Confirm status comments format “open v123”, “closed v123”, etc.</li>
                    </ul>
                </section>
            </div>

            <style>{`
        .qa-wiki {
          background-color: #050505;
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
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #12d622;
          text-decoration: none;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .back-link:hover { text-decoration: underline; }

        .wiki-nav-header h1 {
          font-size: 2.5rem;
          background: linear-gradient(to right, #12d622, #34e644);
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
          color: #ccc;
          border-left: 4px solid #12d622;
          padding-left: 1rem;
          margin-bottom: 2rem;
        }

        .wiki-section { margin-bottom: 3rem; }

        .wiki-section h2 {
          color: #fff;
          border-bottom: 1px solid #333;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .wiki-section h3 { color: #12d622; margin-top: 1.5rem; }

        .feature-list, .issue-list {
          padding-left: 1.2rem;
          line-height: 1.6;
        }

        .feature-list li, .issue-list li {
          margin-bottom: 0.8rem;
          color: #bbb;
        }
        
        .feature-list li strong, .issue-list li strong { color: #fff; }

        .code-block {
          background: #111;
          border: 1px solid #333;
          padding: 1rem;
          font-family: 'Courier New', monospace;
          color: #12d622;
          border-radius: 4px;
          margin: 1rem 0;
          overflow-x: auto;
        }

      `}</style>
        </div>
    );
};

export default QAVerifyWiki;
