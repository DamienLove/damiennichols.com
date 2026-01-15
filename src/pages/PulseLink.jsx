import { motion } from 'framer-motion';
import { Shield, Music, Activity, Check, Smartphone, Users, MapPin, Bell, Download, ExternalLink, Zap, Heart, Phone, Globe, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PulseLink = () => {
  return (
    <div className="page-container pulselink-page">
      <section className="hero-section page-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <motion.h1
            className="hero-title text-gradient-pulse"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            PulseLink Suite
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Safety. Utility. Peace of Mind.
          </motion.p>
          <motion.div
            className="badges"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="badge badge-outline">Android</span>
            <span className="badge badge-outline">Safety</span>
            <span className="badge badge-outline">Music</span>
          </motion.div>
          <motion.div
            className="portal-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://pulselink.damiennichols.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-portal"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(100, 108, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={20} /> Open Web Portal
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <div className="content-wrapper">
        {/* Value Proposition */}
        <section className="value-prop section-spacing">
          <h2 className="section-title">Your Safety, Your Peace of Mind</h2>
          <p className="lead text-muted">
            The PulseLink Suite combines powerful safety features with innovative mobile utilities.
            Whether you need emergency alerts or a better ringtone experience, we've got you covered.
          </p>
        </section>

        {/* PulseLink & Beacon Section */}
        <section className="app-section pulselink-main section-spacing" id="pulselink">
          <div className="app-header">
            <Shield size={48} className="app-icon" />
            <div>
              <h2>PulseLink & Beacon</h2>
              <p className="app-tagline text-muted">Your Discreet Safety Companion</p>
            </div>
          </div>

          <div className="feature-showcase">
            <div className="showcase-main glass-card">
              <h3 className="text-primary">Built for Your Safety</h3>
              <p className="text-muted">
                PulseLink is designed to be your invisible safety net. In situations where you can't safely use your phone,
                PulseLink activates through <strong>voice triggers</strong>—discreet phrases that only you know.
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
                <p className="text-muted">Advanced background monitoring ensures PulseLink is ready when you need it, without draining your battery.</p>
              </div>
            </div>
          </div>

          {/* Edition Comparison */}
          <div className="editions-section section-spacing">
            <h3>Choose Your Edition</h3>
            <div className="editions-grid grid-cols-3">
              <div className="edition-card glass-card">
                <div className="edition-header">
                  <h4>PulseLink</h4>
                  <span className="price">Free</span>
                </div>
                <ul className="edition-features">
                  <li><Check size={16} /> Basic voice triggers</li>
                  <li><Check size={16} /> Up to 3 trusted contacts</li>
                  <li><Check size={16} /> Location sharing</li>
                  <li><Check size={16} /> Emergency alerts</li>
                </ul>
                <a href="https://play.google.com/store/apps/details?id=com.free.pulselink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline">
                  <Download size={18} /> Get PulseLink
                </a>
              </div>

              <div className="edition-card featured glass-card">
                <div className="edition-badge">Popular</div>
                <div className="edition-header">
                  <h4>Pro</h4>
                  <span className="price">Premium</span>
                </div>
                <ul className="edition-features">
                  <li><Check size={16} /> Advanced voice triggers</li>
                  <li><Check size={16} /> Unlimited trusted contacts</li>
                  <li><Check size={16} /> Priority location updates</li>
                  <li><Check size={16} /> Custom alert messages</li>
                  <li><Check size={16} /> Enhanced battery optimization</li>
                </ul>
                <a href="https://play.google.com/store/apps/details?id=com.pulselink.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  <Download size={18} /> Get Pro
                </a>
              </div>

              <div className="edition-card glass-card">
                <div className="edition-header">
                  <h4>Premium</h4>
                  <span className="price">Ultimate</span>
                </div>
                <ul className="edition-features">
                  <li><Check size={16} /> Everything in Pro</li>
                  <li><Check size={16} /> Multi-device support</li>
                  <li><Check size={16} /> Advanced analytics</li>
                  <li><Check size={16} /> Custom integrations</li>
                  <li><Check size={16} /> Priority support</li>
                </ul>
                <button className="btn btn-outline" style={{ cursor: 'default', opacity: 0.7 }}>
                  <Zap size={18} /> Upgrade in App
                </button>
                <p className="edition-note">Available via subscription in Beacon or Pro</p>
              </div>
            </div>
          </div>

          <div className="wiki-link-section">
            <div className="resource-links">
              <Link to="/pulselink/wiki/guide"
                className="wiki-link-btn">
                <ExternalLink size={18} /> View User Guide
              </Link>
              <button
                onClick={() => {
                  if (window.confirm("⚠️ WARNING: Are you sure you want to proceed? This action cannot be undone.")) {
                    window.open("https://remove.damiennichols.com", "_blank");
                  }
                }}
                className="wiki-link-btn danger-btn">
                <AlertTriangle size={18} /> Remove My Data
              </button>
              <Link to="/privacy"
                className="wiki-link-btn">
                <Shield size={18} /> Privacy Policy
              </Link>
            </div>
          </div>
        </section>

        {/* RingerSong Section */}
        <section className="app-section ringersong-main section-spacing" id="ringersong">
          <div className="app-header">
            <Music size={48} className="app-icon music-icon" />
            <div>
              <h2>RingerSong</h2>
              <p className="app-tagline text-muted">Your Ringtone, Reinvented</p>
            </div>
          </div>

          <div className="feature-showcase">
            <div className="showcase-main glass-card">
              <h3 className="music-text">Progressive Streaming Ringtones</h3>
              <p className="text-muted">
                Tired of hearing the same 30-second loop every time someone calls? <strong>RingerSong</strong> revolutionizes
                the ringtone experience with progressive streaming. Your ringtone plays the first 30 seconds of your chosen song,
                then the next 30 seconds the next time, and so on. Every call is a fresh musical experience.
              </p>
            </div>

            <div className="grid-cols-2 features-grid">
              <div className="feature-item glass-card">
                <Music size={32} className="feature-icon music" />
                <h4>Streaming Integration</h4>
                <p className="text-muted">Works seamlessly with Spotify, YouTube Music, and other major streaming services. Use your existing playlists.</p>
              </div>

              <div className="feature-item glass-card">
                <Zap size={32} className="feature-icon music" />
                <h4>Progressive Playback</h4>
                <p className="text-muted">Never hear the same loop twice. RingerSong remembers where you left off and continues from there.</p>
              </div>

              <div className="feature-item glass-card">
                <Phone size={32} className="feature-icon music" />
                <h4>Smart Caller ID</h4>
                <p className="text-muted">Identify spam calls and unknown numbers instantly. Know who's calling before you pick up.</p>
              </div>

              <div className="feature-item glass-card">
                <Heart size={32} className="feature-icon music" />
                <h4>Custom Playlists</h4>
                <p className="text-muted">Organize your tracks, create mood-based ringtone playlists, and manage playback settings with ease.</p>
              </div>
            </div>
          </div>

          <div className="ringersong-cta glass-card">
            <h3 className="music-text">Experience Music, One Call at a Time</h3>
            <div className="cta-buttons">
              <motion.a
                href="https://pulselink.damiennichols.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-portal"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={20} /> Open Web Portal
              </motion.a>
              <a href="https://play.google.com/store/apps/details?id=com.RingerSong.free"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large">
                <Download size={20} /> Download RingerSong
              </a>
              <Link to="/pulselink/wiki/ringersong"
                className="btn btn-secondary">
                <ExternalLink size={18} /> Read the Manual
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta section-spacing">
          <h3>Ready to Upgrade Your Mobile Experience?</h3>
          <p className="text-muted">Join thousands of users who trust the PulseLink Suite for safety and innovation.</p>
          <div className="cta-buttons">
            <a href="/pulselink/promo" className="btn btn-primary btn-large">
              Learn More <ExternalLink size={18} />
            </a>
          </div>
        </section>
      </div>

      <style>{`
        /* Hero Overrides */
        .page-hero {
          background: radial-gradient(circle at center, #1a1a2e 0%, #000 100%);
          height: 50vh;
        }

        .text-gradient-pulse {
          background: linear-gradient(to right, #646cff, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .portal-cta {
          margin-top: 2rem;
        }

        .btn-portal {
          background: linear-gradient(135deg, var(--color-primary), #00bcd4);
          color: white;
          border: none;
        }

        /* App Sections */
        .app-section {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .app-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .app-header {
             flex-direction: column;
             text-align: center;
          }
        }

        .app-header h2 {
          margin: 0;
        }

        .app-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .music-icon, .music-text, .feature-icon.music {
          color: #ff6b6b;
        }

        /* Feature Showcase */
        .showcase-main {
          padding: 2rem;
          border-left: 4px solid var(--color-primary);
          margin-bottom: 2rem;
          background: rgba(100, 108, 255, 0.05); /* Slight tint override */
        }

        .feature-item {
          text-align: center;
          padding: 1.5rem;
        }

        .feature-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        /* Editions Section */
        .editions-section h3 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--color-primary);
        }

        .edition-card {
           display: flex;
           flex-direction: column;
           height: 100%;
           border-width: 2px;
        }

        .edition-card.featured {
          border-color: var(--color-primary);
          background: radial-gradient(circle at top, rgba(100, 108, 255, 0.1), rgba(255, 255, 255, 0.03));
          transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
           .edition-card.featured { transform: scale(1); }
        }

        .edition-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--color-primary);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .edition-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
        }

        .edition-header h4 {
          font-size: 1.5rem;
          margin: 0 0 0.5rem 0;
        }

        .price {
          color: var(--color-primary);
          font-weight: 600;
        }

        .edition-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          text-align: left;
           flex: 1;
        }

        .edition-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: var(--color-text-muted);
        }

        .edition-note {
           font-size: 0.85rem;
           margin-top: 1rem;
           opacity: 0.8;
           color: var(--color-text-muted);
        }

        /* Wiki Link Section */
        .wiki-link-section {
          text-align: center;
          margin-top: 3rem;
        }

        .resource-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .wiki-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: rgba(100, 108, 255, 0.1);
          border: 1px solid var(--color-primary);
          border-radius: 8px;
          color: var(--color-primary);
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .wiki-link-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(100, 108, 255, 0.3);
        }

        .wiki-link-btn.danger-btn {
          border-color: #ff4444;
          color: #ff4444;
          background: rgba(255, 68, 68, 0.1);
        }
        
        .wiki-link-btn.danger-btn:hover {
          background: #ff4444;
          color: white;
          box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
        }

        /* Value Prop */
        .value-prop {
           text-align: center;
        }
        
        .value-prop h2 {
           font-size: 2.5rem;
           margin-bottom: 1rem;
           background: linear-gradient(to right, var(--color-primary), #00bcd4);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
        
        .lead {
           font-size: 1.2rem;
           max-width: 800px;
           margin: 0 auto;
           line-height: 1.8;
        }

        /* Ringersong CTA */
        .ringersong-cta {
          text-align: center;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 107, 107, 0.05));
          margin-top: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        /* Final CTA */
        .final-cta {
          text-align: center;
          padding: 4rem 2rem;
          background: radial-gradient(circle, rgba(100,108,255,0.15), transparent);
          border-radius: 16px;
          border: 2px solid var(--color-primary);
        }
        
        .final-cta h3 { font-size: 2rem; margin-bottom: 1rem; }

      `}</style>
    </div>
  );
};

export default PulseLink;
