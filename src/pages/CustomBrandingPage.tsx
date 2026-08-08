import React from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Sparkles, Palette, ShieldCheck, Box, FileText, ArrowRight } from 'lucide-react';

interface CustomBrandingPageProps {
  onNavigate: (path: string) => void;
}

export const CustomBrandingPage: React.FC<CustomBrandingPageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto text-center space-y-4 py-16 bg-gradient-to-b from-[#171717] to-[#0a0a0a] rounded-2xl border border-[#d4af37]/30 p-8">
        <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-mono font-bold uppercase rounded border border-[#d4af37]/30">
          CORPORATE BRAND IDENTIFICATION
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          YOUR LOGO. YOUR IDENTITY. YOUR GIFT.
        </h1>
        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
          Transform high-grade corporate products into powerful brand ambassadors through precise logo placement, laser etching, debossing, and custom gift sleeves.
        </p>
        <div className="pt-4">
          <button
            onClick={() => openQuoteModal(null)}
            className="px-8 py-3.5 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors"
          >
            DISCUSS YOUR BRANDING REQUIREMENT
          </button>
        </div>
      </section>

      {/* Branding Categories Grid */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="border-b border-[#262626] pb-4 text-center">
          <h2 className="text-2xl font-serif text-white font-bold">
            CUSTOMIZATION ACROSS OUR PRODUCT RANGE
          </h2>
          <p className="text-xs text-[#a3a3a3] mt-1">
            We adapt branding methods according to the product material for durable, crisp logo representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-6 space-y-4">
            <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600" alt="Branded Bottles" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-serif text-white font-bold">Branded Bottles & Tumblers</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Laser engraving and UV screen printing on double-walled stainless steel vacuum flasks and tumblers.
            </p>
            <button onClick={() => onNavigate('/collections/bottles-flasks-tumblers')} className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1">
              Explore Drinkware <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-6 space-y-4">
            <img src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600" alt="Branded Pens" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-serif text-white font-bold">Branded Metal Pens</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Subtle, elegant laser etching on metal body rollerballs and slim executive ballpoint pens.
            </p>
            <button onClick={() => onNavigate('/collections/pens')} className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1">
              Explore Premium Pens <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-6 space-y-4">
            <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600" alt="Branded Diaries" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-serif text-white font-bold">Branded Diaries & Journals</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Blind debossing, foil stamping (gold/silver), and custom inner tipped pages for corporate planners.
            </p>
            <button onClick={() => onNavigate('/collections/diaries-notebooks')} className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1">
              Explore Diaries <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-6 space-y-4">
            <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600" alt="Branded Bags" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-serif text-white font-bold">Branded Leather & PU Bags</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Metallic logo plates, debossed leather patches, and custom zipper pullers for laptop briefcases.
            </p>
            <button onClick={() => onNavigate('/collections/leather-bags')} className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1">
              Explore Leather Bags <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-6 space-y-4">
            <img src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&q=80&w=600" alt="Branded Gift Sets" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-serif text-white font-bold">Branded Combo Gift Sets</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Unified logo application across all items in a set (wallet, keychain, pen, cardholder).
            </p>
            <button onClick={() => onNavigate('/collections/leather-gift-sets')} className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1">
              Explore Gift Sets <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-6 space-y-4">
            <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=600" alt="Corporate Packaging" className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-serif text-white font-bold">Corporate Presentation Packaging</h3>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Custom printed outer sleeves, gold foil logo boxes, and brand message greeting cards.
            </p>
            <button onClick={() => openQuoteModal(null)} className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1">
              Request Packaging Specs <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto bg-[#141414] border border-[#262626] rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-serif text-white font-bold">Have a Specific Vector Logo or Brand Guide?</h3>
        <p className="text-xs text-[#a3a3a3] max-w-lg mx-auto">
          Send us your vector logo (AI/PDF/PNG) along with your chosen product code and our team will prepare a digital artwork mockup.
        </p>
        <button
          onClick={() => openQuoteModal(null)}
          className="px-8 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded"
        >
          SUBMIT LOGO FOR DIGITAL MOCKUP
        </button>
      </section>

    </div>
  );
};
