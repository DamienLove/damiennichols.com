import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="page-container privacy-page">
            <section className="page-hero small-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-content"
                >
                    <h1>Privacy Policy</h1>
                    <p className="subtitle">Last Updated: {new Date().toLocaleDateString()}</p>
                </motion.div>
            </section>

            <div className="content-wrapper text-content">
                <div className="policy-section">
                    <h2><Shield className="inline-icon" /> Introduction</h2>
                    <p>
                        Damien Nichols ("we", "our", or "us") operates the website damiennichols.com and the PulseLink application suite (including Beacon, PulseLink Pro, and RingerSong), as well as the QA Verify & Track and Beta Max applications.
                        We are committed to protecting your privacy and ensuring you have control over your data.
                    </p>
                </div>

                <div className="policy-section">
                    <h2><Eye className="inline-icon" /> Data Collection & Usage</h2>

                    <h3>PulseLink & Beacon</h3>
                    <p>
                        <strong>Location Data:</strong> PulseLink collects location data only when you explicitly activate a safety alert (e.g., "Panic Mode") to share your position with your trusted contacts. This data is not stored on our servers permanently and is used solely for the purpose of the immediate safety alert.
                    </p>
                    <p>
                        <strong>Microphone Usage:</strong> The app uses the microphone to listen for specific voice triggers (if enabled) in the background. Audio is processed locally on your device and is never uploaded to the cloud.
                    </p>
                    <p>
                        <strong>Contacts:</strong> We access your contacts only to allow you to select trusted safety contacts. We do not upload your address book.
                    </p>

                    <h3>QA Verify & Track</h3>
                    <p>
                        <strong>Account Data:</strong> We use Firebase Authentication to manage user accounts. Your email and basic profile information are stored securely via Google's Firebase services.
                    </p>
                    <p>
                        <strong>GitHub Tokens:</strong> Personal Access Tokens (PATs) provided for GitHub integration are stored locally on your device or in a secure, encrypted format restricted to your user session.
                    </p>

                    <h3>Beta Max</h3>
                    <p>
                        User activity within the Beta Max platform (gamification stats, badges) is stored to provide the service. Content you submit (bug reports) is shared with the relevant project Architects.
                    </p>
                </div>

                <div className="policy-section">
                    <h2><Lock className="inline-icon" /> Third-Party Services</h2>
                    <p>We use the following third-party services which may collect data according to their own privacy policies:</p>
                    <ul>
                        <li><strong>Google Firebase:</strong> For authentication, hosting, and database services.</li>
                        <li><strong>Google Analytics:</strong> To analyze website traffic and improve user experience (anonymized).</li>
                        <li><strong>Spotify / YouTube:</strong> The RingerSong app interacts with these services via their APIs on your behalf; we do not store your login credentials for these services.</li>
                    </ul>
                </div>

                <div className="policy-section">
                    <h2>Data Deletion</h2>
                    <p>
                        You have the right to request deletion of your account and associated data.
                        For QA Verify and Beta Max users, you can use the "Delete Account" option within the app settings.
                        For other inquiries, please contact us at support@damiennichols.com.
                    </p>
                </div>

                <div className="policy-section">
                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </div>
            </div>

            <style>{`
        .privacy-page {
          padding-bottom: 4rem;
        }

        .small-hero {
          height: 30vh;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .text-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .policy-section {
          margin-bottom: 3rem;
        }

        .policy-section h2 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          font-size: 1.75rem;
        }

        .policy-section h3 {
          color: var(--color-text);
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }

        .policy-section p, .policy-section ul {
          color: var(--color-text-muted);
          line-height: 1.8;
          font-size: 1.05rem;
        }
        
        .policy-section ul {
          padding-left: 1.5rem;
        }
        
        .policy-section li {
          margin-bottom: 0.5rem;
        }

        .inline-icon {
          color: var(--color-accent);
        }
      `}</style>
        </div>
    );
};

export default Privacy;
