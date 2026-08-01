import React from 'react';
import { ArrowUp, Code2, Brain, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      background: 'rgba(11, 15, 25, 0.95)',
      padding: '2.5rem 0 1.5rem 0',
      color: 'var(--text-secondary)',
      fontSize: '0.88rem'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
              Mansi Mittal
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              SDE & Applied AI/ML Candidate | MANIT Bhopal MCA (SGPA 8.9)
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem' }}>
            <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Projects</a>
            <a href="#ai-matcher" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>AI Matcher</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Skills</a>
            <a href="#education" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Education</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            title="Back to top"
            className="btn btn-secondary"
            style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px' }}
          >
            <ArrowUp size={18} />
          </button>

        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Mansi Mittal. All rights reserved. Designed for SDE & AI/ML Excellence.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Built with React, Vite & Modern Web Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
