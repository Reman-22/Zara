import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface Props {
  product: Product;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: Props) {
  const { addToCart } = useShop();

  // Close on Escape key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close quick view"
        tabIndex={-1}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-lg bg-white p-8 shadow-2xl animate-scale-in md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close ×  */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 cursor-pointer text-3xl font-light leading-none text-gray-400 hover:text-black"
          aria-label="Close"
        >
          ×
        </button>

        <p className="mb-2 text-[9px] tracking-cinematic text-gray-400">BY {product.artisan.toUpperCase()}</p>
        <h3 className="mb-3 pr-8 text-lg font-light tracking-cinematic md:text-xl">{product.name}</h3>
        <p className="mb-6 text-xl font-light">${product.price}</p>

        {/* Details grid */}
        <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-gray-100 py-6">
          <div>
            <p className="mb-1 text-[9px] tracking-cinematic text-gray-400">MATERIAL</p>
            <p className="text-xs tracking-cinematic">{product.material.toUpperCase()}</p>
          </div>
          <div>
            <p className="mb-1 text-[9px] tracking-cinematic text-gray-400">CATEGORY</p>
            <p className="text-xs tracking-cinematic">{product.category.toUpperCase()}</p>
          </div>
          <div>
            <p className="mb-1 text-[9px] tracking-cinematic text-gray-400">COLOURS</p>
            <p className="text-xs tracking-cinematic">
              {product.colors.map((c) => c.name).join(', ').toUpperCase()}
            </p>
          </div>
          <div>
            <p className="mb-1 text-[9px] tracking-cinematic text-gray-400">CARE</p>
            <p className="text-xs tracking-cinematic">HAND CARE</p>
          </div>
        </div>

        <p className="mb-8 text-sm font-light leading-relaxed text-gray-600">{product.story}</p>

        {/* CTA buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => { addToCart(product); onClose(); }}
            className="flex-1 cursor-pointer rounded-full bg-black py-3 text-[10px] tracking-cinematic text-white hover:bg-gray-800"
          >
            ADD TO BAG
          </button>
          <Link
            to={`/product/${product.id}`}
            onClick={onClose}
            className="cursor-pointer rounded-full border border-black px-5 py-3 text-[10px] tracking-cinematic hover:bg-black hover:text-white"
          >
            VIEW
          </Link>
        </div>
      </div>
    </div>
  );
}
