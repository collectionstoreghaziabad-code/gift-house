import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Package } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { Product } from '../types';
import { useQuoteModal } from '../context/QuoteModalContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === '' ? [] : PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.code.toLowerCase().includes(query.toLowerCase()) ||
    p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
    p.material?.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);

  const filteredCategories = query.trim() === '' ? [] : CATEGORIES.filter(c => 
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.shortDescription.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  const handleProductClick = (product: Product) => {
    onNavigate(`/product/${product.id}`);
    onClose();
  };

  const handleCategoryClick = (slug: string) => {
    onNavigate(`/collections/${slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#171717] border border-[#d4af37]/40 rounded-xl shadow-2xl overflow-hidden text-[#e5e5e5]">
        {/* Search Input Bar */}
        <div className="relative flex items-center px-3 sm:px-4 py-3 bg-[#0a0a0a] border-b border-[#262626]">
          <Search className="w-5 h-5 text-[#d4af37] mr-2.5 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products by name, code (e.g. TGH-25), material..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-white font-sans text-xs sm:text-sm outline-none placeholder-[#737373]"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1.5 rounded text-[#a3a3a3] hover:text-white mr-1 text-xs min-h-[36px]"
            >
              Clear
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#262626] text-[#a3a3a3] hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center flex-shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 text-xs">
          {query.trim() === '' ? (
            <div className="py-8 text-center space-y-2 text-[#a3a3a3]">
              <Package className="w-8 h-8 mx-auto text-[#525252]" />
              <p className="font-serif text-sm text-white">Search B2B Corporate Catalogue</p>
              <p className="text-xs">Try searching: <span className="text-[#d4af37]">"TGH-1"</span>, <span className="text-[#d4af37]">"Leather Bag"</span>, <span className="text-[#d4af37]">"Welcome Kit"</span>, or <span className="text-[#d4af37]">"Stanley Tumbler"</span></p>
            </div>
          ) : (
            <>
              {filteredCategories.length > 0 && (
                <div>
                  <div className="text-[10px] font-mono tracking-wider uppercase text-[#d4af37] mb-2 px-2">Matching Collections</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredCategories.map(cat => (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategoryClick(cat.slug)}
                        className="flex items-center justify-between p-2.5 bg-[#262626] hover:bg-[#333] border border-[#333] hover:border-[#d4af37]/50 rounded transition-all text-left"
                      >
                        <span className="font-semibold text-white">{cat.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="text-[10px] font-mono tracking-wider uppercase text-[#d4af37] mb-2 px-2">
                  Matching Products ({filteredProducts.length})
                </div>
                {filteredProducts.length === 0 ? (
                  <div className="p-4 text-center text-[#737373]">
                    No matching products found for "{query}". Contact us for custom sourcing.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredProducts.map(product => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between p-2.5 bg-[#262626]/60 hover:bg-[#262626] border border-[#333] rounded transition-all cursor-pointer group"
                        onClick={() => handleProductClick(product)}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-12 h-12 object-cover rounded bg-black"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="px-1.5 py-0.5 bg-[#d4af37]/20 text-[#d4af37] font-mono text-[9px] rounded font-bold uppercase">
                                {product.code}
                              </span>
                              <span className="text-[10px] text-[#a3a3a3]">{product.categoryName}</span>
                            </div>
                            <div className="font-semibold text-white text-sm group-hover:text-[#d4af37] transition-colors">
                              {product.name}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {product.price ? (
                            <span className="text-white font-semibold">₹{product.price.toLocaleString()}</span>
                          ) : (
                            <span className="text-xs text-[#d4af37] italic">Price on Request</span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openQuoteModal(product);
                              onClose();
                            }}
                            className="px-2.5 py-1 bg-[#d4af37] text-black font-semibold text-[10px] rounded hover:bg-[#c5a028] transition-colors"
                          >
                            Quote
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
