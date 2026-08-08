import React, { useState, useEffect } from 'react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { X, CheckCircle, Send, Building2, User, Mail, Phone, Calendar, Hash, DollarSign } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const QuoteModal: React.FC = () => {
  const { isOpen, selectedProduct, closeQuoteModal } = useQuoteModal();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    productName: '',
    productCode: '',
    quantity: '100',
    budget: '₹25,000 - ₹50,000',
    brandingRequired: true,
    deliveryTimeline: '1-2 weeks',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        productName: selectedProduct.name,
        productCode: selectedProduct.code
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        productName: 'General Corporate Gifting Inquiry',
        productCode: 'GENERAL'
      }));
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#171717] border border-[#d4af37]/30 rounded-xl shadow-2xl overflow-hidden text-[#e5e5e5] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-[#262626]">
          <div className="flex items-center gap-3">
            <BrandLogo variant="monogram" size="sm" />
            <div>
              <h2 className="text-lg font-serif text-[#f5f5f5] tracking-wide font-bold">
                REQUEST A CORPORATE QUOTE
              </h2>
              <p className="text-[10px] text-[#d4af37] font-mono tracking-wider uppercase">
                THE GIFTING HOUSE • CUSTOM B2B PROPOSAL
              </p>
            </div>
          </div>
          <button 
            onClick={closeQuoteModal}
            className="p-1.5 rounded-full hover:bg-[#262626] text-[#a3a3a3] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]">
                <CheckCircle className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h3 className="text-2xl font-serif text-white">Requirement Received</h3>
              <p className="text-[#a3a3a3] text-sm max-w-md mx-auto leading-relaxed">
                Thank you. Our gifting team will review your requirement and get back to you with tailored options and bulk pricing.
              </p>
              {selectedProduct && (
                <div className="inline-block px-4 py-2 bg-[#262626] rounded-lg text-xs text-[#d4af37] border border-[#333]">
                  Product Inquiry: <span className="font-semibold">{selectedProduct.name} ({selectedProduct.code})</span>
                </div>
              )}
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#d4af37] text-black font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#c5a028] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {selectedProduct && (
                <div className="p-3 bg-[#262626]/80 rounded-lg border border-[#d4af37]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={selectedProduct.images[0]} 
                      alt={selectedProduct.name} 
                      className="w-12 h-12 object-cover rounded bg-black"
                    />
                    <div>
                      <div className="text-[#d4af37] font-mono text-[10px] uppercase">{selectedProduct.code}</div>
                      <div className="font-semibold text-white">{selectedProduct.name}</div>
                      <div className="text-[11px] text-[#a3a3a3]">{selectedProduct.categoryName}</div>
                    </div>
                  </div>
                  {selectedProduct.price && (
                    <div className="text-right">
                      <div className="text-[10px] text-[#a3a3a3]">Catalogue Rate</div>
                      <div className="font-semibold text-white">₹{selectedProduct.price.toLocaleString()}</div>
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Your Name *</label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded pl-9 pr-3 py-2 text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Company Name *</label>
                  <div className="relative">
                    <Building2 className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Technologies"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded pl-9 pr-3 py-2 text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded pl-9 pr-3 py-2 text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Phone / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded pl-9 pr-3 py-2 text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Quantity Required *</label>
                  <div className="relative">
                    <Hash className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
                    <select
                      value={formData.quantity}
                      onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded pl-9 pr-3 py-2 text-white outline-none transition-colors"
                    >
                      <option value="25-50">25 - 50 units</option>
                      <option value="50-100">50 - 100 units</option>
                      <option value="100-250">100 - 250 units</option>
                      <option value="250-500">250 - 500 units</option>
                      <option value="500+">500+ units (Bulk Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Estimated Budget</label>
                  <div className="relative">
                    <DollarSign className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
                    <select
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded pl-9 pr-3 py-2 text-white outline-none transition-colors"
                    >
                      <option value="Under ₹25,000">Under ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,000,00">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Custom Logo Branding?</label>
                  <div className="flex gap-4 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-white">
                      <input 
                        type="radio" 
                        name="branding" 
                        checked={formData.brandingRequired} 
                        onChange={() => setFormData({ ...formData, brandingRequired: true })}
                        className="accent-[#d4af37]"
                      />
                      Yes, add company logo
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-white">
                      <input 
                        type="radio" 
                        name="branding" 
                        checked={!formData.brandingRequired} 
                        onChange={() => setFormData({ ...formData, brandingRequired: false })}
                        className="accent-[#d4af37]"
                      />
                      No, plain gifts
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Required Delivery Timeline</label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
                    <input
                      type="text"
                      placeholder="e.g. Within 10 days"
                      value={formData.deliveryTimeline}
                      onChange={e => setFormData({ ...formData, deliveryTimeline: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded pl-9 pr-3 py-2 text-white outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[#a3a3a3] mb-1 font-medium">Specific Instructions / Customization Details</label>
                <textarea
                  rows={3}
                  placeholder="Mention any logo engraving specifications, color preferences, packaging requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded p-2.5 text-white outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#262626]">
                <div className="text-[11px] text-[#737373]">
                  🔒 Your data is kept strictly confidential.
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#d4af37] text-black font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#c5a028] transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
