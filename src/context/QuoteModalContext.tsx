import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';

interface QuoteModalContextType {
  isOpen: boolean;
  selectedProduct: Product | null;
  openQuoteModal: (product?: Product | null) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openQuoteModal = (product: Product | null = null) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, selectedProduct, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
};

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
};
