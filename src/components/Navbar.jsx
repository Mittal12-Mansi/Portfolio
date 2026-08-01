import React from 'react';
import { Code2, Brain, Moon, Sun, FileText, Sparkles, LayoutGrid } from 'lucide-react';

export default function Navbar({ activeRole, setActiveRole, theme, toggleTheme, onOpenResume }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(11, 15, 25, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.85rem 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        
        {/* Brand Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--gradient-hero)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            color: '#fff',
            fontSize: '1.2rem',
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)'
          }}>
            MM
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
              Mansi Mittal
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              SDE & AI/ML Candidate
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Projects</a>
          <a href="#ai-matcher" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Sparkles size={14} style={{ color: 'var(--accent-ai)' }} /> AI Matcher
          </a>
          <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Skills</a>
          <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Education</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a>
        </nav>

        {/* Controls: Role Switcher + Resume + Theme */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Role Filter Selector */}
          <div style={{
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '3px',
            borderRadius: '9999px',
            border: '1px solid var(--border-color)'
          }}>
            <button
              onClick={() => setActiveRole('all')}
              title="View all SDE & AI/ML qualifications"
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeRole === 'all' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                color: activeRole === 'all' ? 'var(--text-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s'
              }}
            >
              <LayoutGrid size={13} /> All
            </button>
            <button
              onClick={() => setActiveRole('sde')}
              title="Highlight Software Development Engineering"
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeRole === 'sde' ? 'var(--gradient-sde)' : 'transparent',
                color: activeRole === 'sde' ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s'
              }}
            >
              <Code2 size={13} /> SDE
            </button>
            <button
              onClick={() => setActiveRole('aiml')}
              title="Highlight Artificial Intelligence & Machine Learning"
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                border: 'none',
                background: activeRole === 'aiml' ? 'var(--gradient-ai)' : 'transparent',
                color: activeRole === 'aiml' ? '#fff' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s'
              }}
            >
              <Brain size={13} /> AI/ML
            </button>
          </div>

          {/* Resume Button */}
          <button className="btn btn-secondary" onClick={onOpenResume} style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
            <FileText size={14} /> Resume
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            style={{
              width: '36px',
              height: '36px',
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
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

      </div>
    </header>
  );
}
