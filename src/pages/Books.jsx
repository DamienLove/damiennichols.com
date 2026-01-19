import { motion } from 'framer-motion';
import { BookOpen, Star, Heart, ExternalLink, Globe, ShoppingCart, Play, Pause, Headphones } from 'lucide-react';
import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <div className="page-container books-page">
      <section className="hero-section page-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Universe Connected
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Where imagination transcends reality. A saga of interconnected universes.
          </motion.p>
        </motion.div>
      </section>

      <div className="content-wrapper">

        {/* Universe Connected for Everyone - FEATURED */}
        <motion.section
          className="book-section section-spacing"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Audio Review Player */}
          <AudioPlayer />

          <div className="section-header">
            <Star size={32} className="section-icon pulse" />
            <h2>Universe Connected for Everyone</h2>
            <span className="status-badge upcoming">Releasing 2026</span>
          </div>
          <motion.div
            className="book-card featured glass-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="book-cover-container">
              <div className="book-cover-placeholder gradient-1">
                <span>UC4E</span>
              </div>
            </div>
            <div className="book-info">
              <h3>The Definitive Edition</h3>
              <p className="tagline">A journey through connected realms that challenges everything you thought you knew about reality.</p>

              <div className="book-description">
                <p className="text-muted">
                  <strong>Universe Connected for Everyone</strong> represents the complete vision of the Universe Connected saga.
                  This comprehensive manuscript weaves together multiple dimensions, realities, and timelines into a cohesive narrative
                  that will leave you questioning the very fabric of existence.
                </p>
                <p className="text-muted">
                  Building upon the foundation of the original Universe Connected, this edition expands the universe with deeper
                  character development, intricate plot threads, and mind-bending revelations that connect everything in unexpected ways.
                </p>
                <p className="author-note">
                  <em>"This is the story I've always wanted to tell—unfiltered, complete, and ready to blow minds."</em> — Damien Nichols
                </p>
              </div>

              <div className="book-meta">
                <div className="meta-item">
                  <strong>Genre:</strong> Science Fiction, Adventure, Reality-Bending Fiction
                </div>
                <div className="meta-item">
                  <strong>Status:</strong> Final manuscript complete, releasing 2026
                </div>
                <div className="meta-item">
                  <strong>Format:</strong> Print, eBook, and Audio editions planned
                </div>
              </div>

              <div className="book-actions">
                <a href="https://sites.google.com/dmnlat.com/universeconnected/universe-connected-for-everyone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  <Globe size={18} /> Full Details & Preview
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Original Universe Connected */}
        <motion.section
          className="book-section section-spacing"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-header">
            <BookOpen size={32} className="section-icon" />
            <h2>Universe Connected (Original)</h2>
            <span className="status-badge available">Available Now</span>
          </div>
          <div className="book-card glass-card">
            <div className="book-cover-container">
              <div className="book-cover-placeholder gradient-2">
                <span>UC</span>
              </div>
            </div>
            <div className="book-info">
              <h3>Where It All Began</h3>
              <p className="tagline">The original adventure that introduced readers to the Universe Connected multiverse.</p>

              <div className="book-description">
                <p className="text-muted">
                  The story that started it all. <strong>Universe Connected</strong> introduces you to a world where reality
                  is not what it seems, and the connections between universes run deeper than anyone could imagine.
                </p>
                <p className="text-muted">
                  Follow the journey as characters discover that their actions ripple across dimensions, and that every choice
                  matters in ways they never expected. This is science fiction that challenges your perception while keeping
                  you on the edge of your seat.
                </p>
              </div>

              <div className="reviews-section">
                <h4><Heart size={18} className="inline-icon" /> What Readers Are Saying</h4>
                <blockquote className="review">
                  "A mind-bending journey that keeps you guessing until the very end. Damien Nichols has crafted something truly unique."
                  <cite>— Romance.io Review</cite>
                </blockquote>
              </div>

              <div className="book-actions">
                <Link to="/reader/universe-connected" className="btn btn-accent pulse-btn">
                  <BookOpen size={18} /> Read Now
                </Link>
                <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  <ShoppingCart size={18} /> Buy on Amazon
                </a>
                <a href="https://sites.google.com/dmnlat.com/universeconnected/universe-connected-original"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary">
                  <ExternalLink size={18} /> Learn More
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About the Author Section */}
        <motion.section
          className="author-section glass-card section-spacing"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="section-title">About the Author</h2>
          <div className="author-card">
            <p className="text-muted">
              <strong>Damien Nichols</strong> is a software engineer by day and a storyteller by passion.
              His unique background in technology informs his writing, bringing a logical yet imaginative approach
              to science fiction that feels both grounded and limitless.
            </p>
            <p className="text-muted">
              The <strong>Universe Connected</strong> series represents years of world-building, creating an interconnected
              multiverse where every detail matters and every story thread eventually converges.
            </p>
            <div className="author-links">
              <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW"
                target="_blank"
                rel="noopener noreferrer"
                className="author-link">
                <ExternalLink size={16} /> Amazon Author Page
              </a>
              <a href="https://www.romance.io/authors/67a0bb36a21e2f41c4f691f2/damien-nichols"
                target="_blank"
                rel="noopener noreferrer"
                className="author-link">
                <ExternalLink size={16} /> Romance.io Profile
              </a>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="cta-section section-spacing"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Stay Updated</h3>
          <p className="text-muted">Be the first to know when Universe Connected for Everyone launches. Follow Damien Nichols for updates.</p>
          <div className="cta-buttons">
            <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary">
              Follow on Amazon
            </a>
            <a href="https://www.facebook.com/damienlove"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary">
              Connect on Facebook
            </a>
          </div>
        </motion.section>

      </div>

      <style>{`
        .books-page {
          --book-primary: #ffaa00;
          --book-accent: #646cff;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 2px solid var(--color-border);
          padding-bottom: 1rem;
          flex-wrap: wrap;
        }

        .section-header h2 {
          margin: 0;
          flex: 1;
        }

        .section-icon {
          color: var(--color-primary);
        }

        .section-icon.pulse {
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        .status-badge {
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .status-badge.upcoming {
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          color: #000;
        }

        .status-badge.available {
          background: linear-gradient(135deg, #51cf66, #12d622);
          color: #000;
        }

        .book-card {
          padding: 2.5rem;
          display: flex;
          gap: 3rem;
        }
        
        .book-card.featured {
          border: 2px solid var(--color-primary);
          background: radial-gradient(circle at top right, rgba(100,108,255,0.15), var(--glass-bg, rgba(20,20,20,0.7)));
        }

        .book-cover-container {
          flex-shrink: 0;
        }

        .book-cover-placeholder {
          width: 220px;
          height: 330px;
          background: #333;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 3rem;
          color: rgba(255,255,255,0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
        }

        .gradient-1 {
          background: linear-gradient(135deg, #2b1055, #7597de);
        }

        .gradient-2 {
          background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
        }

        .book-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .book-info h3 {
          font-size: 2rem;
          margin: 0;
          background: linear-gradient(to right, var(--color-primary), #00bcd4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tagline {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--color-text-muted);
          margin: 0;
        }

        .book-description strong {
          color: var(--color-text);
        }
        
        .book-description p { margin-bottom: 1rem; line-height: 1.8; }

        .author-note {
          padding: 1rem 1.5rem;
          background: rgba(100, 108, 255, 0.1);
          border-left: 3px solid var(--color-primary);
          border-radius: 4px;
          font-style: italic;
          margin-top: 1rem;
          color: var(--color-text-muted);
        }

        .book-meta {
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }

        .meta-item {
          padding: 0.5rem 0;
          color: var(--color-text-muted);
        }

        .meta-item strong {
          color: var(--color-primary);
          margin-right: 0.5rem;
        }

        .reviews-section {
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem;
          border-radius: 8px;
        }

        .reviews-section h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 0 1rem 0;
          color: var(--color-primary);
        }

        .inline-icon {
          display: inline;
          vertical-align: middle;
        }

        .review {
          font-style: italic;
          color: var(--color-text-muted);
          border-left: 3px solid var(--color-primary);
          padding-left: 1rem;
          margin: 1rem 0;
        }

        .review cite {
          display: block;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-style: normal;
        }

        .book-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .author-section {
          padding: 3rem;
        }

        .author-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--color-primary);
        }

        .author-card {
          max-width: 800px;
          margin: 0 auto;
        }

        .author-card p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .author-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .author-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          font-weight: 600;
          transition: color 0.2s;
        }

        .author-link:hover {
          color: #00bcd4;
        }

        .cta-section {
          text-align: center;
          padding: 4rem 2rem;
          background: radial-gradient(circle, rgba(100,108,255,0.1), transparent);
          border-radius: 16px;
        }

        .cta-section h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .book-card {
            flex-direction: column;
            padding: 1.5rem;
          }

          .book-cover-placeholder {
            width: 100%;
            height: 280px;
          }

          .book-info h3 {
            font-size: 1.5rem;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .status-badge {
            align-self: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-review-card glass-card">
      <div className="audio-header">
        <Headphones size={24} className="audio-icon" />
        <div>
          <h4>Listen to the Review</h4>
          <span className="text-muted text-sm">Universe Connected for Everyone - Sneak Peek</span>
        </div>
      </div>
      <div className="audio-controls">
        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
        </button>
        <div className="waveform-visual">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`wave-bar ${isPlaying ? 'animating' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      </div>
      <audio ref={audioRef} src="/assets/audio/uc4e_review.wav" onEnded={() => setIsPlaying(false)} />

      <style>{`
        .audio-review-card {
          margin-bottom: 2rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(90deg, rgba(100,108,255,0.1), rgba(0,0,0,0));
          border-left: 4px solid var(--color-primary);
        }
        .audio-header { display: flex; align-items: center; gap: 1rem; }
        .audio-icon { color: var(--color-primary); }
        .audio-header h4 { margin: 0; font-size: 1.1rem; }
        .text-sm { font-size: 0.85rem; }
        
        .audio-controls { display: flex; align-items: center; gap: 1.5rem; }
        .play-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .play-btn:hover { transform: scale(1.1); }
        
        .waveform-visual {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 30px;
        }
        .wave-bar {
          width: 3px;
          height: 10px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          transition: height 0.2s;
        }
        .wave-bar.animating {
          animation: wave 1s infinite ease-in-out;
          background: var(--color-primary);
        }
        @keyframes wave {
          0%, 100% { height: 10px; }
          50% { height: 25px; }
        }
        @media (max-width: 600px) {
           .audio-review-card { flex-direction: column; align-items: flex-start; gap: 1rem; }
           .audio-controls { width: 100%; justify-content: space-between; }
        }
      `}</style>
    </div>
  );
};

export default Books;
