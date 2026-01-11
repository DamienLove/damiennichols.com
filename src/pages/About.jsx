import { motion } from 'framer-motion';
import { Github, Facebook, Mail, Code, BookOpen, Rocket, Linkedin, Briefcase, Award } from 'lucide-react';

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
            <motion.div
              className="profile-photo-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="profile-photo">
                <span className="photo-placeholder">DN</span>
              </div>
            </motion.div>
            <motion.div
              className="profile-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1>Damien Nichols</h1>
              <p className="role">Software Engineer & Author</p>
              <p className="tagline">Creating technology and stories that matter</p>
            </motion.div>
          </div>

          <div className="bio-text">
            <p>
              I'm a passionate creator who bridges the gap between imagination and technology.
              My work spans two worlds: <strong>software engineering</strong> and <strong>storytelling</strong>.
            </p>
            <p>
              As a <strong>Software Engineer</strong>, I build applications that solve real problems. From <strong>PulseLink</strong>—a
              voice-activated safety companion that could save lives—to <strong>Beta Max</strong>, a gamified QA platform that makes
              testing feel like an adventure. Every project is driven by a simple question: <em>How can technology make life better?</em>
            </p>
            <p>
              As an <strong>Author</strong>, I explore the boundaries of reality through science fiction. The <strong>Universe Connected</strong>
              series weaves together multiple dimensions, timelines, and realities into a cohesive narrative that challenges everything
              you thought you knew about existence. My writing style blends logical world-building (thanks to my engineering background)
              with mind-bending concepts that keep readers guessing.
            </p>
            <p>
              Whether I'm writing code or crafting stories, my goal is the same: <strong>create something meaningful that resonates with people</strong>.
            </p>
          </div>

          <motion.div
            className="experience-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3><Briefcase size={24} className="section-icon" /> Professional Experience</h3>
            <div className="experience-grid">
              <motion.div
                className="experience-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="exp-icon" />
                <h4>AAA Game Development</h4>
                <p>Contributed to multiple <strong>Call of Duty</strong> titles through work with Raven Software, Activision, Infinity Ward, High Moon Studios, and Treyarch. Worked across platforms including Modern Warfare, Infinite Warfare, and WWII.</p>
                <a href="https://www.mobygames.com/person/586898/damien-nichols/" target="_blank" rel="noopener noreferrer" className="exp-link">
                  View MobyGames Profile →
                </a>
              </motion.div>
              <motion.div
                className="experience-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="exp-icon" />
                <h4>Independent Development</h4>
                <p>Creator of the PulseLink Suite, Beta Max, QA Verify & Track, and Facebook Search. Building innovative Android applications and web platforms that solve real-world problems.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="expertise-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>What I Do</h3>
            <div className="expertise-grid">
              <div className="expertise-item">
                <Code size={32} className="expertise-icon" />
                <h4>Software Development</h4>
                <p>Full-stack development, mobile apps (Android), and innovative solutions that prioritize user experience.</p>
              </div>
              <div className="expertise-item">
                <Rocket size={32} className="expertise-icon" />
                <h4>Product Innovation</h4>
                <p>Creating tools that solve real problems—from personal safety to developer productivity.</p>
              </div>
              <div className="expertise-item">
                <BookOpen size={32} className="expertise-icon" />
                <h4>Creative Writing</h4>
                <p>Science fiction that challenges perceptions and explores interconnected realities.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="connect-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Connect</h3>
            <div className="social-icons">
              <motion.a
                href="https://github.com/DamienLove"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github /> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/damienmnichols/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin /> LinkedIn
              </motion.a>
              <motion.a
                href="https://www.facebook.com/damienlove"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook /> Facebook
              </motion.a>
            </div>
          </motion.div>

          <div className="cta-container">
            <a href="mailto:contact@damiennichols.com" className="btn btn-primary">
              <Mail size={18} /> Get in Touch
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
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .profile-photo-container {
          flex-shrink: 0;
        }

        .profile-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), #00bcd4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 800;
          color: white;
          box-shadow: 0 8px 24px rgba(100, 108, 255, 0.3);
          border: 4px solid var(--color-surface);
        }

        .profile-text {
          flex: 1;
        }

        .profile-header h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }

        .role {
          font-size: 1.5rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }

        .tagline {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          font-style: italic;
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

        .experience-section {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--color-border);
        }

        .experience-section h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          color: var(--color-primary);
        }

        .section-icon {
          color: var(--color-primary);
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .experience-card {
          background: rgba(100, 108, 255, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(100, 108, 255, 0.2);
        }

        .exp-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
          width: 32px;
          height: 32px;
        }

        .experience-card h4 {
          font-size: 1.3rem;
          margin: 0 0 1rem 0;
          color: var(--color-text);
        }

        .experience-card p {
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .exp-link {
          display: inline-flex;
          align-items: center;
          color: var(--color-primary);
          font-weight: 600;
          transition: color 0.2s;
        }

        .exp-link:hover {
          color: #00bcd4;
        }

        .expertise-section {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--color-border);
        }

        .expertise-section h3 {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--color-primary);
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .expertise-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(100, 108, 255, 0.05);
          border-radius: 12px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .expertise-item:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(100, 108, 255, 0.15);
        }

        .expertise-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .expertise-item h4 {
          margin: 0 0 0.75rem 0;
          color: var(--color-text);
        }

        .expertise-item p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .connect-section {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--color-border);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
          justify-content: center;
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
          transform: translateY(-2px);
        }

        .cta-container {
          margin-top: 2rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .profile-section {
             padding: 1.5rem;
          }

          .profile-header {
            flex-direction: column;
            text-align: center;
          }

          .profile-photo {
            width: 120px;
            height: 120px;
            font-size: 2.5rem;
          }

          .profile-header h1 {
            font-size: 2.2rem;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }

          .experience-grid {
            grid-template-columns: 1fr;
          }

          .social-icons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
