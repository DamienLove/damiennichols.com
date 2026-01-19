
import { motion } from 'framer-motion';
import { Smartphone, Terminal, Wifi, Shield, Zap, Server, Code, Layers, ExternalLink, Download, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const OmniRemote = () => {
    return (
        <div className="page-container omni-page">
            {/* Hero Section */}
            <section className="hero-section page-hero">
                <div className="hero-bg-overlay"></div>
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge">
                        <span className="badge-text">v1.0 Now Available</span>
                    </div>
                    <motion.h1
                        className="hero-title glitch-text"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Omni<span className="highlight">Remote</span>
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
                        <a href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/Android.APP.APK" className="btn btn-primary glow-effect">
                            <Download size={20} /> Download APK
                        </a>
                        <a href="#features" className="btn btn-outline">
                            Learn More
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
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

                    <div className="downloads-grid">
                        {/* Windows Installer */}
                        <motion.a
                            href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/Windows.Installer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-card glass-panel"
                            whileHover={{ scale: 1.02, borderColor: 'var(--cyan)' }}
                        >
                            <div className="dl-icon"><Zap size={24} /></div>
                            <div className="dl-info">
                                <h4>Windows Installer</h4>
                                <span>Setup.exe • V2 Release</span>
                            </div>
                            <Download size={20} className="dl-arrow" />
                        </motion.a>

                        {/* Android Studio Plugin */}
                        <motion.a
                            href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/Android.Studio.Plugin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-card glass-panel"
                            whileHover={{ scale: 1.02, borderColor: '#00ff9d' }}
                        >
                            <div className="dl-icon" style={{ color: '#00ff9d' }}><Code size={24} /></div>
                            <div className="dl-info">
                                <h4>Android Studio Plugin</h4>
                                <span>IntelliJ/Android Studio • V2</span>
                            </div>
                            <Download size={20} className="dl-arrow" />
                        </motion.a>

                        {/* Portable Version */}
                        <motion.a
                            href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/Portable.EXE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-card glass-panel"
                            whileHover={{ scale: 1.02, borderColor: 'var(--purple)' }}
                        >
                            <div className="dl-icon"><Layers size={24} /></div>
                            <div className="dl-info">
                                <h4>Portable EXE</h4>
                                <span>Single File • V2 Release</span>
                            </div>
                            <Download size={20} className="dl-arrow" />
                        </motion.a>

                        {/* Full Agent */}
                        <motion.a
                            href="https://github.com/DamienLove/ProjectManagerApp/releases/download/V2/Omni.Remote.Agent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-card glass-panel"
                            whileHover={{ scale: 1.02, borderColor: '#ff00ff' }}
                        >
                            <div className="dl-icon" style={{ color: '#ff00ff' }}><Server size={24} /></div>
                            <div className="dl-info">
                                <h4>Full Agent</h4>
                                <span>Zipped Package • V2</span>
                            </div>
                            <Download size={20} className="dl-arrow" />
                        </motion.a>

                        {/* Config Template (hosted locally) */}
                        <motion.a
                            href="/downloads/omniremote/secrets.env.template"
                            download
                            className="download-card glass-panel"
                            whileHover={{ scale: 1.02, borderColor: '#fff' }}
                        >
                            <div className="dl-icon" style={{ color: '#fff' }}><Shield size={24} /></div>
                            <div className="dl-info">
                                <h4>Config Template</h4>
                                <span>secrets.env.template</span>
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
                        <div className="grid-cols-2 align-center">
                            <div className="text-content">
                                <h2 className="section-title">Control Without Limits</h2>
                                <p className="lead text-muted">
                                    OmniRemote extends your workspace beyond the desktop. Built for developers who need to manage servers, run scripts, and monitor projects on the go.
                                </p>
                                <ul className="feature-list">
                                    <li><Terminal size={18} className="icon-cyan" /> Remote CLI Access</li>
                                    <li><Server size={18} className="icon-purple" /> Project Management</li>
                                    <li><Shield size={18} className="icon-green" /> Secure Tunneling</li>
                                </ul>
                            </div>
                            <div className="image-content rounded-box">
                                <img src="/assets/omniprojectsync.png" alt="OmniRemote Screenshot" className="feature-screenshot" />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Core Features Grid */}
                <section className="features-section section-spacing" id="features">
                    <h2 className="section-title center-text">System Capabilities</h2>
                    <div className="grid-cols-3 features-grid">
                        <motion.div
                            className="feature-card glass-panel"
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon-wrapper cyan">
                                <Terminal size={32} />
                            </div>
                            <h3>Wait-less Terminal</h3>
                            <p>Execute commands on your host machine instantly via WebSocket. Full shell access with real-time output streaming.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card glass-panel"
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon-wrapper purple">
                                <Layers size={32} />
                            </div>
                            <h3>Project Manager</h3>
                            <p>View, activate, and deactivate your projects remotely. seamless integration with OmniProjectSync structure.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card glass-panel"
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon-wrapper pink">
                                <Globe size={32} />
                            </div>
                            <h3>Cloudflare Tunnel</h3>
                            <p>Securely expose your local agent to the internet without port forwarding. Access your rig from anywhere in the world.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card glass-panel"
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon-wrapper blue">
                                <Wifi size={32} />
                            </div>
                            <h3>Firebase Sync</h3>
                            <p>Automatically sync connection details across devices using Firebase Firestore. Scan, connect, and control.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card glass-panel"
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon-wrapper green">
                                <Code size={32} />
                            </div>
                            <h3>Copilot / CLI Integration</h3>
                            <p>Run your favorite AI CLI tools (Code, Gemini, terminal assistants) directly from your mobile interface.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card glass-panel"
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-icon-wrapper orange">
                                <Cpu size={32} />
                            </div>
                            <h3>Resource Monitoring</h3>
                            <p>Keep an eye on system stats and ensuring your environment is healthy and responsive.</p>
                        </motion.div>
                    </div>
                </section>

                {/* Tech Stack / Icon */}
                <section className="tech-section section-spacing">
                    <div className="tech-container glass-card">
                        <div className="app-icon-display">
                            <img src="/assets/omni_remote_icon.png" alt="OmniRemote Icon" className="app-main-icon" />
                        </div>
                        <div className="tech-details">
                            <h2>Powered by Python & Flutter</h2>
                            <p>The backend agent runs on a lightweight Python server, while the frontend offers a buttery smooth 60fps experience built with Flutter.</p>
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

            </div>

            <style>{`
        .omni-page {
          --cyan: #00f3ff;
          --purple: #bc13fe;
          --dark-bg: #0a0a12;
          background-color: var(--dark-bg);
          color: #fff;
          overflow-x: hidden;
        }

        .page-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4rem 10%;
          overflow: hidden;
          background: radial-gradient(circle at 20% 50%, #1a1a2e 0%, #000 100%);
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 48%, rgba(0, 243, 255, 0.05) 50%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(188, 19, 254, 0.05) 50%, transparent 52%);
          background-size: 60px 60px;
          z-index: 0;
        }

        .hero-content {
          z-index: 2;
          max-width: 600px;
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 1rem;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -2px;
        }

        .hero-title .highlight {
          color: var(--cyan);
          text-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #aaa;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-primary.glow-effect {
          background: linear-gradient(90deg, var(--purple), var(--cyan));
          box-shadow: 0 0 20px rgba(188, 19, 254, 0.4);
          border: none;
        }

        .hero-visual {
          z-index: 2;
          flex: 1;
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        .hero-phone-img {
          max-height: 700px;
          filter: drop-shadow(0 0 50px rgba(0, 243, 255, 0.2));
          transform: rotateY(-15deg) rotateX(5deg);
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px) rotateY(-15deg); }
          50% { transform: translateY(-20px) rotateY(-15deg); }
          100% { transform: translateY(0px) rotateY(-15deg); }
        }

        .section-spacing {
          padding: 6rem 5%;
        }

        .full-width {
          width: 100%;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
        }

        .align-center {
          align-items: center;
        }

        .grid-cols-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #fff, #aaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .lead {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #ddd;
        }
        
        .icon-cyan { color: var(--cyan); }
        .icon-purple { color: var(--purple); }
        .icon-green { color: #00ff9d; }

        .feature-screenshot {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .grid-cols-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 16px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .glass-panel:hover {
          border-color: var(--cyan);
          background: rgba(255, 255, 255, 0.04);
        }

        .card-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          background: rgba(255,255,255,0.05);
        }
        
        .cyan { color: var(--cyan); box-shadow: 0 0 15px rgba(0, 243, 255, 0.2); }
        .purple { color: var(--purple); box-shadow: 0 0 15px rgba(188, 19, 254, 0.2); }
        .pink { color: #ff00ff; box-shadow: 0 0 15px rgba(255, 0, 255, 0.2); }
        .blue { color: #0088ff; box-shadow: 0 0 15px rgba(0, 136, 255, 0.2); }
        .green { color: #00ff9d; box-shadow: 0 0 15px rgba(0, 255, 157, 0.2); }
        .orange { color: #ffaa00; box-shadow: 0 0 15px rgba(255, 170, 0, 0.2); }

        .glass-panel h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .glass-panel p {
          color: #aaa;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .center-text { text-align: center; }

        .tech-container {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .app-main-icon {
          width: 150px;
          height: 150px;
          filter: drop-shadow(0 0 30px rgba(0, 243, 255, 0.3));
        }

        .tech-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .tech-badge {
          background: rgba(255,255,255,0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--cyan);
          border: 1px solid rgba(0, 243, 255, 0.3);
        }

        .downloads-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            max-width: 1000px;
            margin: 0 auto;
        }

        .download-card {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            text-decoration: none;
            color: #fff;
            padding: 1.5rem;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
        }

        .dl-icon {
            background: rgba(255,255,255,0.1);
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--cyan);
        }

        .dl-info h4 {
            margin: 0 0 0.25rem 0;
            font-size: 1.1rem;
        }

        .dl-info span {
            font-size: 0.85rem;
            color: #aaa;
        }

        .dl-arrow {
            margin-left: auto;
            color: #444;
            transition: color 0.3s;
        }

        .download-card:hover .dl-arrow {
            color: var(--cyan);
        }

        @media (max-width: 900px) {
           .page-hero {
             flex-direction: column;
             padding-top: 6rem;
             text-align: center;
           }
           .hero-visual {
             margin-top: 3rem;
             width: 100%;
           }
           .hero-phone-img {
             max-height: 400px;
             transform: rotateY(0);
           }
           .hero-actions {
             justify-content: center;
           }
           .grid-cols-2, .tech-container {
             grid-template-columns: 1fr;
             flex-direction: column;
             text-align: center;
           }
           .feature-list li {
             justify-content: center;
           }
        }
      `}</style>
        </div>
    );
};

export default OmniRemote;
