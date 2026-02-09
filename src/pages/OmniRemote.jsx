import { motion } from 'framer-motion';
import { Smartphone, Terminal, Wifi, Shield, Zap, Server, Code, Layers, ExternalLink, Download, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const OmniRemote = () => {
  return (
    <div className="page-container omni-page">
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
            v5.0.0 SYSTEM ONLINE
          </div>
          <motion.h1
            className="hero-title glitch-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Omni<span className="text-highlight">Remote</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your Development Environment. In Your Pocket.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V5/OmniProjectRemote.apk" className="btn btn-primary glow-btn">
              <Download size={20} /> Download APK
            </a>
            <Link to="/omniremote/wiki" className="btn btn-outline">
              <Code size={20} /> View Wiki
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="phone-glow"></div>
          <img src="/assets/omni_remote_hero.png" alt="OmniRemote Interface" className="hero-phone-img floating" />
        </motion.div>
      </section>

      <div className="content-wrapper">

        {/* Downloads Section */}
        <section className="downloads-section section-spacing">
          <h2 className="section-title center-text">Download Agent</h2>
          <p className="text-muted center-text" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Run the agent on your host machine to enable remote control. Available for Windows.
          </p>

          <div className="downloads-grid grid-cols-2">
            {/* Windows Installer */}
            <motion.a
              href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V5/OmniRemoteAgentSetup.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="download-card glass-card"
              whileHover={{ scale: 1.02, borderColor: 'var(--cyan)' }}
            >
              <div className="dl-icon"><Zap size={24} /></div>
              <div className="dl-info">
                <h4>Windows Installer</h4>
                <span>OmniRemoteAgentSetup.exe</span>
                <span className="text-muted small">Recommended for most users</span>
              </div>
              <Download size={20} className="dl-arrow" />
            </motion.a>

            {/* Android Studio Plugin */}
            <motion.a
              href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V5/AndroidStudioPlugin.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="download-card glass-card"
              whileHover={{ scale: 1.02, borderColor: '#00ff9d' }}
            >
              <div className="dl-icon" style={{ color: '#00ff9d' }}><Code size={24} /></div>
              <div className="dl-info">
                <h4>IDE Plugin / Host</h4>
                <span>AndroidStudioPlugin.zip</span>
                <span className="text-muted small">v5.0 • Direct IDE Hosting</span>
              </div>
              <Download size={20} className="dl-arrow" />
            </motion.a>

            {/* Portable Version */}
            <motion.a
              href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V5/OmniRemoteAgentPortable.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="download-card glass-card"
              whileHover={{ scale: 1.02, borderColor: 'var(--purple)' }}
            >
              <div className="dl-icon"><Layers size={24} /></div>
              <div className="dl-info">
                <h4>Portable Agent</h4>
                <span>OmniRemoteAgentPortable.exe</span>
                <span className="text-muted small">No installation required</span>
              </div>
              <Download size={20} className="dl-arrow" />
            </motion.a>

            {/* Standalone Executable */}
            <motion.a
              href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V5/OmniRemoteAgent.EXE"
              target="_blank"
              rel="noopener noreferrer"
              className="download-card glass-card"
              whileHover={{ scale: 1.02, borderColor: '#ff00ff' }}
            >
              <div className="dl-icon" style={{ color: '#ff00ff' }}><Server size={24} /></div>
              <div className="dl-info">
                <h4>Standalone Agent</h4>
                <span>OmniRemoteAgent.EXE</span>
                <span className="text-muted small">Single file executable</span>
              </div>
              <Download size={20} className="dl-arrow" />
            </motion.a>

            {/* Config Template */}
            <motion.a
              href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V5/secrets.env.template"
              target="_blank"
              rel="noopener noreferrer"
              className="download-card glass-card col-span-2"
              whileHover={{ scale: 1.02, borderColor: '#fff' }}
              style={{ width: '100%' }}
            >
              <div className="dl-icon" style={{ color: '#fff' }}><Shield size={24} /></div>
              <div className="dl-info">
                <h4>Config Template</h4>
                <span>secrets.env.template</span>
                <span className="text-muted small">Required for authentication</span>
              </div>
              <Download size={20} className="dl-arrow" />
            </motion.a>
          </div>
        </section>

        {/* Intro / Value Prop */}
        <section className="value-prop section-spacing">
          <motion.div
            className="glass-card full-width"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(188, 19, 254, 0.1), transparent 70%)' }}></div>
            <div className="grid-cols-2 align-center">
              <div className="text-content">
                <h2 className="section-title">Control Without Limits</h2>
                <p className="lead text-muted">
                  OmniRemote extends your workspace beyond the desktop. Built for developers who need to manage servers, run scripts, and monitor projects on the go.
                </p>
                <ul className="feature-list">
                  <li><Terminal size={18} className="icon-cyan" /> Remote CLI Access & Control</li>
                  <li><Server size={18} className="icon-purple" /> Full Project Management Suite</li>
                  <li><Shield size={18} className="icon-green" /> Secure Cloudflare Tunnels</li>
                </ul>
              </div>
              <div className="image-content">
                <img src="/assets/omniprojectsync.png" alt="OmniRemote Screenshot" className="feature-screenshot glass-border" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core Features Grid */}
        <section className="features-section section-spacing" id="features">
          <h2 className="section-title center-text">System Capabilities</h2>
          <div className="grid-cols-3 features-grid">
            <motion.div className="feature-card glass-card" whileHover={{ y: -10 }}>
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.15), transparent 70%)' }}></div>
              <div className="card-icon-wrapper cyan">
                <Terminal size={32} />
              </div>
              <h3>Android Terminal Routing</h3>
              <p>Android terminal routes through OmniProjectSync. Real-time WebSocket streaming with zero lag.</p>
            </motion.div>

            <motion.div className="feature-card glass-card" whileHover={{ y: -10 }}>
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(188, 19, 254, 0.15), transparent 70%)' }}></div>
              <div className="card-icon-wrapper purple">
                <Layers size={32} />
              </div>
              <h3>IDE Auto-Start</h3>
              <p>Plugin restores Firebase login automatically and can auto-start the host on launch.</p>
            </motion.div>

            <motion.div className="feature-card glass-card" whileHover={{ y: -10 }}>
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 0, 255, 0.15), transparent 70%)' }}></div>
              <div className="card-icon-wrapper pink">
                <Globe size={32} />
              </div>
              <h3>Cloudflare Tunnel</h3>
              <p>Expose your agent securely without port forwarding. Access your rig from anywhere.</p>
            </motion.div>

            <motion.div className="feature-card glass-card" whileHover={{ y: -10 }}>
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 136, 255, 0.15), transparent 70%)' }}></div>
              <div className="card-icon-wrapper blue">
                <Wifi size={32} />
              </div>
              <h3>Smart Sync & Bridge</h3>
              <p>Firestore-backed token syncing across devices. One-tap bridge to Chrome Remote Desktop.</p>
            </motion.div>

            <motion.div className="feature-card glass-card" whileHover={{ y: -10 }}>
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 255, 157, 0.15), transparent 70%)' }}></div>
              <div className="card-icon-wrapper green">
                <Code size={32} />
              </div>
              <h3>Copilot / CLI Integration</h3>
              <p>Run your favorite AI CLI tools (Code, Gemini, terminal assistants) from mobile.</p>
            </motion.div>

            <motion.div className="feature-card glass-card" whileHover={{ y: -10 }}>
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 170, 0, 0.15), transparent 70%)' }}></div>
              <div className="card-icon-wrapper orange">
                <Shield size={32} />
              </div>
              <h3>Normalized Sessions</h3>
              <p>Session IDs are normalized for IDE terminal proxying, providing a seamless transition.</p>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack / Icon */}
        <section className="tech-section section-spacing">
          <div className="tech-container glass-card center-text">
            <div className="app-icon-display">
              <img src="/assets/omni_remote_icon.png" alt="OmniRemote Icon" className="app-main-icon floating" />
            </div>
            <div className="tech-details">
              <h2>Powered by Python, Kotlin & Flutter</h2>
              <p>The backend agent runs on a lightweight Python server or directly within your IDE using the Kotlin-based plugin, while the frontend offers a buttery smooth experience built with Flutter.</p>
              <div className="tech-badges">
                <span className="tech-badge">Python 3.10+</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">WebSockets</span>
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Dart</span>
              </div>
            </div>
          </div>
        </section>

      </div >

      <style>{`
        .omni-page {
          --cyan: #00f3ff;
          --purple: #bc13fe;
        }

        .page-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4rem 10%;
           background: radial-gradient(circle at center, #101025 0%, #000 100%);
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
           background-image: 
            linear-gradient(rgba(188, 19, 254, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(188, 19, 254, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          z-index: 0;
        }

        .hero-content { z-index: 2; max-width: 600px; }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(188, 19, 254, 0.1);
          border: 1px solid rgba(188, 19, 254, 0.3);
          border-radius: 20px;
          color: var(--purple);
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        
        .status-dot { width: 8px; height: 8px; background: var(--purple); border-radius: 50%; box-shadow: 0 0 10px var(--purple); }

        .hero-title { font-size: 5rem; font-weight: 900; line-height: 1; margin-bottom: 1rem; letter-spacing: -3px; }
        .text-highlight { color: var(--cyan); text-shadow: 0 0 30px rgba(0, 243, 255, 0.4); }

        .hero-subtitle { font-size: 1.5rem; color: #aaa; margin-bottom: 2.5rem; font-weight: 300; letter-spacing: 1px; }

        .hero-actions { display: flex; gap: 1rem; align-items: center; }

        .glow-btn {
          box-shadow: 0 0 20px rgba(188, 19, 254, 0.3);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .hero-visual { z-index: 2; flex: 1; display: flex; justify-content: center; position: relative; }
        
        .phone-glow {
           position: absolute;
           top: 50%; left: 50%; transform: translate(-50%, -50%);
           width: 300px; height: 500px;
           background: radial-gradient(circle, rgba(0, 243, 255, 0.2), transparent 70%);
           filter: blur(40px);
           z-index: -1;
        }

        .hero-phone-img { max-height: 650px; filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5)); transform: rotateY(-15deg) rotateX(5deg); }
        .floating { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0% { transform: translateY(0px) rotateY(-15deg); } 50% { transform: translateY(-20px) rotateY(-15deg); } 100% { transform: translateY(0px) rotateY(-15deg); } }

        .section-spacing { padding: 6rem 5%; }
        .full-width { width: 100%; position: relative; overflow: hidden; }

        .align-center { align-items: center; }
        .grid-cols-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .grid-cols-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }

        .section-title { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .lead { font-size: 1.2rem; line-height: 1.6; margin-bottom: 2rem; color: #ccc; }

        .feature-list { list-style: none; padding: 0; }
        .feature-list li { display: flex; align-items: center; gap: 1rem; font-size: 1.1rem; margin-bottom: 1rem; color: #ddd; }
        .icon-cyan { color: var(--cyan); }
        .icon-purple { color: var(--purple); }
        .icon-green { color: #00ff9d; }

        .feature-screenshot { width: 100%; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        .glass-border { border: 1px solid rgba(255,255,255,0.1); }

        .feature-card { padding: 2rem; position: relative; overflow: hidden; }
        .feature-card h3 { font-size: 1.4rem; margin-bottom: 0.5rem; z-index: 1; }
        .feature-card p { color: #aaa; font-size: 0.95rem; line-height: 1.5; z-index: 1; }

        .card-icon-wrapper { width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; background: rgba(255,255,255,0.05); z-index: 1; }
        .cyan { color: var(--cyan); }
        .purple { color: var(--purple); }
        .pink { color: #ff00ff; }
        .blue { color: #0088ff; }
        .green { color: #00ff9d; }
        .orange { color: #ffaa00; }
        
        .downloads-grid { max-width: 900px; margin: 0 auto; }
        
        .download-card { display: flex; align-items: center; gap: 1.25rem; text-decoration: none; color: #fff; padding: 1.5rem; }
        .dl-icon { background: rgba(255,255,255,0.1); width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--cyan); }
        .dl-info h4 { margin: 0 0 0.25rem 0; font-size: 1.1rem; }
        .dl-info span { font-size: 0.85rem; color: #aaa; display: block; }
        .dl-arrow { margin-left: auto; color: #444; transition: color 0.3s; }
        .download-card:hover .dl-arrow { color: var(--cyan); }
        
        .col-span-2 { grid-column: span 2; }

        .tech-container { display: flex; flex-direction: column; align-items: center; gap: 2rem; padding: 4rem 2rem; }
        .app-main-icon { width: 120px; height: 120px; filter: drop-shadow(0 0 30px rgba(0, 243, 255, 0.3)); }
        .tech-badges { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem; justify-content: center; }
        .tech-badge { background: rgba(255,255,255,0.05); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 500; color: var(--cyan); border: 1px solid rgba(0, 243, 255, 0.2); }

        @media (max-width: 900px) {
           .page-hero { flex-direction: column; padding-top: 6rem; text-align: center; }
           .hero-visual { margin-top: 3rem; width: 100%; transform: scale(0.9); }
           .hero-phone-img { transform: rotateY(0); }
           .hero-actions { justify-content: center; }
           .grid-cols-2 { grid-template-columns: 1fr; }
           .downloads-grid { grid-template-columns: 1fr; }
           .col-span-2 { grid-column: span 1; }
        }
      `}</style>
    </div >
  );
};

export default OmniRemote;
