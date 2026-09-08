import React, { useState, useEffect } from 'react';
import { Globe, Printer, MessageSquareShare, Code, Menu, X, User, Briefcase, Boxes, FolderGit2, GraduationCap, ChevronRight } from 'lucide-react';

export function Navbar({ lang, setLang, navData, onOpenContact }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 868) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrint = () => {
    setIsMobileMenuOpen(false);
    window.print();
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="badge brand-badge">
            <Code size={16} />
          </div>
          <span className="brand-title">hibtollahLab</span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>{navData.about}</a></li>
          <li><a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, 'experience')}>{navData.experience}</a></li>
          <li><a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>{navData.projects}</a></li>
          <li><a href="#education" className="nav-link" onClick={(e) => handleNavClick(e, 'education')}>{navData.education}</a></li>
          <li><a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>{navData.services}</a></li>
        </ul>

        {/* Controls */}
        <div className="nav-controls">
          {/* Language Switcher */}
          <div className="lang-switcher">
            <Globe size={14} className="lang-globe-icon" />
            <button
              className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
              onClick={() => setLang('ar')}
              title="العربية"
            >
              ع
            </button>
            <button
              className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
              onClick={() => setLang('tr')}
              title="Türkçe"
            >
              TR
            </button>
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Desktop Print PDF */}
          <button className="btn btn-secondary nav-print-btn" onClick={handlePrint} title={navData.printPdf}>
            <Printer size={16} />
            <span className="no-mobile">{navData.printPdf}</span>
          </button>

          {/* Contact Button */}
          <button className="btn btn-primary nav-contact-btn" onClick={onOpenContact}>
            <MessageSquareShare size={16} />
            <span className="no-mobile-mini">{navData.contact}</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer no-print">
          <div className="mobile-nav-content">
            <ul className="mobile-nav-list">
              <li>
                <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'about')}>
                  <User size={18} />
                  <span>{navData.about}</span>
                  <ChevronRight size={16} className="chevron-icon" />
                </a>
              </li>
              <li>
                <a href="#experience" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'experience')}>
                  <Briefcase size={18} />
                  <span>{navData.experience}</span>
                  <ChevronRight size={16} className="chevron-icon" />
                </a>
              </li>
              <li>
                <a href="#projects" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'projects')}>
                  <FolderGit2 size={18} />
                  <span>{navData.projects}</span>
                  <ChevronRight size={16} className="chevron-icon" />
                </a>
              </li>
              <li>
                <a href="#education" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'education')}>
                  <GraduationCap size={18} />
                  <span>{navData.education}</span>
                  <ChevronRight size={16} className="chevron-icon" />
                </a>
              </li>
              <li>
                <a href="#services" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'services')}>
                  <Boxes size={18} />
                  <span>{navData.services}</span>
                  <ChevronRight size={16} className="chevron-icon" />
                </a>
              </li>
            </ul>

            <div className="mobile-nav-actions">
              <button className="btn btn-secondary w-full" onClick={handlePrint}>
                <Printer size={18} />
                <span>{navData.printPdf}</span>
              </button>
              <button className="btn btn-primary w-full" onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }}>
                <MessageSquareShare size={18} />
                <span>{navData.contact}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
