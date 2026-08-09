import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    requirement: 'General Corporate Gifting',
    quantity: '100',
    budget: '₹25,000 - ₹50,000',
    deliveryTimeline: '1-2 weeks',
    brandingRequired: true,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto text-center space-y-3">
        <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
          DIRECT CORPORATE DESK
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          LET'S TALK ABOUT YOUR NEXT GIFTING REQUIREMENT.
        </h1>
        <p className="text-xs sm:text-sm text-[#a3a3a3] max-w-xl mx-auto">
          Reach out to our B2B procurement advisors for bulk quotations, physical product samples, and custom branding proofs.
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-8 bg-[#141414] border border-[#262626] rounded-2xl p-8">
          <div>
            <h2 className="text-2xl font-serif text-white font-bold mb-2">Corporate Desk</h2>
            <p className="text-xs text-[#a3a3a3] leading-relaxed">
              Our team operates dedicated accounts support for corporate buyers, HR managers, event planners, and marketing agencies.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626]">
              <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Email Procurement Desk</div>
                <a href="mailto:sayhellototgh@gmail.com" className="text-[#a3a3a3] hover:text-[#d4af37] transition-colors mt-0.5 block">sayhellototgh@gmail.com</a>
                <div className="text-[10px] text-[#737373] mt-1">Proposal responses within 24 business hours</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626]">
              <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Call / Corporate Helpline</div>
                <div className="text-[#a3a3a3] mt-0.5 flex flex-wrap gap-2">
                  <a href="tel:7895019181" className="hover:text-[#d4af37] transition-colors">+91 78950 19181</a>
                  <span>/</span>
                  <a href="tel:9311141048" className="hover:text-[#d4af37] transition-colors">+91 93111 41048</a>
                </div>
                <div className="text-[10px] text-[#737373] mt-1">Mon - Sat: 9:30 AM to 6:30 PM IST</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626]">
              <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">WhatsApp Business Desk</div>
                <div className="flex flex-col gap-1 mt-1 text-xs">
                  <a 
                    href="https://wa.me/917895019181?text=Hello%20The%20Gifting%20House,%20I%20am%20interested%20in%20corporate%20gifting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    Chat on +91 78950 19181 →
                  </a>
                  <a 
                    href="https://wa.me/919311141048?text=Hello%20The%20Gifting%20House,%20I%20am%20interested%20in%20corporate%20gifting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    Chat on +91 93111 41048 →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-[#262626]">
              <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Office & Location</div>
                <div className="text-[#a3a3a3] mt-0.5">Ghaziabad, New Delhi (NCR)</div>
                <div className="text-[10px] text-[#737373] mt-1">Servicing Pan-India Corporate Clients</div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#262626] space-y-3">
              <div className="font-semibold text-white text-xs uppercase tracking-wider text-[#d4af37]">
                Connect With Us On Social Media
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://www.instagram.com/thegiftinghouse_?igsh=ZTJ1ODlhZHFuMHA="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded flex items-center justify-between text-[#e5e5e5] hover:text-[#E1306C] transition-colors"
                >
                  <span className="font-medium">Instagram</span>
                  <span className="text-[10px] font-mono text-[#737373]">@thegiftinghouse_</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61592901518547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded flex items-center justify-between text-[#e5e5e5] hover:text-[#1877F2] transition-colors"
                >
                  <span className="font-medium">Facebook</span>
                  <span className="text-[10px] font-mono text-[#737373]">Page</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tgh-the-gift-house-159174428/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded flex items-center justify-between text-[#e5e5e5] hover:text-[#0A66C2] transition-colors"
                >
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-[10px] font-mono text-[#737373]">Profile</span>
                </a>
                <a
                  href="https://wa.me/917895019181?text=Hello%20The%20Gifting%20House,%20I%20am%20interested%20in%20corporate%20gifting."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] rounded flex items-center justify-between text-[#e5e5e5] hover:text-[#25D366] transition-colors"
                >
                  <span className="font-medium">WhatsApp</span>
                  <span className="text-[10px] font-mono text-[#25D366]">+91 78950</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 mx-auto text-[#d4af37]" />
              <h3 className="text-2xl font-serif text-white">Enquiry Submitted Successfully</h3>
              <p className="text-xs text-[#a3a3a3] max-w-md mx-auto leading-relaxed">
                Thank you for contacting The Gifting House. Our corporate gifting team will review your requirements and respond with a customized proposal.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-[#d4af37] text-black text-xs font-bold uppercase rounded mt-4"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <h2 className="text-xl font-serif text-white font-bold mb-4 border-b border-[#262626] pb-3">
                Corporate Enquiry Form
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Company / Organization"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Phone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 78950 19181"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Ghaziabad / Delhi NCR"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Primary Requirement</label>
                  <select
                    value={formData.requirement}
                    onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  >
                    <option value="Employee Welcome Kits">Employee Welcome Kits</option>
                    <option value="Client Appreciation Gifts">Client & VIP Gifts</option>
                    <option value="Executive Leather Sets">Executive Leather Sets</option>
                    <option value="Festive Corporate Hampers">Festive Corporate Hampers</option>
                    <option value="Event Merchandise">Event & Conference Merchandise</option>
                    <option value="General Corporate Gifting">General Corporate Gifting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Estimated Quantity</label>
                  <select
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  >
                    <option value="25-50">25 - 50 units</option>
                    <option value="50-100">50 - 100 units</option>
                    <option value="100-250">100 - 250 units</option>
                    <option value="250-500">250 - 500 units</option>
                    <option value="500+">500+ units (Bulk Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#a3a3a3] mb-1 font-medium">Delivery Timeline</label>
                  <input
                    type="text"
                    placeholder="e.g. Next 15 days"
                    value={formData.deliveryTimeline}
                    onChange={e => setFormData({ ...formData, deliveryTimeline: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded px-3 py-2 text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#a3a3a3] mb-1 font-medium">Detailed Message & Specifications</label>
                <textarea
                  rows={4}
                  placeholder="Mention product codes (e.g. TGH-1, LB-6), target unit budget, or logo branding requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] rounded p-2.5 text-white outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="w-4 h-4" />
                    SEND ENQUIRY
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
