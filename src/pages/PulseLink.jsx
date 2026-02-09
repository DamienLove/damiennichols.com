import { motion } from 'framer-motion';
import { Shield, Music, Activity, Check, Smartphone, Users, MapPin, Bell, Download, ExternalLink, Zap, Heart, Phone, Globe, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PulseLink = () => {
  return (
    <div className="page-container pulselink-page">
      <section className="hero-section page-hero">
        <div className="hero-grid-bg"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <div className="status-badge">
            <span className="status-dot animate-pulse"></span>
            SECURE CONNECTION ACTIVE
          </div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            SOTEXT<span className="text-highlight">.APP</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Smart Messaging // Safety // Connection
          </motion.p>

          <motion.div
            className="badges"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="badge badge-outline"><Shield size={14} /> Android Native</span>
            <span className="badge badge-outline"><Activity size={14} /> Real-Time</span>
            <span className="badge badge-outline"><Music size={14} /> Audio Engine</span>
          </motion.div>

          <motion.div
            className="portal-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://sotext.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary glow-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={20} /> Launch SoText.app
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <div className="content-wrapper">
        {/* Value Proposition */}
        <section className="value-prop section-spacing">
          <h2 className="section-title">Smart Messaging, Built for Safety</h2>
          <p className="lead text-muted">
            SoText.app combines powerful messaging with innovative safety features.
            Beacon keeps you connected to your trusted contacts. PulseLink extends your reach.
          </p>
        </section>

        {/* SoText.app & Beacon Section */}
        <section className="app-section pulselink-main section-spacing" id="sotext">
          <div className="app-header center-text">
            <Shield size={64} className="app-icon" />
            <div>
              <h2>SoText.app // Beacon</h2>
              <p className="app-tagline text-muted">Your Smart Safety Companion</p>
            </div>
          </div>

          <div className="feature-showcase">
            <div className="showcase-main glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.1), transparent 70%)' }}></div>
              <h3 className="text-primary">Beacon: Always There When You Need It</h3>
              <p className="text-muted">
                Beacon is your invisible safety net within SoText.app. In situations where you can't safely use your phone,
                Beacon activates through <strong>voice triggers</strong>—discreet phrases that only you know.
                Your trusted contacts receive instant alerts with your real-time location, ensuring help is always just a word away.
              </p>
            </div>

            <div className="grid-cols-2 features-grid">
              <div className="feature-item glass-card">
                <Bell size={32} className="feature-icon" />
                <h4>Voice Triggers</h4>
                <p className="text-muted">Activate emergency protocols hands-free with custom discreet phrases. Your phone listens even when the screen is off.</p>
              </div>

              <div className="feature-item glass-card">
                <Users size={32} className="feature-icon" />
                <h4>Trusted Contacts</h4>
                <p className="text-muted">Build your personal safety network. Automatically notify your chosen contacts when you need help.</p>
              </div>

              <div className="feature-item glass-card">
                <MapPin size={32} className="feature-icon" />
                <h4>Real-Time Location</h4>
                <p className="text-muted">Continuous GPS tracking and location updates sent directly to your trusted contacts during emergencies.</p>
              </div>

              <div className="feature-item glass-card">
                <Activity size={32} className="feature-icon" />
                <h4>Always Listening</h4>
                <p className="text-muted">Advanced background monitoring ensures Beacon is ready when you need it, without draining your battery.</p>
              </div>
            </div>
          </div>

          {/* Edition Comparison */}
          <div className="editions-section section-spacing">
            <h3 className="center-text section-title-small">SELECT MODULE TIER</h3>
            <div className="editions-grid grid-cols-3">
              <div className="edition-card glass-card">
                <div className="edition-header">
                  <h4>SoText Free</h4>
                  <span className="price">Free</span>
                </div>
                <ul className="edition-features">
                  <li><Check size={16} /> Basic messaging</li>
                  <li><Check size={16} /> Beacon voice triggers</li>
                  <li><Check size={16} /> Up to 3 trusted contacts</li>
                  <li><Check size={16} /> Location sharing</li>
                </ul>
                <a href="https://play.google.com/store/apps/details?id=sotext.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline full-width">
                  <Download size={18} /> Get SoText
                </a>
              </div>

              <div className="edition-card featured glass-card">
                <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(0, 243, 255, 0.2), transparent 70%)' }}></div>
                <div className="edition-badge">POPULAR</div>
                <div className="edition-header">
                  <h4>Pro</h4>
                  <span className="price text-highlight">Premium</span>
                </div>
                <ul className="edition-features">
                  <li><Check size={16} /> Everything in Free</li>
                  <li><Check size={16} /> Advanced Beacon triggers</li>
                  <li><Check size={16} /> Unlimited trusted contacts</li>
                  <li><Check size={16} /> Priority location updates</li>
                  <li><Check size={16} /> Ad-free experience</li>
                </ul>
                <a href="https://play.google.com/store/apps/details?id=sotext.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary full-width glow-btn">
                  <Download size={18} /> Get Pro
                </a>
              </div>

              <div className="edition-card glass-card">
                <div className="edition-header">
                  <h4>Premium + PulseLink</h4>
                  <span className="price">Ultimate</span>
                </div>
                <ul className="edition-features">
                  <li><Check size={16} /> Everything in Pro</li>
                  <li><Check size={16} /> PulseLink add-in enabled</li>
                  <li><Check size={16} /> Multi-device support</li>
                  <li><Check size={16} /> Advanced location lookup</li>
                  <li><Check size={16} /> Priority support</li>
                </ul>
                <button className="btn btn-outline full-width" style={{ cursor: 'default', opacity: 0.7 }}>
                  <Zap size={18} /> Upgrade in App
                </button>
                <p className="edition-note center-text">Available via subscription</p>
              </div>
            </div>
          </div>

          <div className="wiki-link-section">
            <div className="resource-links">
              <Link to="/sotext/wiki/guide"
                className="btn btn-secondary">
                <ExternalLink size={18} /> View User Guide
              </Link>
              <button
                onClick={() => {
                  if (window.confirm("⚠️ WARNING: Are you sure you want to proceed? This action cannot be undone.")) {
                    window.open("https://remove.damiennichols.com", "_blank");
                  }
                }}
                className="btn btn-danger">
                <AlertTriangle size={18} /> Remove My Data
              </button>
              <Link to="/privacy"
                className="btn btn-text">
                <Shield size={18} /> Privacy Policy
              </Link>
            </div>
          </div>
        </section>

        {/* RingerSong Section */}
        <section className="app-section ringersong-main section-spacing" id="ringersong">
          <div className="app-header center-text">
            <Music size={64} className="app-icon music-icon" />
            <div>
              <h2>RingerSong</h2>
              <p className="app-tagline text-muted">Your Ringtone, Reinvented</p>
            </div>
          </div>

          <div className="feature-showcase">
            <div className="showcase-main glass-card">
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 107, 107, 0.15), transparent 70%)' }}></div>
              <h3 className="music-text">Progressive Streaming Ringtones</h3>
              <p className="text-muted">
                Tired of hearing the same 30-second loop? <strong>RingerSong</strong> revolutionizes
                the experience. Your ringtone plays the first 30 seconds, then the next 30 seconds next time.
                Every call is a fresh musical experience.
              </p>
            </div>

            <div className="grid-cols-2 features-grid">
              <div className="feature-item glass-card">
                <Music size={32} className="feature-icon music" />
                <h4>Streaming Integration</h4>
                <p className="text-muted">Works seamlessly with Spotify, YouTube Music, and other major streaming services.</p>
              </div>

              <div className="feature-item glass-card">
                <Zap size={32} className="feature-icon music" />
                <h4>Progressive Playback</h4>
                <p className="text-muted">Never hear the same loop twice. RingerSong remembers where you left off.</p>
              </div>

              <div className="feature-item glass-card">
                <Phone size={32} className="feature-icon music" />
                <h4>Smart Caller ID</h4>
                <p className="text-muted">Identify spam calls instantly. Know who's calling before you pick up.</p>
              </div>

              <div className="feature-item glass-card">
                <Heart size={32} className="feature-icon music" />
                <h4>Custom Playlists</h4>
                <p className="text-muted">Create mood-based ringtone playlists and manage playback settings with ease.</p>
              </div>
            </div>
          </div>

          <div className="ringersong-cta glass-card center-text">
            <h3 className="music-text">Experience Music, One Call at a Time</h3>
            <div className="cta-buttons">
              <motion.a
                href="https://sotext.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
              >
                <Globe size={20} /> Open SoText.app
              </motion.a>
              <a href="https://play.google.com/store/apps/details?id=com.RingerSong.free"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline">
                <Download size={20} /> Download RingerSong
              </a>
              <Link to="/sotext/wiki/ringersong" className="btn btn-secondary">
                <ExternalLink size={18} /> Read Manual
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta section-spacing center-text">
          <h3>Ready to Upgrade Your Mobile Experience?</h3>
          <p className="text-muted">Join thousands of users who trust the SoText.app Suite.</p>
          <div className="cta-buttons">
            <a href="/sotext/promo" className="btn btn-primary glow-btn">
              Learn More <ExternalLink size={18} />
            </a>
          </div>
        </section>
      </div>

      <style>{`
        .pulselink-page {
          --page-highlight: var(--neon-cyan);
        }

        .page-hero {
          background: radial-gradient(circle at center, #050510 0%, #000 100%);
          height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
           background-image: 
            linear-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
          z-index: 0;
        }

        .hero-content { z-index: 2; max-width: 800px; padding: 2rem; }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 243, 255, 0.1);
          border: 1px solid rgba(0, 243, 255, 0.3);
          border-radius: 20px;
          color: var(--neon-cyan);
          font-size: 0.7rem;
          letter-spacing: 2px;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .status-dot { width: 6px; height: 6px; background: var(--neon-cyan); border-radius: 50%; box-shadow: 0 0 8px var(--neon-cyan); }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -2px;
          margin-bottom: 1rem;
        }

        .text-highlight {
           color: var(--neon-cyan);
           text-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
        }

        .hero-subtitle { font-size: 1.25rem; color: #aaa; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 2rem; }

        .badges { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
        .badge-outline { border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.3); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; display: flex; align-items: center; gap: 0.5rem; color: #ccc; }

        .glow-btn {
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
          border: 1px solid rgba(255,255,255,0.2);
        }

        /* Feature section */
        .section-spacing { padding: 5rem 5%; }
        .section-title { font-size: 2.5rem; margin-bottom: 1rem; }
        .center-text { text-align: center; }
        .lead { font-size: 1.2rem; max-width: 700px; margin: 0 auto; line-height: 1.6; }

        .app-header { margin-bottom: 3rem; }
        .app-icon { color: var(--neon-cyan); margin-bottom: 1rem; filter: drop-shadow(0 0 10px rgba(0, 243, 255, 0.5)); }
        .app-tagline { font-size: 1.1rem; letter-spacing: 1px; }

        .showcase-main { padding: 3rem; margin-bottom: 2rem; position: relative; overflow: hidden; border-left: 4px solid var(--neon-cyan); }
        .card-bg-glow { position: absolute; inset: -50%; pointer-events: none; }
        
        .text-primary { color: var(--neon-cyan) !important; }

        .grid-cols-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        .grid-cols-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }

        .feature-item { padding: 2rem; text-align: center; transition: transform 0.3s; }
        .feature-item:hover { transform: translateY(-5px); border-color: var(--neon-cyan); }
        .feature-icon { color: var(--neon-cyan); margin-bottom: 1rem; }

        /* Editions */
        .editions-section { margin-top: 4rem; }
        .section-title-small { font-size: 1rem; color: #888; letter-spacing: 2px; margin-bottom: 2rem; font-weight: 700; }
        
        .edition-card { padding: 2rem; display: flex; flex-direction: column; position: relative; }
        .edition-header { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1.5rem; margin-bottom: 1.5rem; }
        .edition-header h4 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .price { font-size: 1.1rem; font-weight: 700; color: #fff; }
        
        .edition-features { list-style: none; padding: 0; margin: 0 0 2rem 0; flex: 1; }
        .edition-features li { display: flex; gap: 0.75rem; padding: 0.5rem 0; color: #ccc; font-size: 0.95rem; }
        
        .edition-badge { position: absolute; top: -12px; right: 20px; background: var(--neon-cyan); color: #000; font-weight: 800; font-size: 0.7rem; padding: 4px 10px; border-radius: 10px; }
        .featured { border-color: var(--neon-cyan); transform: scale(1.02); }

        .full-width { width: 100%; display: flex; justify-content: center; align-items: center; gap: 0.5rem; }

        /* Wiki Links */
        .resource-links { display: flex; justify-content: center; gap: 1rem; margin-top: 3rem; flex-wrap: wrap; }
        .btn-danger { background: rgba(255, 68, 68, 0.1); color: #ff4444; border: 1px solid #ff4444; padding: 0.6em 1.2em; border-radius: 8px; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s; }
        .btn-danger:hover { background: #ff4444; color: white; }
        .btn-text { background: transparent; color: #888; border: none; padding: 0.6em 1.2em; display: flex; align-items: center; gap: 0.5rem; }
        .btn-text:hover { color: #fff; }

        /* Ringersong overrides */
        .music-icon, .music-text, .feature-icon.music { color: #ff6b6b !important; }
        .ringersong-main .app-icon { color: #ff6b6b; filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.5)); }
        .ringersong-main .feature-item:hover { border-color: #ff6b6b; }
        .ringersong-cta { padding: 3rem; margin-top: 3rem; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
        
        .cta-buttons { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }

        @media (max-width: 768px) {
           .hero-title { font-size: 2.5rem; }
           .grid-cols-3, .grid-cols-2 { grid-template-columns: 1fr; }
           .editions-grid { gap: 2rem; }
           .featured { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default PulseLink;
