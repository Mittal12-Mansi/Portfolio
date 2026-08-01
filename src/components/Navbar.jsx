import React, { useState } from 'react';
import { Code2, Brain, Moon, Sun, FileText, Sparkles, LayoutGrid, Menu, X } from 'lucide-react';

export default function Navbar({ activeRole, setActiveRole, theme, toggleTheme, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(11, 15, 25, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.6rem 0'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        
        {/* Top Navbar Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          
          {/* Brand Logo */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'var(--gradient-hero)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              color: '#fff',
              fontSize: '1rem',
              boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)'
            }}>
              MM
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                Mansi Mittal
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                SDE & AI/ML Candidate
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.88rem', fontWeight: '500' }}>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Projects</a>
            <a href="#ai-matcher" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Sparkles size={13} style={{ color: 'var(--accent-ai)' }} /> AI Matcher
            </a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Skills</a>
            <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Education</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a>
          </nav>

          {/* Desktop Controls (Role Switcher + Resume + Theme) */}
          <div className="desktop-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Desktop Role Filter Selector */}
            <div style={{
              display: 'flex',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '2px',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)'
            }}>
              <button
                onClick={() => setActiveRole('all')}
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
                  gap: '0.25rem'
                }}
              >
                <LayoutGrid size={12} /> All
              </button>
              <button
                onClick={() => setActiveRole('sde')}
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
                  gap: '0.25rem'
                }}
              >
                <Code2 size={12} /> SDE
              </button>
              <button
                onClick={() => setActiveRole('aiml')}
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
                  gap: '0.25rem'
                }}
              >
                <Brain size={12} /> AI/ML
              </button>
            </div>

            {/* Resume Button */}
            <button className="btn btn-secondary" onClick={onOpenResume} style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}>
              <FileText size={13} /> Resume
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          {/* Mobile Right Controls (Theme Toggle + Hamburger Menu) */}
          <div className="mobile-controls" style={{ display: 'none', alignItems: 'center', gap: '0.4rem' }}>
            <button
              onClick={toggleTheme}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Sub-Bar: Clean Full-Width Role Selector */}
        <div className="mobile-role-bar" style={{
          display: 'none',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.04)',
          padding: '3px',
          borderRadius: '9999px',
          border: '1px solid var(--border-color)',
          marginTop: '0.2rem'
        }}>
          <button
            onClick={() => setActiveRole('all')}
            style={{
              flex: 1,
              padding: '0.3rem',
              borderRadius: '9999px',
              border: 'none',
              background: activeRole === 'all' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
              color: activeRole === 'all' ? 'var(--text-primary)' : 'var(--text-muted)',
              fontSize: '0.72rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.2rem'
            }}
          >
            <LayoutGrid size={11} /> All Roles
          </button>
          <button
            onClick={() => setActiveRole('sde')}
            style={{
              flex: 1,
              padding: '0.3rem',
              borderRadius: '9999px',
              border: 'none',
              background: activeRole === 'sde' ? 'var(--gradient-sde)' : 'transparent',
              color: activeRole === 'sde' ? '#fff' : 'var(--text-muted)',
              fontSize: '0.72rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.2rem'
            }}
          >
            <Code2 size={11} /> SDE Focus
          </button>
          <button
            onClick={() => setActiveRole('aiml')}
            style={{
              flex: 1,
              padding: '0.3rem',
              borderRadius: '9999px',
              border: 'none',
              background: activeRole === 'aiml' ? 'var(--gradient-ai)' : 'transparent',
              color: activeRole === 'aiml' ? '#fff' : 'var(--text-muted)',
              fontSize: '0.72rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.2rem'
            }}
          >
            <Brain size={11} /> AI/ML Focus
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
