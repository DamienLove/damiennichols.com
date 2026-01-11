import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Bell, MapPin, Phone, ArrowLeft, Download, Check, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PulseLinkGuide = () => {
    return (
        <div className="page-container pulselink-wiki">
            <div className="wiki-nav-header">
                <Link to="/pulselink" className="back-link">
                    <ArrowLeft size={20} /> Back to PulseLink
                </Link>
                <h1>PulseLink User Guide</h1>
            </div>

            <div className="content-wrapper wiki-content">
                <section className="wiki-intro">
                    <p className="lead">
                        <strong>PulseLink</strong> is designed to be your silent guardian, ready to alert your trusted contacts the moment you need help, without requiring you to unlock your phone or navigate complex menus.
                    </p>
                </section>

                <section className="wiki-section">
                    <h2>Getting Started</h2>

                    <div className="subsection">
                        <h3>1. Installation & Permissions</h3>
                        <p>Upon first launch, PulseLink will request several critical permissions. These are essential for the app's core functionality:</p>
                        <ul className="feature-list">
                            <li><strong>Microphone:</strong> To listen for your trigger phrases.</li>
                            <li><strong>Location:</strong> To share your position during an emergency.</li>
                            <li><strong>Contacts:</strong> To allow you to select your Trusted Contacts.</li>
                            <li><strong>SMS/Phone:</strong> To send alerts and initiate calls.</li>
                            <li><strong>Notifications (DND Bypass):</strong> To sound loud alarms even when your phone is silent.</li>
                        </ul>
                        <div className="note-box">
                            <strong>Note:</strong> PulseLink runs a "foreground service" (visible in your status bar) to ensure the system doesn't kill the app while it's listening.
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>2. Creating Your Profile</h3>
                        <ul>
                            <li>Enter your name (this will appear in alerts sent to contacts).</li>
                            <li>(Optional) Set a profile picture.</li>
                            <li>(Optional) Create a cloud account to sync your settings across devices.</li>
                        </ul>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Trusted Contacts</h2>
                    <p>PulseLink organizes your contacts into two tiers:</p>

                    <div className="card-grid">
                        <div className="wiki-card emergency">
                            <Shield className="card-icon" />
                            <h3>Emergency Contacts 🚨</h3>
                            <ul>
                                <li><strong>Role:</strong> People who should be notified immediately in a crisis.</li>
                                <li><strong>Alert Type:</strong> Receive "Emergency Alerts" with loud sirens, live location, and automated calls.</li>
                                <li><strong>When to use:</strong> Police, Parents, Spouses, Close Friends.</li>
                            </ul>
                        </div>

                        <div className="wiki-card checkin">
                            <Check className="card-icon" />
                            <h3>Check-In Contacts ✅</h3>
                            <ul>
                                <li><strong>Role:</strong> People you want to keep updated on your safety status.</li>
                                <li><strong>Alert Type:</strong> Receive "Check-Ins" (e.g., "I'm safe", "Arrived home") and lower-priority notifications.</li>
                                <li><strong>When to use:</strong> Roommates, Extended Family.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="subsection">
                        <h3>To Add a Contact:</h3>
                        <ol>
                            <li>Go to the <strong>Contacts</strong> tab.</li>
                            <li>Tap the <strong>+</strong> button.</li>
                            <li>Select a contact from your phonebook or enter details manually.</li>
                            <li>Assign them to "Emergency" or "Check-In" tier.</li>
                        </ol>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Voice Triggers</h2>
                    <p>The core of PulseLink is voice activation. You can define specific phrases that trigger actions.</p>

                    <div className="subsection">
                        <h3>Setting Up Phrases</h3>
                        <ol>
                            <li>Go to <strong>Settings {'>'} Voice Triggers</strong>.</li>
                            <li>Tap <strong>Add Phrase</strong>.</li>
                            <li>Speak your desired phrase (e.g., "Red Alert", "Help me now", "Strawberry Ice Cream").</li>
                            <li>Assign an action: <strong>Emergency Alert</strong> or <strong>Check-In</strong>.</li>
                        </ol>
                    </div>

                    <div className="subsection">
                        <h3>How to Use</h3>
                        <ul className="feature-list">
                            <li><strong>While Unlocked:</strong> Just say the phrase clearly.</li>
                            <li><strong>While Locked:</strong> If "Always-On Listening" is enabled, say the phrase near the phone.</li>
                            <li><strong>Discreet Mode:</strong> You can whisper the phrase. PulseLink's recognition engine is tuned for close-range speech.</li>
                        </ul>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Emergency Mode 🆘</h2>
                    <p>When activated (by voice or SOS button):</p>
                    <ul className="feature-list">
                        <li><Bell size={16} className="inline-icon" /> <strong>Siren:</strong> A loud alarm sounds (unless "Silent SOS" is enabled).</li>
                        <li><Phone size={16} className="inline-icon" /> <strong>Messaging:</strong> SMS and Data messages are sent to all Emergency Contacts.</li>
                        <li><MapPin size={16} className="inline-icon" /> <strong>Location:</strong> Your current location is captured and shared. Live tracking begins.</li>
                        <li><Phone size={16} className="inline-icon" /> <strong>Calling:</strong> The app attempts to call your primary emergency contact.</li>
                    </ul>

                    <div className="subsection">
                        <h3>To Cancel:</h3>
                        <p>Tap "I'm Safe" on the emergency screen and enter your PIN (if configured).</p>
                    </div>
                </section>

                <section className="wiki-section">
                    <h2>Settings Overview</h2>
                    <ul className="settings-list">
                        <li><strong>Silent SOS:</strong> Triggers alerts without any local sound or screen flash.</li>
                        <li><strong>Audio Gain:</strong> Forces phone volume to max during alerts.</li>
                        <li><strong>Battery Saver:</strong> Adjusts listening frequency to save power (may reduce responsiveness).</li>
                        <li><strong>Dark Mode:</strong> Toggles app theme.</li>
                    </ul>
                </section>

            </div>

            <style>{`
        .pulselink-wiki {
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
          color: #646cff;
          text-decoration: none;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .back-link:hover {
            text-decoration: underline;
        }

        .wiki-nav-header h1 {
          font-size: 2.5rem;
          background: linear-gradient(to right, #646cff, #00bcd4);
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
          border-left: 4px solid #646cff;
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
        }

        .subsection h3 {
          color: #00bcd4;
          margin-bottom: 1rem;
        }

        .feature-list, .settings-list {
          list-style: none;
          padding: 0;
        }
        
        .feature-list li, .settings-list li {
            margin-bottom: 0.8rem;
            line-height: 1.5;
        }
        
        .feature-list li strong, .settings-list li strong {
            color: #fff;
        }

        .note-box {
          background: rgba(100, 108, 255, 0.1);
          border: 1px solid #646cff;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .wiki-card {
          background: #1e1e2e;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .wiki-card.emergency { border-top: 4px solid #ff4444; }
        .wiki-card.checkin { border-top: 4px solid #00bcd4; }

        .card-icon {
          margin-bottom: 1rem;
          color: #fff;
        }
        
        .wiki-card h3 { margin-top: 0; font-size: 1.1rem; }

        .wiki-card ul {
            padding-left: 1.2rem;
        }
        
        .wiki-card li {
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
            color: #ccc;
        }
        
        .inline-icon {
            vertical-align: text-bottom;
            margin-right: 0.3rem;
        }

        @media (max-width: 600px) {
          .card-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default PulseLinkGuide;
