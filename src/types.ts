export interface Product {
  id: string;
  code: string; // e.g. TGH-1, LB-5, BH-1
  name: string;
  categorySlug: string;
  categoryName: string;
  price: number | null; // null if Price on Request
  description: string;
  images: string[];
  isFeatured?: boolean;
  isPremium?: boolean;
  isCustomizable?: boolean;
  useCases?: ('Employee' | 'Client' | 'Executive' | 'VIP' | 'Event' | 'Festive' | 'Promotional' | 'Welcome Kit')[];
  material?: string;
  catalogSource: 'The Gifting House Collection' | 'Extended Corporate Collection';
  specifications?: Record<string, string>;
}

export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  productCount?: number;
  catalogSource: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  productName: string;
  productCode: string;
  quantity: string;
  budget: string;
  brandingRequired: boolean;
  deliveryTimeline: string;
  message: string;
}

export interface FilterState {
  searchQuery: string;
  categorySlug: string;
  priceRange: [number, number];
  useCase: string;
  material: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name';
  onlyCustomizable: boolean;
  onlyPremium: boolean;
}
