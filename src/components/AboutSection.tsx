import React from 'react';
import { Award, Compass, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-b border-[#E8DFD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-3">
            Section 02 — Corporate Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292929]">
            A Trusted Wholesale Commerce Partner, Rooted in Florida
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A15B] mt-5" />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Accent Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Background decorative corner accent */}
              <div className="absolute -inset-2 bg-[#F8F5EF] border border-[#E8DFD0] rounded-sm -z-10 translate-x-3 translate-y-3 hidden sm:block" />
              
              <div className="rounded-sm overflow-hidden border border-[#E8DFD0] shadow-sm bg-[#F8F5EF]">
                <img
                  src="/src/assets/images/about_corporate_meeting_1793717978338.jpg"
                  alt="HAVALUNA corporate executive conference and business planning"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Quick Corporate Facts */}
            <div className="mt-8 p-6 bg-[#F8F5EF] border border-[#E8DFD0] rounded-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#292929] mb-3">
                Corporate Credentials
              </h4>
              <ul className="space-y-2 text-sm text-[#292929]/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Florida Domestic Entity in Good Standing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Dedicated B2B Wholesale Accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  <span>Strict Authorized Reseller Guidelines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl font-bold text-[#292929] tracking-tight">
              Driving Sustainable Growth Through Legitimate Supply Chain Partnerships
            </h3>

            <p className="text-[#292929]/85 text-base sm:text-lg leading-relaxed">
              Headquartered in the state of Florida, <strong>HAVALUNA</strong> is a dedicated corporate purchasing
              firm focused exclusively on establishing formal wholesale relationships with domestic manufacturers,
              brand custodians, and authorized master distributors.
            </p>

            <p className="text-[#292929]/75 text-base leading-relaxed">
              Our business model centers on acquiring quality product lines through negotiated wholesale purchase
              orders and responsibly retailing them across Amazon’s national marketplace. By operating with complete
              commercial transparency, we bridge the gap between manufacturer supply capabilities and marketplace demand.
            </p>

            {/* Vision & Values Blocks */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F8F5EF] border border-[#E8DFD0] rounded-sm space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#FFFFFF] border border-[#E8DFD0] flex items-center justify-center text-[#C6A15B]">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#292929]">Our Vision</h4>
                <p className="text-xs sm:text-sm text-[#292929]/75 leading-relaxed">
                  To serve as the benchmark American wholesale reseller—renowned for financial dependability,
                  respect for brand equity, and enduring supplier alliances.
                </p>
              </div>

              <div className="p-6 bg-[#F8F5EF] border border-[#E8DFD0] rounded-sm space-y-3">
                <div className="w-10 h-10 rounded-sm bg-[#FFFFFF] border border-[#E8DFD0] flex items-center justify-center text-[#C6A15B]">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#292929]">Our Values</h4>
                <p className="text-xs sm:text-sm text-[#292929]/75 leading-relaxed">
                  Integrity, prompt contractual payments, consistent order frequency, and absolute adherence to
                  Minimum Advertised Price (MAP) protocols.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-3 p-4 bg-white border border-[#E8DFD0] rounded-sm">
                <HeartHandshake className="w-6 h-6 text-[#C6A15B] shrink-0" />
                <p className="text-xs sm:text-sm text-[#292929]/80 font-medium">
                  We operate as true commercial stewards for our supplier partners, never disrupting established retail channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
