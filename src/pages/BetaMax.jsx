import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Layers, Zap } from 'lucide-react';

const BetaMax = () => {
    return (
        <div className="page-container betamax-page">
            <section className="page-hero retro-hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="hero-content"
                >
                    <div className="retro-logo">BETA MAX</div>
                    <p className="subtitle">Tomorrow's Features, Today.</p>
                </motion.div>
            </section>

            <div className="content-wrapper">
                <div className="intro-card">
                    <h2><Gamepad2 className="inline-icon" /> Gamify Your QA Process</h2>
                    <p>
                        Beta Max is a retro-futuristic beta testing platform designed for power users, developers, and technical enthusiasts.
                        It bridges the gap between software creators ("Architects") and quality assurance testers ("Scouts") by turning bug hunting into an engaging experience.
                    </p>
                </div>

                <div className="grid-features">
                    <div className="feature-card">
                        <Users size={32} className="card-icon" />
                        <h3>Roles</h3>
                        <p><strong>Architects:</strong> Creators who build the worlds.</p>
                        <p><strong>Scouts:</strong> Testers who explore and verify.</p>
                    </div>

                    <div className="feature-card">
                        <Layers size={32} className="card-icon" />
                        <h3>Vision & Lore</h3>
                        <p>Immerse yourself in a platform that feels less like work and more like a mission. Level up, earn badges, and improve software quality.</p>
                    </div>

                    <div className="feature-card">
                        <Zap size={32} className="card-icon" />
                        <h3>Platform</h3>
                        <p>Cross-platform support for seamless testing on Web and Mobile. Integrated reporting and tracking.</p>
                    </div>
                </div>

                <div className="wiki-links hover-glow">
                    <h3>Documentation</h3>
                    <div className="link-grid">
                        <a href="https://github.com/DamienLove/beta-max-core/wiki/Vision-and-Lore" target="_blank" rel="noopener noreferrer">Vision & Why</a>
                        <a href="https://github.com/DamienLove/beta-max-core/wiki/Developer-Guide" target="_blank" rel="noopener noreferrer">Developer Guide</a>
                        <a href="https://github.com/DamienLove/beta-max-core/wiki/User-Manual" target="_blank" rel="noopener noreferrer">User Manual</a>
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
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .retro-logo {
          font-family: 'Courier New', monospace;
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: -2px;
          text-shadow: 3px 3px 0px var(--retro-primary), -3px -3px 0px var(--retro-secondary);
          color: white;
          margin-bottom: 1rem;
        }

        .intro-card {
          background: rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid var(--retro-primary);
          margin-bottom: 3rem;
        }

        .grid-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .feature-card {
          background: #0f0f1a;
          border: 1px solid #333;
          padding: 1.5rem;
          border-radius: 8px;
          transition: transform 0.3s;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--retro-secondary);
        }

        .card-icon {
          color: var(--retro-secondary);
          margin-bottom: 1rem;
        }

        .wiki-links {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 255, 255, 0.05);
          border-radius: 12px;
        }

        .link-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .link-grid a {
          color: var(--retro-secondary);
          text-decoration: none;
          font-weight: bold;
          border-bottom: 1px dashed var(--retro-secondary);
        }
        
        .link-grid a:hover {
          color: var(--retro-primary);
          border-color: var(--retro-primary);
        }

        @media (max-width: 768px) {
          .retro-logo { font-size: 3rem; }
        }
      `}</style>
        </div>
    );
};

export default BetaMax;
