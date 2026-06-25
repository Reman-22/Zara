import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface Props {
  product: Product;
  gridView: 1 | 2 | 3;
  onQuickView: () => void;
}

export function ProductCard({ product, gridView, onQuickView }: Props) {
  const aspect = gridView === 3 ? 'aspect-square' : 'aspect-[3/4]';

  return (
    <article className="product-card group">
      {/* Image → navigates to PDP */}
      <Link
        to={`/product/${product.id}`}
        className={`${aspect} block w-full overflow-hidden bg-gray-50`}
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image h-full w-full object-cover"
          loading="lazy"
        />
      </Link>

      {/* Text row */}
      <div className="mt-3">
        <Link
          to={`/product/${product.id}`}
          className="block text-xs font-light tracking-cinematic text-gray-900 hover:text-gray-500"
        >
          {product.name}
        </Link>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-xs text-gray-500">${product.price}</p>
          {/* Quick-view trigger */}
          <button
            onClick={onQuickView}
            aria-label={`Quick view ${product.name}`}
            className="cursor-pointer text-xl font-light leading-none text-gray-400 transition-colors hover:text-black"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
