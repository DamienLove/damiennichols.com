import { motion } from 'framer-motion';
import { Search, Users, Filter, Clock, TrendingUp, ExternalLink, Download, Zap, Shield, Smartphone } from 'lucide-react';

const FacebookSearch = () => {
  return (
    <div className="page-container facebook-search-page">
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
            <Search size={64} className="hero-icon" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Facebook Search
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Advanced Search Tools for Facebook Discovery
          </motion.p>
          <motion.div
            className="badges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="badge">Android</span>
            <span className="badge">Social</span>
            <span className="badge">Productivity</span>
          </motion.div>
        </motion.div>
      </section>

      <div className="content-wrapper">
        {/* Value Proposition */}
        <motion.section
          className="value-prop"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Find What You're Looking For</h2>
          <p className="lead">
            Facebook Search enhances your Facebook experience with powerful search capabilities.
            Discover people, groups, posts, and content faster with advanced filtering and intelligent search algorithms.
          </p>
        </motion.section>

        {/* Main Features Section */}
        <motion.section
          className="features-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2>Powerful Search Features</h2>
            <p>Everything you need to find anything on Facebook</p>
          </div>

          <div className="features-grid-large">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(59, 130, 246, 0.25)' }}
            >
              <div className="feature-icon-wrapper">
                <Filter size={40} className="feature-icon" />
              </div>
              <h3>Advanced Filtering</h3>
              <p>
                Filter search results by date range, location, post type, and more.
                Narrow down results to find exactly what you need with precision controls.
              </p>
              <ul className="feature-list">
                <li>Date range filtering</li>
                <li>Location-based search</li>
                <li>Content type filters</li>
                <li>User-specific searches</li>
              </ul>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(59, 130, 246, 0.25)' }}
            >
              <div className="feature-icon-wrapper">
                <Users size={40} className="feature-icon" />
              </div>
              <h3>People Discovery</h3>
              <p>
                Find friends, colleagues, and connections faster. Search by name, location,
                workplace, education, and mutual connections.
              </p>
              <ul className="feature-list">
                <li>Advanced people search</li>
                <li>Mutual friends filtering</li>
                <li>Workplace & education search</li>
                <li>Location-based discovery</li>
              </ul>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(59, 130, 246, 0.25)' }}
            >
              <div className="feature-icon-wrapper">
                <Clock size={40} className="feature-icon" />
              </div>
              <h3>Search History</h3>
              <p>
                Keep track of your searches with organized history. Revisit previous searches,
                save frequent queries, and manage your search activity.
              </p>
              <ul className="feature-list">
                <li>Organized search history</li>
                <li>Saved search queries</li>
                <li>Quick re-search</li>
                <li>History management</li>
              </ul>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(59, 130, 246, 0.25)' }}
            >
              <div className="feature-icon-wrapper">
                <TrendingUp size={40} className="feature-icon" />
              </div>
              <h3>Trending Content</h3>
              <p>
                Discover what's popular and trending on Facebook. Stay up to date with
                the latest conversations, viral posts, and trending topics.
              </p>
              <ul className="feature-list">
                <li>Trending posts discovery</li>
                <li>Popular topics</li>
                <li>Viral content tracking</li>
                <li>Topic-based exploration</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          className="how-it-works"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>How It Works</h2>
          <div className="steps-grid">
            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="step-number">1</div>
              <h3>Enter Your Query</h3>
              <p>Type what you're looking for - people, posts, groups, or pages.</p>
            </motion.div>

            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="step-number">2</div>
              <h3>Apply Filters</h3>
              <p>Refine your search with advanced filters like date, location, and type.</p>
            </motion.div>

            <motion.div
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="step-number">3</div>
              <h3>Get Results</h3>
              <p>Browse organized, relevant results with enhanced sorting options.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="benefits-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Facebook Search?</h2>
          <div className="benefits-grid">
            <motion.div
              className="benefit-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="benefit-icon" />
              <h4>Lightning Fast</h4>
              <p>Optimized search algorithms deliver results instantly</p>
            </motion.div>

            <motion.div
              className="benefit-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="benefit-icon" />
              <h4>Privacy Focused</h4>
              <p>Your searches are private and secure</p>
            </motion.div>

            <motion.div
              className="benefit-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Smartphone className="benefit-icon" />
              <h4>Mobile Optimized</h4>
              <p>Designed for seamless mobile Facebook browsing</p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Supercharge Your Facebook Experience?</h2>
          <p>Download Facebook Search and discover content like never before.</p>
          <div className="cta-buttons">
            <motion.a
              href="https://github.com/DamienLove/FacebookSearch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} /> View on GitHub
            </motion.a>
          </div>
        </motion.section>
      </div>

      <style>{`
        .facebook-search-page {
          width: 100%;
          min-height: 100vh;
          padding-bottom: 4rem;
        }

        .page-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, #1a1f3a 0%, #000 100%);
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
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
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
          color: #3b82f6;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
        }

        .page-hero h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
        }

        .badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .badge {
          background: rgba(59, 130, 246, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(10px);
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* Value Proposition */
        .value-prop {
          text-align: center;
          padding: 4rem 2rem;
          margin-bottom: 4rem;
        }

        .value-prop h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .value-prop .lead {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Features Section */
        .features-section {
          margin-bottom: 6rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .section-header p {
          font-size: 1.1rem;
          color: var(--color-text-muted);
        }

        .features-grid-large {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .feature-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .feature-icon {
          color: white;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .feature-card p {
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          padding: 0.5rem 0;
          color: var(--color-text-muted);
          position: relative;
          padding-left: 1.5rem;
        }

        .feature-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #3b82f6;
          font-weight: bold;
        }

        /* How It Works */
        .how-it-works {
          margin-bottom: 6rem;
          text-align: center;
        }

        .how-it-works h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--color-text);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .step-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
        }

        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1.5rem;
        }

        .step-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .step-card p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* Benefits Section */
        .benefits-section {
          margin-bottom: 6rem;
          text-align: center;
        }

        .benefits-section h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--color-text);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit-item {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 2rem;
          cursor: pointer;
        }

        .benefit-icon {
          width: 48px;
          height: 48px;
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        .benefit-item h4 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--color-text);
        }

        .benefit-item p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 4rem 2rem;
          background: radial-gradient(circle, rgba(59,130,246,0.15), transparent);
          border-radius: 20px;
          border: 2px solid rgba(59, 130, 246, 0.3);
        }

        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }

        .cta-section p {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .page-hero h1 {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.2rem;
          }

          .value-prop h2,
          .section-header h2,
          .how-it-works h2,
          .benefits-section h2,
          .cta-section h2 {
            font-size: 2rem;
          }

          .features-grid-large,
          .steps-grid,
          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FacebookSearch;
