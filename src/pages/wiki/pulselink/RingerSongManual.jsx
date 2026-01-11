import React from 'react';
import { motion } from 'framer-motion';
import { Music, Smartphone, Shield, Radio, Mic, Heart, List, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RingerSongManual = () => {
    return (
        <div className="page-container ringersong-wiki">
            <div className="wiki-nav-header">
                <Link to="/pulselink" className="back-link">
                    <ArrowLeft size={20} /> Back to PulseLink
                </Link>
                <h1>RingerSong User Guide</h1>
            </div>

            <div className="content-wrapper wiki-content">
                <section className="wiki-intro">
                    <p className="lead">
                        <strong>RingerSong</strong> is your all-in-one audio utility and caller protection tool. It combines offline music playback with powerful caller identification features.
                    </p>
                </section>

                <section className="wiki-section">
                    <h2>Offline Music (Spotify) 🎵</h2>
                    <p>RingerSong allows you to download tracks from Spotify for offline playback, freeing you from the need for a premium subscription or an active internet connection.</p>

                    <div className="subsection">
                        <h3>How to Download</h3>
                        <ol>
                            <li>Open the <strong>Spotify</strong> app or website.</li>
                            <li>Find a song or playlist you like.</li>
                            <li>Tap <strong>Share {'>'} Copy Link</strong>.</li>
                            <li>Open <strong>RingerSong</strong>.</li>
                            <li>Paste the link into the search/download bar.</li>
                            <li>Tap <strong>Download</strong>. The track will be converted to MP3 and saved locally.</li>
                        </ol>
                    </div>

                    <div className="subsection">
                        <h3>Playback</h3>
                        <ul>
                            <li><strong>Offline Mode:</strong> RingerSong prioritizes downloaded files. If a file is on your device, it plays instantly without data.</li>
                            <li><strong>App Remote:</strong> If you have the Spotify app installed, RingerSong can also act as a controller for it.</li>
                        </ul>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>YouTube Music Integration 📺</h2>
                    <p>Browse and discover music from YouTube's vast library.</p>
                    <ol>
                        <li>Use the <strong>Search</strong> tab to find songs on YouTube Music.</li>
                        <li>View song details and metadata.</li>
                        <li>(Coming Soon) Direct streaming and playlist imports.</li>
                    </ol>
                </section>

                <section className="wiki-section">
                    <h2>Caller ID & Spam Protection 🛡️</h2>
                    <p>RingerSong integrates with <strong>Truecaller</strong> to identify incoming calls and protect you from spam.</p>

                    <div className="subsection">
                        <h3>Enabling Caller ID</h3>
                        <ol>
                            <li>Go to <strong>Settings {'>'} Caller ID</strong>.</li>
                            <li>Toggle <strong>Enable Truecaller Integration</strong>.</li>
                            <li>Grant the "Phone State" and "Call Log" permissions when prompted.</li>
                        </ol>
                    </div>

                    <div className="subsection">
                        <h3>How it Works</h3>
                        <ul>
                            <li><strong>Unknown Callers:</strong> When an unknown number calls, RingerSong queries the database in real-time.</li>
                            <li><strong>Spam Warning:</strong> If the number is reported as spam, a red warning overlay appears on your call screen.</li>
                            <li><strong>History:</strong> View identification details for past calls in the <strong>Call Log</strong> tab.</li>
                        </ul>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Local Library Management</h2>
                    <p>RingerSong scans your device for existing MP3/audio files.</p>
                    <ul className="feature-list">
                        <li><List className="inline-icon" size={16} /> <strong>Organize:</strong> Create custom playlists.</li>
                        <li><Music className="inline-icon" size={16} /> <strong>Edit:</strong> Change tags (Artist, Title, Album Art).</li>
                        <li><Smartphone className="inline-icon" size={16} /> <strong>Ringtones:</strong> Set any track as your phone ringtone directly from the app.</li>
                    </ul>
                </section>

            </div>

            <style>{`
        .ringersong-wiki {
          background-color: #121212;
          color: #e0e0e0;
          min-height: 100vh;
          padding-top: 2rem;
        }

        .wiki-nav-header {
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem 2rem;
          margin-bottom: 2rem;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff6b6b;
          text-decoration: none;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .back-link:hover {
            text-decoration: underline;
        }

        .wiki-nav-header h1 {
          font-size: 2.5rem;
          background: linear-gradient(to right, #ff6b6b, #ffb347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .wiki-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem 4rem 2rem;
        }

        .wiki-intro .lead {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #a0a0a0;
          border-left: 4px solid #ff6b6b;
          padding-left: 1rem;
        }

        .wiki-section {
          margin-bottom: 3rem;
        }

        .wiki-section h2 {
          color: #fff;
          border-bottom: 1px solid #333;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .subsection {
          margin-bottom: 2rem;
          background: #1e1e2e;
          padding: 1.5rem;
          border-radius: 8px;
        }

        .subsection h3 {
          color: #ffb347;
          margin-top: 0;
        }

        ol, ul {
          padding-left: 1.2rem;
          line-height: 1.6;
        }

        li {
          margin-bottom: 0.5rem;
          color: #ccc;
        }
        
        li strong {
            color: #fff;
        }
        
        .inline-icon {
            vertical-align: text-bottom;
            margin-right: 0.5rem;
            color: #ff6b6b;
        }

      `}</style>
        </div>
    );
};

export default RingerSongManual;
