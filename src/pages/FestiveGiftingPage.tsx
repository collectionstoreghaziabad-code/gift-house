import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Sparkles, Heart, FileText } from 'lucide-react';

interface FestiveGiftingPageProps {
  onNavigate: (path: string) => void;
}

export const FestiveGiftingPage: React.FC<FestiveGiftingPageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  const festiveProducts = PRODUCTS.filter(p => p.useCases?.includes('Festive') || p.categorySlug === 'divinity' || p.categorySlug === 'leather-gift-sets');

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Festive Hero */}
      <section className="max-w-7xl mx-auto text-center space-y-4 py-16 bg-gradient-to-b from-[#1c170b] via-[#141414] to-[#0a0a0a] rounded-2xl border border-[#d4af37]/40 p-8">
        <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-mono font-bold uppercase rounded border border-[#d4af37]/30">
          SEASONAL CORPORATE GIFTING
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          CELEBRATE FESTIVE MOMENTS WITH DISTINCTION.
        </h1>
        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
          Diwali, New Year, and festive corporate gifting hampers curated to convey warmth and professional gratitude.
        </p>
        <div className="pt-4">
          <button
            onClick={() => openQuoteModal(null)}
            className="px-8 py-3.5 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors"
          >
            REQUEST FESTIVE GIFTING QUOTE
          </button>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="border-b border-[#262626] pb-4">
          <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">SEASONAL CATALOGUE</span>
          <h2 className="text-2xl font-serif text-white font-bold mt-1">FESTIVE & DIVINITY COLLECTION</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {festiveProducts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

    </div>
  );
};
