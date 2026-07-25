  // app/types/index.ts
export interface ProductColor {
  name: string;
  nameFa?: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  nameFa?: string;
  category: string;
  categoryFa?: string;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionFa?: string;
  features: string[];
  featuresFa?: string[];
  specs: Record<string, string>;
  specsFa?: Record<string, string>;
  images: string[];
  colors: ProductColor[];
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  brand?: string;      // ← optional
  brandFa?: string;    // ← optional
  model?: string;      // ← optional
}

export interface Category {
  id: string;
  name: string;
  nameFa?: string;
  description: string;
  descriptionFa?: string;
  image: string;
  productCount: number;
  icon?: string;
}

export interface FAQ {
  id: string;
  question: string;
  questionFa?: string;
  answer: string;
  answerFa?: string;
  category: string;
  categoryFa?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameFa?: string;
  role: string;
  roleFa?: string;
  avatar: string;
  rating: number;
  comment: string;
  commentFa?: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
}

export interface NavItem {
  label: string;
  labelFa?: string;
  href: string;
}