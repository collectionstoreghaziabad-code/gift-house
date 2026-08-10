import React from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { FileText, MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-[#050505] text-[#a3a3a3] border-t border-[#262626] font-sans">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-[#171717] via-[#0a0a0a] to-[#171717] border-b border-[#262626] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
              LET'S CREATE A GIFT WORTH REMEMBERING.
            </h2>
            <p className="text-xs text-[#a3a3a3] mt-2 max-w-xl">
              Tell us what you're looking for and our corporate gifting experts will help you curate the perfect B2B solution.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openQuoteModal(null)}
              className="px-6 py-3 bg-[#d4af37] hover:bg-[#c5a028] text-black font-bold text-xs tracking-wider uppercase rounded transition-colors shadow flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              REQUEST A QUOTE
            </button>
            <a
              href="https://wa.me/917895019181?text=Hello%20The%20Gifting%20House,%20I%20would%20like%20to%20request%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#262626] hover:bg-[#333] text-white font-medium text-xs tracking-wider uppercase rounded border border-[#333] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              WHATSAPP US
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-1 space-y-4">
          <BrandLogo 
            variant="compact" 
            onClick={() => onNavigate('/')} 
          />
          <p className="text-[#737373] leading-relaxed text-[11px]">
            Premium corporate gifting solutions designed to strengthen relationships, celebrate achievements, and keep your brand remembered.
          </p>
          <div className="text-[10px] font-mono tracking-widest text-[#d4af37] border-t border-b border-[#262626] py-2 uppercase">
            THOUGHTFUL GIFTS • LASTING IMPACT • STRONGER RELATIONSHIPS
          </div>
          <div className="space-y-2 text-[11px] text-[#a3a3a3] pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <a href="mailto:sayhellototgh@gmail.com" className="hover:text-white transition-colors">sayhellototgh@gmail.com</a>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <a href="tel:7895019181" className="hover:text-white transition-colors">+91 78950 19181</a>
                <a href="tel:9311141048" className="hover:text-white transition-colors">+91 93111 41048</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
              <span>Ghaziabad, New Delhi (NCR)</span>
            </div>
          </div>
        </div>

        {/* Col 2: Products */}
        <div>
          <h3 className="font-serif text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#d4af37] pl-2">
            Products
          </h3>
          <ul className="space-y-2.5 text-[#a3a3a3]">
            <li>
              <button onClick={() => onNavigate('/products')} className="hover:text-white transition-colors">All Products</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/collections/bottles-flasks-tumblers')} className="hover:text-white transition-colors">Bottles & Tumblers</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/collections/diaries-notebooks')} className="hover:text-white transition-colors">Diaries & Journals</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/collections/leather-bags')} className="hover:text-white transition-colors">Leather Laptop Bags</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/collections/leather-gift-sets')} className="hover:text-white transition-colors">Leather Gift Sets</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/executive-gifts')} className="hover:text-white transition-colors">Executive Collection</button>
            </li>
          </ul>
        </div>

        {/* Col 3: Corporate */}
        <div>
          <h3 className="font-serif text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#d4af37] pl-2">
            Corporate Solutions
          </h3>
          <ul className="space-y-2.5 text-[#a3a3a3]">
            <li>
              <button onClick={() => onNavigate('/employee-welcome-kits')} className="hover:text-white transition-colors">Employee Welcome Kits</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/corporate-gifting')} className="hover:text-white transition-colors">Client & VIP Gifting</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/executive-gifts')} className="hover:text-white transition-colors">CXO Executive Gifts</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/corporate-gifting')} className="hover:text-white transition-colors">Event & Seminar Gifts</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/festive-gifting')} className="hover:text-white transition-colors">Festive Corporate Gifting</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/corporate-gifting')} className="hover:text-white transition-colors">Dealer Partner Gifts</button>
            </li>
          </ul>
        </div>

        {/* Col 4: Services & Company */}
        <div>
          <h3 className="font-serif text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#d4af37] pl-2">
            Company
          </h3>
          <ul className="space-y-2.5 text-[#a3a3a3]">
            <li>
              <button onClick={() => onNavigate('/custom-branding')} className="hover:text-white transition-colors">Custom Logo Branding</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/catalogue')} className="hover:text-white transition-colors">Digital Catalogues 2026-27</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">About Us</button>
            </li>
            <li>
              <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">Contact Us</button>
            </li>
            <li>
              <button onClick={() => openQuoteModal(null)} className="hover:text-[#d4af37] transition-colors font-medium">Bulk Order Support</button>
            </li>
          </ul>
        </div>

        {/* Col 5: Connect */}
        <div>
          <h3 className="font-serif text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#d4af37] pl-2">
            Connect
          </h3>
          <div className="space-y-2 text-[#a3a3a3]">
            <a 
              href="https://wa.me/917895019181?text=Hello%20The%20Gifting%20House,%20I%20would%20like%20to%20request%20a%20corporate%20quote." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
            >
              WhatsApp Us <ArrowUpRight className="w-3 h-3 text-[#25D366]" />
            </a>
            <a 
              href="https://www.instagram.com/thegiftinghouse_?igsh=ZTJ1ODlhZHFuMHA=" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#E1306C] transition-colors"
            >
              Instagram (@thegiftinghouse_) <ArrowUpRight className="w-3 h-3 text-[#E1306C]" />
            </a>
            <a 
              href="https://www.linkedin.com/in/the-gifting-house-159174428/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3 text-[#0A66C2]" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61592901518547" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#1877F2] transition-colors"
            >
              Facebook <ArrowUpRight className="w-3 h-3 text-[#1877F2]" />
            </a>
          </div>
          <div className="mt-6 p-3 bg-[#171717] rounded border border-[#262626] text-[10px] text-[#737373]">
            B2B Procurement & Bulk Orders Only. Minimum Order Quantities apply for logo printing.
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright */}
      <div className="border-t border-[#171717] py-6 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#525252] gap-4">
          <div>
            © {new Date().getFullYear()} THE GIFTING HOUSE. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Procurement</span>
            <span>Custom Branding Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
