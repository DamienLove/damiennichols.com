import { motion } from 'framer-motion';
import { Shield, ChevronRight, Check, Download, Bell, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const PulseLinkPromo = () => {
    return (
        <div className="promo-page">
            <div className="promo-content">
                <motion.div
                    className="promo-hero"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="icon-wrapper">
                        <Shield size={64} color="#646cff" />
                    </div>
                    <h1>PulseLink</h1>
                    <h2>Your Voice-Activated Safety Companion</h2>
                    <p className="hero-tagline">
                        Emergency help, activated with just your voice. No need to touch your phone.
                    </p>

                    <div className="features-highlight">
                        <div className="feature-pill">
                            <Bell size={20} />
                            <span>Voice Triggers</span>
                        </div>
                        <div className="feature-pill">
                            <MapPin size={20} />
                            <span>Real-Time Location</span>
                        </div>
                        <div className="feature-pill">
                            <Users size={20} />
                            <span>Trusted Network</span>
                        </div>
                    </div>

                    <div className="benefits-list">
                        <h3>Why PulseLink?</h3>
                        <div className="benefit">
                            <Check size={20} className="check-icon" />
                            <div>
                                <strong>Hands-Free Emergency Alerts</strong>
                                <p>Use custom voice phrases to trigger alerts when you can't safely use your phone.</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <Check size={20} className="check-icon" />
                            <div>
                                <strong>Instant Location Sharing</strong>
                                <p>Your trusted contacts receive your real-time location automatically.</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <Check size={20} className="check-icon" />
                            <div>
                                <strong>Always Listening, Low Battery</strong>
                                <p>Advanced monitoring works in the background without draining your battery.</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <Check size={20} className="check-icon" />
                            <div>
                                <strong>Free to Start</strong>
                                <p>Get essential safety features with Beacon (Free), or upgrade to Pro for more.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-container">
                        <a href="https://play.google.com/store/apps/details?id=com.free.pulselink"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn btn-primary large">
                            <Download size={24} /> Download Free on Android
                        </a>
                        <p className="sub-cta">No credit card required • 100% Free to start</p>
                        <Link to="/pulselink" className="learn-more-link">
                            Explore the Full PulseLink Suite <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="social-proof">
                        <p>Trusted by thousands for personal safety</p>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .promo-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #1a1a2e 0%, #000 100%);
          padding: 2rem;
        }

        .promo-content {
          max-width: 600px;
          width: 100%;
        }

        .promo-hero {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 3rem;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .icon-wrapper {
          background: rgba(100,108,255,0.2);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          animation: pulse-glow 3s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(100,108,255,0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(100,108,255,0.6);
          }
        }

        .promo-hero h1 {
          font-size: 3rem;
          margin: 0 0 0.5rem 0;
          background: linear-gradient(to right, #646cff, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .promo-hero h2 {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-text);
          margin: 0 0 1rem 0;
        }

        .hero-tagline {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .features-highlight {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .feature-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(100, 108, 255, 0.1);
          border: 1px solid rgba(100, 108, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--color-text);
        }

        .feature-pill svg {
          color: var(--color-primary);
        }

        .benefits-list {
          text-align: left;
          margin-bottom: 3rem;
        }

        .benefits-list h3 {
          text-align: center;
          color: var(--color-primary);
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }

        .benefit {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(100, 108, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid var(--color-primary);
        }

        .check-icon {
          color: #12d622;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .benefit strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 0.3rem;
          color: var(--color-text);
        }

        .benefit p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .cta-container {
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 1rem;
           margin-bottom: 2rem;
        }

        .btn.large {
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn.large:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(100, 108, 255, 0.4);
        }

        .sub-cta {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        .learn-more-link {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.9rem;
          color: var(--color-primary);
          transition: gap 0.2s ease;
        }

        .learn-more-link:hover {
          gap: 0.5rem;
        }

        .social-proof {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-proof p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .promo-hero {
            padding: 2rem;
          }

          .promo-hero h1 {
            font-size: 2.5rem;
          }

          .promo-hero h2 {
            font-size: 1.25rem;
          }

          .features-highlight {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
        </div>
    );
};

export default PulseLinkPromo;
