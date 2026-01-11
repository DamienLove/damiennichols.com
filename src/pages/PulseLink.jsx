import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Music, Activity, Check, Smartphone } from 'lucide-react';

const PulseLink = () => {
    return (
        <div className="page-container pulselink-page">
            <section className="page-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-content"
                >
                    <h1>PulseLink Suite</h1>
                    <p className="subtitle">Safety. Utility. Peace of Mind.</p>
                    <div className="badges">
                        <span className="badge">Android</span>
                        <span className="badge">Safety</span>
                        <span className="badge">Music</span>
                    </div>
                </motion.div>
            </section>

            <div className="content-wrapper">
                <section className="app-section" id="pulselink">
                    <div className="app-header">
                        <Shield size={48} className="app-icon" />
                        <h2>PulseLink & Beacon</h2>
                    </div>
                    <div className="app-grid">
                        <div className="feature-block">
                            <h3><Activity size={20} /> Personal Safety Companion</h3>
                            <p>
                                PulseLink (including Beacon and Pro/Premium editions) is designed to be your discreet safety net.
                                With features like <strong>Voice Triggers</strong>, you can activate safety protocols without touching your phone.
                            </p>
                            <ul className="feature-list">
                                <li><Check size={16} /> <strong>Voice Activation:</strong> Set discreet phrases to trigger alerts.</li>
                                <li><Check size={16} /> <strong>Trusted Contacts:</strong> Automatically notify your safety network.</li>
                                <li><Check size={16} /> <strong>Location Sharing:</strong> Real-time location updates during emergencies.</li>
                            </ul>
                            <a href="https://github.com/DamienLove/pulselink/wiki" target="_blank" rel="noopener noreferrer" className="wiki-link">View Wiki & Manual &rarr;</a>
                        </div>
                    </div>
                </section>

                <section className="app-section" id="ringersong">
                    <div className="app-header">
                        <Music size={48} className="app-icon" />
                        <h2>RingerSong</h2>
                    </div>
                    <div className="app-grid">
                        <div className="feature-block">
                            <h3><Music size={20} /> The Ultimate Offline Music Tool</h3>
                            <p>
                                Take control of your audio experience. RingerSong allows you to manage offline music from sources like Spotify and YouTube Music, plus advanced Caller ID features.
                            </p>
                            <ul className="feature-list">
                                <li><Check size={16} /> <strong>Offline Playback:</strong> Download and manage your favorite tracks.</li>
                                <li><Check size={16} /> <strong>Caller ID:</strong> Identify spam and unknown callers instantly.</li>
                                <li><Check size={16} /> <strong>Custom Ringtones:</strong> Set any track as your ringtone easily.</li>
                            </ul>
                            <a href="https://github.com/DamienLove/pulselink/wiki/RingerSong-Manual.md" target="_blank" rel="noopener noreferrer" className="wiki-link">View Manual &rarr;</a>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <h3>Ready to upgrade your mobile experience?</h3>
                    <p>Get the PulseLink Suite today.</p>
                    <button className="btn btn-primary">Download Now</button>
                </section>
            </div>

            <style>{`
        .page-container {
          width: 100%;
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .page-hero {
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #1a1a2e 0%, #000 100%);
          text-align: center;
          position: relative;
        }

        .page-hero h1 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #646cff, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .badge {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
        }

        .app-section {
          margin-bottom: 4rem;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .app-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1rem;
        }

        .app-icon {
          color: var(--color-accent);
        }

        .feature-block h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: var(--color-text-muted);
        }

        .feature-list li strong {
          color: var(--color-text);
        }

        .wiki-link {
          display: inline-block;
          margin-top: 1rem;
          font-size: 0.9rem;
          color: var(--color-primary);
        }

        .cta-section {
          text-align: center;
          padding: 3rem;
          background: var(--glass-bg);
          border-radius: 16px;
          margin-top: 2rem;
        }
      `}</style>
        </div>
    );
};

export default PulseLink;
