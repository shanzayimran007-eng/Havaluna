import React from 'react';
import { PackageSearch, SlidersHorizontal, Handshake, Store, ArrowUpRight } from 'lucide-react';

export const WhatWeDoSection: React.FC = () => {
  const activities = [
    {
      number: '01',
      title: 'Wholesale Product Sourcing',
      icon: PackageSearch,
      description:
        'We identify, negotiate, and establish direct business-to-business sourcing agreements with verified manufacturers and master brand distributors across the United States.',
      highlights: [
        'Direct procurement agreements',
        'Authorized channel onboarding',
        'Bulk inventory commitments',
      ],
    },
    {
      number: '02',
      title: 'Product Selection',
      icon: SlidersHorizontal,
      description:
        'Using analytical market metrics, we carefully curate product catalogs based on quality standards, consumer consistency, seasonal velocity, and rigorous brand reputation standards.',
      highlights: [
        'Data-backed catalog evaluation',
        'Strict quality assurance vetting',
        'Sustainable demand analysis',
      ],
    },
    {
      number: '03',
      title: 'Supplier Relationships',
      icon: Handshake,
      description:
        'We believe sustainable commerce relies on reliable partnerships. We foster open communication, predictable reorder cycles, prompt payment terms, and cooperative problem solving.',
      highlights: [
        'Predictable reordering cadence',
        'Adherence to supplier agreements',
        'Dedicated account communication',
      ],
    },
    {
      number: '04',
      title: 'Amazon Marketplace Reselling',
      icon: Store,
      description:
        'We manage end-to-end retail execution on Amazon, ensuring listings are accurately represented, customer satisfaction is maximized, and manufacturer guidelines are strictly preserved.',
      highlights: [
        'Prime-eligible fulfillment readiness',
        'MAP compliance adherence',
        'Listing fidelity & brand protection',
      ],
    },
  ];

  return (
    <section id="what-we-do" className="py-24 sm:py-32 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-3">
            Section 03 — Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292929]">
            What We Do
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A15B] mt-5 mb-4" />
          <p className="text-[#292929]/75 text-base sm:text-lg">
            HAVALUNA operates a streamlined, end-to-end wholesale procurement and marketplace resale infrastructure
            built to support manufacturers while fulfilling national consumer demand.
          </p>
        </div>

        {/* 4 Core Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.number}
                className="p-8 sm:p-10 bg-[#FFFFFF] border border-[#E8DFD0] rounded-sm hover:border-[#C6A15B]/60 transition-all duration-300 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#F8F5EF] border border-[#E8DFD0] flex items-center justify-center text-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold tracking-wider text-[#C6A15B]/80 font-mono">
                      {activity.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#292929] mb-3">
                    {activity.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#292929]/75 leading-relaxed mb-6">
                    {activity.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E8DFD0]/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#292929]/80 mb-2">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#292929]/70">
                    {activity.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Logistics & Staging Facility Spotlight Card */}
        <div className="bg-[#FFFFFF] border border-[#E8DFD0] rounded-sm overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A15B]">
                Supply Chain Execution
              </span>
              <h3 className="text-2xl font-bold text-[#292929] tracking-tight">
                Modern Logistics & Packaging Discipline
              </h3>
              <p className="text-sm text-[#292929]/80 leading-relaxed">
                All inventory procured through our wholesale channels is received, inspected, prepped, and transferred
                in strict compliance with domestic transit and Amazon inbound requirements—protecting product
                condition and brand reputation.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#292929] hover:text-[#C6A15B] transition-colors"
                >
                  <span>Inquire About Wholesale Sourcing</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C6A15B]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-[300px] sm:h-[360px] relative">
              <img
                src="/src/assets/images/wholesale_fulfillment_resale_1793717978356.jpg"
                alt="HAVALUNA wholesale inventory preparation and staging facility"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
