import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code, Terminal, Cpu, Smartphone, BookOpen, Music, Shield, ExternalLink, Zap, CloudLightning, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container home-page">
      {/* Hero Section */}
      <section className="hero-section page-hero">
        <div className="hero-grid-bg"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="status-badge">
            <span className="status-dot animate-pulse"></span>
            SYSTEM ONLINE
          </div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            DAMIEN <span className="text-highlight">NICHOLS</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Engineer // Creative Technologist // Sci-Fi Author
          </motion.p>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building the intersection of narrative and code. Explore the ecosystem below.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://github.com/DamienLove" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/damien-nichols-1b0b3b1b/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@damiennichols.com" className="social-link">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights / Modules Grid */}
      <section className="highlights section-spacing">
        <div className="section-header center-text">
          <h2 className="section-title">Active Modules</h2>
          <p className="text-muted">Current projects and operational systems.</p>
        </div>

        <div className="content-wrapper grid-cols-3">


          {/* Omni Remote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/omniremote" className="highlight-card omni glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(188, 19, 254, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: 'var(--neon-purple)' }}>
                <Smartphone size={32} className="icon" style={{ color: 'var(--neon-purple)' }} />
              </div>
              <h3>Omni Remote</h3>
              <p>Your development environment, extended. Remote control rig for Windows & Android developers.</p>
              <div className="card-footer">
                <span className="card-tag">Utility</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* AROS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/aros" className="highlight-card aros glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 165, 0, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: '#ffa500' }}>
                <Cpu size={32} className="icon" style={{ color: '#ffa500' }} />
              </div>
              <h3>AROS</h3>
              <p>The Augmented Reality Operating System. A unified spatial interface for XREAL glasses.</p>
              <div className="card-footer">
                <span className="card-tag">OS / Spatial</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* ProxyVend (Automated Selling App) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/proxy-vend" className="highlight-card proxy-vend glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 255, 157, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: '#00ff9d', background: 'rgba(0, 255, 157, 0.1)' }}>
                <CloudLightning size={32} className="icon" style={{ color: '#00ff9d' }} />
              </div>
              <h3>ProxyVend</h3>
              <p>Autonomous Selling Agent. You supply the photos and schedule, it handles the rest. Effortless liquidity.</p>
              <div className="card-footer">
                <span className="card-tag" style={{ borderColor: '#00ff9d', color: '#00ff9d' }}>Autonomous</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* Facebook Search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            <Link to="/facebook-search" className="highlight-card fb-search glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: '#3b82f6' }}>
                <Search size={32} className="icon" style={{ color: '#3b82f6' }} />
              </div>
              <h3>Facebook Search</h3>
              <p>Advanced filtering and discovery tools for the social graph. Find what matters.</p>
              <div className="card-footer">
                <span className="card-tag">Utility</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* Beta Max */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/betamax" className="highlight-card betamax glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 0, 85, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: 'var(--neon-pink)' }}>
                <Terminal size={32} className="icon" style={{ color: 'var(--neon-pink)' }} />
              </div>
              <h3>Beta Max</h3>
              <p>A satirical, hyper-stylized AI overlord interface. Explore the lore and system architecture.</p>
              <div className="card-footer">
                <span className="card-tag">Experience</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* SoText.app */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/pulselink" className="highlight-card pulselink glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: 'var(--neon-cyan)' }}>
                <Shield size={32} className="icon" style={{ color: 'var(--neon-cyan)' }} />
              </div>
              <h3>SoText.app</h3>
              <p>Smart messaging with Beacon safety. Voice-activated emergency protocols and location sharing.</p>
              <div className="card-footer">
                <span className="card-tag">Safety</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* Diamond Dev Duster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/diamond-dev-duster" className="highlight-card duster glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: 'var(--neon-cyan)' }}>
                <Zap size={32} className="icon" style={{ color: 'var(--neon-cyan)' }} />
              </div>
              <h3>Diamond Dev Duster</h3>
              <p>Clean your dev environment. Purge node_modules and reclaim space.</p>
              <div className="card-footer">
                <span className="card-tag">Utility</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* QA Verify */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/qa-verify" className="highlight-card qa glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 255, 157, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: 'var(--neon-green)' }}>
                <Code size={32} className="icon" style={{ color: 'var(--neon-green)' }} />
              </div>
              <h3>QA Verify & Track</h3>
              <p>Streamlined bug tracking and issue management for developer sanity.</p>
              <div className="card-footer">
                <span className="card-tag">DevTool</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* Books */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/books" className="highlight-card books glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(188, 19, 254, 0.15), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: 'var(--neon-purple)' }}>
                <BookOpen size={32} className="icon" style={{ color: 'var(--neon-purple)' }} />
              </div>
              <h3>Universe Connected</h3>
              <p>The sci-fi saga. Origins, lore, and the complete reading experience.</p>
              <div className="card-footer">
                <span className="card-tag">Literature</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

          {/* The MAG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/themag" className="highlight-card mag glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%)' }}></div>
              <div className="icon-wrapper" style={{ borderColor: '#fff' }}>
                <Cpu size={32} className="icon" style={{ color: '#fff' }} />
              </div>
              <h3>The MAG</h3>
              <p>Microsoft Apple Google. The all-in-one multi-stack IDE for universal development.</p>
              <div className="card-footer">
                <span className="card-tag">IDE</span>
                <ArrowRight size={16} className="arrow" />
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

      <style>{`
        .home-page {
          padding-bottom: 5rem;
        }

        .page-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: radial-gradient(circle at center, #101025 0%, #000 100%);
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          z-index: 0;
        }

        .hero-content {
          z-index: 2;
          max-width: 800px;
          padding: 2rem;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 255, 157, 0.1);
          border: 1px solid rgba(0, 255, 157, 0.3);
          border-radius: 20px;
          color: var(--neon-green);
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--neon-green);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--neon-green);
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }

        .text-highlight {
           background: linear-gradient(to right, var(--neon-cyan), var(--neon-purple));
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #fff;
          margin-bottom: 1rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .social-link {
          color: var(--color-text-muted);
          transition: all 0.3s;
          padding: 10px;
          border-radius: 50%;
          border: 1px solid transparent;
        }

        .social-link:hover {
          color: var(--neon-cyan);
          background: rgba(0, 243, 255, 0.1);
          border-color: rgba(0, 243, 255, 0.3);
          transform: translateY(-2px);
        }

        /* Highlights Grid */
        .section-spacing {
          padding: 4rem 2rem;
        }
        
        .section-header {
           margin-bottom: 4rem;
        }
        
        .section-title {
           font-size: 2.5rem;
           margin-bottom: 0.5rem;
        }

        .grid-cols-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .highlight-card {
           position: relative;
           display: flex;
           flex-direction: column;
           height: 100%;
           padding: 2.5rem;
           text-align: left;
           text-decoration: none;
           color: #fff;
           overflow: hidden;
        }
        
        .card-bg-glow {
           position: absolute;
           top: -50%;
           left: -50%;
           width: 200%;
           height: 200%;
           transition: opacity 0.5s;
           opacity: 0;
           pointer-events: none;
        }
        
        .highlight-card:hover .card-bg-glow {
           opacity: 1;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          background: rgba(0,0,0,0.3);
          transition: all 0.3s;
          z-index: 1;
        }
        
        .highlight-card:hover .icon-wrapper {
           transform: scale(1.1);
           background: rgba(0,0,0,0.5);
        }

        .highlight-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          z-index: 1;
        }

        .highlight-card p {
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
          z-index: 1;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          z-index: 1;
        }

        .card-tag {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.4);
        }
        
        .arrow {
           opacity: 0;
           transform: translateX(-10px);
           transition: all 0.3s;
           color: var(--neon-cyan);
        }
        
        .highlight-card:hover .arrow {
           opacity: 1;
           transform: translateX(0);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .grid-cols-3 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Home;
