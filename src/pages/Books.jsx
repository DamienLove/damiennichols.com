import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, Heart, ExternalLink, Globe, ShoppingCart, Play, Pause, Headphones, Users, MessageSquare } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Books = () => {
  const { userProfile } = useAuth();
  const [activeChapterAudio, setActiveChapterAudio] = useState(false);
  const chapterAudioRef = useRef(null);

  const startChapterAudio = () => {
    setActiveChapterAudio(true);
    if (chapterAudioRef.current) {
      chapterAudioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
    }
  };

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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="book-cover-container">
              <motion.button
                className="cover-button-glow"
                onClick={startChapterAudio}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/assets/books/uc4e_cover.png" alt="Book Cover" className="interactive-cover" />
                <div className="cover-glow-effect"></div>
                <div className="play-overlay">
                  <Play size={48} />
                  <span>Start Chapter 1 Audio</span>
                </div>
              </motion.button>
            </div>

            <div className="book-info">
              <h3>The Definitive Edition</h3>
              <p className="tagline">A journey through connected realms that challenges everything you thought you knew about reality.</p>

              <div className="book-description">
                <p className="text-muted">
                  <strong>Universe Connected for Everyone</strong> represents the complete vision of the Universe Connected saga.
                  This comprehensive manuscript weaves together multiple dimensions, realities, and timelines into a cohesive narrative.
                </p>

                {activeChapterAudio && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <ChapterPlayer audioRef={chapterAudioRef} isPlaying={activeChapterAudio} setIsPlaying={setActiveChapterAudio} />
                  </motion.div>
                )}

                <p className="author-note">
                  <em>"This is the story I've always wanted to tell—unfiltered, complete, and ready to blow minds."</em> — Damien Nichols
                </p>
              </div>

              <div className="book-meta">
                <div className="meta-item">
                  <strong>Genre:</strong> Science Fiction, Adventure
                </div>
                <div className="meta-item">
                  <strong>Status:</strong> Coming 2026
                </div>
              </div>

              {/* Character Profiles */}
              <div className="character-profiles">
                <h4><Users size={18} /> Meet the Visionaries</h4>
                <div className="profiles-grid">
                  <div className="char-profile glass-card">
                    <img src="/assets/characters/elenavega.png" alt="Dr. Elena Vega" />
                    <div className="char-info">
                      <h5>Dr. Elena Vega</h5>
                      <p>A brilliant physicist specializing in multiverse resonance theory.</p>
                    </div>
                  </div>
                  <div className="char-profile glass-card">
                    <img src="/assets/characters/arunpatel.png" alt="Dr. Arun Patel" />
                    <div className="char-info">
                      <h5>Dr. Arun Patel</h5>
                      <p>Cybernetics expert and bridge between technology and biology.</p>
                    </div>
                  </div>
                </div>
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
                {userProfile?.hasPurchased ? (
                  <Link to="/reader/universe-connected" className="btn btn-accent pulse-btn">
                    <BookOpen size={18} /> Read Now
                  </Link>
                ) : (
                  <Link to="/reader/universe-connected" className="btn btn-secondary">
                    <Lock size={18} /> Unlock Book
                  </Link>
                )}
                <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  <ShoppingCart size={18} /> Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ChatGPT Embedding Section */}
        <motion.section
          className="gpt-section section-spacing glass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="gpt-content">
            <div className="gpt-header">
              <MessageSquare size={32} className="gpt-icon" />
              <h2>Enter the Multiverse AI</h2>
            </div>
            <p className="text-muted">
              Ready to go deeper? Chat with our custom-trained <strong>Universe Connected GPT</strong>.
              Ask about the lore, simulate encounters with characters like Dr. Vega, or explore alternative timelines.
            </p>
            <a
              href="https://chatgpt.com/g/g-679de3be95a0819184adb72f1b536d38-universe-connected"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent gpt-btn"
            >
              <Globe size={18} /> Launch Universe GPT
            </a>
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

        /* Interactive Cover Styles */
        .cover-button-glow {
          position: relative;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          width: 250px;
          height: 380px;
          box-shadow: 0 0 20px rgba(100, 108, 255, 0.3);
          transition: box-shadow 0.3s ease;
        }
        
        .cover-button-glow:hover {
          box-shadow: 0 0 40px rgba(100, 108, 255, 0.8), 0 0 15px rgba(0, 255, 255, 0.5);
        }

        .interactive-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cover-glow-effect {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border: 2px solid var(--color-primary);
          border-radius: 12px;
          opacity: 0.5;
          animation: glow-pulse 2s infinite ease-in-out;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; filter: blur(5px); }
          50% { opacity: 0.8; filter: blur(2px); }
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          color: white;
          gap: 1rem;
        }

        .cover-button-glow:hover .play-overlay {
          opacity: 1;
        }

        /* Character Profiles */
        .character-profiles {
          margin-top: 2rem;
          border-top: 1px solid var(--color-border);
          padding-top: 1.5rem;
        }
        
        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .char-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          transition: transform 0.2s;
        }
        
        .char-profile:hover { transform: translateY(-5px); }
        
        .char-profile img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-primary);
        }

        .char-info h5 { margin: 0; font-size: 1rem; color: #fff; }
        .char-info p { margin: 0; font-size: 0.8rem; color: #bbb; }

        /* GPT Section */
        .gpt-section {
          padding: 3rem;
          text-align: center;
          border: 1px solid rgba(100, 108, 255, 0.3);
          background: linear-gradient(135deg, rgba(100,108,255,0.05), rgba(0,0,0,0.2));
        }
        .gpt-icon { color: var(--color-primary); margin-bottom: 1rem; filter: drop-shadow(0 0 10px var(--color-primary)); }
        .gpt-btn { margin-top: 1.5rem; padding: 1rem 2rem; font-size: 1.1rem; }

        /* Chapter Player Overlay */
        .chapter-player-mount {
           background: rgba(0,0,0,0.4);
           padding: 1rem;
           border-radius: 8px;
           margin: 1.5rem 0;
           border: 1px solid var(--color-primary);
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
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(error => {
              console.error("Playback failed:", error);
              setIsPlaying(false);
            });
        }
      }
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
        <button onClick={togglePlay} className="play-btn" aria-label={isPlaying ? "Pause" : "Play"}>
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
      <audio
        ref={audioRef}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      >
        <source src="/assets/audio/uc4e_review.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <style>{`
        .audio-review-card {
          margin-bottom: 2rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
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

const ChapterPlayer = ({ audioRef, isPlaying, setIsPlaying }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  // Logic to show which character is "speaking" based on simple time splits
  // (Assuming chapter starts with setup, then alternating or joint analysis)
  const speakingChar = currentTime > 0 && currentTime < 60 ? 'elenavega' :
    currentTime >= 60 && currentTime < 120 ? 'arunpatel' : 'both';

  return (
    <div className="chapter-player-mount glass-card">
      <div className="audio-header">
        <Headphones size={24} className="audio-icon pulse" />
        <div>
          <h4>Chapter 1: Origins of Life</h4>
          <div className="speaking-indicator">
            <span className="pulse-dot"></span>
            <span className="text-muted text-sm">
              {isPlaying ? (
                speakingChar === 'both' ? 'Dr. Vega & Dr. Patel speaking' :
                  speakingChar === 'elenavega' ? 'Dr. Elena Vega speaking' : 'Dr. Arun Patel speaking'
              ) : 'Paused'}
            </span>
          </div>
        </div>
      </div>

      <div className="player-main">
        <button onClick={togglePlay} className="play-btn large">
          {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" />}
        </button>

        <div className="waveform-container">
          <div className="waveform-visual">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className={`wave-bar ${isPlaying ? 'animating' : ''}`}
                animate={{
                  height: isPlaying ? [10, Math.random() * 30 + 10, 10] : 10,
                  opacity: (i / 40) < (currentTime / duration) ? 1 : 0.3
                }}
                transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }}
              />
            ))}
          </div>
          <div className="time-bar">
            <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
            <div className="progress-line">
              <div className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
            </div>
            <span>{Math.floor((duration || 0) / 60)}:{Math.floor((duration || 0) % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        src="/assets/audio/uc4e_chapter1.mp3"
      />

      <style>{`
        .player-main { display: flex; align-items: center; gap: 2rem; margin-top: 1rem; }
        .play-btn.large { width: 64px; height: 64px; }
        .waveform-container { flex: 1; }
        .time-bar { display: flex; align-items: center; gap: 1rem; font-size: 0.8rem; margin-top: 0.5rem; }
        .progress-line { flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; position: relative; }
        .progress-fill { position: absolute; left: 0; top: 0; height: 100%; background: var(--color-primary); border-radius: 2px; }
        
        .speaking-indicator { display: flex; align-items: center; gap: 0.5rem; }
        .pulse-dot { width: 8px; height: 8px; background: #12d622; border-radius: 50%; box-shadow: 0 0 10px #12d622; }
        
        .chapter-player-mount {
          animation: slide-up 0.4s ease-out;
        }
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default Books;
