import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, ExternalLink, Code2, Boxes } from 'lucide-react';

export function Experience({ experiences, sections, lang }) {
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="gradient-text">{sections.experienceTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.experienceSubtitle}</p>
      </div>

      <div className="carousel-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div className="timeline-header">
              <div>
                <div className="badge" style={{ marginBottom: '8px', fontSize: '0.95rem', padding: '6px 14px' }}>
                  <Briefcase size={15} />
                  <span>{exp.badge}</span>
                </div>
                <h3 className="timeline-title">{exp.role}</h3>
                <div className="timeline-company" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Building2 size={18} />
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}
                    >
                      <span>{exp.company}</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </div>
              </div>

              <div style={{ textAlign: 'start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '4px', fontWeight: '600' }}>
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-main)', fontSize: '1.18rem', marginBottom: '16px', fontWeight: '600', lineHeight: '1.8' }}>
              {exp.description}
            </p>

            <ul className="timeline-highlights">
              {exp.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="tech-tags" style={{ marginBottom: exp.website ? '16px' : '0' }}>
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {exp.website && (
              <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>{isAr ? 'زيارة موقع الشركة الرسمي' : (isTr ? 'Resmi Şirket Web Sitesi' : 'Visit Company Website')}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
