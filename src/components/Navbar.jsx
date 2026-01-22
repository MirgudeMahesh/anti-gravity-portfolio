import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 0',
      marginBottom: '2rem',
      backgroundColor: 'rgba(11, 17, 32, 0.9)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 'bold', textDecoration: 'none' }}>
          <div style={{ padding: '0.4rem', border: '1px solid var(--accent-cyan)', borderRadius: '2px', background: 'rgba(34, 211, 238, 0.1)' }}>
            <Terminal size={18} color="var(--accent-cyan)" />
          </div>
          <span className="text-mono text-cyan" style={{ fontSize: '1.1rem' }}>~/mirgude</span>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-btn" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'none' }}> {/* Display managed by CSS media query if needed, but we'll do JS conditional rendering for cleaner react code, logic below */}
          {isOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
        </div>

        {/* Desktop Links */}
        <div className="desktop-links" style={{ display: 'flex', gap: '2rem' }}>
          {['Skills', 'Experience', 'Projects', 'Learning', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-mono"
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                textTransform: 'lowercase'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)' }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem 0' }}>
              {['Skills', 'Experience', 'Projects', 'Learning', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-mono"
                  style={{
                    padding: '1rem 0',
                    fontSize: '1.1rem',
                    color: 'var(--text-primary)',
                    textTransform: 'lowercase',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
