import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, FileText, Gift, Sparkles, Building, Briefcase, BookOpen, Layers, Phone, MapPin, MessageCircle } from 'lucide-react';
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

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setCorporateDropdownOpen(false);
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
        <div className="lg:hidden bg-[#171717] border-b border-[#262626] px-4 py-6 space-y-4 text-sm font-sans animate-fade-in">
          <button
            onClick={() => handleNav('/')}
            className="block w-full text-left py-2 text-white font-medium hover:text-[#d4af37]"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('/products')}
            className="block w-full text-left py-2 text-white font-medium hover:text-[#d4af37]"
          >
            Products Catalogue
          </button>
          <button
            onClick={() => handleNav('/corporate-gifting')}
            className="block w-full text-left py-2 text-white font-medium hover:text-[#d4af37]"
          >
            Corporate Solutions
          </button>
          <button
            onClick={() => handleNav('/employee-welcome-kits')}
            className="block w-full text-left py-2 pl-4 text-[#a3a3a3] hover:text-[#d4af37]"
          >
            • Employee Welcome Kits
          </button>
          <button
            onClick={() => handleNav('/executive-gifts')}
            className="block w-full text-left py-2 pl-4 text-[#a3a3a3] hover:text-[#d4af37]"
          >
            • Executive & VIP Gifts
          </button>
          <button
            onClick={() => handleNav('/custom-branding')}
            className="block w-full text-left py-2 text-white font-medium hover:text-[#d4af37]"
          >
            Custom Branding
          </button>
          <button
            onClick={() => handleNav('/catalogue')}
            className="block w-full text-left py-2 text-white font-medium hover:text-[#d4af37]"
          >
            Digital Catalogues
          </button>
          <button
            onClick={() => handleNav('/about')}
            className="block w-full text-left py-2 text-white font-medium hover:text-[#d4af37]"
          >
            About Us
          </button>
          <button
            onClick={() => handleNav('/contact')}
            className="block w-full text-left py-2 text-white font-medium hover:text-[#d4af37]"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-[#262626]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal(null);
              }}
              className="w-full py-3 bg-[#d4af37] text-black font-bold text-xs tracking-wider uppercase rounded flex items-center justify-center gap-2"
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
