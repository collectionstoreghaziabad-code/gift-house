import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter, RotateCcw, Package, Layers } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  initialCategory?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, initialCategory = '' }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedUseCase, setSelectedUseCase] = useState('');
  const [selectedMaterial, setSelectedUseCaseMaterial] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [onlyCustomizable, setOnlyCustomizable] = useState(false);
  const [onlyPremium, setOnlyPremium] = useState(false);

  // Extract unique materials and use cases dynamically
  const materials = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach(p => p.material && set.add(p.material));
    return Array.from(set).sort();
  }, []);

  const useCases = ['Employee', 'Client', 'Executive', 'VIP', 'Event', 'Festive', 'Promotional', 'Welcome Kit'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Search
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCode = p.code.toLowerCase().includes(q);
        const matchesCategory = p.categoryName.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesCategory && !matchesDesc) return false;
      }

      // Category
      if (selectedCategory && p.categorySlug !== selectedCategory) {
        return false;
      }

      // Use Case
      if (selectedUseCase && !p.useCases?.includes(selectedUseCase as any)) {
        return false;
      }

      // Material
      if (selectedMaterial && p.material !== selectedMaterial) {
        return false;
      }

      // Toggles
      if (onlyCustomizable && !p.isCustomizable) return false;
      if (onlyPremium && !p.isPremium) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return (a.price || 0) - (b.price || 0);
      if (sortBy === 'price-desc') return (b.price || 0) - (a.price || 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [search, selectedCategory, selectedUseCase, selectedMaterial, sortBy, onlyCustomizable, onlyPremium]);

  const resetFilters = () => {
    setSearch('');
    setSelectedCategory('');
    setSelectedUseCase('');
    setSelectedUseCaseMaterial('');
    setSortBy('featured');
    setOnlyCustomizable(false);
    setOnlyPremium(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] py-10 px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto border-b border-[#262626] pb-8">
        <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest">
          COMPLETE CORPORATE CATALOGUE
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-white font-bold tracking-wide mt-1">
          CORPORATE GIFTS FOR EVERY REQUIREMENT
        </h1>
        <p className="text-xs text-[#a3a3a3] max-w-2xl mt-2 leading-relaxed">
          Explore authentic catalogue items complete with product codes, rates, and custom branding availability.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar Filters */}
        <div className="lg:col-span-3 bg-[#141414] border border-[#262626] rounded-xl p-5 space-y-6 sticky top-24">
          <div className="flex items-center justify-between border-b border-[#262626] pb-3">
            <h2 className="font-serif text-sm font-bold text-white flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#d4af37]" />
              CATALOGUE FILTERS
            </h2>
            <button
              onClick={resetFilters}
              className="text-[10px] text-[#a3a3a3] hover:text-[#d4af37] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          {/* Search Box */}
          <div>
            <label className="block text-[11px] font-medium text-[#a3a3a3] mb-1">Search Product / Code</label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#737373]" />
              <input
                type="text"
                placeholder="e.g. TGH-1, Leather Bag..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] text-xs text-white rounded pl-9 pr-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-[11px] font-medium text-[#a3a3a3] mb-1">Collection / Category</label>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] text-xs text-white rounded px-3 py-2 outline-none"
            >
              <option value="">All Categories ({CATEGORIES.length})</option>
              {CATEGORIES.map(cat => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Corporate Use Case */}
          <div>
            <label className="block text-[11px] font-medium text-[#a3a3a3] mb-1">Corporate Use Case</label>
            <select
              value={selectedUseCase}
              onChange={e => setSelectedUseCase(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] text-xs text-white rounded px-3 py-2 outline-none"
            >
              <option value="">All Business Moments</option>
              {useCases.map(uc => (
                <option key={uc} value={uc}>{uc}</option>
              ))}
            </select>
          </div>

          {/* Material */}
          <div>
            <label className="block text-[11px] font-medium text-[#a3a3a3] mb-1">Material</label>
            <select
              value={selectedMaterial}
              onChange={e => setSelectedUseCaseMaterial(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] text-xs text-white rounded px-3 py-2 outline-none"
            >
              <option value="">All Materials</option>
              {materials.map(mat => (
                <option key={mat} value={mat}>{mat}</option>
              ))}
            </select>
          </div>

          {/* Toggles */}
          <div className="space-y-2 pt-2 border-t border-[#262626] text-xs">
            <label className="flex items-center justify-between text-[#a3a3a3] cursor-pointer hover:text-white">
              <span>Logo Customization</span>
              <input
                type="checkbox"
                checked={onlyCustomizable}
                onChange={e => setOnlyCustomizable(e.target.checked)}
                className="accent-[#d4af37]"
              />
            </label>
            <label className="flex items-center justify-between text-[#a3a3a3] cursor-pointer hover:text-white">
              <span>Executive / VIP Grade</span>
              <input
                type="checkbox"
                checked={onlyPremium}
                onChange={e => setOnlyPremium(e.target.checked)}
                className="accent-[#d4af37]"
              />
            </label>
          </div>
        </div>

        {/* Right Main Grid */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Top Sort Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#141414] border border-[#262626] rounded-xl text-xs">
            <div className="text-[#a3a3a3]">
              Showing <span className="text-white font-bold">{filteredProducts.length}</span> authentic corporate items
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#737373]">Sort By:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-[#0a0a0a] border border-[#333] focus:border-[#d4af37] text-xs text-white rounded px-3 py-1.5 outline-none"
              >
                <option value="featured">Featured / Standard Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center bg-[#141414] border border-[#262626] rounded-xl p-8 space-y-3">
              <Package className="w-10 h-10 mx-auto text-[#525252]" />
              <h3 className="text-lg font-serif text-white">No Matching Products Found</h3>
              <p className="text-xs text-[#737373] max-w-sm mx-auto">
                Try adjusting your search criteria or category filters to view more items.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-[#d4af37] text-black text-xs font-bold uppercase rounded hover:bg-[#c5a028] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
