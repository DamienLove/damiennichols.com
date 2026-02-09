import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, Heart, ExternalLink, ShoppingCart, Play, Pause, Headphones, Users, Lock, ChevronRight, Mic } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
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
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Audio play failed:", e));
      }
    }
  };

  return (
    <motion.div
      className="audio-review-card glass-card"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at left, rgba(188, 19, 254, 0.2), transparent 70%)' }}></div>
      <div className="audio-header">
        <div className="audio-icon-wrapper pulse-ring">
          <Headphones size={24} className={isPlaying ? "pulse-icon" : ""} />
        </div>
        <div>
          <h4>Listen to the Review</h4>
          <span className="text-muted text-sm">Universe Connected for Everyone - Sneak Peek</span>
        </div>
      </div>
      <div className="audio-controls">
        <button onClick={togglePlay} className="play-btn-mini">
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
        </button>
      </div>
      <audio ref={audioRef} preload="metadata" onEnded={() => setIsPlaying(false)} src="/assets/audio/uc4e_review.wav" />
    </motion.div>
  );
};

const BookChapterPlayer = ({ audioRef, isPlaying, onTogglePlay }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audioRef]);

  const progress = (currentTime / (duration || 1)) * 100;

  // Logic for who is speaking based on time ranges
  const speakingChar = currentTime > 0 && currentTime < 45 ? 'elenavega' :
    currentTime >= 45 && currentTime < 90 ? 'arunpatel' :
      currentTime >= 90 ? 'both' : null;

  return (
    <motion.div
      className="chapter-player-mount glass-card"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <div className="player-header">
        <div className="speaking-status">
          <div className={`status-dot ${isPlaying ? 'active' : ''}`}></div>
          <span className="status-text">
            {isPlaying ? (
              speakingChar === 'both' ? 'Both Visionaries Speaking' :
                speakingChar === 'elenavega' ? 'Dr. Elena Vega Speaking' : 'Dr. Arun Patel Speaking'
            ) : 'Chapter 1 Paused'}
          </span>
        </div>
        <div className="time-display">
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
        </div>
      </div>

      <div className="player-core">
        <button onClick={onTogglePlay} className="main-play-circle glow-btn">
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
        </button>
        <div className="scrubber-track">
          <div className="scrubber-fill" style={{ width: `${progress}%` }}></div>
          <div className="scrubber-knob" style={{ left: `${progress}%` }}></div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page ---

const Books = () => {
  const { userProfile } = useAuth();
  const [isChapterActive, setIsChapterActive] = useState(false);
  const [isChapterPlaying, setIsChapterPlaying] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const chapterAudioRef = useRef(null);
  const videoRef = useRef(null);

  const handleStartChapter = () => {
    setIsChapterActive(true);
    if (chapterAudioRef.current) {
      if (isChapterPlaying) {
        chapterAudioRef.current.pause();
        setIsChapterPlaying(false);
      } else {
        chapterAudioRef.current.play().then(() => setIsChapterPlaying(true)).catch(e => console.error(e));
      }
    }
  };

  return (
    <div className="page-container books-page">
      <section className="hero-section page-hero">
        <div className="hero-video-container">
          <AnimatePresence mode="wait">
            {!isVideoEnded ? (
              <motion.video
                key="hero-video"
                ref={videoRef}
                className="hero-video"
                autoPlay
                muted
                playsInline
                onEnded={() => setIsVideoEnded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src="/assets/videos/uc4e_quantum_karma.mp4"
              />
            ) : (
              <motion.div
                key="hero-text"
                className="hero-content"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <div className="hero-badge">OFFICIAL SAGA</div>
                <h1 className="hero-title">UNIVERSE <span className="text-highlight">CONNECTED</span></h1>
                <p className="hero-subtitle">The definitive sci-fi saga by Damien Nichols.</p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="hero-overlay-gradient"></div>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="book-section section-spacing">
          <BookReviewPlayer />

          <div className="section-intro center-text">
            <span className="badge-new animate-pulse">NEW PROJECT</span>
            <h2 className="section-title">Universe Connected for Everyone</h2>
            <p className="section-tagline text-muted">Re-imagined for a new generation. Coming 2026.</p>
          </div>

          <motion.div
            className="book-featured-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(188, 19, 254, 0.1), transparent 70%)' }}></div>
            <div className="card-layout">
              <div className="cover-visual">
                <div className={`cover-wrapper ${isChapterPlaying ? 'playing' : ''}`} onClick={handleStartChapter}>
                  <img src="/assets/books/uc4e_cover.png" alt="UC4E Cover" className="book-cover-img" />
                  <div className="cover-overlay">
                    {isChapterPlaying ? <Pause size={48} /> : <Play size={48} />}
                    <span>{isChapterActive ? "Playing..." : "Preview Chapter 1"}</span>
                  </div>
                  {isChapterPlaying && <div className="glow-pulse"></div>}
                </div>
              </div>

              <div className="book-specs">
                <div className="specs-header">
                  <h3>The Collective Vision</h3>
                  <div className="status-label">In Development</div>
                </div>

                <p className="description-text">
                  A deep dive into the origins of the resonance theory and the cybernetic revolution that reshaped humanity.
                </p>

                <AnimatePresence>
                  {isChapterActive && (
                    <BookChapterPlayer
                      audioRef={chapterAudioRef}
                      isPlaying={isChapterPlaying}
                      onTogglePlay={handleStartChapter}
                    />
                  )}
                </AnimatePresence>

                <div className="character-spotlight">
                  <div className="spotlight-header">
                    <Users size={16} />
                    <span>Key Figures</span>
                  </div>
                  <div className="char-list">
                    <motion.div
                      className={`char-item glass-card ${isChapterPlaying && speakingChar === 'elenavega' ? 'active-talk' : ''}`}
                    >
                      <img src="/assets/characters/elenavega.png" alt="Elena Vega" />
                      <div className="char-meta">
                        <strong>Dr. Elena Vega</strong>
                        <span>Resonance Engineer</span>
                      </div>
                      {isChapterPlaying && speakingChar === 'elenavega' && <Mic size={16} className="mic-icon animate-bounce" />}
                    </motion.div>
                    <motion.div
                      className={`char-item glass-card ${isChapterPlaying && speakingChar === 'arunpatel' ? 'active-talk' : ''}`}
                    >
                      <img src="/assets/characters/arunpatel.png" alt="Arun Patel" />
                      <div className="char-meta">
                        <strong>Dr. Arun Patel</strong>
                        <span>Neuro-Specialist</span>
                      </div>
                      {isChapterPlaying && speakingChar === 'arunpatel' && <Mic size={16} className="mic-icon animate-bounce" />}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="book-section original-section section-spacing">
          <div className="section-intro center-text">
            <h2 className="section-title">The Original Saga</h2>
            <p className="text-muted">Where it all began.</p>
          </div>

          <div className="original-book-grid">
            <motion.div
              className="original-card glass-card"
              whileHover={{ y: -5 }}
            >
              <div className="card-bg-glow" style={{ background: 'radial-gradient(circle at center, rgba(255, 217, 61, 0.1), transparent 70%)' }}></div>
              <img src="/assets/books/UniverseConnected_Original.jpg" alt="Original Cover" className="mini-cover" />
              <div className="original-info">
                <h4>Universe Connected (2022)</h4>
                <p>The novel that started it all. A journey through the stars and the digital void.</p>
                <div className="action-row">
                  {userProfile?.hasPurchased ? (
                    <Link to="/reader/universe-connected" className="btn btn-primary">
                      <BookOpen size={18} /> Read Online
                    </Link>
                  ) : (
                    <Link to="/reader/universe-connected" className="btn btn-outline">
                      <Lock size={18} /> Unlock Access
                    </Link>
                  )}
                  <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <ShoppingCart size={18} /> Buy on Amazon
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Hidden Audio for Chapter to ensure ref is always available */}
      <audio
        ref={chapterAudioRef}
        src="/assets/audio/uc4e_chapter1.mp3"
        onEnded={() => setIsChapterPlaying(false)}
        preload="auto"
      />

      <style>{`
        .books-page { --page-accent: var(--neon-purple); }
        
        .hero-video-container {
           position: relative;
           height: 100%;
           width: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
        }
        
        .hero-overlay-gradient {
           position: absolute;
           inset: 0;
           background: radial-gradient(circle, transparent 0%, #000 90%);
           pointer-events: none;
        }

        .hero-badge {
            display: inline-block; 
            padding: 4px 12px; 
            border-radius: 20px; 
            background: rgba(188, 19, 254, 0.2); 
            color: var(--neon-purple); 
            font-size: 0.8rem; 
            font-weight: 800; 
            letter-spacing: 2px;
            margin-bottom: 1rem;
            border: 1px solid var(--neon-purple);
        }

        .hero-title { font-size: 4rem; font-weight: 900; letter-spacing: -2px; margin-bottom: 0.5rem; text-shadow: 0 0 30px rgba(188, 19, 254, 0.4); }
        .text-highlight { color: var(--neon-purple); }
        
        /* Audio Review Card */
        .audio-review-card { padding: 1.5rem 2rem; position: relative; display: flex; align-items: center; justify-content: space-between; overflow: hidden; border-left: 4px solid var(--neon-purple); }
        .audio-icon-wrapper { width: 48px; height: 48px; border-radius: 50%; background: rgba(188, 19, 254, 0.1); display: flex; align-items: center; justify-content: center; color: var(--neon-purple); margin-right: 1rem; }
        
        .pulse-ring { position: relative; }
        .pulse-icon { animation: pulse-beat 1s infinite; }
        @keyframes pulse-beat { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
        
        .play-btn-mini { width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
        .play-btn-mini:hover { background: var(--neon-purple); border-color: var(--neon-purple); }
        
        /* Featured Card */
        .card-layout { display: grid; grid-template-columns: 320px 1fr; gap: 4rem; align-items: start; }
        
        .cover-wrapper { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; box-shadow: 0 20px 50px rgba(0,0,0,0.6); transition: transform 0.3s; }
        .cover-wrapper:hover { transform: translateY(-5px); }
        .cover-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); opacity: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; transition: opacity 0.3s; color: white; backdrop-filter: blur(4px); }
        .cover-wrapper:hover .cover-overlay { opacity: 1; }
        .playing { border: 2px solid var(--neon-purple); }
        .glow-pulse { position: absolute; inset: 0; box-shadow: 0 0 20px var(--neon-purple); animation: pulse-glow 2s infinite; pointer-events: none; }
        
        /* Specs */
        .specs-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; }
        .specs-header h3 { margin: 0; font-size: 1.5rem; font-weight: 700; }
        .status-label { background: rgba(255, 255, 255, 0.1); padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; }
        
        .description-text { font-size: 1.1rem; line-height: 1.6; color: #ccc; margin-bottom: 2rem; }
        
        /* Characters */
        .char-item { padding: 1rem; background: rgba(0,0,0,0.2); transition: all 0.3s; position: relative; }
        .char-item.active-talk { border-color: var(--neon-purple); background: rgba(188, 19, 254, 0.1); transform: scale(1.02); }
        .mic-icon { position: absolute; top: 10px; right: 10px; color: var(--neon-purple); }
        
        /* Original */
        .original-card { display: flex; gap: 2rem; padding: 2.5rem; }
        .mini-cover { width: 180px; height: 270px; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); object-fit: cover; }
        .action-row { display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap; } 

        @media (max-width: 900px) {
          .card-layout { grid-template-columns: 1fr; }
          .cover-visual { max-width: 300px; margin: 0 auto; }
          .original-card { flex-direction: column; text-align: center; }
          .mini-cover { margin: 0 auto; }
          .action-row { justify-content: center; }
          .audio-review-card { flex-direction: column; gap: 1rem; text-align: center; }
          .audio-header { flex-direction: column; }
          .audio-icon-wrapper { margin: 0 0 1rem 0; }
          .hero-title { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Books;
