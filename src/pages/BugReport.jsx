import { motion } from 'framer-motion';
import { Bug, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const BugReport = () => {
  const [formData, setFormData] = useState({
    app: '',
    title: '',
    description: '',
    severity: 'medium',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Bug report submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        app: '',
        title: '',
        description: '',
        severity: 'medium',
        email: '',
      });
    }, 3000);
  };

  return (
    <div className="page-container bug-report-page">
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Bug size={64} className="hero-icon" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Report a Bug
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Help us improve by reporting issues you encounter
          </motion.p>
        </motion.div>
      </section>

      <div className="content-wrapper">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bug-report-form">
              <div className="form-group">
                <label htmlFor="app">Application *</label>
                <select
                  id="app"
                  name="app"
                  value={formData.app}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an application...</option>
                  <option value="pulselink">PulseLink / Beacon</option>
                  <option value="ringersong">RingerSong</option>
                  <option value="betamax">Beta Max</option>
                  <option value="qaverify">QA Verify & Track</option>
                  <option value="facebook-search">Facebook Search</option>
                  <option value="website">This Website</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="severity">Severity *</label>
                <select
                  id="severity"
                  name="severity"
                  value={formData.severity}
                  onChange={handleChange}
                  required
                >
                  <option value="low">Low - Minor inconvenience</option>
                  <option value="medium">Medium - Affects functionality</option>
                  <option value="high">High - Major issue</option>
                  <option value="critical">Critical - App is unusable</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="title">Bug Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Brief description of the issue"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Detailed Description *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please include:&#10;- Steps to reproduce the bug&#10;- Expected behavior&#10;- Actual behavior&#10;- Device/OS information&#10;- Screenshots (if applicable)"
                  rows="8"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                <small>We'll use this to follow up on your report</small>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-large"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} /> Submit Bug Report
              </motion.button>
            </form>
          ) : (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle size={64} className="success-icon" />
              <h2>Thank You!</h2>
              <p>Your bug report has been submitted successfully.</p>
              <p className="sub-text">We'll investigate and work on a fix.</p>
            </motion.div>
          )}
        </motion.div>

        <motion.section
          className="info-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-card">
            <AlertCircle size={32} className="info-icon" />
            <h3>Tips for Better Bug Reports</h3>
            <ul>
              <li>
                <strong>Be specific:</strong> Include exact steps to reproduce the issue
              </li>
              <li>
                <strong>Include details:</strong> Device model, OS version, and app version help us diagnose faster
              </li>
              <li>
                <strong>Screenshots help:</strong> Visual references make understanding the issue easier
              </li>
              <li>
                <strong>One bug per report:</strong> Submit separate reports for different issues
              </li>
            </ul>
          </div>

          <div className="info-card">
            <Bug size={32} className="info-icon" />
            <h3>What Happens Next?</h3>
            <ul>
              <li>Your report is reviewed by our development team</li>
              <li>We prioritize based on severity and impact</li>
              <li>Critical bugs are addressed immediately</li>
              <li>You'll receive updates if you provided an email</li>
              <li>Fixes are rolled out in regular app updates</li>
            </ul>
          </div>
        </motion.section>
      </div>

      <style>{`
        .bug-report-page {
          width: 100%;
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .page-hero {
          min-height: 40vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #2d1b1b 0%, #000 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .page-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%);
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-icon {
          color: #ef4444;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 20px rgba(239, 68, 68, 0.5));
        }

        .page-hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #ef4444, #fb923c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .form-container {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 3rem;
          margin-bottom: 3rem;
        }

        .bug-report-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: var(--color-text);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          color: var(--color-text);
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        .form-group small {
          color: var(--color-text-muted);
          font-size: 0.85rem;
        }

        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          margin-top: 1rem;
        }

        .success-message {
          text-align: center;
          padding: 3rem;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5));
        }

        .success-message h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .success-message p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .success-message .sub-text {
          font-size: 0.95rem;
        }

        .info-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .info-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2rem;
        }

        .info-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }

        .info-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .info-card li {
          padding: 0.75rem 0;
          color: var(--color-text-muted);
          line-height: 1.6;
          border-bottom: 1px solid var(--color-border);
        }

        .info-card li:last-child {
          border-bottom: none;
        }

        .info-card strong {
          color: var(--color-text);
        }

        @media (max-width: 768px) {
          .page-hero h1 {
            font-size: 2.5rem;
          }

          .form-container {
            padding: 2rem 1.5rem;
          }

          .info-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BugReport;
