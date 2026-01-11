import { motion } from 'framer-motion';
import { Shield, Music, Activity, Check, Smartphone, Users, MapPin, Bell, Download, ExternalLink, Zap, Heart, Phone, Globe } from 'lucide-react';

const PulseLink = () => {
  return (
    <div className="page-container pulselink-page">
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            PulseLink Suite
          </motion.h1>
          <motion.p
            className="subtitle"
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
            <span className="badge">Android</span>
            <span className="badge">Safety</span>
            <span className="badge">Music</span>
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
        <section className="value-prop">
          <h2>Your Safety, Your Peace of Mind</h2>
          <p className="lead">
            The PulseLink Suite combines powerful safety features with innovative mobile utilities.
            Whether you need emergency alerts or a better ringtone experience, we've got you covered.
          </p>
        </section>

        {/* PulseLink & Beacon Section */}
        <section className="app-section pulselink-main" id="pulselink">
          <div className="app-header">
            <Shield size={48} className="app-icon" />
            <div>
              <h2>PulseLink & Beacon</h2>
              <p className="app-tagline">Your Discreet Safety Companion</p>
            </div>
          </div>

          <div className="feature-showcase">
            <div className="showcase-main">
              <h3>Built for Your Safety</h3>
              <p>
                PulseLink is designed to be your invisible safety net. In situations where you can't safely use your phone,
                PulseLink activates through <strong>voice triggers</strong>—discreet phrases that only you know.
                Your trusted contacts receive instant alerts with your real-time location, ensuring help is always just a word away.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <Bell size={32} className="feature-icon" />
                <h4>Voice Triggers</h4>
                <p>Activate emergency protocols hands-free with custom discreet phrases. Your phone listens even when the screen is off.</p>
              </div>

              <div className="feature-item">
                <Users size={32} className="feature-icon" />
                <h4>Trusted Contacts</h4>
                <p>Build your personal safety network. Automatically notify your chosen contacts when you need help.</p>
              </div>

              <div className="feature-item">
                <MapPin size={32} className="feature-icon" />
                <h4>Real-Time Location</h4>
                <p>Continuous GPS tracking and location updates sent directly to your trusted contacts during emergencies.</p>
              </div>

              <div className="feature-item">
                <Activity size={32} className="feature-icon" />
                <h4>Always Listening</h4>
                <p>Advanced background monitoring ensures PulseLink is ready when you need it, without draining your battery.</p>
              </div>
            </div>
          </div>

          {/* Edition Comparison */}
          <div className="editions-section">
            <h3>Choose Your Edition</h3>
            <div className="editions-grid">
              <div className="edition-card">
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

              <div className="edition-card featured">
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

              <div className="edition-card">
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
              <a href="https://github.com/DamienLove/pulselink/wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link-btn">
                <ExternalLink size={18} /> View User Guide
              </a>
              <a href="https://remove.damiennichols.com"
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link-btn">
                <Shield size={18} /> Remove My Data
              </a>
              <a href="/privacy"
                className="wiki-link-btn">
                <Shield size={18} /> Privacy Policy
              </a>
            </div>
          </div>
        </section>

        {/* RingerSong Section */}
        <section className="app-section ringersong-main" id="ringersong">
          <div className="app-header">
            <Music size={48} className="app-icon music-icon" />
            <div>
              <h2>RingerSong</h2>
              <p className="app-tagline">Your Ringtone, Reinvented</p>
            </div>
          </div>

          <div className="feature-showcase">
            <div className="showcase-main">
              <h3>Progressive Streaming Ringtones</h3>
              <p>
                Tired of hearing the same 30-second loop every time someone calls? <strong>RingerSong</strong> revolutionizes
                the ringtone experience with progressive streaming. Your ringtone plays the first 30 seconds of your chosen song,
                then the next 30 seconds the next time, and so on. Every call is a fresh musical experience.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-item">
                <Music size={32} className="feature-icon music" />
                <h4>Streaming Integration</h4>
                <p>Works seamlessly with Spotify, YouTube Music, and other major streaming services. Use your existing playlists.</p>
              </div>

              <div className="feature-item">
                <Zap size={32} className="feature-icon music" />
                <h4>Progressive Playback</h4>
                <p>Never hear the same loop twice. RingerSong remembers where you left off and continues from there.</p>
              </div>

              <div className="feature-item">
                <Phone size={32} className="feature-icon music" />
                <h4>Smart Caller ID</h4>
                <p>Identify spam calls and unknown numbers instantly. Know who's calling before you pick up.</p>
              </div>

              <div className="feature-item">
                <Heart size={32} className="feature-icon music" />
                <h4>Custom Playlists</h4>
                <p>Organize your tracks, create mood-based ringtone playlists, and manage playback settings with ease.</p>
              </div>
            </div>
          </div>

          <div className="ringersong-cta">
            <h3>Experience Music, One Call at a Time</h3>
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
              <a href="https://github.com/DamienLove/pulselink/wiki/RingerSong-Manual.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary">
                <ExternalLink size={18} /> Read the Manual
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h3>Ready to Upgrade Your Mobile Experience?</h3>
          <p>Join thousands of users who trust the PulseLink Suite for safety and innovation.</p>
          <div className="cta-buttons">
            <a href="/pulselink/promo" className="btn btn-primary btn-large">
              Learn More <ExternalLink size={18} />
            </a>
          </div>
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
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .portal-cta {
          margin-top: 2rem;
        }

        .btn-portal {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          background: linear-gradient(135deg, var(--color-primary), #00bcd4);
          color: white;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(100, 108, 255, 0.3);
        }

        .btn-portal:hover {
          color: white;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* Value Proposition */
        .value-prop {
          text-align: center;
          padding: 3rem 2rem;
          margin-bottom: 3rem;
        }

        .value-prop h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, var(--color-primary), #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .value-prop .lead {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* App Sections */
        .app-section {
          margin-bottom: 5rem;
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

        .app-header h2 {
          margin: 0;
        }

        .app-tagline {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin: 0.5rem 0 0 0;
        }

        .app-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .music-icon {
          color: #ff6b6b;
        }

        /* Feature Showcase */
        .feature-showcase {
          margin-bottom: 3rem;
        }

        .showcase-main {
          background: rgba(100, 108, 255, 0.05);
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid var(--color-primary);
          margin-bottom: 2rem;
        }

        .showcase-main h3 {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .showcase-main p {
          line-height: 1.8;
          color: var(--color-text-muted);
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(100, 108, 255, 0.15);
        }

        .feature-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .feature-icon.music {
          color: #ff6b6b;
        }

        .feature-item h4 {
          margin: 0 0 0.75rem 0;
          color: var(--color-text);
        }

        .feature-item p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Editions Section */
        .editions-section {
          margin: 3rem 0;
        }

        .editions-section h3 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--color-primary);
        }

        .editions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .edition-card {
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid var(--color-border);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
        }

        .edition-card.featured {
          border-color: var(--color-primary);
          background: radial-gradient(circle at top, rgba(100, 108, 255, 0.1), rgba(255, 255, 255, 0.03));
          transform: scale(1.05);
        }

        .edition-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 12px 32px rgba(100, 108, 255, 0.2);
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
        }

        .edition-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: var(--color-text-muted);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
        }

        .btn-outline:hover {
          background: var(--color-primary);
          color: white;
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
        }

        .wiki-link-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(100, 108, 255, 0.3);
        }

        .edition-note {
           font-size: 0.85rem;
           color: var(--color-text-muted);
           margin-top: 1rem;
           opacity: 0.8;
        }

        /* RingerSong CTA */
        .ringersong-cta {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 107, 107, 0.05));
          border-radius: 12px;
          margin-top: 2rem;
        }

        .ringersong-cta h3 {
          color: #ff6b6b;
          margin-bottom: 1.5rem;
        }

        /* Final CTA */
        .final-cta {
          text-align: center;
          padding: 4rem 2rem;
          background: radial-gradient(circle, rgba(100,108,255,0.15), transparent);
          border-radius: 16px;
          border: 2px solid var(--color-primary);
        }

        .final-cta h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .final-cta p {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .page-hero h1 {
            font-size: 2.5rem;
          }

          .value-prop h2 {
            font-size: 2rem;
          }

          .app-section {
            padding: 1.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .editions-grid {
            grid-template-columns: 1fr;
          }

          .edition-card.featured {
            transform: scale(1);
          }

          .app-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default PulseLink;
