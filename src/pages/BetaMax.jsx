import { motion } from 'framer-motion';
import { Gamepad2, Users, Terminal, Cpu, BookOpen, Check, ExternalLink, Smartphone, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const BetaMax = () => {
  return (
    <div className="page-container betamax-page">
      <div className="cyber-grid"></div>

      <section className="hero-section retro-hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hero-content"
        >
          <motion.div
            className="retro-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            BETA_MAX
            <span className="blinking-cursor">_</span>
          </motion.div>
          <motion.p
            className="hero-subtitle mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Gamified QA for the Cyberpunk Era.
          </motion.p>

          <motion.div
            className="cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://beta-max-core-portal-2026.firebaseapp.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn primary-cyber"
            >
              <Globe size={20} />
              Launch Web Portal
            </a>
            <button className="cyber-btn secondary-cyber disabled-btn" title="Coming Soon">
              <Smartphone size={20} />
              Download APK (Soon)
            </button>
          </motion.div>
        </motion.div>
      </section>

      <div className="content-wrapper relative z-10">
        <div className="section-spacing">
          <div className="intro-card glass-panel">
            <div className="card-header">
              <Gamepad2 className="text-neon-pink" size={32} />
              <h2>QC Gamified</h2>
            </div>
            <p className="lead-text">
              Transforming Quality Assurance into a competitive sport. Beta Max is the bridge between
              <strong> Architects</strong> (Developers) and <strong>Scouts</strong> (Testers).
            </p>
            <p className="sub-text">
              Hunt bugs, earn reputation, and dominate the leaderboards in a high-fidelity cyberpunk environment.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid-cols-2 section-spacing">

          {/* Key Concepts */}
          <div className="feature-card glass-panel">
            <Users size={32} className="card-icon text-neon-blue" />
            <h3>Key Concepts</h3>
            <ul className="feature-list">
              <li><Check size={16} className="text-neon-pink" /> <span><strong>Recruit:</strong> Join the elite force of bug hunters.</span></li>
              <li><Check size={16} className="text-neon-pink" /> <span><strong>The Deck:</strong> Mission control for your QA operations.</span></li>
              <li><Check size={16} className="text-neon-pink" /> <span><strong>Reputation:</strong> Your social currency in the dev world.</span></li>
            </ul>
          </div>

          {/* System Architecture */}
          <div className="feature-card glass-panel">
            <Cpu size={32} className="card-icon text-neon-purple" />
            <h3>System Architecture</h3>
            <ul className="feature-list">
              <li><Check size={16} className="text-neon-blue" /> <span><strong>Query Core:</strong> Real-time anomaly detection.</span></li>
              <li><Check size={16} className="text-neon-blue" /> <span><strong>Stack:</strong> React Web + Native Android Client.</span></li>
              <li><Check size={16} className="text-neon-blue" /> <span><strong>Backend:</strong> Firebase Distributed Database.</span></li>
            </ul>
          </div>

          {/* Vision & Lore */}
          <div className="feature-card glass-panel">
            <BookOpen size={32} className="card-icon text-neon-green" />
            <h3>Vision & Lore</h3>
            <p>
              In a reality governed by code, you are the firewall. Use "The Terminal" or the graphical "Deck" to execute
              the "Scorched Earth" protocol to reset your environment.
            </p>
          </div>

          {/* Terminal */}
          <div className="feature-card glass-panel">
            <Terminal size={32} className="card-icon text-neon-yellow" />
            <h3>The Terminal</h3>
            <p>
              Direct command-line access. Bypass the GUI, execute raw queries, and manage builds with
              unfiltered system access.
            </p>
          </div>

        </div>

        {/* Wiki Links */}
        <div className="wiki-links glass-panel glow-border">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="text-neon-pink" />
            <h3>Documentation & Lore</h3>
          </div>
          <div className="link-grid">
            <Link to="/betamax/wiki/vision" className="wiki-link-btn">
              <ExternalLink size={18} /> Vision & Lore
            </Link>
            <Link to="/betamax/wiki/architecture" className="wiki-link-btn">
              <ExternalLink size={18} /> Architecture
            </Link>
            <Link to="/betamax/wiki/manual" className="wiki-link-btn">
              <ExternalLink size={18} /> User Manual
            </Link>
            <Link to="/betamax/wiki/dev-guide" className="wiki-link-btn">
              <ExternalLink size={18} /> Dev Guide
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .betamax-page {
          --neon-pink: #ff0055;
          --neon-blue: #00f3ff;
          --neon-purple: #bd00ff;
          --neon-green: #00ff66;
          --neon-yellow: #ffee00;
          --bg-dark: #050510;
        }

        .text-neon-pink { color: var(--neon-pink); }
        .text-neon-blue { color: var(--neon-blue); }
        .text-neon-purple { color: var(--neon-purple); }
        .text-neon-green { color: var(--neon-green); }
        .text-neon-yellow { color: var(--neon-yellow); }
        
        .relative { position: relative; }
        .z-10 { z-index: 10; }

        .cyber-grid {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100vh;
          background: 
            linear-gradient(rgba(0, 10, 30, 0.9), rgba(0, 10, 30, 0.95)),
            repeating-linear-gradient(0deg, transparent 0, transparent 19px, rgba(0, 243, 255, 0.03) 20px),
            repeating-linear-gradient(90deg, transparent 0, transparent 19px, rgba(0, 243, 255, 0.03) 20px);
          z-index: 0;
          pointer-events: none;
        }

        .retro-hero {
          position: relative;
          background: radial-gradient(circle at center, #1a0b1a 0%, #000 100%);
          border-bottom: 1px solid rgba(0, 243, 255, 0.3);
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .retro-hero::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(to top, rgba(0,0,0,1), transparent);
        }

        .retro-logo {
          font-family: 'Courier New', monospace;
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: -4px;
          text-shadow: 
            3px 3px 0px var(--neon-pink), 
            -3px -3px 0px var(--neon-blue);
          color: white;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }
        
        .blinking-cursor {
            animation: blink 1s step-end infinite;
        }
        
        @keyframes blink { 50% { opacity: 0; } }
        
        @media (max-width: 768px) {
           .retro-logo { font-size: 3rem; }
           .retro-hero { height: 50vh; }
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #ccc;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 2.5rem;
          text-shadow: 0 0 10px rgba(0,0,0,0.8);
        }
        .mb-8 { margin-bottom: 2rem; }

        .cta-group {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cyber-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-family: 'Courier New', monospace;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .primary-cyber {
          background: rgba(255, 0, 85, 0.1);
          border: 1px solid var(--neon-pink);
          color: var(--neon-pink);
          box-shadow: 0 0 15px rgba(255, 0, 85, 0.2);
        }

        .primary-cyber:hover {
          background: var(--neon-pink);
          color: #000;
          box-shadow: 0 0 30px rgba(255, 0, 85, 0.6);
          transform: translateY(-2px);
        }

        .secondary-cyber {
          background: rgba(0, 243, 255, 0.1);
          border: 1px solid var(--neon-blue);
          color: var(--neon-blue);
        }

        .secondary-cyber:hover:not(.disabled-btn) {
          background: var(--neon-blue);
          color: #000;
          box-shadow: 0 0 30px rgba(0, 243, 255, 0.6);
        }
        
        .disabled-btn {
            opacity: 0.6;
            cursor: not-allowed;
            filter: grayscale(0.5);
        }

        /* Glass Panel Styling */
        .glass-panel {
            background: rgba(10, 10, 20, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        }
        
        .glass-panel:hover {
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
            transform: translateY(-5px);
        }

        .glow-border {
            border: 1px solid rgba(0, 243, 255, 0.2);
            position: relative;
        }
        
        .card-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1rem;
        }
        
        .intro-card h2, .feature-card h3 {
            margin: 0;
            color: #fff;
            font-weight: 300;
            letter-spacing: 1px;
        }
        
        .lead-text {
            font-size: 1.25rem;
            color: #e0e0e0;
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .sub-text {
            color: #a0a0a0;
        }

        .feature-card { height: 100%; display: flex; flex-direction: column; }
        
        .feature-list li {
            margin-bottom: 0.8rem;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: #ccc;
        }

        .wiki-links {
             text-align: center;
             background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0, 243, 255, 0.05) 100%);
        }

        .link-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }

        .wiki-link-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: rgba(0,0,0,0.5);
          border: 1px solid #333;
          color: #00f3ff;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .wiki-link-btn:hover {
          background: rgba(0, 243, 255, 0.1);
          border-color: #00f3ff;
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.15);
        }
        
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .gap-3 { gap: 0.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
      `}</style>
    </div>
  );
};

export default BetaMax;
