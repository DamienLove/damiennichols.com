
import { motion } from 'framer-motion';
import { BadgeDollarSign, MapPin, Calendar, Camera, Settings, ArrowRight, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProxyVend = () => {
    return (
        <div className="page-container proxy-vend-page">
            <section className="hero-section page-hero">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <div className="hero-badge">
                        <span className="scramble-text">SYSTEM ONLINE</span>
                        <div className="pulsing-dot"></div>
                    </div>

                    <motion.h1
                        className="glitch-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        PROXY<span className="highlight">VEND</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Autonomous Interaction Engine. You Supply the Assets. We Execute the Sale.
                    </motion.p>

                    <motion.div
                        className="cta-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="primary-btn">Initialize Selling Sequence</button>
                    </motion.div>
                </motion.div>
            </section>

            <div className="content-wrapper">
                <div className="grid-cols-2 section-spacing">
                    <motion.div
                        className="info-panel glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Protocol: ZERO_EFFORT</h2>
                        <p>
                            ProxyVend utilizes advanced logistical algorithms to handle the entire lifecycle of a transaction.
                            Your only required inputs are availability, location parameters, and visual data. The system handles negotiation, scheduling, and logistical routing.
                        </p>
                        <ul className="feature-list">
                            <li><MapPin size={18} /><span>Geospatial Locking</span></li>
                            <li><Truck size={18} /><span>Transport Vectoring</span></li>
                            <li><Clock size={18} /><span>Availability Sync</span></li>
                            <li><Camera size={18} /><span>Visual Asset Ingestion</span></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="visual-panel glass-card"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="terminal-display">
                            <div className="terminal-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="terminal-body">
                                <p className="code-line"><span className="cursor-prefix">$</span> init_inventory_scan</p>
                                <p className="code-line out">Scanning visual assets...</p>
                                <p className="code-line out success">[SUCCESS] 14 Items Identified</p>
                                <p className="code-line"><span className="cursor-prefix">$</span> calc_market_value</p>
                                <p className="code-line out">Analyzing cross-platform pricing...</p>
                                <p className="code-line out info">Est. Value: $1,240.00</p>
                                <p className="code-line"><span className="cursor-prefix">$</span> deploy_listings</p>
                                <p className="code-line out warning">Executing multi-platform broadcast...</p>
                                <span className="blinking-cursor">_</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        .proxy-vend-page {
          --pv-accent: #00ff9d; /* Matrix Green */
          --pv-dark: #0a0a0a;
          --pv-glow: rgba(0, 255, 157, 0.3);
        }

        .page-hero {
          background: radial-gradient(circle at center, #111 0%, #000 100%);
          border-bottom: 1px solid rgba(0, 255, 157, 0.1);
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .glitch-title {
          font-family: 'Courier New', monospace;
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: -4px;
          margin-bottom: 1rem;
          color: #fff;
          text-shadow: 0 0 20px var(--pv-glow);
        }

        .glitch-title .highlight {
          color: var(--pv-accent);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 255, 157, 0.1);
          border: 1px solid var(--pv-accent);
          color: var(--pv-accent);
          font-family: monospace;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          border-radius: 4px;
        }

        .pulsing-dot {
          width: 8px;
          height: 8px;
          background: var(--pv-accent);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .info-panel h2 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--pv-accent);
          font-family: monospace;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin-top: 2rem;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          font-family: monospace;
          font-size: 1.1rem;
        }

        .feature-list li svg {
          color: var(--pv-accent);
        }

        .terminal-display {
          background: #000;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 1rem;
          font-family: 'Courier New', monospace;
          height: 100%;
          min-height: 300px;
          box-shadow: 0 0 30px rgba(0,0,0,0.5);
        }

        .terminal-header {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #333;
        }

        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .terminal-body {
          color: #eee;
          font-size: 0.9rem;
          line-height: 1.6;
          text-align: left;
        }

        .code-line { margin: 0.5rem 0; }
        .cursor-prefix { color: var(--pv-accent); margin-right: 0.5rem; }
        .out { color: #888; padding-left: 1rem; }
        .out.success { color: var(--pv-accent); }
        .out.info { color: #5bc0de; }
        .out.warning { color: #f0ad4e; }
        .blinking-cursor { animation: blink 1s step-end infinite; }

        @keyframes blink { 50% { opacity: 0; } }
        @keyframes pulse { 0% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 157, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(0, 255, 157, 0); } 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0, 255, 157, 0); } }

        .primary-btn {
          background: var(--pv-accent);
          color: #000;
          border: none;
          padding: 1rem 2rem;
          font-family: monospace;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          transition: all 0.2s;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 255, 157, 0.4);
        }
      `}</style>
        </div>
    );
};

export default ProxyVend;
