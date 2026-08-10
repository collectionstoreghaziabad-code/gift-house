import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useQuoteModal } from '../context/QuoteModalContext';
import { 
  ArrowLeft, FileText, MessageCircle, CheckCircle2, ShieldCheck, 
  Truck, Tag, Layers, RefreshCw, Box
} from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (path: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();
  
  const product = PRODUCTS.find(p => p.id === productId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
        <h2 className="text-2xl font-serif text-white">Product Not Found</h2>
        <p className="text-xs text-[#a3a3a3]">The requested catalogue product was not found.</p>
        <button 
          onClick={() => onNavigate('/products')}
          className="px-6 py-2.5 bg-[#d4af37] text-black text-xs font-bold uppercase rounded"
        >
          View All Products
        </button>
      </div>
    );
  }

  const relatedProducts = PRODUCTS
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage = `Hello The Gifting House, I am interested in ${product.name} (Code: ${product.code}). Please send me bulk pricing and logo customization details.`;
  const whatsappUrl = `https://wa.me/917895019181?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#a3a3a3]">
        <button 
          onClick={() => onNavigate('/products')}
          className="inline-flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
        </button>
        <div className="font-mono text-[11px] text-[#737373]">
          Catalogue Source: <span className="text-white">{product.catalogSource}</span>
        </div>
      </div>

      {/* Main Detail Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-4">
            <img 
              src={product.images[activeImageIndex] || product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-xl"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-[#d4af37] font-mono font-bold text-xs rounded border border-[#d4af37]/40 shadow">
              CODE: {product.code}
            </span>
          </div>

          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-thin">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 snap-start min-h-[44px] ${activeImageIndex === idx ? 'border-[#d4af37]' : 'border-[#262626] opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Details & Buying Info */}
        <div className="lg:col-span-6 space-y-6 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8">
          
          <div className="space-y-2 border-b border-[#262626] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-[#d4af37] tracking-wider">
                {product.categoryName}
              </span>
              <span>•</span>
              <span className="text-xs text-[#a3a3a3] font-mono">CODE: {product.code}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif text-white font-bold tracking-wide">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 pt-2">
              <div className="text-2xl font-bold text-white font-sans">
                {product.price ? `₹${product.price.toLocaleString()}` : <span className="text-sm text-[#d4af37] italic">Price on Request</span>}
              </div>
              <span className="text-[11px] text-[#737373]">
                (Catalogue Indicative Rate • Contact for Bulk Quantity Discounts)
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed font-sans">
            {product.description}
          </p>

          {/* Customization & Material Tags */}
          <div className="grid grid-cols-2 gap-3 text-xs pt-2">
            <div className="p-3 bg-[#0a0a0a] rounded-lg border border-[#262626]">
              <div className="text-[10px] text-[#737373] uppercase font-mono mb-1">Customization</div>
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                {product.isCustomizable ? 'Logo Printing Available' : 'Plain Supply'}
              </div>
            </div>

            <div className="p-3 bg-[#0a0a0a] rounded-lg border border-[#262626]">
              <div className="text-[10px] text-[#737373] uppercase font-mono mb-1">Material</div>
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Box className="w-4 h-4 text-[#d4af37]" />
                {product.material || 'Premium Quality Material'}
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          {product.specifications && (
            <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#262626] space-y-2 text-xs">
              <div className="font-serif font-semibold text-white text-xs uppercase tracking-wider mb-2">
                Product Specifications
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-[10px] text-[#737373]">{key}</span>
                    <span className="text-white font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="space-y-3 pt-4 border-t border-[#262626]">
            <button
              onClick={() => openQuoteModal(product)}
              className="w-full py-3.5 bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold text-xs uppercase tracking-widest rounded shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              REQUEST A BULK QUOTE FOR THIS PRODUCT
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#262626] hover:bg-[#333] text-white font-medium text-xs uppercase tracking-wider rounded border border-[#333] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WHATSAPP THIS PRODUCT
            </a>
          </div>

          {/* B2B Trust Guarantees */}
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-[#737373] pt-4 border-t border-[#262626]">
            <div>✓ Bulk Door Delivery</div>
            <div>✓ Sample Approval</div>
            <div>✓ GST Invoice Provided</div>
          </div>

        </div>

      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto pt-8 border-t border-[#262626] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif text-white font-bold">
              RELATED CORPORATE GIFTS
            </h2>
            <button 
              onClick={() => onNavigate(`/collections/${product.categorySlug}`)}
              className="text-xs text-[#d4af37] font-semibold hover:underline"
            >
              View Entire Collection →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
