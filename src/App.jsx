import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AiSkillMatcherDemo from './components/AiSkillMatcherDemo';
import SkillsSection from './components/SkillsSection';
import EducationTimeline from './components/EducationTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeRole, setActiveRole] = useState('all'); // 'all' | 'sde' | 'aiml'
  const [theme, setTheme] = useState('dark');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="portfolio-root" style={{ background: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Navigation Header */}
      <Navbar
        activeRole={activeRole}
        setActiveRole={setActiveRole}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          activeRole={activeRole}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ProjectsSection
          activeRole={activeRole}
        />

        <AiSkillMatcherDemo />

        <SkillsSection
          activeRole={activeRole}
        />

        <EducationTimeline />

        <ContactSection
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
