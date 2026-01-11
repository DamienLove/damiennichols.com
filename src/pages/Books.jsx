import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, Heart } from 'lucide-react';

const Books = () => {
    return (
        <div className="page-container books-page">
            <section className="page-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-content"
                >
                    <h1>Literary Works</h1>
                    <p className="subtitle">Universes waiting to be explored.</p>
                </motion.div>
            </section>

            <div className="content-wrapper">

                {/* Universe Connected Series */}
                <section className="book-section">
                    <div className="section-header">
                        <Star size={32} className="section-icon" />
                        <h2>Universe Connected</h2>
                    </div>
                    <div className="book-card highlight">
                        <div className="book-info">
                            <h3>Universe Connected for Everyone</h3>
                            <p className="status-tag">Coming Soon - {new Date().getFullYear()}</p>
                            <p className="book-desc">
                                The highly anticipated release. A journey through connected realms that challenges our understanding of reality.
                                This manuscript represents the full vision of the Universe Connected saga.
                            </p>
                            <div className="book-actions">
                                <a href="/uc4e/universe-connected-for-everyone-full-unreleased.pdf" target="_blank" className="btn btn-primary">Read Preview (PDF)</a>
                                <a href="https://sites.google.com/dmnlat.com/universeconnected/universe-connected-for-everyone" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Site</a>
                            </div>
                        </div>
                        {/* dynamic placeholder for book cover if no image */}
                        <div className="book-cover-placeholder gradient-1">
                            <span>Cover Art</span>
                        </div>
                    </div>

                    <div className="book-grid">
                        <div className="book-card">
                            <h3>Universe Connected</h3>
                            <p className="book-desc">The original edition that started it all.</p>
                            <a href="https://sites.google.com/dmnlat.com/universeconnected/universe-connected-original" target="_blank" rel="noopener noreferrer" className="link-text">Learn More &rarr;</a>
                        </div>
                    </div>
                </section>

                {/* Romance Section */}
                <section className="book-section">
                    <div className="section-header">
                        <Heart size={32} className="section-icon" />
                        <h2>Romance & Other Works</h2>
                    </div>
                    <p className="section-intro">Heartfelt stories of love, passion, and human connection.</p>

                    <div className="book-grid">
                        <div className="book-card">
                            <h3>Latest Romance Titles</h3>
                            <p className="book-desc">Check out my author page for the full collection of romance novels.</p>
                            <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW" target="_blank" rel="noopener noreferrer" className="btn btn-secondary small">Visit Amazon Author Page</a>
                        </div>
                    </div>
                </section>

            </div>

            <style>{`
        .books-page {
          --book-primary: #ffaa00;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1rem;
        }

        .section-icon {
          color: var(--color-primary);
        }

        .book-section {
          margin-bottom: 5rem;
        }

        .book-card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 2rem;
          border-radius: 12px;
          display: flex;
          gap: 2rem;
          transition: transform 0.3s;
        }

        .book-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        .book-card.highlight {
          border: 1px solid var(--color-primary);
          background: radial-gradient(circle at top right, rgba(100,108,255,0.1), var(--surface));
        }

        .book-info {
          flex: 1;
        }

        .book-cover-placeholder {
          width: 200px;
          height: 300px;
          background: #333;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: rgba(255,255,255,0.2);
        }

        .gradient-1 {
          background: linear-gradient(135deg, #2b1055, #7597de);
        }

        .status-tag {
          display: inline-block;
          background: var(--color-primary);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }

        .book-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .book-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .book-card {
            flex-direction: column;
          }
          .book-cover-placeholder {
            width: 100%;
            height: 250px;
            order: -1;
          }
        }
      `}</style>
        </div>
    );
};

export default Books;
