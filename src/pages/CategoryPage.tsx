import React from 'react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useQuoteModal } from '../context/QuoteModalContext';
import { ArrowLeft, FileText, CheckCircle2, Shield } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string;
  onNavigate: (path: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug, onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();
  
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  const categoryProducts = PRODUCTS.filter(p => p.categorySlug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
        <h2 className="text-2xl font-serif text-white">Collection Not Found</h2>
        <p className="text-xs text-[#a3a3a3]">The collection you are looking for does not exist.</p>
        <button 
          onClick={() => onNavigate('/products')}
          className="px-6 py-2.5 bg-[#d4af37] text-black text-xs font-bold uppercase rounded"
        >
          View All Products
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen pb-16">
      
      {/* Category Header Hero */}
      <section className="relative py-16 bg-[#141414] border-b border-[#262626] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <button 
            onClick={() => onNavigate('/products')}
            className="inline-flex items-center gap-1.5 text-xs text-[#a3a3a3] hover:text-[#d4af37] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Products
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="px-2.5 py-1 bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-mono font-bold uppercase rounded border border-[#d4af37]/30">
                {category.catalogSource}
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif text-white font-bold tracking-wide">
                {category.name.toUpperCase()}
              </h1>
              <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
                {category.shortDescription}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openQuoteModal(null)}
                className="px-6 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                REQUEST BULK QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex items-center justify-between text-xs text-[#a3a3a3] border-b border-[#262626] pb-3">
          <div>
            Showing <strong className="text-white">{categoryProducts.length}</strong> products in this collection
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Logo Printing Available on Order</span>
          </div>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="py-16 text-center bg-[#141414] rounded-xl border border-[#262626] p-8 space-y-3">
            <p className="text-sm text-white">No items found directly matching this category filter.</p>
            <p className="text-xs text-[#737373]">Custom sourcing is available upon request.</p>
            <button
              onClick={() => openQuoteModal(null)}
              className="px-4 py-2 bg-[#d4af37] text-black text-xs font-bold uppercase rounded"
            >
              Request Custom Sourcing
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
