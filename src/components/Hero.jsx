import React from 'react';
import { Mail, Phone, MapPin, Github, Calendar, Briefcase, Award, ArrowUpRight, Globe, Cpu } from 'lucide-react';

export function Hero({ personal, onOpenContact, navData, lang }) {
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  return (
    <section className="section" style={{ paddingTop: '20px' }}>
      <div className="hero-grid">
        {/* Avatar & Sidebar Info Card */}
        <div className="glass-card profile-card">
          <div className="profile-avatar-wrapper">
            <img src="/avatar.jpg" alt={personal.name} className="profile-avatar" />
            <div className="status-dot" title={isAr ? "متاحة للعمل" : "Open for roles"} />
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '4px' }}>{personal.name}</h2>
          <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1rem', marginBottom: '16px' }}>
            {isAr ? 'مهندسة حاسوب' : (isTr ? 'Bilgisayar Mühendisi' : 'Computer Engineer')}
          </p>

          <div className="badge" style={{ marginBottom: '20px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
            <span>{isAr ? 'متاحة للعمل والتطوير' : (isTr ? 'İşe Açık' : 'Open to Work & Growth')}</span>
          </div>

          <div className="contact-info-list">
            <div className="contact-item">
              <Mail size={16} />
              <a href={`mailto:${personal.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {personal.email}
              </a>
            </div>
            {personal.phone && (
              <div className="contact-item">
                <Phone size={16} />
                <a href={`tel:${personal.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {personal.phone}
                </a>
              </div>
            )}
            <div className="contact-item">
              <MapPin size={16} />
              <span>{personal.location}</span>
            </div>
            <div className="contact-item">
              <Github size={16} />
              <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                github.com/{personal.githubUsername}
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Main Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div className="badge" style={{ marginBottom: '12px' }}>
              <Award size={14} />
              <span>{isAr ? 'مهندسة حاسوب | مطورة ويب' : (isTr ? 'Bilgisayar Mühendisi | Web Geliştirici' : 'Computer Engineer | Web Developer')}</span>
            </div>

            <h1 style={{ fontSize: '2.8rem', fontWeight: '900', lineHeight: '1.25', marginBottom: '16px' }}>
              {isAr ? <>أهلاً بك، أنا <span className="gradient-text">{personal.name}</span></> : (isTr ? <>Merhaba, ben <span className="gradient-text">{personal.name}</span></> : <>Hello, I'm <span className="gradient-text">{personal.name}</span></>)}
            </h1>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '20px' }}>
              {personal.title}
            </h3>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.85' }}>
              {personal.bio}
            </p>
          </div>

          {/* Quick Metrics (Hidden in Print Mode to save space for Education & Projects) */}
          <div className="hero-metrics-grid no-print" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginTop: '14px' }}>
            <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', borderLeft: isAr ? '1px solid var(--border-color)' : '4px solid #2563eb', borderRight: isAr ? '4px solid #2563eb' : '1px solid var(--border-color)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0284c7' }}>
                <Globe size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.3' }}>
                  MENA & Africa
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '2px' }}>
                  {isAr ? 'تطوير الأعمال والأسواق الإقليمية' : (isTr ? 'Bölgesel İş Geliştirme & Pazarlar' : 'Regional Business Dev & Markets')}
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', borderLeft: isAr ? '1px solid var(--border-color)' : '4px solid #0d9488', borderRight: isAr ? '4px solid #0d9488' : '1px solid var(--border-color)' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0f766e' }}>
                <Cpu size={24} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1.3' }}>
                  React & .NET
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontWeight: '600', marginTop: '2px' }}>
                  {isAr ? 'تطوير الويب الكامل وأنظمة ERP' : (isTr ? 'Full Stack & ERP Yazılım Mimarisi' : 'Full Stack & Enterprise ERP Systems')}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '14px', marginTop: '10px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={onOpenContact}>
              <Mail size={18} />
              <span>{navData.requestServiceContact || (isAr ? 'طلب خدمة / تواصل' : (isTr ? 'Hizmet Talebi / İletişim' : 'Request Service / Contact'))}</span>
            </button>
            <button className="btn btn-secondary" onClick={() => window.print()}>
              <Briefcase size={18} />
              <span>{navData.printPdf}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
