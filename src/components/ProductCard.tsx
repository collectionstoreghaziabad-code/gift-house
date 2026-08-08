import React from 'react';
import { Product } from '../types';
import { useQuoteModal } from '../context/QuoteModalContext';
import { Eye, FileText, CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onNavigate: (path: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="group relative bg-[#171717] border border-[#262626] hover:border-[#d4af37]/60 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Product Image Container */}
      <div 
        className="relative aspect-square w-full bg-[#0a0a0a] overflow-hidden cursor-pointer"
        onClick={() => onNavigate(`/product/${product.id}`)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <span className="px-2 py-0.5 bg-[#0a0a0a]/90 text-[#d4af37] font-mono text-[10px] font-bold uppercase tracking-wider rounded border border-[#d4af37]/40 shadow">
            {product.code}
          </span>
          {product.isPremium && (
            <span className="px-2 py-0.5 bg-[#d4af37] text-black font-semibold text-[9px] uppercase tracking-wider rounded shadow">
              Executive
            </span>
          )}
        </div>

        {product.isCustomizable && (
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm text-[10px] text-[#e5e5e5] rounded border border-white/10 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
            Custom Logo
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="text-[10px] font-mono uppercase text-[#a3a3a3] tracking-wider mb-1">
            {product.categoryName}
          </div>
          <h3 
            onClick={() => onNavigate(`/product/${product.id}`)}
            className="text-sm font-serif font-medium text-white group-hover:text-[#d4af37] transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#737373] line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & CTAs */}
        <div className="pt-2 border-t border-[#262626] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#a3a3a3] uppercase font-mono">Catalogue Rate</span>
            <span className="text-sm font-semibold text-white">
              {product.price ? `₹${product.price.toLocaleString()}` : <span className="text-xs text-[#d4af37] italic">Price on Request</span>}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onNavigate(`/product/${product.id}`)}
              className="w-full py-2 bg-[#262626] hover:bg-[#333] text-white text-[10px] font-semibold tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-1 border border-[#333]"
            >
              <Eye className="w-3 h-3" />
              Details
            </button>

            <button
              onClick={() => openQuoteModal(product)}
              className="w-full py-2 bg-[#d4af37] hover:bg-[#c5a028] text-black text-[10px] font-bold tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-1 shadow"
            >
              <FileText className="w-3 h-3" />
              Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
