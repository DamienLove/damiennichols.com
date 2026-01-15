import { motion } from 'framer-motion';
import { Gamepad2, Users, Terminal, Cpu, BookOpen, Check, ExternalLink, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const BetaMax = () => {
  return (
    <div className="page-container betamax-page">
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
            BETA MAX
          </motion.div>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Tomorrow's Features, Today.
          </motion.p>
          <motion.div
            className="coming-soon-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Clock size={20} />
            <span>Web Portal Coming Soon</span>
          </motion.div>
        </motion.div>
      </section>

      <div className="content-wrapper">
        <div className="intro-card section-spacing">
          <h2><Gamepad2 className="inline-icon" /> QC Gamified</h2>
          <p className="lead-text">
            Beta Max is a retro-futuristic platform that transforms QA into a reputation-based economy.
          </p>
          <p>
            An interface for <strong>Architects</strong> (Developers) to build worlds and <strong>Scouts</strong> (Testers) to explore them.
            Squash Anomalies, earn badges, and climb the leaderboard.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid-cols-2 section-spacing">

          {/* Key Concepts */}
          <div className="feature-card">
            <Users size={32} className="card-icon" />
            <h3>Key Concepts</h3>
            <ul className="feature-list">
              <li><Check size={16} /> <strong>Recruit:</strong> Join as a Scout to hunt bugs or an Architect to manage builds.</li>
              <li><Check size={16} /> <strong>The Deck:</strong> Your central mission control hub.</li>
              <li><Check size={16} /> <strong>Reputation:</strong> Earn prestige for every verified Anomaly.</li>
            </ul>
          </div>

          {/* System Architecture */}
          <div className="feature-card">
            <Cpu size={32} className="card-icon" />
            <h3>System Architecture</h3>
            <ul className="feature-list">
              <li><Check size={16} /> <strong>Query Core:</strong> High-performance data handling.</li>
              <li><Check size={16} /> <strong>Stack:</strong> Native Android & React Portal.</li>
              <li><Check size={16} /> <strong>Backend:</strong> Firebase Realtime Database & Firestore.</li>
            </ul>
          </div>

          {/* Vision & Lore */}
          <div className="feature-card">
            <BookOpen size={32} className="card-icon" />
            <h3>Vision & Lore</h3>
            <p>
              A cyberpunk reality where code is law. Engage with the system via "The Terminal" or the graphical "Deck".
              Execute the "Scorched Earth" protocol to reset your environment.
            </p>
          </div>

          {/* Terminal */}
          <div className="feature-card">
            <Terminal size={32} className="card-icon" />
            <h3>The Terminal</h3>
            <p>
              For power users who prefer the command line. Execute queries, manage builds, and override protocols directly from the CLI.
            </p>
          </div>

        </div>

        {/* Wiki Links */}
        <div className="wiki-links">
          <h3><BookOpen className="inline-icon" /> Documentation & Lore</h3>
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
          --retro-primary: #ff0055;
          --retro-secondary: #00ffff;
          --retro-bg: #050510;
        }

        .retro-hero {
          background: linear-gradient(45deg, #2b001f, #001f2b);
          border-bottom: 2px solid var(--retro-secondary);
          height: 50vh;
        }
        
        .retro-hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: 
                linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }

        .retro-logo {
          font-family: 'Courier New', monospace;
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: -2px;
          text-shadow: 2px 2px 0px var(--retro-primary), -2px -2px 0px var(--retro-secondary);
          color: white;
          margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
           .retro-logo { font-size: 3rem; }
        }

        .coming-soon-badge {
          margin-top: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 0, 85, 0.2);
          border: 2px solid var(--retro-primary);
          border-radius: 25px;
          color: var(--retro-primary);
          font-weight: 600;
          font-size: 1rem;
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 0, 85, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 0, 85, 0.8), 0 0 30px rgba(255, 0, 85, 0.4);
          }
        }
        
        .intro-card {
            background: rgba(0,0,0,0.6);
            border: 1px solid var(--retro-primary);
            padding: 2rem;
            border-radius: 8px;
        }
        
        .intro-card h2 { color: var(--retro-secondary); margin-bottom: 1rem; }
        .intro-card p { font-size: 1.1rem; color: #ccc; }

        .feature-card {
          background: #0a0a12;
          border: 1px solid #333;
          padding: 2rem;
          border-radius: 12px;
          transition: transform 0.2s;
          height: 100%;
        }
        
        .feature-card:hover {
            border-color: var(--retro-secondary);
            transform: translateY(-5px);
        }

        .card-icon {
          color: var(--retro-primary);
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          color: var(--retro-secondary);
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
          margin-bottom: 0.8rem;
          color: #aaa;
        }
        
        .feature-list li strong { color: #fff; }

        .wiki-links {
             background: rgba(0, 255, 255, 0.05);
             padding: 2rem;
             border-radius: 12px;
             text-align: center;
        }
        
        .wiki-links h3 { color: var(--retro-secondary); margin-bottom: 1.5rem; }

        .link-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .wiki-link-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: rgba(0,0,0,0.5);
          border: 1px solid var(--retro-secondary);
          color: var(--retro-secondary);
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .wiki-link-btn:hover {
          background: var(--retro-secondary);
          color: #000;
        }

        .inline-icon { display: inline; vertical-align: bottom; margin-right: 0.5rem; }
      `}</style>
    </div>
  );
};

export default BetaMax;
