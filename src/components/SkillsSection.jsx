import React, { useState } from 'react';
import { Code2, Brain, Database, Wrench, BookOpen, Search, CheckCircle2 } from 'lucide-react';

export default function SkillsSection({ activeRole }) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={18} style={{ color: 'var(--accent-sde)' }} />,
      skills: [
        { name: "Java", level: 90, tag: "sde" },
        { name: "Python", level: 92, tag: "aiml" },
        { name: "C++", level: 85, tag: "sde" },
        { name: "JavaScript", level: 88, tag: "sde" },
        { name: "SQL", level: 90, tag: "sde" },
        { name: "C", level: 80, tag: "sde" }
      ]
    },
    {
      title: "Frameworks & AI Libraries",
      icon: <Brain size={18} style={{ color: 'var(--accent-ai)' }} />,
      skills: [
        { name: "React", level: 88, tag: "sde" },
        { name: "Node.js", level: 86, tag: "sde" },
        { name: "Express.js", level: 85, tag: "sde" },
        { name: "FastAPI", level: 90, tag: "aiml" },
        { name: "spaCy NER", level: 88, tag: "aiml" },
        { name: "Sentence-Transformers", level: 86, tag: "aiml" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: <Database size={18} style={{ color: '#10b981' }} />,
      skills: [
        { name: "PostgreSQL (Neon)", level: 90, tag: "sde" },
        { name: "MySQL", level: 86, tag: "sde" },
        { name: "MongoDB & Mongoose", level: 88, tag: "sde" }
      ]
    },
    {
      title: "Dev Tools & Testing",
      icon: <Wrench size={18} style={{ color: '#f59e0b' }} />,
      skills: [
        { name: "Git & GitHub", level: 92, tag: "sde" },
        { name: "TDD & Jest", level: 88, tag: "sde" },
        { name: "IntelliJ IDEA", level: 85, tag: "sde" },
        { name: "VS Code", level: 95, tag: "sde" },
        { name: "Postman", level: 90, tag: "sde" }
      ]
    },
    {
      title: "Core CS & Algorithms",
      icon: <BookOpen size={18} style={{ color: '#ec4899' }} />,
      skills: [
        { name: "Data Structures & Algorithms (300+ LeetCode)", level: 92, tag: "sde" },
        { name: "Object-Oriented Programming (OOP)", level: 90, tag: "sde" },
        { name: "DBMS & Query Optimization", level: 88, tag: "sde" },
        { name: "Operating Systems", level: 84, tag: "sde" },
        { name: "Computer Networks", level: 82, tag: "sde" }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-sde" style={{ marginBottom: '0.8rem' }}>
            Technical Expertise
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.6rem' }}>
            Skills & Technical Proficiency
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive breakdown of programming languages, full-stack frameworks, databases, and applied machine learning tools.
          </p>

          {/* Search bar */}
          <div style={{ marginTop: '1.5rem', maxWidth: '400px', margin: '1.5rem auto 0 auto', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search skill (e.g. Java, spaCy, SQL, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.6rem',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {categories.map((cat, idx) => {
            const filteredSkills = cat.skills.filter(s => {
              const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesRole = activeRole === 'all' || (activeRole === 'sde' && s.tag === 'sde') || (activeRole === 'aiml' && s.tag === 'aiml');
              return matchesSearch && matchesRole;
            });

            if (filteredSkills.length === 0) return null;

            return (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-color)' }}>
                  {cat.icon}
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{cat.title}</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {filteredSkills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '0.3rem' }}>
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={13} style={{ color: skill.tag === 'aiml' ? 'var(--accent-ai)' : 'var(--accent-sde)' }} />
                          {skill.name}
                        </span>
                        <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: skill.tag === 'aiml' ? 'var(--gradient-ai)' : 'var(--gradient-sde)',
                          borderRadius: '3px',
                          transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
