import { motion } from 'framer-motion';
import { Search, Users, Filter, Clock, TrendingUp, ExternalLink, Download, Zap, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacebookSearch = () => {
  return (
    <div className="page-container facebook-search-page">
      <section className="hero-section page-hero">
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
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Facebook Search
          </motion.h1>
          <motion.p
            className="hero-subtitle"
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
          className="value-prop section-spacing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Find What You're Looking For</h2>
          <p className="lead text-muted">
            Facebook Search enhances your Facebook experience with powerful search capabilities.
            Discover people, groups, posts, and content faster with advanced filtering and intelligent search algorithms.
          </p>
        </motion.section>

        {/* Main Features Section */}
        <motion.section
          className="features-section section-spacing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title">Powerful Search Features</h2>
            <p className="text-muted">Everything you need to find anything on Facebook</p>
          </div>

          <div className="grid-cols-2">
            <motion.div
              className="feature-card glass-card"
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
              <p className="text-muted">
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
              className="feature-card glass-card"
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
              <p className="text-muted">
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
              className="feature-card glass-card"
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
              <p className="text-muted">
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
              className="feature-card glass-card"
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
              <p className="text-muted">
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
          className="how-it-works section-spacing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How It Works</h2>
          <div className="grid-cols-3">
            <motion.div
              className="step-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="step-number">1</div>
              <h3>Enter Your Query</h3>
              <p className="text-muted">Type what you're looking for - people, posts, groups, or pages.</p>
            </motion.div>

            <motion.div
              className="step-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="step-number">2</div>
              <h3>Apply Filters</h3>
              <p className="text-muted">Refine your search with advanced filters like date, location, and type.</p>
            </motion.div>

            <motion.div
              className="step-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="step-number">3</div>
              <h3>Get Results</h3>
              <p className="text-muted">Browse organized, relevant results with enhanced sorting options.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="benefits-section section-spacing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose Facebook Search?</h2>
          <div className="grid-cols-3">
            <motion.div
              className="benefit-item glass-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="benefit-icon" />
              <h4>Lightning Fast</h4>
              <p className="text-muted">Optimized search algorithms deliver results instantly</p>
            </motion.div>

            <motion.div
              className="benefit-item glass-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="benefit-icon" />
              <h4>Privacy Focused</h4>
              <p className="text-muted">Your searches are private and secure</p>
            </motion.div>

            <motion.div
              className="benefit-item glass-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Smartphone className="benefit-icon" />
              <h4>Mobile Optimized</h4>
              <p className="text-muted">Designed for seamless mobile Facebook browsing</p>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="cta-section section-spacing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Ready to Supercharge Your Facebook Experience?</h2>
          <p className="hero-subtitle">Download Facebook Search and discover content like never before.</p>
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
            <Link
              to="/facebook-search/wiki"
              className="btn btn-secondary btn-large"
            >
              Documentation
            </Link>
          </div>
        </motion.section>
      </div>

      <style>{`
        .facebook-search-page {
          --fb-blue: #3b82f6;
          --fb-purple: #8b5cf6;
        }

        .page-hero {
          background: radial-gradient(circle at center, #1a1f3a 0%, #000 100%);
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

        .hero-title {
          background: linear-gradient(to right, var(--fb-blue), var(--fb-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-icon {
          color: var(--fb-blue);
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
        }

        .badges {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .badge {
          background: rgba(59, 130, 246, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          color: var(--fb-blue);
          border: 1px solid rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(10px);
        }

        .value-prop {
          text-align: center;
        }

        .value-prop h2 {
           background: linear-gradient(to right, var(--fb-blue), var(--fb-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .feature-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .feature-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          background: linear-gradient(135deg, var(--fb-blue), var(--fb-purple));
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

        .feature-list {
          list-style: none;
          padding: 0;
          margin-top: auto;
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
          color: var(--fb-blue);
          font-weight: bold;
        }

        .how-it-works, .benefits-section {
          text-align: center;
        }

        .step-card {
          padding: 2rem;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--fb-blue), var(--fb-purple));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .step-card h3 {
          margin-bottom: 1rem;
        }
        
        .benefit-item {
          padding: 2rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .benefit-icon {
          width: 48px;
          height: 48px;
          color: var(--fb-blue);
          margin-bottom: 1rem;
        }

        .benefit-item h4 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .cta-section {
          text-align: center;
          padding: 4rem 2rem;
          background: radial-gradient(circle, rgba(59,130,246,0.15), transparent);
          border-radius: 20px;
          border: 2px solid rgba(59, 130, 246, 0.3);
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .btn-large {
          padding: 1.25rem 2.5rem;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
};

export default FacebookSearch;
