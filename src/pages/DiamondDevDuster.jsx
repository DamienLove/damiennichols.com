import React from 'react';
import { motion } from 'framer-motion';
import {
    Trash2,
    Search,
    Cloud,
    Shield,
    FileCode,
    Database,
    HardDrive,
    ExternalLink,
    Download,
    Terminal,
    Layout
} from 'lucide-react';

const DiamondDevDuster = () => {
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
        <div className="page-container duster-page">
            {/* Hero Section */}
            <section className="hero-section page-hero">
                <div className="hero-grid-bg"></div>
                <div className="hero-content">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="duster-logo-container"
                    >
                        <div className="duster-hero-icon pulse-shadow">
                            <div className="diamond-shape">D</div>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        DIAMOND <span className="text-highlight">DEV DUSTER</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        FIND IT // CLEAN IT // CLOUD IT
                    </motion.p>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        The ultimate Windows development workspace optimization tool.
                        Scan your project roots, purge redundant artifacts, and archive
                        entire projects to the cloud with verified SHA-256 integrity.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button className="btn btn-primary glow-btn">
                            Download Flutter App <Download size={18} />
                        </button>
                        <button className="btn btn-secondary">
                            View CLI Reference <Terminal size={18} />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Core Features */}
            <section className="features-section section-spacing">
                <motion.div
                    className="content-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="section-header center-text">
                        <h2 className="section-title">INTELLIGENT MANANGEMENT</h2>
                        <p className="text-muted">Reclaim space. Keep your environment lean.</p>
                    </div>

                    <div className="grid-cols-3">
                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.15), transparent 70%)' }}></div>
                            <div className="feature-icon-wrapper">
                                <Search className="feature-icon" />
                            </div>
                            <h3>Deep Project Discovery</h3>
                            <p>Automatically detects git repos, package.json, pubspec.yaml, and Visual Studio solutions across your entire drive.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(188, 19, 254, 0.15), transparent 70%)' }}></div>
                            <div className="feature-icon-wrapper">
                                <Trash2 className="feature-icon" />
                            </div>
                            <h3>Artifact Purging</h3>
                            <p>Safely remove node_modules, build directories, target folders, and .dart_tool with customizable dry-run and quarantine options.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.15), transparent 70%)' }}></div>
                            <div className="feature-icon-wrapper">
                                <Cloud className="feature-icon" />
                            </div>
                            <h3>Cloud Archiving</h3>
                            <p>One-tap project migration to OneDrive or Google Drive. Move inactive projects off-disk while maintaining quick access.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Shield className="feature-icon" />
                            </div>
                            <h3>SHA-256 Verification</h3>
                            <p>Every file move and archive operation is verified with SHA-256 checksums to ensure perfect data integrity.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Layout className="feature-icon" />
                            </div>
                            <h3>Dual Interface</h3>
                            <p>Choose between a high-performance PowerShell CLI/WPF tool or a beautiful, modern Flutter desktop experience.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Database className="feature-icon" />
                            </div>
                            <h3>Global Cache Cleaning</h3>
                            <p>Go beyond projects. Purge global npm, pub, and NuGet caches that accumulate gigabytes of hidden junk over time.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Tech Specs */}
            <section className="tech-section section-spacing">
                <div className="content-wrapper">
                    <div className="glass-card tech-card center-text">
                        <div className="tech-header">
                            <HardDrive size={48} className="center-icon" />
                        </div>
                        <h2 className="section-title">SYSTEM REQUIREMENTS</h2>
                        <div className="tech-grid">
                            <div className="tech-item">
                                <strong>Platform</strong>
                                <span>Windows 10/11 (64-bit)</span>
                            </div>
                            <div className="tech-item">
                                <strong>Runtime</strong>
                                <span>PowerShell 7.0+ or Flutter Runtime</span>
                            </div>
                            <div className="tech-item">
                                <strong>Cloud Support</strong>
                                <span>OneDrive, Google Drive (Local Sync)</span>
                            </div>
                            <div className="tech-item">
                                <strong>Integrity</strong>
                                <span>SHA-256 Bit-level Verification</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .duster-page {
                    --duster-primary: #00f3ff;
                    --duster-secondary: #bc13fe;
                    padding-bottom: 5rem;
                }
                
                .page-hero {
                    background: radial-gradient(circle at center, #050515 0%, #000 100%);
                    min-height: 70vh;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    overflow: hidden;
                }

                .hero-grid-bg {
                    position: absolute;
                    inset: 0;
                     background-image: 
                        linear-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 243, 255, 0.05) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
                    z-index: 0;
                }
                
                .hero-content { z-index: 2; max-width: 800px; padding: 2rem; }

                .duster-logo-container {
                    margin-bottom: 2rem;
                    display: flex;
                    justify-content: center;
                }

                .duster-hero-icon {
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, var(--duster-primary), var(--duster-secondary));
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .pulse-shadow {
                    box-shadow: 0 0 0 0 rgba(0, 243, 255, 0.7);
                    animation: pulse-shadow 2s infinite;
                }
                
                @keyframes pulse-shadow {
                    0% { box-shadow: 0 0 0 0 rgba(0, 243, 255, 0.7); }
                    70% { box-shadow: 0 0 0 20px rgba(0, 243, 255, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(0, 243, 255, 0); }
                }

                .diamond-shape {
                    font-size: 3rem;
                    font-weight: 900;
                    color: #fff;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                }

                .hero-title {
                     font-size: 3.5rem;
                     font-weight: 900;
                     letter-spacing: -1px;
                     margin-bottom: 1rem;
                }
                
                .text-highlight {
                    background: linear-gradient(to right, var(--duster-primary), var(--duster-secondary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .hero-subtitle {
                    font-size: 1.2rem;
                    letter-spacing: 2px;
                    color: #aaa;
                    margin-bottom: 2rem;
                }
                
                .glow-btn {
                    box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
                    border: 1px solid rgba(255,255,255,0.2);
                }
                
                .hero-cta { display: flex; gap: 1rem; justify-content: center; }

                .feature-icon-wrapper {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.05);
                    margin-bottom: 1.5rem;
                    color: var(--duster-primary);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                .feature-card { padding: 2rem; position: relative; overflow: hidden; }
                .card-bg-glow { position: absolute; inset: -50%; pointer-events: none; }
                
                .feature-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; color: #fff; font-weight: 700; }
                .feature-card p { font-size: 0.95rem; line-height: 1.6; color: #aaa; }

                .section-header { margin-bottom: 4rem; }
                .section-title { font-size: 2rem; font-weight: 800; letter-spacing: 1px; }
                .center-text { text-align: center; }
                .center-icon { display: block; margin: 0 auto 1.5rem auto; color: var(--duster-primary); }

                .tech-card { padding: 3rem; }
                
                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }

                .tech-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .tech-item strong {
                    font-size: 0.9rem;
                    color: var(--duster-primary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .tech-item span {
                    font-size: 1.1rem;
                    color: #fff;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .grid-cols-3, .tech-grid {
                        grid-template-columns: 1fr;
                    }
                    .hero-title { font-size: 2.5rem; }
                    .hero-cta { flex-direction: column; }
                }
            `}</style>
        </div>
    );
};

export default DiamondDevDuster;
