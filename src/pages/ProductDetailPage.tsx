import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/catalog';
import { useShop } from '../context/ShopContext';
import { Footer } from '../components/Footer';

export function ProductDetailPage() {
  const { addToCart } = useShop();
  const { id } = useParams<{ id: string }>();
  const [addedFeedback, setAddedFeedback] = useState(false);

  // Derive product from URL param — scroll to top on product change
  const productId = Number(id || 1);
  const product = products.find((item) => item.id === productId) || products[0];

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  // Scroll to top whenever the product id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1800);
  };

  return (
    <section className="min-h-screen bg-white pt-20 animate-fade-in">

      {/* ── Brief feedback toast ── */}
      {addedFeedback && (
        <div className="fixed left-1/2 top-20 z-50 -translate-x-1/2 bg-black px-6 py-3 text-[10px] tracking-cinematic text-white shadow-xl animate-fade-in">
          ADDED TO BAG
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* ── Top split: image + details ── */}
        <div className="flex flex-col gap-10 md:flex-row">

          {/* Main image */}
          <div className="w-full bg-gray-50 md:w-3/5">
            <div className="aspect-square md:aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Details panel */}
          <div className="flex w-full flex-col justify-center md:w-2/5 md:px-8">
            <p className="mb-2 text-[10px] tracking-cinematic text-gray-400">BY {product.artisan.toUpperCase()}</p>
            <h1 className="mb-4 text-2xl font-light tracking-cinematic md:text-3xl">{product.name}</h1>
            <p className="mb-6 text-xl font-light">${product.price}</p>

            {/* Colour swatches */}
            <div className="mb-8">
              <p className="mb-3 text-[10px] tracking-cinematic text-gray-400">COLOURS</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <span
                    key={color.name}
                    title={color.name}
                    aria-label={color.name}
                    className="h-8 w-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <p className="mb-8 border-t border-gray-100 pt-6 text-sm font-light leading-relaxed text-gray-600">
              {product.story}
            </p>

            <button
              onClick={handleAddToCart}
              className="rounded-full bg-black py-4 text-xs tracking-cinematic text-white hover:bg-gray-800 cursor-pointer"
            >
              ADD TO BAG
            </button>

            <Link
              to="/products"
              className="mt-4 text-center text-[10px] tracking-cinematic text-gray-400 hover:text-black"
            >
              ← BACK TO COLLECTION
            </Link>
          </div>
        </div>

        {/* ── Gallery: angle shots ── */}
        <div className="border-t border-gray-100 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-sm tracking-cinematic">PRODUCT ANGLES</h2>
            <p className="text-[10px] tracking-cinematic text-gray-400">
              {Math.min(product.gallery.length, 3)} VIEWS
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {product.gallery.slice(0, 3).map((image) => (
              <div key={image} className="aspect-[4/5] overflow-hidden bg-gray-50">
                <img src={image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* ── You might like ── */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-100 py-16">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-sm tracking-cinematic">YOU MIGHT LIKE</h2>
              <p className="text-[10px] tracking-cinematic text-gray-400">{relatedProducts.length} ITEMS</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-[10px] font-light tracking-cinematic text-gray-900">{item.name}</p>
                  <p className="mt-1 text-xs text-gray-500">${item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </section>
  );
}
