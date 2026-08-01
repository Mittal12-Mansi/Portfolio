import React, { useState } from 'react';
import { Code2, Brain, Moon, Sun, FileText, Sparkles, LayoutGrid, Menu, X } from 'lucide-react';

export default function Navbar({ activeRole, setActiveRole, theme, toggleTheme, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(11, 15, 25, 0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.75rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--gradient-hero)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            color: '#fff',
            fontSize: '1.1rem',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
          }}>
            MM
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Mansi Mittal
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              SDE & AI/ML Candidate
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Projects</a>
          <a href="#ai-matcher" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Sparkles size={14} style={{ color: 'var(--accent-ai)' }} /> AI Matcher
          </a>
          <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Skills</a>
          <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Education</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a>
        </nav>

        {/* Controls: Role Switcher + Resume + Theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Role Filter Selector */}
          <div className="role-switcher-box" style={{
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2px',
            borderRadius: '9999px',
            border: '1px solid var(--border-color)'
          }}>
            <button
              onClick={() => setActiveRole('all')}
              title="View all SDE & AI/ML qualifications"
              style={{
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeRole === 'all' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                color: activeRole === 'all' ? 'var(--text-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'all 0.2s'
              }}
            >
              <LayoutGrid size={12} /> All
            </button>
            <button
              onClick={() => setActiveRole('sde')}
              title="Highlight Software Development Engineering"
              style={{
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeRole === 'sde' ? 'var(--gradient-sde)' : 'transparent',
                color: activeRole === 'sde' ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'all 0.2s'
              }}
            >
              <Code2 size={12} /> SDE
            </button>
            <button
              onClick={() => setActiveRole('aiml')}
              title="Highlight Artificial Intelligence & Machine Learning"
              style={{
                padding: '0.3rem 0.65rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeRole === 'aiml' ? 'var(--gradient-ai)' : 'transparent',
                color: activeRole === 'aiml' ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'all 0.2s'
              }}
            >
              <Brain size={12} /> AI/ML
            </button>
          </div>

          {/* Resume Button */}
          <button className="btn btn-secondary nav-resume-btn" onClick={onOpenResume} style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}>
            <FileText size={14} /> Resume
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--border-color)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-primary)',
              display: 'none', // Controlled via CSS media query
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in" style={{
          background: 'rgba(15, 23, 42, 0.98)',
          borderBottom: '1px solid var(--border-bright)',
          padding: '1.2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '0.5rem'
        }}>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}
          >
            Projects
          </a>
          <a
            href="#ai-matcher"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Sparkles size={16} style={{ color: 'var(--accent-ai)' }} /> AI Skill Matcher
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}
          >
            Education & Achievements
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1rem', fontWeight: '600' }}
          >
            Contact Me
          </a>
          <button
            className="btn btn-primary"
            onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <FileText size={16} /> View Official Resume
          </button>
        </div>
      )}
    </header>
  );
}
