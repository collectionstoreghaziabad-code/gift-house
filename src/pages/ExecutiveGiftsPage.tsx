import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Crown, ShieldCheck, Sparkles, FileText } from 'lucide-react';

interface ExecutiveGiftsPageProps {
  onNavigate: (path: string) => void;
}

export const ExecutiveGiftsPage: React.FC<ExecutiveGiftsPageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  const executiveProducts = PRODUCTS.filter(p => p.isPremium || p.useCases?.includes('Executive') || p.useCases?.includes('VIP'));

  return (
    <div className="bg-[#050505] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Dark Luxury Hero */}
      <section className="max-w-7xl mx-auto text-center space-y-4 py-16 bg-[#121212] rounded-2xl border border-[#d4af37]/40 p-8 shadow-2xl relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] border border-[#d4af37]/50 rounded-full text-[#d4af37] text-xs font-mono uppercase tracking-widest">
          <Crown className="w-3.5 h-3.5" /> VIP & C-SUITE COLLECTION
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          GIFTS FOR THE PEOPLE WHO MATTER MOST.
        </h1>
        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed font-sans">
          Specially curated for CXOs, Board Directors, Senior Management, and VIP Business Partners. Featuring genuine NDM leather duffles, pure leather gift boxes, Parker writing sets, and fine bar trunks.
        </p>
        <div className="pt-4">
          <button
            onClick={() => openQuoteModal(null)}
            className="px-8 py-3.5 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors"
          >
            REQUEST C-SUITE VIP QUOTE
          </button>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-[#262626] pb-4">
          <div>
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">C-SUITE CATALOGUE</span>
            <h2 className="text-2xl font-serif text-white font-bold mt-1">THE EXECUTIVE COLLECTION</h2>
          </div>
          <div className="text-xs text-[#737373]">
            {executiveProducts.length} Premium Products
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {executiveProducts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

    </div>
  );
};
