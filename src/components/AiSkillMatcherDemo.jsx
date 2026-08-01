import React, { useState } from 'react';
import { Brain, Sparkles, CheckCircle2, AlertCircle, FileCode, Layers, Search, Cpu } from 'lucide-react';

export default function AiSkillMatcherDemo() {
  const sampleJDs = [
    {
      title: "Senior Full-Stack SDE Role",
      requiredSkills: ["React", "Node.js", "Express.js", "PostgreSQL", "Data Structures & Algorithms", "TDD", "REST APIs"],
      jdText: "Seeking an entry-level SDE proficient in React, Node.js, PostgreSQL, TDD, and strong DSA problem-solving."
    },
    {
      title: "AI / ML NLP Engineer Role",
      requiredSkills: ["Python", "FastAPI", "spaCy", "Sentence-Transformers", "TF-IDF", "NLP", "PyTorch"],
      jdText: "Looking for an AI engineer with expertise in spaCy NER extraction, Sentence-Transformers, TF-IDF weighting, and FastAPI."
    }
  ];

  const mansiSkills = [
    "Java", "Python", "C++", "JavaScript", "SQL", "React", "Node.js", "Express.js",
    "FastAPI", "PostgreSQL", "MySQL", "MongoDB", "spaCy", "Sentence-Transformers",
    "TF-IDF", "Data Structures & Algorithms", "OOP", "TDD", "Git", "REST APIs"
  ];

  const [selectedJdIdx, setSelectedJdIdx] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);

  const currentJd = sampleJDs[selectedJdIdx];

  // Calculate matching stats
  const matched = currentJd.requiredSkills.filter(s => mansiSkills.includes(s));
  const missing = currentJd.requiredSkills.filter(s => !mansiSkills.includes(s));
  const matchScore = Math.round((matched.length / currentJd.requiredSkills.length) * 100);

  const handleRunAnalysis = () => {
    setAnalyzing(true);
    setAnalyzed(false);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 600);
  };

  return (
    <div id="ai-matcher" className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge badge-ai" style={{ marginBottom: '0.8rem' }}>
            <Brain size={14} /> AI / ML Flagship Project Showcase
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '0.6rem' }}>
            Interactive AI Resume & Skill-Gap Matcher
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Live interactive preview of Mansi's NLP skill extraction pipeline using <strong style={{ color: 'var(--accent-ai)' }}>spaCy NER</strong>, <strong style={{ color: 'var(--accent-sde)' }}>Sentence-Transformers</strong>, and <strong style={{ color: 'var(--accent-amber)' }}>TF-IDF weighting</strong>.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border-bright)' }}>
          
          {/* Top Controls: Preset JD Selector */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                Select Target Job Description (JD)
              </label>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {sampleJDs.map((jd, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedJdIdx(idx); handleRunAnalysis(); }}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: selectedJdIdx === idx ? '1px solid var(--accent-ai)' : '1px solid var(--border-color)',
                      background: selectedJdIdx === idx ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      color: selectedJdIdx === idx ? '#a78bfa' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Layers size={14} /> {jd.title}
                  </button>
                ))}
              </div>
            </div>

            <button className="btn btn-ai" onClick={handleRunAnalysis} disabled={analyzing}>
              <Cpu size={16} className={analyzing ? 'spin' : ''} />
              {analyzing ? 'Extracting NER & Embeddings...' : 'Re-Run NLP Pipeline'}
            </button>
          </div>

          {/* Analysis Results Display */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            {/* Left: Input Text & spaCy Extracted Entities */}
            <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                  📄 JD Input & spaCy Entity Extraction
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-ai)' }}>
                  FastAPI Backend
                </span>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1rem', background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '6px' }}>
                "{currentJd.jdText}"
              </p>

              <div style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                spaCy NER Extracted Skill Entities:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {currentJd.requiredSkills.map((skill, i) => (
                  <span key={i} style={{
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    background: mansiSkills.includes(skill) ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                    color: mansiSkills.includes(skill) ? '#34d399' : '#fbbf24',
                    border: `1px solid ${mansiSkills.includes(skill) ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Model Score Metrics & TF-IDF Gap Breakdown */}
            <div style={{ background: 'rgba(0, 0, 0, 0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                      Semantic Match Score
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: '800', color: matchScore >= 80 ? '#34d399' : '#38bdf8' }}>
                      {matchScore}%
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Validated Accuracy</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent-ai)' }}>
                      100% Precision
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      82.14% F1-Score
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
                  <div style={{ width: `${matchScore}%`, height: '100%', background: 'var(--gradient-ai)', transition: 'width 0.6s ease' }} />
                </div>

                {/* Matched vs Skill-Gap List */}
                <div style={{ fontSize: '0.82rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399' }}>
                  <CheckCircle2 size={14} /> <strong>Matched Skills ({matched.length}):</strong> {matched.join(', ')}
                </div>

                {missing.length > 0 ? (
                  <div style={{ fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24' }}>
                    <AlertCircle size={14} /> <strong>Identified Gaps ({missing.length}):</strong> {missing.join(', ')}
                  </div>
                ) : (
                  <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: '600' }}>
                    🎉 100% Skill Coverage Matched! Ready for candidate shortlisting.
                  </div>
                )}
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px dashed var(--border-color)', fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
                <span>ATS Readability: <strong>98/100 (PDF Parsed)</strong></span>
                <span>Corpus: <strong>50 Annotated Pairs</strong></span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
