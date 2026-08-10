import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, FileText, Gift, Sparkles, Building, Briefcase, BookOpen, Layers, Phone, MapPin, MessageCircle, Mail } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { CATEGORIES } from '../data/categories';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [corporateDropdownOpen, setCorporateDropdownOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setCorporateDropdownOpen(false);
    setMobileCategoriesOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#262626] text-[#e5e5e5]">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#121212] border-b border-[#262626]/60 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[#a3a3a3]">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-[#d4af37]">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="font-medium">Ghaziabad, New Delhi (NCR)</span>
            </div>
            <span className="hidden sm:inline text-[#333]">|</span>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
              <a href="tel:7895019181" className="hover:text-white transition-colors">+91 78950 19181</a>
              <span>/</span>
              <a href="tel:9311141048" className="hover:text-white transition-colors">+91 93111 41048</a>
            </div>
            <span className="hidden sm:inline text-[#333]">|</span>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
              <a href="mailto:sayhellototgh@gmail.com" className="hover:text-white transition-colors">sayhellototgh@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-wider uppercase">
            <a 
              href="https://wa.me/917895019181?text=Hello%20The%20Gifting%20House,%20I%20have%20a%20corporate%20gifting%20enquiry." 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline flex items-center gap-1 font-sans font-semibold"
            >
              <MessageCircle className="w-3 h-3 fill-current" /> WhatsApp B2B Support
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <BrandLogo variant="header" onClick={() => handleNav('/')} />

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs font-sans font-medium tracking-wider uppercase">
          <button
            onClick={() => handleNav('/')}
            className={`transition-colors py-2 ${currentPath === '/' ? 'text-[#d4af37] font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('/products')}
              className={`flex items-center gap-1 py-2 ${(currentPath || '').startsWith('/products') || (currentPath || '').startsWith('/collections') ? 'text-[#d4af37] font-semibold' : 'text-[#a3a3a3] hover:text-white'} transition-colors`}
            >
              Products
              <ChevronDown className="w-3 h-3" />
            </button>

            {productsDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-[#171717] border border-[#262626] rounded-xl shadow-2xl p-3 grid grid-cols-1 gap-1 text-xs animate-fade-in z-50">
                <button
                  onClick={() => handleNav('/products')}
                  className="px-3 py-2 text-left font-bold text-[#d4af37] hover:bg-[#262626] rounded flex items-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  View All Products Catalog
                </button>
                <div className="border-t border-[#262626] my-1"></div>
                <div className="max-h-80 overflow-y-auto space-y-0.5 pr-1">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => handleNav(`/collections/${cat.slug}`)}
                      className="w-full text-left px-3 py-1.5 text-[11px] text-[#a3a3a3] hover:text-white hover:bg-[#262626] rounded transition-colors truncate"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Corporate Gifting Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCorporateDropdownOpen(true)}
            onMouseLeave={() => setCorporateDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('/corporate-gifting')}
              className={`flex items-center gap-1 py-2 ${currentPath === '/corporate-gifting' ? 'text-[#d4af37] font-semibold' : 'text-[#a3a3a3] hover:text-white'} transition-colors`}
            >
              Corporate Gifting
              <ChevronDown className="w-3 h-3" />
            </button>

            {corporateDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-[#171717] border border-[#262626] rounded-xl shadow-2xl p-2 space-y-1 text-xs animate-fade-in z-50">
                <button
                  onClick={() => handleNav('/employee-welcome-kits')}
                  className="w-full text-left px-3 py-2 text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#262626] rounded flex items-center gap-2"
                >
                  <Gift className="w-3.5 h-3.5 text-[#d4af37]" />
                  Employee Welcome Kits
                </button>
                <button
                  onClick={() => handleNav('/executive-gifts')}
                  className="w-full text-left px-3 py-2 text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#262626] rounded flex items-center gap-2"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
                  Executive & VIP Gifts
                </button>
                <button
                  onClick={() => handleNav('/custom-branding')}
                  className="w-full text-left px-3 py-2 text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#262626] rounded flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  Custom Branding
                </button>
                <button
                  onClick={() => handleNav('/festive-gifting')}
                  className="w-full text-left px-3 py-2 text-[#e5e5e5] hover:text-[#d4af37] hover:bg-[#262626] rounded flex items-center gap-2"
                >
                  <Building className="w-3.5 h-3.5 text-[#d4af37]" />
                  Festive Corporate Gifting
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('/custom-branding')}
            className={`transition-colors py-2 ${currentPath === '/custom-branding' ? 'text-[#d4af37] font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
          >
            Custom Branding
          </button>

          <button
            onClick={() => handleNav('/catalogue')}
            className={`transition-colors py-2 ${currentPath === '/catalogue' ? 'text-[#d4af37] font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
          >
            Catalogue
          </button>

          <button
            onClick={() => handleNav('/about')}
            className={`transition-colors py-2 ${currentPath === '/about' ? 'text-[#d4af37] font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNav('/contact')}
            className={`transition-colors py-2 ${currentPath === '/contact' ? 'text-[#d4af37] font-semibold' : 'text-[#a3a3a3] hover:text-white'}`}
          >
            Contact
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-full hover:bg-[#262626] text-[#e5e5e5] hover:text-[#d4af37] transition-colors"
            title="Search Catalogue"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => openQuoteModal(null)}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#d4af37] hover:bg-[#c5a028] text-black font-semibold text-xs tracking-wider uppercase rounded transition-all shadow"
          >
            <FileText className="w-3.5 h-3.5" />
            REQUEST A QUOTE
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded hover:bg-[#262626] text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171717] border-b border-[#262626] px-4 py-6 space-y-2 text-sm font-sans animate-fade-in max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => handleNav('/')}
            className="w-full text-left py-2.5 px-2 text-white font-medium hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[44px] flex items-center"
          >
            Home
          </button>

          <div className="border-t border-[#262626]/50 pt-1">
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleNav('/products')}
                className="text-left py-2.5 px-2 text-white font-medium hover:text-[#d4af37] flex-1 min-h-[44px] flex items-center"
              >
                Products Catalogue
              </button>
              <button
                onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                className="p-2 text-[#d4af37] hover:bg-[#262626] rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle categories"
              >
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Mobile Categories Sublist */}
            {mobileCategoriesOpen && (
              <div className="pl-3 pr-1 py-1 space-y-1 bg-[#121212] rounded-lg my-1 border border-[#262626] max-h-60 overflow-y-auto">
                <button
                  onClick={() => handleNav('/products')}
                  className="w-full text-left py-2 px-2 text-xs font-bold text-[#d4af37] hover:bg-[#262626] rounded flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5" />
                  All Products
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.slug}
                    onClick={() => handleNav(`/collections/${cat.slug}`)}
                    className="w-full text-left py-1.5 px-2 text-xs text-[#a3a3a3] hover:text-white hover:bg-[#262626] rounded truncate"
                  >
                    • {cat.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[#262626]/50 pt-1">
            <button
              onClick={() => handleNav('/corporate-gifting')}
              className="w-full text-left py-2.5 px-2 text-white font-medium hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[44px] flex items-center"
            >
              Corporate Solutions
            </button>
            <div className="pl-3 space-y-1">
              <button
                onClick={() => handleNav('/employee-welcome-kits')}
                className="w-full text-left py-2 px-2 text-xs text-[#a3a3a3] hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[40px] flex items-center"
              >
                • Employee Welcome Kits
              </button>
              <button
                onClick={() => handleNav('/executive-gifts')}
                className="w-full text-left py-2 px-2 text-xs text-[#a3a3a3] hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[40px] flex items-center"
              >
                • Executive & VIP Gifts
              </button>
              <button
                onClick={() => handleNav('/festive-gifting')}
                className="w-full text-left py-2 px-2 text-xs text-[#a3a3a3] hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[40px] flex items-center"
              >
                • Festive Corporate Gifting
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNav('/custom-branding')}
            className="w-full text-left py-2.5 px-2 text-white font-medium hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[44px] flex items-center"
          >
            Custom Branding
          </button>
          <button
            onClick={() => handleNav('/catalogue')}
            className="w-full text-left py-2.5 px-2 text-white font-medium hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[44px] flex items-center"
          >
            Digital Catalogues
          </button>
          <button
            onClick={() => handleNav('/about')}
            className="w-full text-left py-2.5 px-2 text-white font-medium hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[44px] flex items-center"
          >
            About Us
          </button>
          <button
            onClick={() => handleNav('/contact')}
            className="w-full text-left py-2.5 px-2 text-white font-medium hover:text-[#d4af37] hover:bg-[#262626] rounded min-h-[44px] flex items-center"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-[#262626]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal(null);
              }}
              className="w-full py-3.5 bg-[#d4af37] text-black font-bold text-xs tracking-wider uppercase rounded flex items-center justify-center gap-2 shadow-lg min-h-[44px]"
            >
              <FileText className="w-4 h-4" />
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
