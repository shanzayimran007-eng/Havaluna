import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Building2 } from 'lucide-react';
import { HavalunaLogo } from './HavalunaLogo.tsx';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-[#F8F5EF]">
      {/* Background Subtle Architectural Line */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#E8DFD0]/40 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            {/* Logo Display */}
            <div className="pb-2">
              <HavalunaLogo symbolSize={34} textColor="text-[#292929]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292929] leading-[1.12] text-balance">
              Building Stronger Business Connections.
            </h1>

            {/* Supporting Text */}
            <div className="space-y-4 text-base sm:text-lg text-[#292929]/80 leading-relaxed max-w-2xl">
              <p>
                HAVALUNA is a Florida-based corporate enterprise specializing in professional wholesale product
                sourcing and high-volume Amazon marketplace resale.
              </p>
              <p className="text-sm sm:text-base text-[#292929]/70">
                We partner with established manufacturers, authorized distributors, and brand owners across the
                United States to purchase inventory at scale, maintain rigorous brand pricing integrity, and expand
                market reach through disciplined marketplace operations.
              </p>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#292929] hover:bg-[#1f1f1f] border border-[#C6A15B]/30 hover:border-[#C6A15B] rounded-sm transition-all duration-200 cursor-pointer shadow-sm group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-medium text-[#292929] hover:text-[#C6A15B] bg-[#FFFFFF] hover:bg-[#FFFFFF] border border-[#E8DFD0] rounded-sm transition-colors cursor-pointer"
              >
                Learn More About Us
              </button>
            </div>

            {/* Unboxed Corporate Attributes */}
            <div className="pt-6 border-t border-[#E8DFD0]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#292929]/75 font-medium">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#C6A15B]" />
                Florida-Registered Entity
              </span>
              <span aria-hidden="true" className="text-[#C6A15B]">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                Strict MAP Integrity
              </span>
              <span aria-hidden="true" className="text-[#C6A15B]">·</span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#C6A15B]" />
                Reliable Purchase Orders
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Wholesale Distribution Imagery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-[#E8DFD0] shadow-md bg-white">
              <img
                src="/src/assets/images/hero_logistics_commerce_1793717976897.jpg"
                alt="HAVALUNA wholesale product distribution and logistics facility"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center transition-transform duration-700 hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Refined Image Caption Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FFFFFF]/95 backdrop-blur-sm border border-[#E8DFD0] rounded-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Wholesale Procurement & Logistics
                </p>
                <p className="text-xs text-[#292929] mt-1 font-medium">
                  Reliable wholesale purchasing partnerships connecting domestic suppliers to scalable retail demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
