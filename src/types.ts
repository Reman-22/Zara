export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  category: string;
  subCategory: string;
  artisan: string;
  story: string;
  material: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  label: string;
}

export interface SubCategory {
  id: string;
  label: string;
  parentCategory: string;
  previewImages: string[];
}

export interface HeroCategory {
  id: string;
  title: string;
  routeCategory?: string;
  isService?: boolean;
  images: string[];
}

export type SortOption = 'default' | 'low-high' | 'high-low' | 'new';