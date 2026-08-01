import React from 'react';
import { ExternalLink, Code2, Brain, ShieldCheck } from 'lucide-react';
import { SocialGithub } from './SocialIcons';
import DebtSimplificationVisualizer from './DebtSimplificationVisualizer';

export default function ProjectsSection({ activeRole }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-sde" style={{ marginBottom: '0.8rem' }}>
            <Code2 size={13} /> Production-Grade Engineering
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
            Featured Software & AI Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: 'clamp(0.88rem, 2.5vw, 1rem)' }}>
            Full-stack production applications built with Test-Driven Development (TDD), optimized graph algorithms, serverless databases, and NLP machine learning.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* PROJECT 1: Smart Budget Splitter */}
          {(activeRole === 'all' || activeRole === 'sde') && (
            <div className="glass-card animate-fade-in" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', color: 'var(--text-primary)' }}>Smart Budget Splitter</h3>
                    <span className="badge badge-sde" style={{ whiteSpace: 'normal', textAlign: 'left' }}>Full-Stack & Graph Algorithms</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Personal finance & group expense manager deployed on Vercel & Render with a serverless Neon PostgreSQL database. Features a custom graph-based debt simplification algorithm.
                  </p>
                </div>

                <div className="project-action-btns" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/Mittal12-Mansi" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    <SocialGithub size={14} /> Code Repo
                  </a>
                  <a href="https://budget-splitter-frontend.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-sde" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    <ExternalLink size={14} /> Live App
                  </a>
                </div>
              </div>

              {/* Technical Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', margin: '1rem 0' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#38bdf8' }}>Graph Algorithm:</strong> Minimizes group transactions by up to <strong>60%</strong> versus pairwise settling.
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#38bdf8' }}>Payments & Export:</strong> 1-click UPI deep-links (GPay / PhonePe) & instant CSV/PDF transaction exports.
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#38bdf8' }}>Serverless DB:</strong> Deployed with Neon PostgreSQL + Node.js Express backend and JWT security.
                </div>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Neon DB', 'Vercel', 'Render', 'JWT', 'Graph Theory'].map((tech, i) => (
                  <span key={i} className="mono" style={{ fontSize: '0.75rem', background: 'rgba(6, 182, 212, 0.1)', color: '#38bdf8', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Embedded Visualizer */}
              <DebtSimplificationVisualizer />
            </div>
          )}

          {/* PROJECT 2: ShudhMithaas Sweet Shop Management System */}
          {(activeRole === 'all' || activeRole === 'sde') && (
            <div className="glass-card animate-fade-in" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', color: 'var(--text-primary)' }}>ShudhMithaas – Sweet Shop System</h3>
                    <span className="badge badge-success" style={{ whiteSpace: 'normal', textAlign: 'left' }}>TDD & 3-Tier RBAC</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Full-stack e-commerce-style application built using strict Test-Driven Development (Red-Green-Refactor) principles with automated unit & integration test suites.
                  </p>
                </div>

                <div className="project-action-btns" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/Mittal12-Mansi/Mithas" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    <SocialGithub size={14} /> Code Repo
                  </a>
                  <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Technical Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', margin: '1rem 0' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#34d399' }}>TDD Methodology:</strong> Red-Green-Refactor cycle with full automated coverage across backend & frontend workflows.
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#34d399' }}>3-Tier RBAC Architecture:</strong> Granular permissions for User, Admin, and Super Admin with bcrypt & JWT auth.
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#34d399' }}>Inventory & Coupon Engine:</strong> Stock-aware restock/checkout validation logic with custom discount rules in MongoDB.
                </div>
              </div>

              {/* Interactive RBAC & TDD Matrix */}
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ShieldCheck size={15} style={{ color: '#34d399' }} /> 3-Tier Security & Test Coverage Matrix
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.6rem', fontSize: '0.8rem' }}>
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.55rem', borderRadius: '6px' }}>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>👤 Customer</div>
                    <div style={{ color: 'var(--text-muted)' }}>Cart, coupon codes, checkout.</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.55rem', borderRadius: '6px' }}>
                    <div style={{ fontWeight: '700', color: 'var(--accent-sde)' }}>🔑 Admin</div>
                    <div style={{ color: 'var(--text-muted)' }}>Inventory restock, orders.</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '0.55rem', borderRadius: '6px' }}>
                    <div style={{ fontWeight: '700', color: 'var(--accent-ai)' }}>👑 Super Admin</div>
                    <div style={{ color: 'var(--text-muted)' }}>Roles & audit logs.</div>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                {['Node.js', 'React', 'MongoDB', 'Mongoose', 'Express.js', 'TDD (Jest)', 'JWT', 'bcrypt', 'RBAC'].map((tech, i) => (
                  <span key={i} className="mono" style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* PROJECT 3: AI Resume & Skill-Gap Matcher */}
          {(activeRole === 'all' || activeRole === 'aiml') && (
            <div className="glass-card animate-fade-in" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', color: 'var(--text-primary)' }}>AI Resume & Skill-Gap Matcher</h3>
                    <span className="badge badge-ai" style={{ whiteSpace: 'normal', textAlign: 'left' }}>Applied NLP & Machine Learning</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Automated candidate-job matching engine utilizing spaCy Named Entity Recognition (NER), Sentence-Transformers, and TF-IDF corpus weighting with FastAPI backend.
                  </p>
                </div>

                <div className="project-action-btns" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href="https://github.com/Mittal12-Mansi" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    <SocialGithub size={14} /> Code Repo
                  </a>
                  <a href="https://resume-matcher-o9sq.onrender.com" target="_blank" rel="noreferrer" className="btn btn-ai" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Technical Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', margin: '1rem 0' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#a78bfa' }}>High Precision NLP:</strong> Validated against 50 annotated pairs (<strong>100% Precision</strong> & <strong>82.14% F1-Score</strong>).
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#a78bfa' }}>FastAPI & ATS Evaluator:</strong> Built-in PDF resume parsing, ATS readability evaluation, and real-time gap analysis.
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
                  <strong style={{ color: '#a78bfa' }}>Multi-Model Hybrid:</strong> Combines spaCy NER with dense vector embeddings (Sentence-Transformers) & TF-IDF term weighting.
                </div>
              </div>

              {/* Tech Badges */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                {['Python', 'FastAPI', 'spaCy NER', 'Sentence-Transformers', 'TF-IDF', 'PyPDF2', 'Scikit-Learn', 'Dark Mode Dashboard'].map((tech, i) => (
                  <span key={i} className="mono" style={{ fontSize: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', color: '#a78bfa', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
