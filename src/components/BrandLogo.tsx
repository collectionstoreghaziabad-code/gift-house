import React from 'react';
import logoImage from '../assets/images/tgh_brand_logo_1786095077345.jpg';

interface BrandLogoProps {
  variant?: 'full' | 'header' | 'compact' | 'monogram';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  size = 'md',
  className = '',
  onClick,
  showTagline = false,
}) => {
  if (variant === 'full') {
    return (
      <div 
        onClick={onClick}
        className={`flex flex-col items-center text-center cursor-pointer group ${className}`}
      >
        <div className="relative mb-3 overflow-hidden rounded-xl border border-[#d4af37]/40 p-1 shadow-2xl bg-[#0d0d0d] transition-transform duration-300 group-hover:scale-105 group-hover:border-[#d4af37]">
          <img 
            src={logoImage} 
            alt="The Gifting House - Corporate Gifting Solutions" 
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
          />
        </div>
        
        <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-[0.2em] text-white group-hover:text-[#d4af37] transition-colors uppercase">
          THE GIFTING HOUSE
        </h2>
        
        <div className="flex items-center gap-2 mt-1 text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">
          <span className="h-[1px] w-6 bg-[#d4af37]/40"></span>
          <span>CORPORATE GIFTING SOLUTIONS</span>
          <span className="h-[1px] w-6 bg-[#d4af37]/40"></span>
        </div>

        {showTagline && (
          <p className="mt-3 text-[11px] font-sans tracking-widest text-[#a3a3a3] uppercase border-t border-[#262626] pt-2">
            THOUGHTFUL GIFTS • LASTING IMPACT • STRONGER RELATIONSHIPS
          </p>
        )}
      </div>
    );
  }

  if (variant === 'monogram') {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-16 h-16',
      xl: 'w-24 h-24',
    }[size];

    return (
      <div 
        onClick={onClick}
        className={`relative rounded-lg overflow-hidden border border-[#d4af37]/40 bg-[#141414] shadow-md transition-all group-hover:border-[#d4af37] ${sizeClasses} ${className}`}
      >
        <img 
          src={logoImage} 
          alt="TGH Monogram" 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Default 'header' and 'compact' variants with crisp inline emblem + typography
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3 text-left group cursor-pointer ${className}`}
    >
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#d4af37]/40 bg-[#141414] shadow-lg group-hover:border-[#d4af37] group-hover:scale-105 transition-all shrink-0">
        <img 
          src={logoImage} 
          alt="The Gifting House Monogram" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-base sm:text-lg font-serif font-bold tracking-[0.15em] text-white group-hover:text-[#d4af37] transition-colors uppercase leading-none">
            THE GIFTING HOUSE
          </span>
        </div>
        <span className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-[#d4af37] mt-0.5">
          CORPORATE GIFTING SOLUTIONS
        </span>
      </div>
    </div>
  );
};
