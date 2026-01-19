import { motion } from 'framer-motion';
import { BookOpen, Star, Heart, ExternalLink, ShoppingCart, Play, Pause, Headphones, Users, Lock } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// --- Sub-components ---

const BookReviewPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
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
        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" />}
        </button>
      </div>
      <audio ref={audioRef} preload="metadata" onEnded={() => setIsPlaying(false)} src="/assets/audio/uc4e_review.wav" />
      <style>{`
        .audio-review-card { margin-bottom: 2rem; padding: 1.5rem; display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); border-left: 4px solid var(--color-primary); }
        .audio-header { display: flex; align-items: center; gap: 1rem; }
        .play-btn { width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary); border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; }
      `}</style>
    </div>
  );
};

const BookChapterPlayer = ({ audioRef, isPlaying, setIsPlaying }) => {
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
        <div className="progress-container">
          <div className="time-bar">
            <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
            <div className="progress-line">
              <div className="progress-fill" style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}></div>
            </div>
            <span>{Math.floor((duration || 0) / 60)}:{Math.floor((duration || 0) % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} onTimeUpdate={handleTimeUpdate} src="/assets/audio/uc4e_chapter1.mp3" />
      <style>{`
        .player-main { display: flex; align-items: center; gap: 2rem; margin-top: 1rem; }
        .play-btn.large { width: 64px; height: 64px; border-radius: 50%; background: var(--color-primary); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .progress-container { flex: 1; }
        .time-bar { display: flex; align-items: center; gap: 1rem; font-size: 0.8rem; }
        .progress-line { flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; position: relative; }
        .progress-fill { position: absolute; left: 0; top: 0; height: 100%; background: var(--color-primary); border-radius: 2px; }
        .speaking-indicator { display: flex; align-items: center; gap: 0.5rem; }
        .pulse-dot { width: 8px; height: 8px; background: #12d622; border-radius: 50%; }
        .chapter-player-mount { margin: 1.5rem 0; padding: 1.5rem; background: rgba(0,0,0,0.4); border: 1px solid var(--color-primary); border-radius: 8px; }
      `}</style>
    </div>
  );
};

// --- Main Page ---

const Books = () => {
  const { userProfile } = useAuth();
  const [activeChapterAudio, setActiveChapterAudio] = useState(false);
  const chapterAudioRef = useRef(null);

  const startChapterAudio = () => {
    setActiveChapterAudio(true);
    if (chapterAudioRef.current) {
      chapterAudioRef.current.play().catch(() => { });
    }
  };

  return (
    <div className="page-container books-page">
      <section className="hero-section page-hero">
        <div className="hero-content">
          <h1 className="hero-title">Universe Connected</h1>
          <p className="hero-subtitle">Where imagination transcends reality.</p>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="book-section section-spacing">
          <BookReviewPlayer />

          <div className="section-header">
            <Star size={32} className="section-icon" />
            <h2>Universe Connected for Everyone</h2>
            <span className="status-badge upcoming">Releasing 2026</span>
          </div>

          <div className="book-card featured glass-card">
            <div className="book-cover-container">
              <button className="cover-button-glow" onClick={startChapterAudio}>
                <img src="/assets/books/uc4e_cover.png" alt="Book Cover" className="interactive-cover" />
                <div className="play-overlay"><Play size={48} /><span>Start Chapter 1</span></div>
              </button>
            </div>

            <div className="book-info">
              <h3>The Definitive Edition</h3>
              <div className="book-description">
                <p className="text-muted">Universe Connected for Everyone represents the complete vision.</p>
                {activeChapterAudio && (
                  <BookChapterPlayer audioRef={chapterAudioRef} isPlaying={activeChapterAudio} setIsPlaying={setActiveChapterAudio} />
                )}
              </div>

              <div className="character-profiles">
                <h4><Users size={18} /> Meet the Visionaries</h4>
                <div className="profiles-grid">
                  <div className="char-profile glass-card">
                    <img src="/assets/characters/elenavega.png" alt="Dr. Elena Vega" />
                    <div className="char-info"><h5>Dr. Elena Vega</h5><p>Resonance Theory.</p></div>
                  </div>
                  <div className="char-profile glass-card">
                    <img src="/assets/characters/arunpatel.png" alt="Dr. Arun Patel" />
                    <div className="char-info"><h5>Dr. Arun Patel</h5><p>Cybernetics.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="book-section section-spacing">
          <div className="section-header">
            <BookOpen size={32} className="section-icon" />
            <h2>Universe Connected (Original)</h2>
            <span className="status-badge available">Available Now</span>
          </div>
          <div className="book-card glass-card">
            <div className="book-cover-placeholder gradient-2"><span>UC</span></div>
            <div className="book-info">
              <h3>Where It All Began</h3>
              <div className="book-actions">
                {userProfile?.hasPurchased ? (
                  <Link to="/reader/universe-connected" className="btn btn-accent">Read Now</Link>
                ) : (
                  <Link to="/reader/universe-connected" className="btn btn-secondary">Unlock Book</Link>
                )}
                <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buy on Amazon</a>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .books-page { --book-primary: #ffaa00; --book-accent: #646cff; }
        .section-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; border-bottom: 2px solid var(--color-border); padding-bottom: 1rem; }
        .section-header h2 { margin: 0; flex: 1; }
        .status-badge { padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; }
        .status-badge.upcoming { background: #ff6b6b; color: #000; }
        .status-badge.available { background: #51cf66; color: #000; }
        .book-card { padding: 2.5rem; display: flex; gap: 3rem; }
        .interactive-cover { width: 250px; height: 380px; object-fit: cover; border-radius: 12px; }
        .cover-button-glow { position: relative; background: transparent; border: none; padding: 0; cursor: pointer; border-radius: 12px; overflow: hidden; }
        .play-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; color: white; gap: 1rem; }
        .cover-button-glow:hover .play-overlay { opacity: 1; }
        .book-info { flex: 1; display: flex; flex-direction: column; gap: 1.5rem; }
        .character-profiles { margin-top: 2rem; border-top: 1px solid var(--color-border); padding-top: 1.5rem; }
        .profiles-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
        .char-profile { display: flex; align-items: center; gap: 1rem; padding: 1rem; }
        .char-profile img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-primary); }
        .book-cover-placeholder { width: 220px; height: 330px; background: #333; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: rgba(255,255,255,0.3); }
        .gradient-2 { background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d); }
        .book-actions { display: flex; gap: 1rem; margin-top: 1rem; }
      `}</style>
    </div>
  );
};

export default Books;
