
import { motion } from 'framer-motion';
import { Glasses, Box, Layers, Cpu, Globe, Crosshair, ArrowRight, Video, Map, Share2, Eye } from 'lucide-react';

const AROS = () => {
    return (
        <div className="page-container aros-page">
            <section className="hero-section page-hero">
                <div className="hero-grid-bg"></div>
                <div className="hero-content">
                    <motion.div
                        className="status-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="status-dot animate-pulse"></span>
                        SPATIAL COMPUTING ACTIVE
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        AROS <span className="text-highlight">XREAL</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        The Augmented Reality Operating System
                    </motion.p>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        A unified spatial interface for XREAL glasses. Interact with your digital world overlaying the physical.
                    </motion.p>
                </div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="ar-overlay">
                        <div className="hud-ring"></div>
                        <div className="hud-crosshair"><Crosshair size={32} /></div>
                    </div>
                </motion.div>
            </section>

            <section className="features-section section-spacing">
                <div className="content-wrapper">
                    <div className="section-header center-text">
                        <h2 className="section-title">Spatial Capabilities</h2>
                        <p className="text-muted">Next-generation AR interactions.</p>
                    </div>

                    <div className="grid-cols-3">
                        <motion.div className="feature-card glass-card" whileHover={{ y: -5 }}>
                            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 160, 0, 0.15), transparent 70%)' }}></div>
                            <div className="icon-wrapper gold">
                                <Box size={32} />
                            </div>
                            <h3>Spatial Windows</h3>
                            <p>Pin applications in 3D space around you. Persistent logic keeps your workspace anchored.</p>
                        </motion.div>

                        <motion.div className="feature-card glass-card" whileHover={{ y: -5 }}>
                            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 160, 0, 0.15), transparent 70%)' }}></div>
                            <div className="icon-wrapper gold">
                                <Glasses size={32} />
                            </div>
                            <h3>XREAL Integration</h3>
                            <p>Native support for XREAL Air and Light glasses. 3DoF and 6DoF tracking capabilities.</p>
                        </motion.div>

                        <motion.div className="feature-card glass-card" whileHover={{ y: -5 }}>
                            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 160, 0, 0.15), transparent 70%)' }}></div>
                            <div className="icon-wrapper gold">
                                <Layers size={32} />
                            </div>
                            <h3>Hand Tracking</h3>
                            <p>Interact with virtual elements using natural hand gestures. Pinch to click, swipe to scroll.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .aros-page {
                    --aros-gold: #ffa500;
                    --aros-dark: #1a1005;
                }

                .page-hero {
                    background: radial-gradient(circle at center, var(--aros-dark) 0%, #000 100%);
                    position: relative;
                    overflow: hidden;
                }

                .text-highlight {
                    color: var(--aros-gold);
                    text-shadow: 0 0 20px rgba(255, 165, 0, 0.5);
                }

                .status-badge {
                    color: var(--aros-gold);
                    border-color: rgba(255, 165, 0, 0.3);
                    background: rgba(255, 165, 0, 0.1);
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    border-width: 1px;
                    border-style: solid;
                    margin-bottom: 2rem;
                    font-size: 0.8rem;
                    letter-spacing: 2px;
                }

                .status-dot {
                    background-color: var(--aros-gold);
                    box-shadow: 0 0 10px var(--aros-gold);
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                }

                .ar-overlay {
                    width: 300px;
                    height: 300px;
                    border: 1px solid rgba(255, 165, 0, 0.3);
                    border-radius: 50%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: rotate-hud 20s linear infinite;
                }

                .hud-ring {
                    position: absolute;
                    inset: -20px;
                    border: 1px dashed rgba(255, 165, 0, 0.2);
                    border-radius: 50%;
                }

                .hud-crosshair {
                    color: var(--aros-gold);
                    animation: pulse-hud 2s infinite;
                }

                @keyframes rotate-hud {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes pulse-hud {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }

                .icon-wrapper.gold {
                    color: var(--aros-gold);
                    border-color: rgba(255, 165, 0, 0.3);
                    background: rgba(255, 165, 0, 0.1);
                }
                
                .glass-card:hover .icon-wrapper.gold {
                    background: rgba(255, 165, 0, 0.2);
                    box-shadow: 0 0 20px rgba(255, 165, 0, 0.2);
                }
            `}</style>
        </div>
    );
};

export default AROS;
