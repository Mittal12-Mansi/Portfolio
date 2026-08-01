import React, { useState } from 'react';
import { X, Download, Copy, Check, Printer, ExternalLink, Mail, Phone, MapPin, Code2, Brain } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyResumeText = () => {
    const text = `MANSI MITTAL
+91-9368864837 | mansimittal1215@gmail.com | Bhopal, MP, India

OBJECTIVE
Entry-level Software Development Engineer (SDE) candidate with strong foundations in Data Structures & Algorithms, OOP, and full-stack development. Experienced in building and deploying production-grade full-stack applications following TDD practices, proficient in Java, Python, React, Node.js, and PostgreSQL. Problem-solving ability demonstrated through consistent DSA practice on LeetCode.

EDUCATION
- Maulana Azad National Institute of Technology (MANIT), Bhopal (2024 – Present)
  Master of Computer Application | SGPA: 8.9
- Shivaji College, University of Delhi (2020 – 2023)
  Bachelor of Science (Hons.) Mathematics | CGPA: 9.06

PROJECTS
1. Smart Budget Splitter – Personal Finance Manager (React, Node.js, Express, PostgreSQL)
   - Built and deployed a full-stack group expense tracking app with Vercel frontend & Render backend on serverless Neon PostgreSQL.
   - Designed a graph-based debt-simplification algorithm that minimizes group transaction settlements by up to 60%.
   - Implemented JWT auth, 1-click UPI deep links, CSV/PDF transaction exports.

2. ShudhMithaas – Sweet Shop Management System (Node.js, React, MongoDB, TDD)
   - Built a full-stack e-commerce-style application following TDD (Red-Green-Refactor) principles with automated backend/frontend test suites.
   - Designed 3-tier role-based access control (User / Admin / Super Admin) with JWT auth and bcrypt hashing.
   - Stock-aware inventory management, restock logic, orders, and coupon engine.

3. AI Resume & Skill-Gap Matcher (Python, FastAPI, spaCy, Transformers)
   - Automated resume-shortlisting tool combining spaCy NER skill extraction, Sentence-Transformer semantic similarity, and TF-IDF corpus weighting.
   - Developed FastAPI backend with ATS-readability evaluator and dark-mode dashboard supporting PDF resume parsing.
   - Validated model performance against 50 annotated pairs (100% precision, 82.14% F1-score).

SKILLS
- Programming Languages: Java, Python, C++, C, JavaScript, SQL
- Frameworks & Libraries: React, Node.js, Express.js, FastAPI, spaCy NER, Sentence-Transformers
- Databases: PostgreSQL, MySQL, MongoDB
- Dev Tools: Git, GitHub, IntelliJ IDEA, VS Code, Postman
- Core CS: DSA (300+ LeetCode Solved), OOP, DBMS, OS, Computer Networks

ACHIEVEMENTS
- Team Leader – ADORE Network (Youth sessions on Soft Skills & Career Orientation)
- Solved 300+ DSA problems on LeetCode
- Member of Matrix Club (MANIT Bhopal technical club)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '850px',
        maxHeight: '92vh',
        overflowY: 'auto',
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-bright)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Modal Header Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.2rem',
          borderBottom: '1px solid var(--border-color)',
          background: 'rgba(15, 23, 42, 0.95)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          flexWrap: 'wrap',
          gap: '0.6rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-primary)' }}>
              Mansi Mittal – Official Resume
            </span>
            <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>Verified</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary" onClick={handleCopyResumeText} style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}>
              {copied ? <Check size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            
            <button className="btn btn-primary" onClick={handlePrint} style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}>
              <Printer size={13} /> Print PDF
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: 'var(--text-primary)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div style={{ padding: '1.5rem 1.2rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
          
          {/* Resume Header */}
          <div style={{ textAlign: 'center', marginBottom: '1.8rem', paddingBottom: '1.2rem', borderBottom: '2px solid var(--border-color)' }}>
            <h1 style={{ fontSize: '2.2rem', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>Mansi Mittal</h1>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <span>📞 +91-9368864837</span>
              <span>✉️ mansimittal1215@gmail.com</span>
              <span>🔗 LinkedIn</span>
              <span>💻 GitHub</span>
              <span>⚡ LeetCode</span>
            </div>
          </div>

          {/* Objective */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sde)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Objective
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Entry-level Software Development Engineer (SDE) candidate with strong foundations in Data Structures & Algorithms, OOP, and full-stack development. Experienced in building and deploying production-grade full-stack applications following TDD practices, proficient in Java, Python, React, Node.js, and PostgreSQL. Problem-solving ability demonstrated through consistent DSA practice on LeetCode.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sde)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Education
            </h3>
            
            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '0.95rem' }}>
                <span>Maulana Azad National Institute of Technology, Bhopal</span>
                <span>2024 – Present</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <span>Master of Computer Application</span>
                <span><strong>SGPA: 8.9</strong></span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '0.95rem' }}>
                <span>Shivaji College, University of Delhi</span>
                <span>2020 – 2023</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <span>Bachelor of Science (Hons.) Mathematics</span>
                <span><strong>CGPA: 9.06</strong></span>
              </div>
            </div>
          </div>

          {/* Personal Projects */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sde)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Personal Projects
            </h3>

            {/* Smart Budget Splitter */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Smart Budget Splitter – Personal Finance Manager
                  <a href="https://budget-splitter-frontend.vercel.app/" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent-sde)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                    <ExternalLink size={12} /> Live App
                  </a>
                </span>
                <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--accent-sde)' }}>React, Node.js, Express.js, PostgreSQL</span>
              </div>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                <li>Built and deployed a full-stack personal finance app for group expense tracking with frontend on Vercel and backend on Render using serverless Neon PostgreSQL.</li>
                <li>Designed a graph-based debt-simplification algorithm that minimizes settlements by up to <strong>60%</strong> versus naive pairwise settling.</li>
                <li>Implemented JWT auth, 1-click UPI payment deep-links (GPay/PhonePe), and CSV/PDF transaction history export.</li>
              </ul>
            </div>

            {/* ShudhMithaas */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ShudhMithaas – Sweet Shop Management System
                  <a href="http://localhost:5173" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#10b981', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                    <ExternalLink size={12} /> Live Demo
                  </a>
                </span>
                <span className="mono" style={{ fontSize: '0.8rem', color: '#10b981' }}>Node.js, React, MongoDB</span>
              </div>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                <li>Built full-stack e-commerce app following TDD principles (Red-Green-Refactor) with automated test suites.</li>
                <li>Designed 3-tier role-based access control (User / Admin / Super Admin) with JWT auth and bcrypt password hashing.</li>
                <li>Implemented sweet inventory with stock-aware restock/purchase logic, orders, and coupon/discount engine in MongoDB.</li>
              </ul>
            </div>

            {/* AI Resume Matcher */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', fontWeight: '700', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  AI Resume & Skill-Gap Matcher
                  <a href="https://resume-matcher-o9sq.onrender.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent-ai)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                    <ExternalLink size={12} /> Live Demo
                  </a>
                </span>
                <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--accent-ai)' }}>Python, FastAPI</span>
              </div>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.5 }}>
                <li>Built automated resume shortlisting tool combining spaCy NER skill extraction, Sentence-Transformer semantic similarity, and TF-IDF corpus weighting.</li>
                <li>Developed FastAPI backend with ATS readability evaluator and responsive dark-mode dashboard supporting PDF parsing.</li>
                <li>Validated model against 50 manually annotated resume-JD pairs achieving <strong>100% precision</strong> and <strong>82.14% F1-score</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sde)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Skills
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.4rem 1.2rem', fontSize: '0.88rem' }}>
              <strong>Programming Languages:</strong> <span>Java, Python, C++, C, JavaScript, SQL</span>
              <strong>Frameworks:</strong> <span>React, Node.js, Express.js, FastAPI</span>
              <strong>Databases:</strong> <span>PostgreSQL, MySQL, MongoDB</span>
              <strong>Dev Tools:</strong> <span>Git, GitHub, IntelliJ IDEA, VS Code, Postman</span>
              <strong>Core CS:</strong> <span>Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks</span>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sde)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.3rem', marginBottom: '0.6rem' }}>
              Achievements
            </h3>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              <li><strong>Team Leader – ADORE:</strong> Led volunteer team delivering interactive youth sessions on Soft Skills, Career Orientation & Self-Development.</li>
              <li><strong>LeetCode DSA:</strong> Solved 300+ problems strengthening algorithm proficiency.</li>
              <li><strong>Matrix Club:</strong> Member of technical club of MANIT Bhopal participating in coding contests and workshops.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
