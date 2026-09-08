import React from 'react';
import { GraduationCap, Calendar, MapPin, ExternalLink, Award, Sparkles, BookOpen } from 'lucide-react';

export function Education({ education, sections, lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="education" className="section">
      <div className="section-header">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <GraduationCap size={32} style={{ color: 'var(--accent-primary)' }} />
          <span className="gradient-text">{sections.educationTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.educationSubtitle}</p>
      </div>

      <div className="carousel-grid">
        {education.map((edu) => (
          <div key={edu.id} className="glass-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
                <div className="badge" style={{ fontSize: '0.95rem', padding: '6px 14px' }}>
                  <Award size={15} />
                  <span>
                    {edu.id === 'bartin'
                      ? (isAr ? 'مؤهل أكاديمي' : 'Academic Degree')
                      : (isAr ? 'تدريب ميداني تخصصي' : 'Specialized Internship')}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '1.02rem', fontWeight: '600' }}>
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '6px', color: 'var(--text-main)' }}>
                {edu.degree}
              </h3>

              <div style={{ color: 'var(--accent-primary)', fontWeight: '700', fontSize: '1.05rem', marginBottom: '8px' }}>
                {edu.institution}
              </div>

              {edu.honor && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe', padding: '4px 10px', borderRadius: '6px', fontSize: '0.92rem', fontWeight: '700', marginBottom: '10px' }}>
                  <Sparkles size={14} />
                  <span>{edu.honor}</span>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '16px' }}>
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>

              <p style={{ color: 'var(--text-main)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '12px', fontWeight: '500' }}>
                {edu.details}
              </p>

              {edu.highlights && (
                <ul className="timeline-highlights" style={{ marginTop: '14px' }}>
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>

            {edu.website && (
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <a
                  href={edu.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>{isAr ? 'زيارة الموقع الرسمي' : 'Visit Official Website'}</span>
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
