import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { HavalunaLogo } from './HavalunaLogo.tsx';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'info@havaluna.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F8F5EF] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#E8DFD0]/40 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] mb-3">
            Section 05 — Direct Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#292929]">
            Contact Us
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A15B] mx-auto mt-4 mb-4" />
          <p className="text-[#292929]/75 text-base max-w-xl mx-auto leading-relaxed">
            We actively welcome inquiries from manufacturers, wholesale distributors, and brand owners seeking to
            discuss inventory procurement and supply partnerships.
          </p>
        </div>

        {/* Elegant Contact Card */}
        <div className="p-8 sm:p-12 bg-[#FFFFFF] border border-[#E8DFD0] rounded-sm shadow-sm text-center">
          {/* Logo Preserved */}
          <div className="flex justify-center mb-6">
            <HavalunaLogo symbolSize={32} />
          </div>

          <div className="space-y-4 max-w-lg mx-auto">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C6A15B] mb-1">
                Business Email
              </p>
              <a
                href={`mailto:${emailAddress}`}
                className="text-2xl sm:text-3xl font-bold text-[#292929] hover:text-[#C6A15B] transition-colors underline underline-offset-8 decoration-[#E8DFD0] hover:decoration-[#C6A15B] break-all inline-flex items-center gap-2 group"
                title="Send an email to info@havaluna.com"
              >
                <span>{emailAddress}</span>
                <ExternalLink className="w-5 h-5 text-[#C6A15B] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#292929]/70 pt-2 leading-relaxed">
              Our procurement team monitors inquiries directly and typically responds within one business day with
              our company credentials and wholesale reseller profile.
            </p>

            {/* Functional Buttons: Working Email Us Button + Copy Helper */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Working Email Us Button */}
              <a
                href={`mailto:${emailAddress}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#292929] hover:bg-[#1a1a1a] border border-[#C6A15B]/30 hover:border-[#C6A15B] rounded-sm transition-all duration-200 cursor-pointer shadow-xs group"
              >
                <Mail className="w-4 h-4 text-[#C6A15B]" />
                <span>Email Us</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Functional Copy Email Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[#292929] hover:text-[#C6A15B] bg-[#F8F5EF] hover:bg-[#E8DFD0]/40 border border-[#E8DFD0] rounded-sm transition-colors cursor-pointer"
                aria-label="Copy business email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#292929]/70" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
