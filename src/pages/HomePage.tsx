import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { useQuoteModal } from '../context/QuoteModalContext';
import { BrandLogo } from '../components/BrandLogo';
import { 
  ShieldCheck, Palette, Truck, Award, Headphones, ArrowRight, 
  Gift, Crown, Sparkles, BookOpen, Download, Building2, ChevronRight, CheckCircle2,
  Briefcase, Users, Calendar, Heart, Zap, Globe
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

// Reusable interactive GlowCard component with subtle mouse spotlight tracking
const GlowCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  const [cardMousePos, setCardMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden group transition-all duration-300 ${className}`}
    >
      {/* Subtle Card Spotlight Inner Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(160px circle at ${cardMousePos.x}px ${cardMousePos.y}px, rgba(212, 175, 55, 0.09), transparent 80%)`,
        }}
      />
      {/* Subtle Card Edge Border Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 z-20 border border-[#d4af37]/60"
        style={{
          opacity: isHovered ? 1 : 0,
          maskImage: `radial-gradient(120px circle at ${cardMousePos.x}px ${cardMousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(120px circle at ${cardMousePos.x}px ${cardMousePos.y}px, black, transparent)`,
        }}
      />
      <div className="relative z-0 h-full">{children}</div>
    </div>
  );
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured || p.isPremium).slice(0, 8);
  const executiveProducts = PRODUCTS.filter(p => p.isPremium || (p.price && p.price > 1000)).slice(0, 4);

  return (
    <div className="relative space-y-20 bg-[#0a0a0a] text-[#e5e5e5]">
      
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#141414] via-[#0a0a0a] to-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-16 border-b border-[#262626]">
        {/* Subtle Dark Luxury Backdrop Glow */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#171717] border border-[#d4af37]/40 rounded-full text-[#d4af37] text-xs font-mono tracking-widest uppercase shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              THE GIFTING HOUSE • CORPORATE GIFTING SOLUTIONS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-bold tracking-tight leading-[1.1]">
              GIFTS THAT REPRESENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f5f5] via-[#d4af37] to-[#b8860b]">
                YOUR BRAND.
              </span>
            </h1>

            <div className="p-4 bg-[#141414]/80 border-l-2 border-[#d4af37] rounded-r-lg max-w-2xl mx-auto lg:mx-0">
              <p className="text-xs font-mono text-[#d4af37] tracking-[0.2em] uppercase mb-1">
                OUR PHILOSOPHY
              </p>
              <p className="text-sm sm:text-base text-white font-serif tracking-wide">
                THOUGHTFUL GIFTS • LASTING IMPACT • STRONGER RELATIONSHIPS
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Premium B2B corporate gifting solutions tailored for employee onboarding, VIP client appreciation, CXO executive suites, and festive occasions with high-precision custom logo engraving.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('/products')}
                className="w-full sm:w-auto px-8 py-4 bg-[#d4af37] hover:bg-[#c5a028] active:bg-[#b8860b] text-black font-bold text-xs tracking-widest uppercase rounded shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 min-h-[44px]"
              >
                EXPLORE PRODUCTS
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openQuoteModal(null)}
                className="w-full sm:w-auto px-8 py-4 bg-[#171717] hover:bg-[#262626] active:bg-[#333] text-white font-semibold text-xs tracking-widest uppercase rounded border border-[#333] transition-all hover:border-[#d4af37]/50 flex items-center justify-center gap-2 min-h-[44px]"
              >
                REQUEST A QUOTE
              </button>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#737373] uppercase tracking-widest flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[#d4af37]">✓ GST Invoicing</span>
              <span>•</span>
              <span className="text-[#d4af37]">✓ Pan-India Delivery</span>
              <span>•</span>
              <span className="text-[#d4af37]">✓ Custom Logo Printing</span>
              <span>•</span>
              <span className="text-[#d4af37]">✓ Bulk Discounts</span>
            </div>
          </div>

          {/* Right Hero Showcase Card */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl bg-[#0f0f0f] p-4 text-center group">
              <div className="flex justify-center mb-2">
                <BrandLogo variant="full" showTagline={false} />
              </div>
              
              <div className="pt-3 border-t border-[#262626] flex items-center justify-around text-[10px] font-mono text-[#d4af37] uppercase tracking-wider">
                <span>✦ PREMIUM B2B</span>
                <span>✦ CUSTOM BRANDING</span>
                <span>✦ PAN-INDIA</span>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#262626] shadow-lg bg-[#141414] p-2 group">
              <div className="relative h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Corporate Gifting Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono font-bold text-[#d4af37] uppercase tracking-widest">CURATED EXECUTIVE SUITES</span>
                  <h3 className="text-sm font-serif text-white font-semibold">
                    Engraved Leather Diaries, Flasks, Pens & Gift Sets
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 bg-[#141414] rounded-2xl border border-[#262626] p-6 text-center">
          
          <div className="flex flex-col items-center space-y-2 p-2">
            <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Premium Product Range</h4>
            <p className="text-[10px] text-[#737373]">Authentic catalogue items</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-2">
            <Palette className="w-6 h-6 text-[#d4af37]" />
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Corporate Customization</h4>
            <p className="text-[10px] text-[#737373]">Logo printing & engraving</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-2">
            <Truck className="w-6 h-6 text-[#d4af37]" />
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Bulk Order Support</h4>
            <p className="text-[10px] text-[#737373]">Pan-India door delivery</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-2">
            <Gift className="w-6 h-6 text-[#d4af37]" />
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Curated Collections</h4>
            <p className="text-[10px] text-[#737373]">Welcome kits & executive sets</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-2 col-span-2 md:col-span-1">
            <Headphones className="w-6 h-6 text-[#d4af37]" />
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Professional Service</h4>
            <p className="text-[10px] text-[#737373]">Dedicated account desk</p>
          </div>

        </div>
      </section>

      {/* 3. SHOP BY COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#262626] pb-4">
          <div>
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">PRODUCT CATEGORIES</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide mt-1">
              EXPLORE OUR COLLECTIONS
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('/products')}
            className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 mt-2 md:mt-0"
          >
            VIEW ALL CATEGORIES ({CATEGORIES.length}) <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.slice(0, 9).map(cat => (
            <div 
              key={cat.slug}
              onClick={() => onNavigate(`/collections/${cat.slug}`)}
              className="group relative h-64 rounded-xl overflow-hidden border border-[#262626] hover:border-[#d4af37]/60 cursor-pointer shadow-xl transition-all duration-300"
            >
              <img 
                src={cat.heroImage} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest mb-1">
                  {cat.catalogSource}
                </span>
                <h3 className="text-lg font-serif text-white font-semibold group-hover:text-[#d4af37] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#a3a3a3] line-clamp-1 mt-1">
                  {cat.shortDescription}
                </p>
                <div className="mt-3 flex items-center text-xs font-bold text-[#d4af37] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  EXPLORE COLLECTION <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORPORATE SOLUTIONS */}
      <section className="bg-[#121212] py-16 border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">TAILORED B2B SERVICES</span>
            <h2 className="text-3xl font-serif text-white">GIFTS FOR EVERY BUSINESS MOMENT</h2>
            <p className="text-xs text-[#a3a3a3]">
              From employee onboarding to high-stakes VIP client appreciation, we curate appropriate gifts for every organizational milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 space-y-4 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-semibold">Employee Welcome Kits</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Create memorable first impressions for new employees with customized journals, vacuum flasks, and branded office gear.
              </p>
              <button 
                onClick={() => onNavigate('/employee-welcome-kits')}
                className="text-xs font-bold text-[#d4af37] hover:underline uppercase tracking-wider flex items-center gap-1 pt-2"
              >
                EXPLORE WELCOME KITS <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </GlowCard>

            {/* Card 2 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 space-y-4 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Crown className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-semibold">Client & VIP Gifting</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Premium pure leather sets, executive bar kits, and desktop artifacts designed for high-value client relationships.
              </p>
              <button 
                onClick={() => onNavigate('/executive-gifts')}
                className="text-xs font-bold text-[#d4af37] hover:underline uppercase tracking-wider flex items-center gap-1 pt-2"
              >
                EXPLORE EXECUTIVE GIFTS <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </GlowCard>

            {/* Card 3 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 space-y-4 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-semibold">Employee Recognition</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Celebrate work anniversaries, leadership milestones, and quarterly performance with high-grade desk rewards.
              </p>
              <button 
                onClick={() => onNavigate('/corporate-gifting')}
                className="text-xs font-bold text-[#d4af37] hover:underline uppercase tracking-wider flex items-center gap-1 pt-2"
              >
                EXPLORE RECOGNITION GIFTS <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </GlowCard>

            {/* Card 4 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 space-y-4 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-semibold">Corporate Events</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Branded merchandise, conference bags, pens, and lanyard keychains tailored for large corporate summits.
              </p>
              <button 
                onClick={() => onNavigate('/corporate-gifting')}
                className="text-xs font-bold text-[#d4af37] hover:underline uppercase tracking-wider flex items-center gap-1 pt-2"
              >
                EXPLORE EVENT MERCHANDISE <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </GlowCard>

            {/* Card 5 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 space-y-4 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-semibold">Festive Gifting</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Curated hampers, divinity pieces, and premium gift boxes for Diwali, New Year, and major festive celebrations.
              </p>
              <button 
                onClick={() => onNavigate('/festive-gifting')}
                className="text-xs font-bold text-[#d4af37] hover:underline uppercase tracking-wider flex items-center gap-1 pt-2"
              >
                EXPLORE FESTIVE GIFTS <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </GlowCard>

            {/* Card 6 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 space-y-4 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-white font-semibold">Dealer & Partner Gifts</h3>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Strengthen your distribution and channel network with thoughtful, long-lasting functional corporate merchandise.
              </p>
              <button 
                onClick={() => onNavigate('/corporate-gifting')}
                className="text-xs font-bold text-[#d4af37] hover:underline uppercase tracking-wider flex items-center gap-1 pt-2"
              >
                EXPLORE DEALER GIFTS <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </GlowCard>

          </div>
        </div>
      </section>

      {/* 5. CUSTOM BRANDING SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#171717] via-[#121212] to-[#0a0a0a] rounded-2xl border border-[#d4af37]/40 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">BRAND IDENTITY ENHANCEMENT</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold">
              MAKE EVERY GIFT YOUR BRAND.
            </h2>
            <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
              Add your company's identity to carefully selected corporate gifts through customized branding and presentation. We support precise logo customization for corporate orders.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-3 bg-[#0a0a0a] rounded border border-[#262626] text-center">
                <div className="font-semibold text-xs text-white">Logo Branding</div>
                <div className="text-[10px] text-[#737373] mt-0.5">High precision print</div>
              </div>
              <div className="p-3 bg-[#0a0a0a] rounded border border-[#262626] text-center">
                <div className="font-semibold text-xs text-white">Laser Engraving</div>
                <div className="text-[10px] text-[#737373] mt-0.5">Permanent metal etching</div>
              </div>
              <div className="p-3 bg-[#0a0a0a] rounded border border-[#262626] text-center">
                <div className="font-semibold text-xs text-white">Debossing</div>
                <div className="text-[10px] text-[#737373] mt-0.5">Tactile leather stamping</div>
              </div>
              <div className="p-3 bg-[#0a0a0a] rounded border border-[#262626] text-center">
                <div className="font-semibold text-xs text-white">Branded Box</div>
                <div className="text-[10px] text-[#737373] mt-0.5">Custom sleeve & ribbon</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/custom-branding')}
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold text-xs tracking-wider uppercase rounded transition-colors flex items-center gap-2"
              >
                EXPLORE CUSTOM BRANDING
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="p-4 bg-[#0a0a0a] rounded-xl border border-[#262626] space-y-2">
              <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400" alt="Branded Bottle" className="w-full h-28 object-cover rounded" />
              <div className="text-xs font-semibold text-white">Branded Bottles</div>
            </div>
            <div className="p-4 bg-[#0a0a0a] rounded-xl border border-[#262626] space-y-2">
              <img src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=400" alt="Branded Pens" className="w-full h-28 object-cover rounded" />
              <div className="text-xs font-semibold text-white">Engraved Pens</div>
            </div>
            <div className="p-4 bg-[#0a0a0a] rounded-xl border border-[#262626] space-y-2">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400" alt="Branded Diaries" className="w-full h-28 object-cover rounded" />
              <div className="text-xs font-semibold text-white">Embossed Diaries</div>
            </div>
            <div className="p-4 bg-[#0a0a0a] rounded-xl border border-[#262626] space-y-2">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400" alt="Branded Leather" className="w-full h-28 object-cover rounded" />
              <div className="text-xs font-semibold text-white">Custom Leather</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#262626] pb-4">
          <div>
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">CURATED B2B CATALOGUE</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide mt-1">
              FEATURED CORPORATE GIFTS
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('/products')}
            className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 mt-2 md:mt-0"
          >
            VIEW ALL PRODUCTS <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* 7. PREMIUM EXECUTIVE COLLECTION (DARK LUXURY) */}
      <section className="bg-black py-20 border-y border-[#262626] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#262626] pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#171717] border border-[#d4af37]/40 rounded-full text-[#d4af37] text-[10px] font-mono uppercase tracking-widest">
                <Crown className="w-3 h-3" /> LUXURY LINE FOR CXOs & DIRECTORS
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-bold mt-2">
                THE EXECUTIVE COLLECTION
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/executive-gifts')}
              className="px-6 py-2.5 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors mt-4 md:mt-0"
            >
              VIEW EXECUTIVE COLLECTION
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveProducts.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
            ))}
          </div>

        </div>
      </section>

      {/* 8. EMPLOYEE WELCOME KITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">ONBOARDING SOLUTION</span>
            <h2 className="text-3xl font-serif text-white font-bold">
              START EVERY JOURNEY WITH A GREAT FIRST IMPRESSION.
            </h2>
            <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed">
              Show new team members they are valued from Day 1. Combine notebooks, custom pens, thermal bottles, card holders, and desk accessories in a unified corporate presentation box.
            </p>

            <div className="space-y-2 text-xs text-[#e5e5e5]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span><strong className="text-white">Essential Kit:</strong> Notebook + Pen + Vacuum Bottle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span><strong className="text-white">Executive Kit:</strong> Diary + Premium Pen + Bottle + Card Holder</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span><strong className="text-white">Premium Kit:</strong> Leather Bag + Diary + Pen + Desk Lamp</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/employee-welcome-kits')}
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold text-xs tracking-wider uppercase rounded transition-colors flex items-center gap-2"
              >
                BUILD YOUR WELCOME KIT
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=800" 
              alt="Employee Welcome Kit"
              className="w-full h-80 object-cover rounded-xl border border-[#333]" 
            />
          </div>
        </div>
      </section>

      {/* 9. CATALOGUES SECTION */}
      <section className="bg-[#121212] py-16 border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">DIGITAL PDF RESOURCE LIBRARY</span>
            <h2 className="text-3xl font-serif text-white">EXPLORE OUR CATALOGUES</h2>
            <p className="text-xs text-[#a3a3a3]">
              Browse or download our official corporate PDF product catalogues for offline review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Catalogue 1 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="px-2.5 py-1 bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-mono font-bold uppercase rounded border border-[#d4af37]/30">
                  CATALOGUE 01
                </span>
                <h3 className="text-xl font-serif text-white font-bold mt-3">The Gifting House Collection</h3>
                <p className="text-xs text-[#a3a3a3] mt-2 leading-relaxed">
                  Includes Bottles, Flasks & Tumblers (TGH-1 to TGH-18), Executive Diaries & Notebooks (TGH-19 to TGH-24), Premium Pens (TGH-25 to TGH-30), Desk & Tech Accessories (TGH-31 to TGH-42), and Miscellaneous Items.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/catalogue')}
                  className="flex-1 py-2.5 bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  VIEW CATALOGUE
                </button>
              </div>
            </GlowCard>

            {/* Catalogue 2 */}
            <GlowCard className="bg-[#171717] border border-[#262626] rounded-xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="px-2.5 py-1 bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-mono font-bold uppercase rounded border border-[#d4af37]/30">
                  CATALOGUE 02
                </span>
                <h3 className="text-xl font-serif text-white font-bold mt-3">The Extended Corporate Collection</h3>
                <p className="text-xs text-[#a3a3a3] mt-2 leading-relaxed">
                  Includes Genuine Leather Trolley Bags & Laptop Bags, PU Bags, Pure Leather Combo Sets, Non-Leather Sets, Welcome Kits, Wallets, Ticket Folders, Hotel/Bar Sets, Divinity Collection, and Promotional Keychains.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/catalogue')}
                  className="flex-1 py-2.5 bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  VIEW CATALOGUE
                </button>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE THE GIFTING HOUSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">TRUSTED B2B PARTNER</span>
          <h2 className="text-3xl font-serif text-white">WHY CHOOSE THE GIFTING HOUSE?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlowCard className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-2">
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Curated Range
            </h3>
            <p className="text-xs text-[#a3a3a3]">
              A broad selection of tested corporate gifting products curated specifically for professional environments.
            </p>
          </GlowCard>

          <GlowCard className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-2">
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Premium Selection
            </h3>
            <p className="text-xs text-[#a3a3a3]">
              Products selected for professional gifting requirements with high-grade finishes and durability.
            </p>
          </GlowCard>

          <GlowCard className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-2">
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Custom Branding
            </h3>
            <p className="text-xs text-[#a3a3a3]">
              Corporate logo customization options including laser engraving, debossing, and custom gift boxes.
            </p>
          </GlowCard>

          <GlowCard className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-2">
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Bulk Orders
            </h3>
            <p className="text-xs text-[#a3a3a3]">
              Engineered for organizational, corporate procurement, and large-scale enterprise timelines.
            </p>
          </GlowCard>

          <GlowCard className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-2">
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Multiple Gifting Solutions
            </h3>
            <p className="text-xs text-[#a3a3a3]">
              Employee welcome kits, client appreciation, executive gifting, corporate events, and festive occasions.
            </p>
          </GlowCard>

          <GlowCard className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-2">
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Professional Support
            </h3>
            <p className="text-xs text-[#a3a3a3]">
              Dedicated account managers to help customers select the right products for their precise budgets and specifications.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* 11. INDUSTRIES */}
      <section className="bg-[#121212] py-16 border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">VERSATILE DOMAIN COVERAGE</span>
            <h2 className="text-3xl font-serif text-white">GIFTING SOLUTIONS FOR EVERY INDUSTRY</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'IT & Technology', 'Banking & Finance', 'Real Estate', 'Healthcare', 'Education', 'Manufacturing',
              'Automotive', 'Hospitality', 'Startups', 'Corporate Offices', 'Events & Agencies', 'Institutions'
            ].map(ind => (
              <div key={ind} className="p-4 bg-[#171717] border border-[#262626] rounded-lg text-xs font-semibold text-white hover:border-[#d4af37] transition-colors">
                <Building2 className="w-5 h-5 mx-auto text-[#d4af37] mb-2" />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">CORPORATE FEEDBACK</span>
          <h2 className="text-3xl font-serif text-white">WHAT CORPORATE BUYERS SAY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-4">
            <p className="text-xs text-[#a3a3a3] italic leading-relaxed">
              "The Employee Welcome Kits we ordered for our quarterly onboarding cohort were exceptionally packaged. The laser engraving on the bottles and pens looked spotless."
            </p>
            <div className="border-t border-[#262626] pt-3 text-xs">
              <div className="font-semibold text-white">HR & Administration Team</div>
              <div className="text-[10px] text-[#737373]">Enterprise Technology Client</div>
            </div>
          </div>

          <div className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-4">
            <p className="text-xs text-[#a3a3a3] italic leading-relaxed">
              "We sourced the NDM Leather Trolley Bags and Executive Bar Sets for our annual CXO summit. The quality was genuinely premium and impressed our board members."
            </p>
            <div className="border-t border-[#262626] pt-3 text-xs">
              <div className="font-semibold text-white">Corporate Client</div>
              <div className="text-[10px] text-[#737373]">Financial Services Firm</div>
            </div>
          </div>

          <div className="p-6 bg-[#171717] border border-[#262626] rounded-xl space-y-4">
            <p className="text-xs text-[#a3a3a3] italic leading-relaxed">
              "The Gifting House helped us meet a tight 7-day festive deadline for 500 customized Diwali sets without compromising on branding quality."
            </p>
            <div className="border-t border-[#262626] pt-3 text-xs">
              <div className="font-semibold text-white">Business Owner</div>
              <div className="text-[10px] text-[#737373]">Real Estate Group</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
