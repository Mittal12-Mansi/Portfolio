import React from 'react';
import { GraduationCap, Award, Users, Code2, CheckCircle2 } from 'lucide-react';

export default function EducationTimeline() {
  return (
    <section id="education" className="section">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-sde" style={{ marginBottom: '0.8rem' }}>
            Academic Excellence & Leadership
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.6rem' }}>
            Education & Key Achievements
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Strong mathematical foundation combined with advanced computer applications coursework and leadership roles.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Left Column: Education */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)' }}>
              <GraduationCap style={{ color: 'var(--accent-sde)' }} /> Academic Credentials
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '2px solid var(--border-bright)', paddingLeft: '1.2rem', marginLeft: '0.5rem' }}>
              
              {/* MANIT Bhopal */}
              <div className="glass-card" style={{ padding: '1.4rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-1.85rem',
                  top: '1.4rem',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--accent-sde)',
                  boxShadow: '0 0 10px var(--accent-sde)'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    Maulana Azad National Institute of Technology (MANIT), Bhopal
                  </h4>
                  <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    2024 – Present
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-sde)', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Master of Computer Application (MCA)
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>
                    SGPA: 8.9
                  </span>
                  <span>Focused on Data Structures, Web Engineering & Distributed Systems.</span>
                </div>
              </div>

              {/* Shivaji College DU */}
              <div className="glass-card" style={{ padding: '1.4rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-1.85rem',
                  top: '1.4rem',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--accent-ai)',
                  boxShadow: '0 0 10px var(--accent-ai)'
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    Shivaji College, University of Delhi
                  </h4>
                  <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    2020 – 2023
                  </span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--accent-ai)', fontWeight: '600', marginBottom: '0.4rem' }}>
                  Bachelor of Science (Hons.) Mathematics
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>
                    CGPA: 9.06
                  </span>
                  <span>Distinction in Linear Algebra, Numerical Analysis & Optimization.</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Leadership & Achievements */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)' }}>
              <Award style={{ color: 'var(--accent-amber)' }} /> Leadership & Achievements
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* ADORE */}
              <div className="glass-card" style={{ padding: '1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Users size={20} style={{ color: '#fbbf24' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    Team Leader – ADORE Network
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Led and coordinated a volunteer team delivering interactive youth sessions on Soft Skills, Career Orientation, and Self-Development for student communities.
                </p>
              </div>

              {/* LeetCode */}
              <div className="glass-card" style={{ padding: '1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Code2 size={20} style={{ color: '#38bdf8' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    300+ LeetCode DSA Problems Solved
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Demonstrated problem-solving proficiency across Arrays, Dynamic Programming, Graphs, Trees, and Greedy Algorithms with clean code logic.
                </p>
              </div>

              {/* Matrix Club */}
              <div className="glass-card" style={{ padding: '1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <Award size={20} style={{ color: '#a78bfa' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    Member of Matrix Club (MANIT Bhopal)
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Active participant in competitive coding events, hackathons, and technical workshops organized by the technical club of MANIT Bhopal.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
