import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Cpu,
    Globe,
    Layers,
    Zap,
    ShieldCheck,
    Terminal,
    Monitor,
    Smartphone,
    Cloud,
    ChevronRight,
    ExternalLink
} from 'lucide-react';

const TheMAG = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="page-container themag-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="themag-logo-container"
                    >
                        <img
                            src="/assets/themag/LOGO.gif"
                            alt="TheMAG.dev Logo"
                            className="themag-hero-logo"
                        />
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        TheMAG.dev
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        The Multi-Platform Web-Hosted IDE
                    </motion.p>

                    <motion.div
                        className="platform-tags"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="platform-tag microsoft">Microsoft</span>
                        <span className="platform-tag apple">Apple</span>
                        <span className="platform-tag google">Google</span>
                    </motion.div>

                    <motion.p
                        className="hero-description text-muted"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                    >
                        Bridging the ecosystems of the tech giants into a single unified workspace.
                        Code, build, and deploy across Windows, macOS, and Android from any browser.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button className="btn btn-primary" onClick={() => window.open('https://themag.dev', '_blank')}>
                            Launch IDE <Terminal size={18} />
                        </button>
                        <button className="btn btn-secondary">
                            View Documentation <Code2 size={18} />
                        </button>
                    </motion.div>
                </div>
                <div className="hero-bg-glow"></div>
            </section>

            {/* Features Grid */}
            <section className="features-section section-spacing">
                <motion.div
                    className="content-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="section-header">
                        <h2 className="section-title">Universal Development Environment</h2>
                        <p className="section-subtitle">One IDE. Three Ecosystems. Infinite Possibilities.</p>
                    </div>

                    <div className="grid-cols-3">
                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper microsoft-bg">
                                <Monitor className="feature-icon" />
                            </div>
                            <h3>Windows Integration</h3>
                            <p>Full support for .NET, C#, and Windows API development with deep Azure integration.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper apple-bg">
                                <Smartphone className="feature-icon" />
                            </div>
                            <h3>macOS & iOS Support</h3>
                            <p>Simulate Apple environments and test Swift applications right in your browser through cloud-virtualization.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper google-bg">
                                <Globe className="feature-icon" />
                            </div>
                            <h3>Android & Cloud</h3>
                            <p>Native Android Studio capabilities and seamless Firebase connectivity for rapid Google ecosystem deployment.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Cloud className="feature-icon" />
                            </div>
                            <h3>Web-Hosted Persistence</h3>
                            <p>Your entire workspace follows you. No local installation required. Pick up where you left off on any device.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Cpu className="feature-icon" />
                            </div>
                            <h3>Universal Compilation</h3>
                            <p>Write once, compile for all targets. Our cloud-build system handles the heavy lifting for multiple architectures.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Zap className="feature-icon" />
                            </div>
                            <h3>Real-time Preview</h3>
                            <p>Interactive hot-reloading that syncs across multiple virtualized device targets simultaneously.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Status Section */}
            <section className="status-section section-spacing">
                <div className="content-wrapper">
                    <motion.div
                        className="status-card glass-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="status-badge">Phase: Alpha Development</div>
                        <h2>The Future of IDEs is Web-Native</h2>
                        <p>
                            TheMAG.dev is currently in active development. We are reinventing how developers interact with
                            different OS ecosystems, removing the hardware barriers that have long divided the community.
                        </p>
                        <div className="repo-info">
                            <ExternalLink size={16} /> <code>damien/TheMAGdev.git</code>
                        </div>
                    </motion.div>
                </div>
            </section>

            <style>{`
        .themag-page {
          padding-bottom: 5rem;
        }

        .themag-logo-container {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .themag-hero-logo {
          width: 180px;
          height: auto;
          filter: drop-shadow(0 0 30px rgba(100, 108, 255, 0.4));
          border-radius: 24px;
        }

        .platform-tags {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .platform-tag {
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .platform-tag.microsoft { border-color: #00a4ef; color: #00a4ef; }
        .platform-tag.apple { border-color: #ffffff; color: #ffffff; }
        .platform-tag.google { border-color: #4285f4; color: #4285f4; }

        .feature-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(100, 108, 255, 0.1);
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }

        .feature-icon-wrapper.microsoft-bg { color: #00a4ef; background: rgba(0, 164, 239, 0.1); }
        .feature-icon-wrapper.apple-bg { color: #ffffff; background: rgba(255, 255, 255, 0.1); }
        .feature-icon-wrapper.google-bg { color: #4285f4; background: rgba(66, 133, 244, 0.1); }

        .feature-card {
          padding: 2.5rem;
          text-align: left;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        .feature-card h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .feature-card p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, var(--color-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .status-card {
          padding: 4rem;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .status-badge {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: rgba(255, 165, 0, 0.1);
          color: #ffa500;
          border: 1px solid rgba(255, 165, 0, 0.2);
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .repo-info {
          margin-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          background: rgba(0,0,0,0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        code {
          color: var(--color-accent);
          font-family: 'Fira Code', monospace;
        }

        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2rem;
          }
          .status-card {
            padding: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default TheMAG;
