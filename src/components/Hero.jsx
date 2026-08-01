import React from 'react';
import { Code2, Brain, Sparkles, CheckCircle2, ArrowRight, Download, Award, GraduationCap, Mail } from 'lucide-react';
import { SocialGithub, SocialLinkedin } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Hero({ activeRole, onOpenResume }) {
  const handleHireClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="section" style={{ paddingTop: '4rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Dynamic Ambient Background Glows */}
      <div className="glow-bg" style={{ top: '-10%', left: '15%', width: '450px', height: '450px', background: 'rgba(99, 102, 241, 0.15)' }} />
      <div className="glow-bg" style={{ top: '20%', right: '10%', width: '400px', height: '400px', background: 'rgba(6, 182, 212, 0.12)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Top Status & Role Badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="badge badge-success" style={{ animation: 'pulse 2s infinite' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
              Actively Seeking SDE & AI/ML Roles
            </span>
            <span className="badge badge-sde">
              <Code2 size={13} /> Full-Stack SDE (Java, React, Node, SQL)
            </span>
            <span className="badge badge-ai">
              <Brain size={13} /> AI/ML Engineer (Python, NLP, spaCy, FastAPI)
            </span>
          </div>

          {/* Main Headline */}
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.2rem' }}>
              Hi, I'm <span className="gradient-text-hero">Mansi Mittal</span>
              <br />
              {activeRole === 'sde' && (
                <span className="gradient-text-sde" style={{ fontSize: '0.85em' }}>Building Scalable, Test-Driven Full-Stack Systems</span>
              )}
              {activeRole === 'aiml' && (
                <span className="gradient-text-ai" style={{ fontSize: '0.85em' }}>Designing Intelligent NLP & Machine Learning Engines</span>
              )}
              {activeRole === 'all' && (
                <span style={{ color: 'var(--text-primary)', fontSize: '0.82em', fontWeight: 600 }}>
                  Aspiring SDE & AI/ML Developer
                </span>
              )}
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto 2rem auto', lineHeight: 1.7 }}>
              Master of Computer Applications (MCA) candidate at <strong style={{ color: 'var(--text-primary)' }}>MANIT Bhopal</strong> (SGPA 8.9) and Mathematics Graduate from <strong style={{ color: 'var(--text-primary)' }}>University of Delhi</strong> (CGPA 9.06). Strong DSA foundation with <strong style={{ color: 'var(--accent-emerald)' }}>300+ LeetCode problems solved</strong>, specializing in production-grade web applications, TDD architecture, graph algorithms, and NLP skill-gap matching systems.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
              Explore Interactive Projects <ArrowRight size={18} />
            </a>
            <a href="#ai-matcher" className="btn btn-ai" style={{ padding: '0.85rem 1.8rem' }}>
              <Sparkles size={18} /> Try Live AI Skill Matcher
            </a>
            <button className="btn btn-secondary" onClick={onOpenResume} style={{ padding: '0.85rem 1.4rem' }}>
              <Download size={18} /> Resume PDF
            </button>
          </div>

          {/* Social Quick Links */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', color: 'var(--text-secondary)' }}>
            <a href="https://github.com/Mittal12-Mansi" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
              <SocialGithub size={18} /> GitHub
            </a>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
              <SocialLinkedin size={18} /> LinkedIn
            </a>
            <span>•</span>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
              <Code2 size={18} /> LeetCode (300+ Solved)
            </a>
            <span>•</span>
            <a href="mailto:mansimittal1215@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}>
              <Mail size={18} /> mansimittal1215@gmail.com
            </a>
          </div>

          {/* Metrics Grid Callouts */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.2rem',
            marginTop: '1.5rem'
          }}>
            
            <div className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#38bdf8', fontFamily: 'var(--font-heading)' }}>
                300+
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                LeetCode DSA Problems
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#a78bfa', fontFamily: 'var(--font-heading)' }}>
                8.9 SGPA
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                MANIT Bhopal (MCA)
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#34d399', fontFamily: 'var(--font-heading)' }}>
                9.06 CGPA
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                DU Shivaji (B.Sc Math)
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>
                100% / 82%
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                AI Precision & F1 Score
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
