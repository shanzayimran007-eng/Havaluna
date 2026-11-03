import React from 'react';
import { HavalunaLogo } from './HavalunaLogo.tsx';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E8DFD0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E8DFD0]/60">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded-sm text-left"
            aria-label="HAVALUNA - Scroll to Home"
          >
            <HavalunaLogo symbolSize={26} />
          </button>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-[#292929]/75">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('what-we-do')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              What We Do
            </button>
            <button
              onClick={() => onNavigate('relationships')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Business Relationships
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#C6A15B] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#292929]/60">
          <p>© {currentYear} HAVALUNA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#292929]/70">Wholesale Product Sourcing & Amazon Resale</span>
            <span aria-hidden="true">·</span>
            <a
              href="mailto:info@havaluna.com"
              className="text-[#292929]/80 hover:text-[#C6A15B] transition-colors font-medium"
            >
              info@havaluna.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
