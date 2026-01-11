import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
    closeMenu();
  }, [location.pathname]);

  return (
    <div className="layout-container">
      <header className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">Damien Nichols</Link>

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/pulselink" className={location.pathname === '/pulselink' ? 'active' : ''}>PulseLink</Link>
            <Link to="/betamax" className={location.pathname === '/betamax' ? 'active' : ''}>Beta Max</Link>
            <Link to="/qa-verify" className={location.pathname === '/qa-verify' ? 'active' : ''}>QA Verify</Link>
            <Link to="/books" className={location.pathname === '/books' ? 'active' : ''}>Books</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/DamienLove" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://www.facebook.com/damienlove" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            {/* Add LinkedIn if available, placeholder for now */}
          </div>
          <div className="footer-links" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/privacy" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Damien Nichols. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-content {
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-family-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text);
          letter-spacing: -0.5px;
        }

        .main-nav {
          display: flex;
          gap: 2rem;
        }

        .main-nav a {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          position: relative;
        }

        .main-nav a:hover, .main-nav a.active {
          color: var(--color-primary);
        }
        
        .main-nav a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-text);
          padding: 0;
        }

        .main-content {
          flex: 1;
          margin-top: 70px; /* Header height */
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .main-footer {
          margin-top: auto;
          padding: 3rem 0;
          background: var(--color-surface);
          border-top: 1px solid var(--color-border);
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-links a {
          color: var(--color-text-muted);
        }
        
        .social-links a:hover {
          color: var(--color-text);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          .main-nav {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--color-surface);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            clip-path: circle(0% at 100% 0);
            transition: clip-path 0.4s ease-in-out;
            pointer-events: none;
          }

          .main-nav.open {
            clip-path: circle(150% at 100% 0);
            pointer-events: all;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
