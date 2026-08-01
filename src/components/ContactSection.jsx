import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Code2 } from 'lucide-react';
import { SocialGithub, SocialLinkedin } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function ContactSection({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mansimittal1215@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge badge-sde" style={{ marginBottom: '0.8rem' }}>
            Get In Touch
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.6rem' }}>
            Let's Build Something Great Together
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Open for SDE and AI/ML full-time roles, internships, and technical discussions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Left: Contact Info & Direct Links */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                {/* Email Card */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <Mail style={{ color: 'var(--accent-sde)' }} />
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>mansimittal1215@gmail.com</div>
                    </div>
                  </div>
                  <button className="btn btn-secondary" onClick={handleCopyEmail} style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}>
                    {copiedEmail ? <CheckCircle2 size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
                    {copiedEmail ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Phone Card */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <Phone style={{ color: 'var(--accent-ai)' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Phone</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>+91-9368864837</div>
                  </div>
                </div>

                {/* Location Card */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <MapPin style={{ color: '#10b981' }} />
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>MANIT Bhopal / New Delhi, India</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Grid */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.8rem', textTransform: 'uppercase' }}>
                Profiles & Coding Platforms
              </div>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <a href="https://github.com/Mittal12-Mansi" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.82rem' }}>
                  <SocialGithub size={16} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.82rem' }}>
                  <SocialLinkedin size={16} /> LinkedIn
                </a>
                <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ flex: 1, padding: '0.6rem', fontSize: '0.82rem' }}>
                  <Code2 size={16} /> LeetCode
                </a>
              </div>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>

            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', padding: '1.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <CheckCircle2 size={36} style={{ margin: '0 auto 0.6rem auto', display: 'block' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Message Received!</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. Mansi will get back to you shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SDE Role at TechCorp"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.3rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem', marginTop: '0.5rem' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
