import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/catalog';
import { useShop } from '../context/ShopContext';

export function SearchPage() {
  const { addToCart, cart } = useShop();
  const [query, setQuery] = useState('');
  const [addedMessage, setAddedMessage] = useState('');

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return products;
    return products.filter((product) =>
      [product.name, product.category, product.subCategory, product.material, product.artisan]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [query]);

  const handleAddToCart = (product: (typeof products)[number]) => {
    addToCart(product);
    setAddedMessage('ITEM ADDED TO CART');
    window.setTimeout(() => setAddedMessage(''), 1800);
  };

  return (
    <section className="relative min-h-screen bg-white pt-24 text-black animate-fade-in md:pt-28">

      {/* ── Desktop right rail: BAG / LOG IN / HELP (same as homepage) ── */}
      <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <Link to="/bag" className="text-xs tracking-cinematic text-gray-500 hover:text-black">
          BAG [{cart.length}]
        </Link>
        <Link to="/login" className="text-xs tracking-cinematic text-gray-500 hover:text-black">
          LOG IN
        </Link>
        <Link to="/help" className="text-xs tracking-cinematic text-gray-500 hover:text-black">
          HELP
        </Link>
      </div>

      {/* ── Desktop left nav with right margin so it doesn't crowd products ── */}
      <aside className="fixed left-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-6 md:flex pr-6">
        {['WOMAN', 'MAN', 'KIDS'].map((item) => (
          <button
            key={item}
            className="cursor-pointer text-left text-[10px] tracking-cinematic text-gray-400 transition-colors hover:text-black"
          >
            {item}
          </button>
        ))}
      </aside>

      {/* ── "Item added" toast ── */}
      {addedMessage && (
        <div className="fixed left-1/2 top-20 z-50 -translate-x-1/2 bg-black px-6 py-3 text-[10px] tracking-cinematic text-white shadow-xl animate-fade-in">
          {addedMessage}
        </div>
      )}

      {/* ── Search input ── */}
      <div className="mx-auto max-w-3xl px-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="WHAT ARE YOU LOOKING FOR?"
          className="w-full border-0 border-b border-black bg-transparent pb-4 text-center text-sm font-light tracking-cinematic text-black outline-none placeholder:text-gray-300 md:text-base"
          autoFocus
        />
      </div>

      {/* ── Product grid
            ml-32 desktop = clears left nav; mr-20 desktop = clears right rail ── */}
      <main className="px-6 py-16 md:ml-36 md:mr-20 md:px-12">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-[10px] tracking-cinematic text-gray-400">SEARCH RESULTS</p>
          <p className="text-[10px] tracking-cinematic text-gray-400">{searchResults.length} ITEMS</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
          {searchResults.map((product) => (
            <article key={product.id} className="group">
              <Link
                to={`/product/${product.id}`}
                className="block aspect-[3/4] overflow-hidden bg-gray-50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="mt-3 space-y-1">
                <Link
                  to={`/product/${product.id}`}
                  className="block text-[10px] font-light tracking-cinematic text-black transition-colors hover:text-gray-500"
                >
                  {product.name}
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">${product.price}</p>
                  {/* + button replaces "ADD TO CART" text */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                    className="cursor-pointer text-xl font-light leading-none text-gray-400 transition-colors hover:text-black"
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}
