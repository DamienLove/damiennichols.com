import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, BookOpen, Search, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Damien Nichols
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Innovator. Author. Software Engineer.
                    </motion.p>
                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link to="/pulselink" className="btn btn-primary">Explore Apps <ArrowRight size={18} /></Link>
                        <Link to="/books" className="btn btn-secondary">Read Books <BookOpen size={18} /></Link>
                    </motion.div>
                </div>

                {/* Abstract Background Elements */}
                <div className="hero-bg-glow"></div>
            </section>

            {/* Highlights Section */}
            <section className="highlights">
                <div className="container">
                    <Link to="/pulselink" className="highlight-card">
                        <Shield size={40} className="icon" />
                        <h3>PulseLink Application Suite</h3>
                        <p>Your personal safety companion and offline utility tools. Featuring PulseLink, Beacon, and RingerSong.</p>
                    </Link>

                    <Link to="/betamax" className="highlight-card">
                        <Smartphone size={40} className="icon" />
                        <h3>Beta Max</h3>
                        <p>Tomorrow's Features, Today. A gamified QA platform connecting Architects and Scouts.</p>
                    </Link>

                    <Link to="/qa-verify" className="highlight-card">
                        <Search size={40} className="icon" />
                        <h3>QA Verify & Track</h3>
                        <p>Streamlined bug verification and tracking for efficient development workflows.</p>
                    </Link>

                    <Link to="/books" className="highlight-card">
                        <BookOpen size={40} className="icon" />
                        <h3>Universe Connected</h3>
                        <p>Immerse yourself in the Universe Connected series. Sci-fi, adventure, and romance.</p>
                    </Link>
                </div>
            </section>

            <style>{`
        .home-page {
          width: 100%;
        }

        .hero {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
          text-align: center;
        }

        .hero-bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(100,108,255,0.15) 0%, rgba(0,0,0,0) 70%);
          border-radius: 50%;
          z-index: -1;
          animation: pulse-glow 4s infinite alternate;
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #a5a9ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.6rem;
          border-radius: 50px;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .btn-primary {
          background: var(--color-primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--color-primary-hover);
          color: white; /* Ensure text stays white */
        }

        .btn-secondary {
          background: rgba(255,255,255,0.1);
          color: var(--color-text);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.15);
          color: var(--color-text);
        }

        .highlights {
          padding: 4rem 2rem;
          background: var(--color-surface);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .highlight-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          padding: 2rem;
          border-radius: 16px;
          text-align: left;
          transition: transform 0.3s, border-color 0.3s;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          cursor: pointer;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        .highlight-card .icon {
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .highlight-card h3 {
          font-size: 1.25rem;
          margin: 0;
          color: var(--color-text);
        }

        .highlight-card p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          .hero-cta {
            flex-direction: column;
          }
        }
      `}</style>
        </div>
    );
};

export default Home;
