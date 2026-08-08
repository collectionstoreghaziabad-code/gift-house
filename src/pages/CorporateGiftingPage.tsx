import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Users, Crown, Calendar, Heart, Award, Briefcase, FileText, ArrowRight } from 'lucide-react';

interface CorporateGiftingPageProps {
  onNavigate: (path: string) => void;
}

export const CorporateGiftingPage: React.FC<CorporateGiftingPageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  const employeeGifts = PRODUCTS.filter(p => p.useCases?.includes('Employee')).slice(0, 4);
  const clientGifts = PRODUCTS.filter(p => p.useCases?.includes('Client')).slice(0, 4);
  const executiveGifts = PRODUCTS.filter(p => p.useCases?.includes('Executive') || p.useCases?.includes('VIP')).slice(0, 4);
  const festiveGifts = PRODUCTS.filter(p => p.useCases?.includes('Festive')).slice(0, 4);

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto text-center space-y-4 py-12 bg-gradient-to-b from-[#171717] to-[#0a0a0a] rounded-2xl border border-[#262626] p-8">
        <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
          STRATEGIC B2B SOLUTIONS
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          CORPORATE GIFTING, CURATED FOR BUSINESS.
        </h1>
        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
          Strengthen corporate ties, boost employee morale, and build lasting client appreciation through thoughtfully branded corporate merchandise.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => openQuoteModal(null)}
            className="px-6 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors"
          >
            TALK TO A GIFTING EXPERT
          </button>
        </div>
      </section>

      {/* 1. EMPLOYEE GIFTING */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-3">
          <div className="w-8 h-8 rounded bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-serif text-white font-bold">Employee Gifting & Engagement</h2>
            <p className="text-xs text-[#a3a3a3]">Practical daily office tools, thermal drinkware, and journals for your workforce.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {employeeGifts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* 2. CLIENT & VIP GIFTING */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-3">
          <div className="w-8 h-8 rounded bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
            <Crown className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-serif text-white font-bold">Client & VIP Retention Gifting</h2>
            <p className="text-xs text-[#a3a3a3]">Luxury pure leather sets, executive bar trunks, and premium desk accessories.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientGifts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* 3. EXECUTIVE & CXO GIFTS */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-3">
          <div className="w-8 h-8 rounded bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-serif text-white font-bold">Executive & CXO Leadership Gifts</h2>
            <p className="text-xs text-[#a3a3a3]">High-grade leather trolley bags, Parker pens, and brass Vastu desktop artifacts.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveGifts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* 4. FESTIVE CORPORATE GIFTING */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-3 border-b border-[#262626] pb-3">
          <div className="w-8 h-8 rounded bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
            <Heart className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-serif text-white font-bold">Festive Corporate Hampers</h2>
            <p className="text-xs text-[#a3a3a3]">Diwali, New Year, and annual celebration gift sets for clients and staff.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festiveGifts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto bg-[#171717] border border-[#d4af37]/40 rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-serif text-white font-bold">Need Custom Sourcing or Curated Proposal?</h3>
        <p className="text-xs text-[#a3a3a3] max-w-xl mx-auto">
          Share your target headcount, budget per kit, and delivery date. Our gifting desk will construct a custom proposal in 24 hours.
        </p>
        <button
          onClick={() => openQuoteModal(null)}
          className="px-8 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors"
        >
          REQUEST CUSTOM PROPOSAL
        </button>
      </section>

    </div>
  );
};
