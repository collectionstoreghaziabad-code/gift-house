import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '919876543210',
  defaultMessage = 'Hello The Gifting House, I am interested in corporate gifting. Please help me with product options and a quotation.'
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white font-medium text-xs rounded-full shadow-2xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden md:inline font-semibold tracking-wide uppercase text-[11px]">
        WHATSAPP US
      </span>
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#171717] text-[#e5e5e5] text-[10px] font-sans rounded border border-[#333] shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with a Gifting Expert
      </span>
    </a>
  );
};
