import { motion } from 'framer-motion';
import { CheckCircle, GitBranch, Terminal, ExternalLink, Globe } from 'lucide-react';

const QAVerify = () => {
  return (
    <div className="page-container qa-page">
      <section className="hero-section page-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <motion.h1
            className="hero-title text-scan"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            QA Verify & Track
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Sanity for Developers. Clarity for Testers.
          </motion.p>
          <motion.div
            className="portal-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://test.damiennichols.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-portal-qa"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(18, 214, 34, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={20} /> Open Web Portal
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <div className="content-wrapper">
        <div className="grid-cols-2 section-spacing">
          <div className="highlight-item glass-card">
            <h2>Why?</h2>
            <p className="text-muted">Built out of need, QA Verify & Track streamlines the bug verification process. Stop wasting valuable dev time tracking what's open or manually entering comments.</p>
          </div>
          <div className="highlight-item glass-card">
            <h2>What?</h2>
            <p className="text-muted">A cross-platform QA assistant that manages repos, issues, and PRs via GitHub & Firebase. Keeps verification tied to specific build numbers.</p>
          </div>
        </div>

        <section className="tech-details section-spacing">
          <h3 className="section-title">Key Capabilities</h3>
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
                <h4>GitHub Integration</h4>
                <p>Full two-way sync. View PRs, approve/merge, resolve conflicts, and manage issues directly.</p>
              </div>
            </div>
            <div className="tech-item">
              <Terminal size={24} className="icon-green" />
              <div>
                <h4>AI Analysis</h4>
                <p>Gemini-powered summaries for complex issue threads and bug reports.</p>
              </div>
            </div>
            <div className="tech-item">
              <CheckCircle size={24} className="icon-green" />
              <div>
                <h4>Quick Issue</h4>
                <p>Fast overlay to file issues without leaving your context.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="links-section">
          <a href="https://github.com/DamienLove/QA-Verify-Track/wiki/QA-Verify-and-Track" target="_blank" rel="noopener noreferrer" className="wiki-btn">
            <ExternalLink size={18} /> Visit Project Wiki
          </a>
        </div>
      </div >

      <style>{`
        .qa-page {
          --qa-green: #12d622;
        }

        .text-scan {
          color: var(--qa-green);
        }

        .portal-cta {
          margin-top: 2rem;
        }

        .btn-portal-qa {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          background: linear-gradient(135deg, var(--qa-green), #34e644);
          color: #000;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(18, 214, 34, 0.3);
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-portal-qa:hover {
          color: #000;
        }

        .highlight-item {
          padding: 2rem;
          height: 100%;
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
          text-decoration: none;
        }

        .wiki-btn:hover {
          transform: translateY(-2px);
          background: #34e644;
          color: #000;
        }
      `}</style>
    </div >
  );
};

export default QAVerify;
