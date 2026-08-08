import React from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Gift, CheckCircle2, FileText, Sparkles, ArrowRight } from 'lucide-react';

interface WelcomeKitsPageProps {
  onNavigate: (path: string) => void;
}

export const WelcomeKitsPage: React.FC<WelcomeKitsPageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  const welcomeKitProducts = PRODUCTS.filter(p => p.useCases?.includes('Welcome Kit') || p.code === 'OCS-7');

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto text-center space-y-4 py-12 bg-[#141414] rounded-2xl border border-[#262626] p-8">
        <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-mono font-bold uppercase rounded border border-[#d4af37]/30">
          EMPLOYEE ONBOARDING SOLUTIONS
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          WELCOME THEM WITH SOMETHING WORTH KEEPING.
        </h1>
        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
          Create unforgettable Day-1 experiences for new team members with curated, custom-branded welcome boxes.
        </p>
        <div className="pt-4">
          <button
            onClick={() => openQuoteModal(null)}
            className="px-8 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors"
          >
            CREATE YOUR WELCOME KIT
          </button>
        </div>
      </section>

      {/* Example Kit Combinations */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="border-b border-[#262626] pb-4">
          <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">POPULAR CONFIGURATIONS</span>
          <h2 className="text-2xl font-serif text-white font-bold mt-1">
            SAMPLE ONBOARDING COMBINATIONS
          </h2>
          <p className="text-xs text-[#a3a3a3]">
            These sample combinations can be customized with your company logo and custom color theme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Combo 1 */}
          <div className="bg-[#171717] border border-[#262626] hover:border-[#d4af37]/50 rounded-xl p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider bg-[#0a0a0a] px-2 py-1 rounded border border-[#333]">
                TIER 1 • ESSENTIAL
              </span>
              <h3 className="text-xl font-serif text-white font-bold">Essential Welcome Kit</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                The standard Day 1 starter pack featuring high utility daily desk accessories.
              </p>
              <div className="space-y-2 text-xs text-[#e5e5e5] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Hardcover A5 Notebook (TGH-23)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Slim Metallic Ballpoint Pen (TGH-26)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>SS Vacuum Insulated Bottle (TGH-2)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Branded Craft Presentation Box</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openQuoteModal(null)}
              className="w-full py-2.5 bg-[#262626] hover:bg-[#333] text-white text-xs font-bold uppercase rounded border border-[#333] transition-colors"
            >
              QUOTE ESSENTIAL KIT
            </button>
          </div>

          {/* Combo 2 */}
          <div className="bg-[#171717] border-2 border-[#d4af37]/60 rounded-xl p-6 space-y-6 flex flex-col justify-between relative shadow-2xl">
            <div className="absolute -top-3 right-6 px-3 py-0.5 bg-[#d4af37] text-black font-mono font-bold text-[9px] uppercase tracking-wider rounded">
              MOST POPULAR
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider bg-[#0a0a0a] px-2 py-1 rounded border border-[#333]">
                TIER 2 • EXECUTIVE
              </span>
              <h3 className="text-xl font-serif text-white font-bold">Executive Welcome Kit</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Complete corporate desk setup for mid-level managers and corporate professionals.
              </p>
              <div className="space-y-2 text-xs text-[#e5e5e5] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Executive Stag Journal (TGH-19)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Metal Rollerball Pen (TGH-27)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Stanley Insulated Tumbler (TGH-6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Metal Card Holder & Key Chain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Custom Embossed Magnetic Box</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openQuoteModal(null)}
              className="w-full py-2.5 bg-[#d4af37] hover:bg-[#c5a028] text-black text-xs font-bold uppercase rounded shadow transition-colors"
            >
              QUOTE EXECUTIVE KIT
            </button>
          </div>

          {/* Combo 3 */}
          <div className="bg-[#171717] border border-[#262626] hover:border-[#d4af37]/50 rounded-xl p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider bg-[#0a0a0a] px-2 py-1 rounded border border-[#333]">
                TIER 3 • PREMIUM LUXURY
              </span>
              <h3 className="text-xl font-serif text-white font-bold">Premium Welcome Kit</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Luxury onboarding suite for senior leadership, directors, and executives.
              </p>
              <div className="space-y-2 text-xs text-[#e5e5e5] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Genuine Leather Laptop Bag (LB-6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Executive Office Diary with Pen (TGH-24)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Wireless Charging Table Lamp (TGH-36)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                  <span>Universal Travel Adapter (TGH-40)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openQuoteModal(null)}
              className="w-full py-2.5 bg-[#262626] hover:bg-[#333] text-white text-xs font-bold uppercase rounded border border-[#333] transition-colors"
            >
              QUOTE PREMIUM KIT
            </button>
          </div>

        </div>
      </section>

      {/* Catalogue Welcome Kit Products */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="border-b border-[#262626] pb-3">
          <h2 className="text-xl font-serif text-white font-bold">INDIVIDUAL CATALOGUE ITEMS FOR WELCOME KITS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {welcomeKitProducts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

    </div>
  );
};
