import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, BookOpen, Search, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
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
          >
            Software Engineer. Author. Creator.
          </motion.p>
          <motion.p
            className="hero-description"
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
      <section className="highlights">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/pulselink" className="highlight-card safety">
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
            <Link to="/betamax" className="highlight-card retro">
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
            <Link to="/qa-verify" className="highlight-card dev">
              <Search size={40} className="icon" />
              <h3>QA Verify & Track</h3>
              <p>Build-aware bug tracking that saves dev time. GitHub integration with AI-powered analysis.</p>
              <span className="card-tag">Developer Tool</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/facebook-search" className="highlight-card social">
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
            <Link to="/books" className="highlight-card books">
              <BookOpen size={40} className="icon" />
              <h3>Universe Connected</h3>
              <p>Mind-bending sci-fi saga. Reality-bending fiction across interconnected universes.</p>
              <span className="card-tag">Coming 2026</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        .home-page {
          width: 100%;
        }

        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
          text-align: center;
        }

        .hero-bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(100,108,255,0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          z-index: -1;
          animation: pulse-glow 4s infinite alternate;
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #a5a9ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 1rem;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 700px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.6rem;
          border-radius: 50px;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .btn-primary {
          background: var(--color-primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--color-primary-hover);
          color: white; /* Ensure text stays white */
        }

        .btn-secondary {
          background: rgba(255,255,255,0.1);
          color: var(--color-text);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.15);
          color: var(--color-text);
        }

        .highlights {
          padding: 4rem 2rem;
          background: var(--color-surface);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .highlight-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 2rem;
          border-radius: 16px;
          text-align: left;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
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

        .highlight-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-primary);
          box-shadow: 0 12px 32px rgba(100, 108, 255, 0.2);
        }

        .highlight-card:hover::before {
          transform: scaleX(1);
        }

        .highlight-card.safety .icon {
          color: #646cff;
        }

        .highlight-card.retro .icon {
          color: #00ffff;
        }

        .highlight-card.retro::before {
          background: linear-gradient(90deg, #ff0055, #00ffff);
        }

        .highlight-card.dev .icon {
          color: #12d622;
        }

        .highlight-card.dev::before {
          background: #12d622;
        }

        .highlight-card.books .icon {
          color: #ffd93d;
        }

        .highlight-card.books::before {
          background: linear-gradient(90deg, #ff6b6b, #ffd93d);
        }

        .highlight-card.social .icon {
          color: #3b82f6;
        }

        .highlight-card.social::before {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }

        .highlight-card .icon {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

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

        .highlight-card.retro .card-tag {
          background: rgba(0, 255, 255, 0.2);
          color: #00ffff;
        }

        .highlight-card.dev .card-tag {
          background: rgba(18, 214, 34, 0.2);
          color: #12d622;
        }

        .highlight-card.books .card-tag {
          background: rgba(255, 217, 61, 0.2);
          color: #ffd93d;
        }

        .highlight-card.social .card-tag {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          .hero-cta {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
