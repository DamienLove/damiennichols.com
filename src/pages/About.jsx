import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Facebook, Mail } from 'lucide-react';

const About = () => {
    return (
        <div className="page-container about-page">
            <div className="content-wrapper narrow">
                <motion.div
                    className="profile-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="profile-header">
                        <h1>Damien Nichols</h1>
                        <p className="role">Software Engineer & Author</p>
                    </div>

                    <div className="bio-text">
                        <p>
                            I am a passionate creator bridging the gap between imagination and technology.
                            As a Software Engineer, I build tools that solve real problems—from safety companions like <strong>PulseLink</strong> to developer utilities like <strong>QA Verify</strong>.
                        </p>
                        <p>
                            As an Author, I explore interconnected universes, weaving stories that challenge our perception of reality in the <strong>Universe Connected</strong> series.
                        </p>
                        <p>
                            Whether written in code or prose, my work is driven by a desire to innovate and inspire.
                        </p>
                    </div>

                    <div className="connect-section">
                        <h3>Connect</h3>
                        <div className="social-icons">
                            <a href="https://github.com/DamienLove" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github /> GitHub
                            </a>
                            <a href="https://www.facebook.com/damienlove" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Facebook /> Facebook
                            </a>
                            {/* Add more as needed */}
                        </div>
                    </div>

                    <div className="resume-section">
                        <h3>Professional Experience</h3>
                        <p>Download my full resume to see my technical journey and qualifications.</p>
                        <a href="/Damien_M_Nichols_Master_Resume.pdf" target="_blank" download className="btn btn-primary">
                            <Download size={18} /> Download Master Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .about-page {
          padding-top: 4rem;
        }

        .narrow {
          max-width: 800px;
        }

        .profile-section {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 3rem;
          border-radius: 16px;
          text-align: left;
        }

        .profile-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 2rem;
          margin-bottom: 2rem;
        }

        .profile-header h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .role {
          font-size: 1.5rem;
          color: var(--color-primary);
        }

        .bio-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }

        .bio-text strong {
          color: var(--color-text);
        }

        .connect-section, .resume-section {
          margin-top: 3rem;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.2rem;
          background: var(--glass-bg);
          border-radius: 8px;
          border: 1px solid var(--border);
          color: var(--color-text);
          transition: all 0.2s;
        }

        .social-link:hover {
          background: var(--color-surface-hover);
          border-color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .profile-section {
             padding: 1.5rem;
          }
          .profile-header h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default About;
