import { useEffect, useState } from 'react';
import { products, subCategories } from '../data/catalog';
import { useShop } from '../context/ShopContext';
import type { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { Footer } from '../components/Footer';
import { FilterSidebar } from '../components/FilterSidebar';
import { FilterIcon, GridIcon } from '../components/icons';

export function ProductsPage() {
  const { selectedCategory, gridView, setGridView, sortBy, priceRange, filterOpen, setFilterOpen } = useShop();
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => setActiveSubCategory(null), [selectedCategory]);

  const availableSubs = subCategories.filter((sub) => sub.parentCategory === selectedCategory);
  const activeSub = availableSubs.find((sub) => sub.id === activeSubCategory) || null;
  let displayedProducts = products.filter((product) => product.category === selectedCategory);
  if (activeSub) displayedProducts = displayedProducts.filter((product) => product.subCategory === activeSub.id);
  displayedProducts = displayedProducts.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);
  if (sortBy === 'low-high') displayedProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'high-low') displayedProducts.sort((a, b) => b.price - a.price);
  if (sortBy === 'new') displayedProducts.sort((a, b) => b.id - a.id);

  const gridClasses: Record<number, string> = {
    1: 'grid-cols-1 md:grid-cols-2',
    2: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    3: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'
  };

  return (
    <section className="min-h-screen bg-white pb-32 animate-fade-in">

      {/* ─── Desktop: LEFT RAIL ─── */}
      {/* Subcategory links at top, FILTER + VIEW pinned to bottom-left */}
      <div className="fixed left-6 top-20 z-30 hidden w-28 md:flex md:flex-col" style={{ bottom: '2rem' }}>
        {/* Subcategory links */}
        <div className="flex flex-col items-start gap-4">
          {availableSubs.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubCategory(activeSubCategory === sub.id ? null : sub.id)}
              className={`whitespace-nowrap text-left text-[10px] tracking-cinematic transition-colors cursor-pointer ${
                activeSubCategory === sub.id ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>

        {/* FILTER + VIEW pinned to absolute bottom of rail */}
        <div className="mt-auto border-t border-gray-100 pt-5">
          <button
            onClick={() => setFilterOpen(true)}
            className="mb-6 flex cursor-pointer items-center gap-2 text-[10px] tracking-cinematic text-gray-500 hover:text-black"
          >
            <FilterIcon />
            FILTER
          </button>
          <div>
            <p className="mb-3 text-[9px] tracking-cinematic text-gray-400">VIEW</p>
            <div className="flex items-center gap-3">
              {([1, 2, 3] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => setGridView(view)}
                  className={`cursor-pointer transition-colors ${gridView === view ? 'text-black' : 'text-gray-300 hover:text-black'}`}
                  aria-label={`View ${view} columns`}
                >
                  <GridIcon columns={view} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile: horizontal subcategory bar at top ─── */}
      <div className="fixed left-0 right-0 top-14 z-30 border-b border-gray-100 bg-white md:hidden">
        <div className="flex gap-8 overflow-x-auto px-4 py-3">
          {availableSubs.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubCategory(activeSubCategory === sub.id ? null : sub.id)}
              className={`whitespace-nowrap text-[10px] tracking-cinematic transition-colors cursor-pointer ${
                activeSubCategory === sub.id ? 'text-black' : 'text-gray-400 hover:text-black'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Product grid ─── */}
      {/* ml-44 on desktop leaves room for left rail; mr-20 for right rail (BAG/LOGIN/HELP) */}
      <main className="p-4 pt-28 md:ml-44 md:mr-34 md:py-20">
        <div className={`grid ${gridClasses[gridView]} gap-4 md:gap-6 grid-transition`}>
          {(activeSub ? displayedProducts : products.filter((p) => p.category === selectedCategory)).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              gridView={gridView}
              onQuickView={() => setQuickViewProduct(product)}
            />
          ))}
        </div>
      </main>

      {/* Filter sidebar — z-50 so it sits above the right rail (z-40) */}
      {filterOpen && <FilterSidebar onClose={() => setFilterOpen(false)} />}
      {quickViewProduct && <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />}
      <Footer />
    </section>
  );
}
