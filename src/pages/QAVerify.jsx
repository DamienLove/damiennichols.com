import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, GitBranch, Terminal, ExternalLink } from 'lucide-react';

const QAVerify = () => {
    return (
        <div className="page-container qa-page">
            <section className="page-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-content"
                >
                    <h1>QA Verify & Track</h1>
                    <p className="subtitle">Sanity for Developers. Clarity for Testers.</p>
                </motion.div>
            </section>

            <div className="content-wrapper">
                <div className="highlight-grid">
                    <div className="highlight-item">
                        <h2>Why?</h2>
                        <p>Built out of need, QA Verify & Track streamlines the bug verification process. Stop wasting valuable dev time tracking what's open or manually entering comments.</p>
                    </div>
                    <div className="highlight-item">
                        <h2>What?</h2>
                        <p>A cross-platform QA assistant that manages repos, issues, and PRs via GitHub & Firebase. Keeps verification tied to specific build numbers.</p>
                    </div>
                </div>

                <section className="tech-details">
                    <h3>Key Capabilities</h3>
                    <div className="tech-list">
                        <div className="tech-item">
                            <CheckCircle size={24} className="icon-green" />
                            <div>
                                <h4>Build-Aware Filtering</h4>
                                <p>Issues are automatically hidden if they are tagged as closed in a previous build. Focus only on what's relevant to the current version.</p>
                            </div>
                        </div>
                        <div className="tech-item">
                            <GitBranch size={24} className="icon-green" />
                            <div>
                                <h4>PR Workflow</h4>
                                <p>View, approve, close, and merge Pull Requests directly. Resolve conflicts by updating branches with a click.</p>
                            </div>
                        </div>
                        <div className="tech-item">
                            <Terminal size={24} className="icon-green" />
                            <div>
                                <h4>GitHub Integration</h4>
                                <p>Manage multiple repos, store PATs securely, and perform quick actions like "Quick Issue" filing.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="links-section">
                    <a href="https://github.com/DamienLove/QA-Verify-Track/wiki/QA-Verify-and-Track" target="_blank" rel="noopener noreferrer" className="wiki-btn">
                        <ExternalLink size={18} /> Visit Project Wiki
                    </a>
                </div>
            </div>

            <style>{`
        .qa-page {
          --qa-green: #12d622;
        }

        .page-hero h1 {
          color: var(--qa-green);
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .highlight-item {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 2rem;
          border-radius: 12px;
        }
        
        .highlight-item h2 {
          color: var(--qa-green);
          margin-bottom: 1rem;
        }

        .tech-details {
          background: #111;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #333;
        }

        .tech-details h3 {
          margin-bottom: 2rem;
          text-align: center;
        }

        .tech-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tech-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .icon-green {
          color: var(--qa-green);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .tech-item h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }

        .tech-item p {
          margin: 0;
          color: var(--color-text-muted);
        }

        .links-section {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .wiki-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--qa-green);
          color: #000;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          transition: transform 0.2s;
        }

        .wiki-btn:hover {
          transform: translateY(-2px);
          background: #34e644;
          color: #000;
        }

        @media (max-width: 768px) {
          .highlight-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default QAVerify;
