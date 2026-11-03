import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { HavalunaLogo } from './HavalunaLogo.tsx';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'Business Relationships', id: 'relationships' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD0]/80 py-3.5'
          : 'bg-[#F8F5EF] border-b border-[#E8DFD0]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Golden Moon Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-sm"
            aria-label="HAVALUNA - Scroll to Home"
          >
            <HavalunaLogo symbolSize={26} />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`cursor-pointer whitespace-nowrap transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-[#292929] border-[#C6A15B] font-semibold'
                      : 'text-[#292929]/75 border-transparent hover:text-[#292929] hover:border-[#E8DFD0]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#292929] hover:bg-[#1a1a1a] rounded-sm transition-colors duration-200 cursor-pointer shadow-xs border border-transparent hover:border-[#C6A15B]/40 whitespace-nowrap"
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#292929] hover:text-[#C6A15B] hover:bg-[#E8DFD0]/40 rounded-sm transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF] border-b border-[#E8DFD0] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3 py-2 text-base font-medium rounded-sm transition-colors ${
                  activeSection === link.id
                    ? 'text-[#292929] bg-[#E8DFD0]/50 font-semibold text-[#C6A15B]'
                    : 'text-[#292929]/80 hover:text-[#292929] hover:bg-[#E8DFD0]/30'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#E8DFD0]">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#292929] hover:bg-[#1a1a1a] rounded-sm transition-colors"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
