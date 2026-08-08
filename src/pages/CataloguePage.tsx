import React, { useState } from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { PRODUCTS } from '../data/products';
import { BookOpen, Download, FileText, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface CataloguePageProps {
  onNavigate: (path: string) => void;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();
  const [activeCatalogueTab, setActiveCatalogueTab] = useState<'cat1' | 'cat2'>('cat1');

  const cat1Products = PRODUCTS.filter(p => p.catalogSource === 'The Gifting House Collection');
  const cat2Products = PRODUCTS.filter(p => p.catalogSource === 'Extended Corporate Collection');

  const handleDownload = (catName: string) => {
    alert(`Downloading ${catName} PDF Catalogue (2026-2027 Edition)...`);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Top Banner */}
      <section className="max-w-7xl mx-auto text-center space-y-4 py-12 bg-[#141414] rounded-2xl border border-[#262626] p-8">
        <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-mono font-bold uppercase rounded border border-[#d4af37]/30">
          OFFICIAL DIGITAL CATALOGUES 2026-2027
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          EXPLORE OUR CATALOGUE LIBRARY
        </h1>
        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
          Browse or download our official B2B corporate product catalogues. Contact us with product codes for instant bulk quotations.
        </p>
      </section>

      {/* Catalogue Cards Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CATALOGUE 01 */}
        <div className={`p-8 bg-[#171717] rounded-2xl border-2 transition-all space-y-6 flex flex-col justify-between ${activeCatalogueTab === 'cat1' ? 'border-[#d4af37] shadow-2xl' : 'border-[#262626]'}`}>
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider bg-[#0a0a0a] px-3 py-1 rounded border border-[#333]">
              CATALOGUE 01 • PRIMARY COLLECTION
            </span>
            <h2 className="text-2xl font-serif text-white font-bold">The Gifting House Collection</h2>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Featuring stainless steel vacuum insulated bottles, Stanley tumblers, executive stag diaries, premium metal rollerball pens, wireless charging desk lamps, and corporate umbrellas.
            </p>

            <div className="text-xs text-[#e5e5e5] space-y-1 pt-2 border-t border-[#262626]">
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">Total Items:</span>
                <span className="font-semibold text-white">{cat1Products.length} Authenticated Items</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">Product Codes:</span>
                <span className="font-mono text-[#d4af37]">TGH-1 to TGH-46</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">Year:</span>
                <span className="text-white">2026-2027</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setActiveCatalogueTab('cat1')}
              className="flex-1 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              VIEW CATALOGUE
            </button>
            <button
              onClick={() => handleDownload('Catalogue 01 - The Gifting House Collection')}
              className="px-4 py-3 bg-[#262626] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#333] border border-[#333] transition-colors flex items-center gap-2"
              title="Download PDF"
            >
              <Download className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>

        {/* CATALOGUE 02 */}
        <div className={`p-8 bg-[#171717] rounded-2xl border-2 transition-all space-y-6 flex flex-col justify-between ${activeCatalogueTab === 'cat2' ? 'border-[#d4af37] shadow-2xl' : 'border-[#262626]'}`}>
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-wider bg-[#0a0a0a] px-3 py-1 rounded border border-[#333]">
              CATALOGUE 02 • EXTENDED COLLECTION
            </span>
            <h2 className="text-2xl font-serif text-white font-bold">The Extended Corporate Collection</h2>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Featuring genuine leather trolley bags, laptop briefs, PU duffle bags, pure leather gift sets, welcome kits, men's & ladies wallets, bar sets, divinity artifacts, and keychains.
            </p>

            <div className="text-xs text-[#e5e5e5] space-y-1 pt-2 border-t border-[#262626]">
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">Total Items:</span>
                <span className="font-semibold text-white">{cat2Products.length} Authenticated Items</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">Product Codes:</span>
                <span className="font-mono text-[#d4af37]">BH, LB, PUB, PLGS, OCS, DIV, KC</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">Year:</span>
                <span className="text-white">2026-2027</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setActiveCatalogueTab('cat2')}
              className="flex-1 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              VIEW CATALOGUE
            </button>
            <button
              onClick={() => handleDownload('Catalogue 02 - Extended Corporate Collection')}
              className="px-4 py-3 bg-[#262626] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#333] border border-[#333] transition-colors flex items-center gap-2"
              title="Download PDF"
            >
              <Download className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>

      </section>

      {/* Catalogue Viewer Grid */}
      <section className="max-w-7xl mx-auto space-y-6 pt-6">
        <div className="flex items-center justify-between border-b border-[#262626] pb-4">
          <h2 className="text-xl font-serif text-white font-bold flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#d4af37]" />
            {activeCatalogueTab === 'cat1' ? 'CATALOGUE 01 PRODUCTS' : 'CATALOGUE 02 PRODUCTS'}
          </h2>
          <button
            onClick={() => openQuoteModal(null)}
            className="text-xs text-[#d4af37] font-semibold hover:underline flex items-center gap-1"
          >
            Request Bulk Quote for Catalogue <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(activeCatalogueTab === 'cat1' ? cat1Products : cat2Products).map(product => (
            <div key={product.id} className="bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-4 space-y-3 flex flex-col justify-between">
              <img src={product.images[0]} alt={product.name} className="w-full h-40 object-cover rounded-lg bg-black" />
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[#d4af37] text-[10px] font-bold uppercase">{product.code}</span>
                  <span className="text-[10px] text-[#737373]">{product.categoryName}</span>
                </div>
                <h3 className="text-xs font-serif text-white font-bold line-clamp-1">{product.name}</h3>
                <p className="text-[11px] text-[#737373] line-clamp-2 mt-1">{product.description}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#262626]">
                <span className="text-xs font-bold text-white">
                  {product.price ? `₹${product.price}` : 'Price on Request'}
                </span>
                <button
                  onClick={() => openQuoteModal(product)}
                  className="px-2.5 py-1 bg-[#d4af37] text-black font-bold text-[10px] uppercase rounded"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
