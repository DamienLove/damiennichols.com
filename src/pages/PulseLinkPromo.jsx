import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, ChevronRight } from 'lucide-react';
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
                    <h2>Your Personal Safety Network.</h2>

                    <div className="benefits-list">
                        <div className="benefit">
                            <strong>Voice Activated</strong>
                            <p>Trigger alerts without touching your phone.</p>
                        </div>
                        <div className="benefit">
                            <strong>Real-Time Tracking</strong>
                            <p>Share live location with trusted contacts.</p>
                        </div>
                        <div className="benefit">
                            <strong>Peace of Mind</strong>
                            <p>Know that help is a phrase away.</p>
                        </div>
                    </div>

                    <div className="cta-container">
                        <button className="btn btn-primary large">Get Started for Free</button>
                        <p className="sub-cta">Available on Android</p>
                        <Link to="/pulselink" className="learn-more-link">Learn about the full Suite <ChevronRight size={16} /></Link>
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
          max-width: 500px;
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
          background: rgba(100,108,255,0.1);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }

        .promo-hero h1 {
          font-size: 3rem;
          margin: 0;
          background: linear-gradient(to right, #646cff, #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .promo-hero h2 {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--color-text-muted);
          margin-bottom: 3rem;
        }

        .benefits-list {
          text-align: left;
          margin-bottom: 3rem;
        }

        .benefit {
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 3px solid var(--color-primary);
        }

        .benefit strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }

        .benefit p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .cta-container {
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 1rem;
        }

        .btn.large {
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
          width: 100%;
        }

        .sub-cta {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .learn-more-link {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          font-size: 0.9rem;
        }
      `}</style>
        </div>
    );
};

export default PulseLinkPromo;
