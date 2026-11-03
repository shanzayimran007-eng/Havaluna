import React from 'react';

interface HavalunaLogoProps {
  className?: string;
  symbolSize?: number;
  textColor?: string;
  symbolColor?: string;
}

export const HavalunaLogo: React.FC<HavalunaLogoProps> = ({
  className = '',
  symbolSize = 28,
  textColor = 'text-[#292929]',
  symbolColor = '#C6A15B',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Golden Moon Symbol */}
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-6"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="havalunaGoldGrad" x1="6" y1="4" x2="26" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DFBF7A" />
            <stop offset="60%" stopColor={symbolColor} />
            <stop offset="100%" stopColor="#AD8742" />
          </linearGradient>
        </defs>
        {/* Elegant Golden Crescent Moon */}
        <path
          d="M21.8 4.2C13.6 4.2 7 10.8 7 19C7 23.6 9.1 27.7 12.4 30.4C9.9 27.4 8.5 24.5 8.5 21.2C8.5 13.9 14.4 7.9 21.8 7.9C23.4 7.9 25 8.2 26.4 8.7C25 5.9 23.5 4.2 21.8 4.2Z"
          fill="url(#havalunaGoldGrad)"
        />
      </svg>

      {/* Exact Brand Name HAVALUNA - Clean, tracked, strictly no extra text */}
      <span
        className={`font-semibold tracking-[0.24em] uppercase text-lg sm:text-xl ${textColor} transition-colors leading-none`}
      >
        HAVALUNA
      </span>
    </div>
  );
};
