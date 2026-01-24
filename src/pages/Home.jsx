import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, BookOpen, Search, Shield, Gamepad2, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Damien Nichols
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              fontWeight: 600
            }}
          >
            Software Engineer. Author. Creator.
          </motion.p>
          <motion.p
            className="hero-description text-muted"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Building innovative apps that solve real problems and crafting stories that challenge reality.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/pulselink" className="btn btn-primary">Explore Apps <ArrowRight size={18} /></Link>
            <Link to="/books" className="btn btn-secondary">Read Books <BookOpen size={18} /></Link>
          </motion.div>
        </div>

        {/* Abstract Background Elements */}
        <div className="hero-bg-glow"></div>
      </section>

      {/* Highlights Section */}
      <section className="highlights section-spacing">
        <div className="content-wrapper grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/pulselink" className="highlight-card safety glass-card">
              <Shield size={40} className="icon" />
              <h3>PulseLink Suite</h3>
              <p>Voice-activated safety companion with discreet emergency alerts and progressive streaming ringtones.</p>
              <span className="card-tag">Safety & Utility</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/betamax" className="highlight-card retro glass-card">
              <Smartphone size={40} className="icon" />
              <h3>Beta Max</h3>
              <p>Tomorrow's Features, Today. Gamified QA platform where bug hunting meets cyberpunk aesthetics.</p>
              <span className="card-tag">Retro-Futuristic</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/qa-verify" className="highlight-card dev glass-card">
              <Search size={40} className="icon" />
              <h3>QA Verify & Track</h3>
              <p>Build-aware bug tracking that saves dev time. GitHub integration with AI-powered analysis.</p>
              <span className="card-tag">Developer Tool</span>
            </Link>
          </motion.div>

          {/* Social Search - wrapped in motion for consistency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/facebook-search" className="highlight-card social glass-card">
              <Search size={40} className="icon" />
              <h3>Facebook Search</h3>
              <p>Advanced search tools for Facebook discovery. Find people, content, and trends with powerful filters.</p>
              <span className="card-tag">Social Search</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/books" className="highlight-card books glass-card">
              <BookOpen size={40} className="icon" />
              <h3>Universe Connected</h3>
              <p>Mind-bending sci-fi saga. Reality-bending fiction across interconnected universes.</p>
              <span className="card-tag">Coming 2026</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/themag" className="highlight-card themag glass-card">
              <Code2 size={40} className="icon" />
              <h3>TheMAG.dev</h3>
              <p>The Multi-Platform Web-Hosted IDE for Microsoft, Apple, & Google development.</p>
              <span className="card-tag">Cloud IDE</span>
            </Link>
          </motion.div>

          {/* Mobile Game Promo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://universe-connected-4-everyone-the-game-662518636532.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className="highlight-card cosmic glass-card">
              <Gamepad2 size={40} className="icon" />
              <h3>Universe Mobile</h3>
              <p>Dive into the connected universe. Play the official mobile game adaptation now.</p>
              <span className="card-tag">Play Now</span>
            </a>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* Hero Overrides */
        .hero-bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(100,108,255,0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          z-index: -1;
          animation: pulse-glow 4s infinite alternate;
        }

        .hero-title {
          background: linear-gradient(to right, #fff, #a5a9ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .hero-description {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          font-size: 1.1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-cta {
            flex-direction: column;
            align-items: stretch;
          }
        }

        /* Highlights Section */
        .highlight-card {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .highlight-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--color-primary);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .highlight-card:hover::before {
          transform: scaleX(1);
        }

        /* Custom Colors per Card */
        .highlight-card.safety .icon { color: #646cff; }
        
        .highlight-card.retro .icon { color: #00ffff; }
        .highlight-card.retro::before { background: linear-gradient(90deg, #ff0055, #00ffff); }
        
        .highlight-card.dev .icon { color: #12d622; }
        .highlight-card.dev::before { background: #12d622; }
        
        .highlight-card.books .icon { color: #ffd93d; }
        .highlight-card.books::before { background: linear-gradient(90deg, #ff6b6b, #ffd93d); }
        
        .highlight-card.social .icon { color: #3b82f6; }
        .highlight-card.social::before { background: linear-gradient(90deg, #3b82f6, #8b5cf6); }

        .highlight-card.themag .icon { color: #8b5cf6; }
        .highlight-card.themag::before { background: linear-gradient(90deg, #00a4ef, #ffffff, #4285f4); }

        .highlight-card.cosmic .icon { color: #e600ff; }
        .highlight-card.cosmic::before { background: linear-gradient(90deg, #e600ff, #00d4ff); }

        .highlight-card h3 {
          font-size: 1.35rem;
          margin: 0;
          color: var(--color-text);
          font-weight: 700;
        }

        .highlight-card p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        .card-tag {
          display: inline-block;
          background: rgba(100, 108, 255, 0.2);
          color: var(--color-primary);
          padding: 0.3rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          align-self: flex-start;
        }

        .highlight-card.retro .card-tag { background: rgba(0, 255, 255, 0.2); color: #00ffff; }
        .highlight-card.dev .card-tag { background: rgba(18, 214, 34, 0.2); color: #12d622; }
        .highlight-card.books .card-tag { background: rgba(255, 217, 61, 0.2); color: #ffd93d; }
        .highlight-card.social .card-tag { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
        .highlight-card.themag .card-tag { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; }

      `}</style>
    </div>
  );
};

export default Home;
