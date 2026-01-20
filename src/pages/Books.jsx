import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, Heart, ExternalLink, ShoppingCart, Play, Pause, Headphones, Users, Lock, ChevronRight } from 'lucide-react';
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
      <div className="audio-header">
        <div className="audio-icon-wrapper">
          <Headphones size={24} className={isPlaying ? "pulse" : ""} />
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
        <button onClick={onTogglePlay} className="main-play-circle">
          {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
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
                <h1 className="hero-title">Universe Connected</h1>
                <p className="hero-subtitle">The definitive sci-fi saga by Damien Nichols.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="book-section">
          <BookReviewPlayer />

          <div className="section-intro">
            <div className="badge-new">NEW PROJECT</div>
            <h2>Universe Connected for Everyone</h2>
            <p className="section-tagline">Re-imagined for a new generation. Coming 2026.</p>
          </div>

          <motion.div
            className="book-featured-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="card-layout">
              <div className="cover-visual">
                <div className={`cover-wrapper ${isChapterPlaying ? 'playing' : ''}`} onClick={handleStartChapter}>
                  <img src="/assets/books/uc4e_cover.png" alt="UC4E Cover" className="book-cover-img" />
                  <div className="cover-overlay">
                    {isChapterPlaying ? <Pause size={48} /> : <Play size={48} />}
                    <span>{isChapterActive ? "Playing Chapter 1" : "Start Chapter 1"}</span>
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
                      className={`char-item glass-card ${isChapterPlaying ? 'active-talk' : ''}`}
                      animate={isChapterPlaying ? { borderColor: 'var(--color-primary)' } : {}}
                    >
                      <img src="/assets/characters/elenavega.png" alt="Elena Vega" />
                      <div className="char-meta">
                        <strong>Dr. Elena Vega</strong>
                        <span>Resonance Engineer</span>
                      </div>
                    </motion.div>
                    <motion.div
                      className={`char-item glass-card ${isChapterPlaying ? 'active-talk' : ''}`}
                      animate={isChapterPlaying ? { borderColor: 'var(--color-accent)' } : {}}
                    >
                      <img src="/assets/characters/arunpatel.png" alt="Arun Patel" />
                      <div className="char-meta">
                        <strong>Dr. Arun Patel</strong>
                        <span>Neuro-Specialist</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="book-section original-section">
          <div className="section-intro">
            <h2>The Original Saga</h2>
          </div>

          <div className="original-book-grid">
            <motion.div
              className="original-card glass-card"
              whileHover={{ y: -5 }}
            >
              <img src="/assets/books/UniverseConnected_Original.jpg" alt="Original Cover" className="mini-cover" />
              <div className="original-info">
                <h4>Universe Connected (2022)</h4>
                <p>The novel that started it all. A journey through the stars and the digital void.</p>
                <div className="action-row">
                  {userProfile?.hasPurchased ? (
                    <Link to="/reader/universe-connected" className="btn-read">
                      <BookOpen size={18} /> Read Online
                    </Link>
                  ) : (
                    <Link to="/reader/universe-connected" className="btn-unlock">
                      <Lock size={18} /> Unlock Access
                    </Link>
                  )}
                  <a href="https://www.amazon.com/stores/Damien-Nichols/author/B0DVZFKSQW" target="_blank" rel="noopener noreferrer" className="btn-amazon">
                    <ShoppingCart size={18} /> Amazon
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
        .books-page { --color-primary: #00f3ff; --color-accent: #bc13fe; }
        .hero-section.page-hero { position: relative; height: 70vh; min-height: 500px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-video-container { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
        .hero-video { width: 100%; height: 100%; object-fit: cover; }
        .section-intro { margin-bottom: 2.5rem; }
        .section-intro h2 { font-size: 2.5rem; margin: 0.5rem 0; color: #fff; }
        .section-tagline { color: #888; font-size: 1.1rem; }
        .badge-new { display: inline-block; padding: 4px 12px; border-radius: 4px; background: var(--color-primary); color: #000; font-size: 0.7rem; font-weight: 800; letter-spacing: 1px; }
        
        /* Audio Review Card */
        .audio-review-card { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 2rem; margin-bottom: 4rem; border-left: 4px solid var(--color-primary); background: rgba(0,0,0,0.4); }
        .audio-header { display: flex; align-items: center; gap: 1.5rem; }
        .audio-icon-wrapper { width: 45px; height: 45px; border-radius: 50%; background: rgba(0, 243, 255, 0.1); display: flex; align-items: center; justify-content: center; color: var(--color-primary); }
        .play-btn-mini { width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
        .play-btn-mini:hover { background: var(--color-primary); color: #000; border-color: var(--color-primary); }
        
        /* Featured Card */
        .card-layout { display: grid; grid-template-columns: 320px 1fr; gap: 3rem; }
        .cover-visual { position: relative; }
        .cover-wrapper { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }
        .book-cover-img { width: 100%; height: auto; transition: transform 0.5s; display: block; }
        .cover-wrapper:hover .book-cover-img { transform: scale(1.05); }
        .cover-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); opacity: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; transition: opacity 0.3s; color: white; }
        .cover-wrapper:hover .cover-overlay { opacity: 1; }
        .cover-wrapper.playing { border-color: var(--color-primary); }
        .glow-pulse { position: absolute; inset: -10px; border: 2px solid var(--color-primary); border-radius: 20px; filter: blur(15px); animation: pulse-glow 2s infinite; pointer-events: none; }
        @keyframes pulse-glow { 0% { opacity: 0.3; transform: scale(0.98); } 50% { opacity: 0.6; transform: scale(1.02); } 100% { opacity: 0.3; transform: scale(0.98); } }

        /* Chapter Player */
        .chapter-player-mount { margin: 2rem 0; padding: 1.5rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(0, 243, 255, 0.2); border-radius: 12px; }
        .player-header { display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 0.8rem; }
        .speaking-status { display: flex; align-items: center; gap: 0.5rem; }
        .status-dot { width: 8px; height: 8px; border-radius: 50%; background: #444; }
        .status-dot.active { background: #00ff9d; box-shadow: 0 0 10px #00ff9d; animation: blink 1s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .player-core { display: flex; align-items: center; gap: 1.5rem; }
        .main-play-circle { width: 50px; height: 50px; border-radius: 50%; background: var(--color-primary); border: none; color: #000; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .scrubber-track { flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; position: relative; }
        .scrubber-fill { position: absolute; left: 0; top: 0; height: 100%; background: var(--color-primary); border-radius: 2px; }
        .scrubber-knob { position: absolute; top: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; background: white; border-radius: 50%; box-shadow: 0 0 10px rgba(0,0,0,0.5); }

        /* Characters */
        .character-spotlight { margin-top: 2rem; }
        .spotlight-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; color: #888; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
        .char-list { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .char-item { display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1px solid rgba(255,255,255,0.05); }
        .char-item.active-talk { border-color: var(--color-primary); background: rgba(0, 243, 255, 0.05); }
        .char-item img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid transparent; }
        .char-meta strong { display: block; font-size: 0.95rem; }
        .char-meta span { font-size: 0.8rem; color: #666; }

        /* Original */
        .original-book-grid { display: grid; gap: 2rem; }
        .original-card { display: flex; gap: 2rem; padding: 2rem; align-items: center; }
        .mini-cover { width: 160px; height: 240px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
        .action-row { display: flex; gap: 1rem; margin-top: 1.5rem; }
        .btn-read, .btn-unlock, .btn-amazon { display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.25rem; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: all 0.3s; cursor: pointer; }
        .btn-read { background: var(--color-primary); color: #000; }
        .btn-unlock { background: #333; color: #fff; }
        .btn-amazon { border: 1px solid #ff9900; color: #ff9900; background: transparent; }
        .btn-amazon:hover { background: #ff9900; color: #000; }

        @media (max-width: 900px) {
          .card-layout { grid-template-columns: 1fr; text-align: center; }
          .cover-visual { max-width: 250px; margin: 0 auto; }
          .char-list { grid-template-columns: 1fr; }
          .original-card { flex-direction: column; text-align: center; }
          .action-row { justify-content: center; flex-wrap: wrap; }
          .hero-title { font-size: 3rem; }
        }
      `}</style>
    </div>
  );
};

export default Books;
