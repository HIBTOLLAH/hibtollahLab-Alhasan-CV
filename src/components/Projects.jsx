import React, { useRef, useState, useEffect } from 'react';
import { FolderGit2, ExternalLink, Boxes, Globe, ShoppingBag, Layers, ChevronLeft, ChevronRight, Hammer, Clock } from 'lucide-react';

export function Projects({ projects, sections, lang }) {
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getBadgeIcon = (badge) => {
    if (badge.includes('تطوير') || badge.includes('Development') || badge.includes('Geliştirme')) return <Hammer size={14} />;
    if (badge.includes('ERP')) return <Boxes size={14} />;
    if (badge.includes('Commerce') || badge.includes('Ticaret')) return <ShoppingBag size={14} />;
    if (badge.includes('Web') || badge.includes('Corporate') || badge.includes('موقع')) return <Globe size={14} />;
    return <Layers size={14} />;
  };

  const updateScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    // Note: scrollLeft can be negative or positive depending on RTL direction and browser implementation
    const maxScroll = scrollWidth - clientWidth;
    const currentScroll = Math.abs(scrollLeft);

    setCanScrollLeft(currentScroll > 10);
    setCanScrollRight(currentScroll < maxScroll - 10);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [projects]);

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const cardWidth = 380; // approximate project card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    // In RTL, standard scrollBy with positive/negative might vary or smooth scroll
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section">
      <div className="section-header" style={{ position: 'relative' }}>
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <FolderGit2 size={32} style={{ color: 'var(--accent-primary)' }} />
          <span className="gradient-text">{sections.projectsTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.projectsSubtitle}</p>
      </div>

      <div className="projects-slider-wrapper">
        {/* Navigation Arrows for Web/Desktop */}
        <button
          type="button"
          className="projects-slider-btn prev-btn"
          onClick={() => handleScroll(isAr ? 'right' : 'left')}
          aria-label={isAr ? 'السابق' : 'Previous'}
        >
          {isAr ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>

        <div className="carousel-grid projects-slider-track" ref={sliderRef}>
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card project-card"
              style={{
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
              }}
            >
              {/* Project Image Header */}
              {proj.image && (
                <div className="project-image-wrapper">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-image-overlay">
                    <div className="badge brand-badge" style={{ fontSize: '0.85rem' }}>
                      {getBadgeIcon(proj.badge)}
                      <span>{proj.badge}</span>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ padding: '16px 16px 12px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                  {!proj.image && (
                    <div className="badge" style={{ fontSize: '0.88rem', padding: '5px 12px' }}>
                      {getBadgeIcon(proj.badge)}
                      <span>{proj.badge}</span>
                    </div>
                  )}
                  <span style={{ fontSize: '0.92rem', color: 'var(--accent-primary)', fontWeight: '700' }}>
                    {proj.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.38rem', fontWeight: '800', marginBottom: proj.subtitle ? '4px' : '10px', color: 'var(--text-main)' }}>
                  {proj.title}
                </h3>
                {proj.subtitle && (
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: '700', marginBottom: '12px' }}>
                    {proj.subtitle}
                  </div>
                )}

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '12px', fontWeight: '500' }}>
                  {proj.description}
                </p>
              </div>

              <div style={{ padding: '0 16px 16px 16px' }}>
                <div className="tech-tags" style={{ marginTop: '0', marginBottom: proj.website ? '10px' : '0' }}>
                  {proj.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {proj.website ? (
                  <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                    <a
                      href={proj.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.98rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>{isAr ? 'معاينة المشروع' : (isTr ? 'Projeyi İncele' : 'View Project Website')}</span>
                      <ExternalLink size={15} />
                    </a>
                  </div>
                ) : (
                  <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px', color: 'var(--accent-secondary)', fontSize: '0.92rem', fontWeight: '700' }}>
                    <Clock size={15} />
                    <span>{isAr ? 'قيد التطوير والتجهيز' : (isTr ? 'Geliştirme Aşamasında' : 'In Active Development')}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="projects-slider-btn next-btn"
          onClick={() => handleScroll(isAr ? 'left' : 'right')}
          aria-label={isAr ? 'التالي' : 'Next'}
        >
          {isAr ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
    </section>
  );
}

