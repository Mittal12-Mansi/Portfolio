import React from 'react';
import { Code2, Brain, Sparkles, ArrowRight, Download, Mail } from 'lucide-react';
import { SocialGithub, SocialLinkedin } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Hero({ activeRole, onOpenResume }) {
  return (
    <section id="hero" className="section" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Dynamic Ambient Background Glows */}
      <div className="glow-bg" style={{ top: '-10%', left: '15%', width: '350px', height: '350px', background: 'rgba(99, 102, 241, 0.15)' }} />
      <div className="glow-bg" style={{ top: '20%', right: '10%', width: '300px', height: '300px', background: 'rgba(6, 182, 212, 0.12)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Top Status & Role Badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', width: '100%' }}>
            <span className="badge badge-success" style={{ whiteSpace: 'normal', textAlign: 'center' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block', flexShrink: 0 }}></span>
              Seeking Entry-Level SDE & AI/ML Roles
            </span>
            <span className="badge badge-sde" style={{ whiteSpace: 'normal', textAlign: 'center' }}>
              <Code2 size={12} /> Full-Stack SDE (Java, React, Node, SQL)
            </span>
            <span className="badge badge-ai" style={{ whiteSpace: 'normal', textAlign: 'center' }}>
              <Brain size={12} /> AI/ML Developer (Python, spaCy, FastAPI)
            </span>
          </div>

          {/* Main Headline */}
          <div style={{ width: '100%' }}>
            <h1 style={{
              fontSize: 'clamp(1.65rem, 5.5vw, 3.8rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}>
              Hi, I'm <span className="gradient-text-hero">Mansi Mittal</span>
              <br />
              {activeRole === 'sde' && (
                <span className="gradient-text-sde" style={{ fontSize: '0.85em', display: 'block', marginTop: '0.3rem' }}>Building Scalable Full-Stack Systems</span>
              )}
              {activeRole === 'aiml' && (
                <span className="gradient-text-ai" style={{ fontSize: '0.85em', display: 'block', marginTop: '0.3rem' }}>Designing NLP & Machine Learning Engines</span>
              )}
              {activeRole === 'all' && (
                <span style={{ color: 'var(--text-primary)', fontSize: '0.82em', fontWeight: 600, display: 'block', marginTop: '0.3rem' }}>
                  Aspiring SDE & AI/ML Developer
                </span>
              )}
            </h1>

            <p style={{
              fontSize: 'clamp(0.92rem, 2.5vw, 1.15rem)',
              color: 'var(--text-secondary)',
              maxWidth: '780px',
              margin: '0 auto 1.5rem auto',
              lineHeight: 1.65,
              padding: '0 0.5rem'
            }}>
              Master of Computer Applications (MCA) candidate at <strong style={{ color: 'var(--text-primary)' }}>MANIT Bhopal</strong> (SGPA 8.9) and Mathematics Graduate from <strong style={{ color: 'var(--text-primary)' }}>University of Delhi</strong> (CGPA 9.06). Strong DSA foundation with <strong style={{ color: 'var(--accent-emerald)' }}>300+ LeetCode problems solved</strong>, specializing in production-grade web applications, TDD architecture, graph algorithms, and NLP skill-gap matching systems.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-btn-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary hero-action-btn">
              Explore Projects <ArrowRight size={16} />
            </a>
            <a href="#ai-matcher" className="btn btn-ai hero-action-btn">
              <Sparkles size={16} /> Try Live AI Matcher
            </a>
            <button className="btn btn-secondary hero-action-btn" onClick={onOpenResume}>
              <Download size={16} /> Resume PDF
            </button>
          </div>

          {/* Social Quick Links */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem 1.2rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
            <a href="https://github.com/Mittal12-Mansi" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <SocialGithub size={16} /> GitHub
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <SocialLinkedin size={16} /> LinkedIn
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Code2 size={16} /> LeetCode (300+ Solved)
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a href="mailto:mansimittal1215@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={16} /> Email
            </a>
          </div>

          {/* Metrics Grid Callouts */}
          <div className="hero-metrics-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.85rem',
            marginTop: '0.5rem'
          }}>
            
            <div className="glass-card" style={{ padding: '0.9rem 0.6rem', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#38bdf8', fontFamily: 'var(--font-heading)' }}>
                300+
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.2 }}>
                LeetCode Solved
              </div>
            </div>

            <div className="glass-card" style={{ padding: '0.9rem 0.6rem', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#a78bfa', fontFamily: 'var(--font-heading)' }}>
                8.9 SGPA
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.2 }}>
                MANIT Bhopal (MCA)
              </div>
            </div>

            <div className="glass-card" style={{ padding: '0.9rem 0.6rem', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#34d399', fontFamily: 'var(--font-heading)' }}>
                9.06 CGPA
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.2 }}>
                DU Shivaji (B.Sc Math)
              </div>
            </div>

            <div className="glass-card" style={{ padding: '0.9rem 0.6rem', textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>
                100% / 82%
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.2 }}>
                AI Precision / F1
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
