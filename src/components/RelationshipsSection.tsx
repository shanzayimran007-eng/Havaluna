import React from 'react';
import { ArrowRight, MessageSquare, BadgeDollarSign, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';

interface RelationshipsSectionProps {
  onWorkTogetherClick: () => void;
}

export const RelationshipsSection: React.FC<RelationshipsSectionProps> = ({ onWorkTogetherClick }) => {
  const pillars = [
    {
      icon: Handshake,
      title: 'Long-Term Supplier Partnerships',
      description:
        'We seek ongoing, multi-year distributor and manufacturer partnerships rather than transactional, one-off purchases. Our goal is steady, sustainable procurement.',
    },
    {
      icon: MessageSquare,
      title: 'Professional Communication',
      description:
        'Transparent, responsive, and direct business dialogue. From initial product inquiries to ongoing purchase order acknowledgments, our team respects your schedule.',
    },
    {
      icon: BadgeDollarSign,
      title: 'Reliable Wholesale Purchasing',
      description:
        'Financial stability and prompt invoice settlement. We operate with disciplined capital allocation, ensuring prompt payments and seamless fulfillment commitments.',
    },
    {
      icon: TrendingUp,
      title: 'Mutual Business Growth',
      description:
        'As consumer demand grows, our reorder volume scales accordingly. We help manufacturers turn excess inventory into consistent, profitable domestic revenue.',
    },
  ];

  return (
    <section id="relationships" className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-b border-[#E8DFD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-3">
            Section 04 — Partnership Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292929]">
            Business Relationships Built on Trust and Mutual Respect
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A15B] mt-5 mb-4" />
          <p className="text-[#292929]/75 text-base sm:text-lg">
            At HAVALUNA, our strongest asset is the confidence our suppliers place in our operations. We conduct
            every transaction with the discretion, reliability, and professionalism expected of an established American business.
          </p>
        </div>

        {/* Feature Grid & Executive Meeting Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Partnership Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-[#F8F5EF] border border-[#E8DFD0] rounded-sm space-y-3 hover:border-[#C6A15B]/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-sm bg-[#FFFFFF] border border-[#E8DFD0] flex items-center justify-center text-[#C6A15B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#292929]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#292929]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* MAP & Brand Protection Statement */}
            <div className="p-6 bg-[#FFFFFF] border border-[#C6A15B]/40 rounded-sm flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#C6A15B] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#292929]">
                  Brand Equity & MAP Protection Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-[#292929]/75 leading-relaxed">
                  We adhere strictly to manufacturer pricing policies (MAP). We never engage in predatory discounting,
                  unauthorized channel diversion, or questionable reselling practices that could harm your brand’s prestige.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Partnership Imagery */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-[#E8DFD0] shadow-sm bg-[#F8F5EF]">
              <img
                src="/src/assets/images/partnerships_handshake_meeting_1793717978403.jpg"
                alt="Corporate executives in executive meeting discussing wholesale supplier terms"
                className="w-full h-[440px] sm:h-[480px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm border border-[#E8DFD0] rounded-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Supplier Alliance
                </p>
                <p className="text-xs text-[#292929] mt-1 font-medium">
                  We maintain transparent, structured communications with manufacturers across every purchase cycle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="p-8 sm:p-12 bg-[#F8F5EF] border border-[#E8DFD0] rounded-sm text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#292929] tracking-tight">
            Ready to Expand Your Wholesale Distribution?
          </h3>
          <p className="text-sm sm:text-base text-[#292929]/75 max-w-2xl mx-auto leading-relaxed">
            If you are a manufacturer, authorized distributor, or brand representative seeking a dependable,
            financially sound wholesale buyer in the United States, we welcome the opportunity to connect.
          </p>
          <div className="pt-2">
            <button
              onClick={onWorkTogetherClick}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#292929] hover:bg-[#1f1f1f] border border-[#C6A15B]/30 hover:border-[#C6A15B] rounded-sm transition-all duration-200 cursor-pointer shadow-sm group"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
