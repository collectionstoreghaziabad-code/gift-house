import React, { useState, useEffect } from 'react';
import { QuoteModalProvider } from './context/QuoteModalContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SearchModal } from './components/SearchModal';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CorporateGiftingPage } from './pages/CorporateGiftingPage';
import { WelcomeKitsPage } from './pages/WelcomeKitsPage';
import { CustomBrandingPage } from './pages/CustomBrandingPage';
import { ExecutiveGiftsPage } from './pages/ExecutiveGiftsPage';
import { FestiveGiftingPage } from './pages/FestiveGiftingPage';
import { CataloguePage } from './pages/CataloguePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderRoute = () => {
    // Exact match for Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // Products Page
    if (currentPath === '/products') {
      return <ProductsPage onNavigate={navigate} />;
    }

    // Category Page (/collections/:slug)
    if ((currentPath || '').startsWith('/collections/')) {
      const slug = currentPath.replace('/collections/', '');
      return <CategoryPage categorySlug={slug} onNavigate={navigate} />;
    }

    // Product Detail Page (/product/:id)
    if ((currentPath || '').startsWith('/product/')) {
      const id = currentPath.replace('/product/', '');
      return <ProductDetailPage productId={id} onNavigate={navigate} />;
    }

    // Corporate Gifting Landing
    if (currentPath === '/corporate-gifting') {
      return <CorporateGiftingPage onNavigate={navigate} />;
    }

    // Employee Welcome Kits Landing
    if (currentPath === '/employee-welcome-kits') {
      return <WelcomeKitsPage onNavigate={navigate} />;
    }

    // Custom Branding Landing
    if (currentPath === '/custom-branding') {
      return <CustomBrandingPage onNavigate={navigate} />;
    }

    // Executive Gifts Landing
    if (currentPath === '/executive-gifts') {
      return <ExecutiveGiftsPage onNavigate={navigate} />;
    }

    // Festive Gifting Landing
    if (currentPath === '/festive-gifting') {
      return <FestiveGiftingPage onNavigate={navigate} />;
    }

    // Catalogue Library
    if (currentPath === '/catalogue') {
      return <CataloguePage onNavigate={navigate} />;
    }

    // About Page
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // Contact Page
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // Fallback -> Home
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <QuoteModalProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans antialiased flex flex-col selection:bg-[#d4af37] selection:text-black">
        <Header currentPath={currentPath} onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />
        
        <main className="flex-grow">
          {renderRoute()}
        </main>

        <Footer onNavigate={navigate} />

        {/* Global Floating Actions & Modals */}
        <WhatsAppButton />
        <QuoteModal />
        <SearchModal 
          isOpen={isSearchOpen} 
          onClose={() => setIsSearchOpen(false)} 
          onNavigate={navigate} 
        />
      </div>
    </QuoteModalProvider>
  );
}

export default App;
