import { createContext, useContext, useEffect, useCallback, useState, type ReactNode } from 'react';
import type { CartItem, Product, SortOption } from '../types';

interface ShopContextValue {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  filterOpen: boolean;
  setFilterOpen: (open: boolean) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  heroIndex: number;
  setHeroIndex: (index: number) => void;
  gridView: 1 | 2 | 3;
  setGridView: (view: 1 | 2 | 3) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = 'artisan-cart';

function loadCart(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(loadCart);
  const [selectedCategory, setSelectedCategory] = useState('women');
  const [heroIndex, setHeroIndex] = useState(0);
  const [gridView, setGridView] = useState<1 | 2 | 3>(2);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      // Storage quota or private-browsing restrictions — silently fail
    }
  }, [cart]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  return (
    <ShopContext.Provider
      value={{
        menuOpen, setMenuOpen,
        filterOpen, setFilterOpen,
        cart, addToCart, removeFromCart,
        selectedCategory, setSelectedCategory,
        heroIndex, setHeroIndex,
        gridView, setGridView,
        sortBy, setSortBy,
        priceRange, setPriceRange,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop(): ShopContextValue {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used inside <ShopProvider>');
  return context;
}
