import React from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { ShieldCheck, Award, Building2, CheckCircle2, FileText } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto text-center space-y-6 py-16 bg-[#141414] rounded-2xl border border-[#262626] p-8 relative overflow-hidden">
        <div className="flex justify-center mb-4">
          <BrandLogo variant="full" showTagline={true} />
        </div>

        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed pt-2">
          Gifts That Represent Your Brand. Premium corporate gifting solutions engineered to strengthen relationships, celebrate milestones, and enhance corporate identity.
        </p>
      </section>

      {/* Main Sections */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="bg-[#171717] border border-[#262626] rounded-xl p-8 space-y-4">
          <h2 className="text-2xl font-serif text-white font-bold border-l-2 border-[#d4af37] pl-3">
            Who We Are
          </h2>
          <p className="text-xs text-[#a3a3a3] leading-relaxed">
            The Gifting House is a dedicated B2B corporate gifting provider serving organizations, enterprises, institutions, and agencies. We operate as a full-spectrum corporate procurement partner, bringing curated merchandise, executive gifts, and custom logo branding to life under one unified platform.
          </p>
        </div>

        <div className="bg-[#171717] border border-[#262626] rounded-xl p-8 space-y-4">
          <h2 className="text-2xl font-serif text-white font-bold border-l-2 border-[#d4af37] pl-3">
            What We Offer
          </h2>
          <p className="text-xs text-[#a3a3a3] leading-relaxed">
            Our multi-category product suite spans stainless steel vacuum drinkware, hardbound leatherette journals, premium metal ballpoint pens, wireless desktop accessories, genuine leather laptop briefs, custom B2B bar sets, divinity pieces, and promotional keychains.
          </p>
        </div>

        <div className="bg-[#171717] border border-[#262626] rounded-xl p-8 space-y-4">
          <h2 className="text-2xl font-serif text-white font-bold border-l-2 border-[#d4af37] pl-3">
            Our Approach
          </h2>
          <p className="text-xs text-[#a3a3a3] leading-relaxed">
            We prioritize functional, durable products that employees and clients actively keep and use in their daily routines. Every gift is selected for its high perceived value, sturdy construction, and elegant corporate aesthetic.
          </p>
        </div>

        <div className="bg-[#171717] border border-[#262626] rounded-xl p-8 space-y-4">
          <h2 className="text-2xl font-serif text-white font-bold border-l-2 border-[#d4af37] pl-3">
            Corporate Gifting Made Simple
          </h2>
          <p className="text-xs text-[#a3a3a3] leading-relaxed">
            From initial product selection and digital logo artwork proofing to bulk production and doorstep pan-India delivery, our experienced corporate team manages the entire procurement lifecycle.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto bg-[#141414] border border-[#262626] rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-serif text-white font-bold">Ready to Elevate Your Corporate Gifting Strategy?</h3>
        <p className="text-xs text-[#a3a3a3] max-w-md mx-auto">
          Contact our corporate procurement desk today to receive a tailored product proposal and bulk pricing sheet.
        </p>
        <button
          onClick={() => openQuoteModal(null)}
          className="px-8 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded"
        >
          REQUEST A CORPORATE PROPOSAL
        </button>
      </section>

    </div>
  );
};
