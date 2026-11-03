import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { WhatWeDoSection } from './components/WhatWeDoSection.tsx';
import { RelationshipsSection } from './components/RelationshipsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'what-we-do', 'relationships', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#292929] flex flex-col font-sans selection:bg-[#C6A15B]/20 selection:text-[#292929]">
      {/* Sticky, responsive navigation bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content: Single Page with Exactly Five Sections */}
      <main className="flex-1">
        {/* SECTION 1 — HOME / HERO */}
        <HeroSection onContactClick={() => scrollTo('contact')} />

        {/* SECTION 2 — ABOUT US */}
        <AboutSection />

        {/* SECTION 3 — WHAT WE DO */}
        <WhatWeDoSection />

        {/* SECTION 4 — BUSINESS RELATIONSHIPS */}
        <RelationshipsSection onWorkTogetherClick={() => scrollTo('contact')} />

        {/* SECTION 5 — CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollTo} />
    </div>
  );
}
