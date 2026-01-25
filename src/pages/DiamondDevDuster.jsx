import React from 'react';
import { motion } from 'framer-motion';
import {
    Trash2,
    Search,
    Cloud,
    Shield,
    Zap,
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
            <section className="hero-section">
                <div className="hero-content">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="duster-logo-container"
                    >
                        <div className="duster-hero-icon">
                            <div className="diamond-shape">D</div>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Diamond Dev Duster
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Find it. Clean it. Cloud it.
                    </motion.p>

                    <motion.p
                        className="hero-description text-muted"
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
                        <button className="btn btn-primary">
                            Download Flutter App <Download size={18} />
                        </button>
                        <button className="btn btn-secondary">
                            View CLI Reference <Terminal size={18} />
                        </button>
                    </motion.div>
                </div>
                <div className="hero-bg-glow"></div>
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
                    <div className="section-header">
                        <h2 className="section-title">Intelligent Workspace Management</h2>
                        <p className="section-subtitle">Reclaim GIs of storage and keep your dev environment lean.</p>
                    </div>

                    <div className="grid-cols-3">
                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Search className="feature-icon" />
                            </div>
                            <h3>Deep Project Discovery</h3>
                            <p>Automatically detects git repos, package.json, pubspec.yaml, and Visual Studio solutions across your entire drive.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Trash2 className="feature-icon" />
                            </div>
                            <h3>Artifact Purging</h3>
                            <p>Safely remove node_modules, build directories, target folders, and .dart_tool with customizable dry-run and quarantine options.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper">
                                <Cloud className="feature-icon" />
                            </div>
                            <h3>Cloud Archiving</h3>
                            <p>One-tap project migration to OneDrive or Google Drive. Move inactive projects off-disk while maintaining quick access.</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="feature-card glass-card">
                            <div className="feature-icon-wrapper ink-bg">
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
                    <div className="glass-card tech-card">
                        <div className="tech-header">
                            <HardDrive size={32} />
                            <h2>System Requirements & Compatibility</h2>
                        </div>
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

                .duster-logo-container {
                    margin-bottom: 2rem;
                    display: flex;
                    justify-content: center;
                }

                .duster-hero-icon {
                    width: 120px;
                    height: 120px;
                    background: linear-gradient(135deg, var(--duster-primary), var(--duster-secondary));
                    border-radius: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 40px rgba(0, 243, 255, 0.3);
                }

                .diamond-shape {
                    font-size: 3rem;
                    font-weight: 900;
                    color: #fff;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                }

                .feature-icon-wrapper {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 243, 255, 0.1);
                    margin-bottom: 1.5rem;
                    color: var(--duster-primary);
                }

                .feature-card {
                    padding: 2.5rem;
                    text-align: left;
                    transition: transform 0.3s ease, border-color 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--duster-primary);
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .section-title {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    background: linear-gradient(to right, #fff, var(--duster-primary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tech-card {
                    padding: 3rem;
                }

                .tech-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    color: var(--duster-primary);
                }

                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
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
                }

                @media (max-width: 768px) {
                    .grid-cols-3 {
                        grid-template-columns: 1fr;
                    }
                    .section-title {
                        font-size: 2rem;
                    }
                    .tech-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default DiamondDevDuster;
