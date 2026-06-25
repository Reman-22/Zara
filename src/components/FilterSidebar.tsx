import { useEffect, useCallback, useState } from 'react';
import type { SortOption } from '../types';
import { useShop } from '../context/ShopContext';

interface Props {
  onClose: () => void;
}

export function FilterSidebar({ onClose }: Props) {
  const { sortBy, setSortBy, priceRange, setPriceRange } = useShop();
  const [closing, setClosing] = useState(false);
  const [localSort, setLocalSort] = useState<SortOption>(sortBy);
  const [localRange, setLocalRange] = useState<[number, number]>(priceRange);

  const closeWithAnimation = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 1000);
  }, [onClose]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeWithAnimation(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeWithAnimation]);

  const apply = () => {
    setSortBy(localSort);
    setPriceRange(localRange);
    closeWithAnimation();
  };

  const sortLabels: Record<SortOption, string> = {
    'default': 'DEFAULT',
    'low-high': 'LOW TO HIGH',
    'high-low': 'HIGH TO LOW',
    'new': 'NEW',
  };

  return (
    <div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-label="Refine products"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${closing ? 'opacity-0' : 'opacity-100'}`}
        onClick={closeWithAnimation}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 bottom-0 w-full bg-white md:w-[420px] ${closing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-8">
          <h3 className="text-xs tracking-cinematic">REFINE</h3>
          <button
            onClick={closeWithAnimation}
            aria-label="Close filters"
            className="cursor-pointer text-3xl font-light leading-none text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-12 p-8">
          {/* Sort */}
          <section className="flex gap-8">
            <div className="w-24">
              <p className="text-[11px] tracking-cinematic">|01|</p>
              <p className="mt-1 text-[10px] tracking-cinematic text-gray-500">SORT BY</p>
            </div>
            <div className="space-y-4">
              {(['low-high', 'high-low', 'new'] as SortOption[]).map((option) => (
                <button
                  key={option}
                  onClick={() => setLocalSort(option)}
                  className={`block cursor-pointer text-left text-[11px] tracking-cinematic transition-colors ${
                    localSort === option ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {sortLabels[option]}
                </button>
              ))}
            </div>
          </section>

          <div className="h-px bg-gray-100" />

          {/* Price range */}
          <section className="flex gap-8">
            <div className="w-24">
              <p className="text-[11px] tracking-cinematic">|02|</p>
              <p className="mt-1 text-[10px] tracking-cinematic text-gray-500">PRICE</p>
            </div>
            <div className="flex-1">
              <input
                type="range"
                min={0}
                max={2000}
                step={10}
                value={localRange[1]}
                onChange={(e) => setLocalRange([0, Number(e.target.value)])}
                className="w-full accent-black"
                aria-label="Maximum price"
              />
              <p className="mt-4 text-[10px] tracking-cinematic text-gray-500">
                $0 – ${localRange[1].toLocaleString()}
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 p-8">
          <button
            onClick={apply}
            className="w-full cursor-pointer rounded-full border border-black py-4 text-[11px] tracking-cinematic hover:bg-black hover:text-white"
          >
            VIEW RESULTS
          </button>
        </div>
      </aside>
    </div>
  );
}
