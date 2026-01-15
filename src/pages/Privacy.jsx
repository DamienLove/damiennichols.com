import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="page-container privacy-page">
      <section className="hero-section page-hero small-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-subtitle text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
        </motion.div>
      </section>

      <div className="content-container text-content">
        <div className="policy-section glass-card">
          <h2><Shield className="inline-icon" /> Introduction</h2>
          <p className="text-muted">
            Damien Nichols ("we", "our", or "us") operates the website damiennichols.com and the PulseLink application suite (including Beacon, PulseLink Pro, and RingerSong), as well as the QA Verify & Track and Beta Max applications.
            We are committed to protecting your privacy and ensuring you have control over your data.
          </p>
        </div>

        <div className="policy-section glass-card">
          <h2><Eye className="inline-icon" /> Data Collection & Usage</h2>

          <h3>PulseLink & Beacon</h3>
          <p className="text-muted">
            <strong>Location Data:</strong> PulseLink collects location data only when you explicitly activate a safety alert (e.g., "Panic Mode") to share your position with your trusted contacts. This data is not stored on our servers permanently and is used solely for the purpose of the immediate safety alert.
          </p>
          <p className="text-muted">
            <strong>Microphone Usage:</strong> The app uses the microphone to listen for specific voice triggers (if enabled) in the background. Audio is processed locally on your device and is never uploaded to the cloud.
          </p>
          <p className="text-muted">
            <strong>Contacts:</strong> We access your contacts only to allow you to select trusted safety contacts. We do not upload your address book.
          </p>

          <h3>QA Verify & Track</h3>
          <p className="text-muted">
            <strong>Account Data:</strong> We use Firebase Authentication to manage user accounts. Your email and basic profile information are stored securely via Google's Firebase services.
          </p>
          <p className="text-muted">
            <strong>GitHub Tokens:</strong> Personal Access Tokens (PATs) provided for GitHub integration are stored locally on your device or in a secure, encrypted format restricted to your user session.
          </p>

          <h3>Beta Max</h3>
          <p className="text-muted">
            User activity within the Beta Max platform (gamification stats, badges) is stored to provide the service. Content you submit (bug reports) is shared with the relevant project Architects.
          </p>
        </div>

        <div className="policy-section glass-card">
          <h2><Lock className="inline-icon" /> Third-Party Services</h2>
          <p className="text-muted">We use the following third-party services which may collect data according to their own privacy policies:</p>
          <ul>
            <li className="text-muted"><strong>Google Firebase:</strong> For authentication, hosting, and database services.</li>
            <li className="text-muted"><strong>Google Analytics:</strong> To analyze website traffic and improve user experience (anonymized).</li>
            <li className="text-muted"><strong>Spotify / YouTube:</strong> The RingerSong app interacts with these services via their APIs on your behalf; we do not store your login credentials for these services.</li>
          </ul>
        </div>

        <div className="policy-section glass-card">
          <h2>Data Deletion</h2>
          <p className="text-muted">
            You have the right to request deletion of your account and associated data.
            For QA Verify and Beta Max users, you can use the "Delete Account" option within the app settings.
            For other inquiries, please contact us at support@damiennichols.com.
          </p>
        </div>

        <div className="policy-section glass-card">
          <h2>Changes to This Policy</h2>
          <p className="text-muted">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </div>

      <style>{`
        .privacy-page {
          padding-bottom: 4rem;
        }

        .small-hero {
          min-height: 30vh;
          padding-top: 6rem;
        }

        .text-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .policy-section {
          padding: 2.5rem;
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
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 1rem;
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
