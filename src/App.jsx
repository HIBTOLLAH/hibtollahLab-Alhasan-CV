import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { cvData } from './data/cvData';
import { Navbar } from './components/Navbar';
import { TechBackground } from './components/TechBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('tr');
  const [isContactOpen, setIsContactOpen] = useState(false);

  const currentData = cvData[lang] || cvData.en;

  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  return (
    <div className="app-wrapper">
      {/* Interactive Domain Tech Background */}
      <TechBackground />

      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        navData={currentData.nav}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero
          personal={currentData.personal}
          onOpenContact={() => setIsContactOpen(true)}
          navData={currentData.nav}
          lang={lang}
        />

        <About
          personal={currentData.personal}
          sections={currentData.sections}
          lang={lang}
        />

        <Services
          services={currentData.services}
          sections={currentData.sections}
          lang={lang}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <Experience
          experiences={currentData.experience}
          sections={currentData.sections}
          lang={lang}
        />

        <Projects
          projects={currentData.projects}
          sections={currentData.sections}
          lang={lang}
        />

        <Education
          education={currentData.education}
          sections={currentData.sections}
          lang={lang}
        />
      </main>

      {/* Contact Overlay Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        personal={currentData.personal}
        lang={lang}
      />

      {/* Footer */}
      <Footer personal={currentData.personal} lang={lang} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
