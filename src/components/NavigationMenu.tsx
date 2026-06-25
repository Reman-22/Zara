import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../data/catalog';
import { useShop } from '../context/ShopContext';

const utilityLinks = [
  { label: 'OUR STORY',    to: '/story' },
  { label: 'ARTISANS',     to: '/story' },
  { label: 'SERVICES',     to: '/services' },
  { label: 'CARE GUIDE',   to: '/help' },
  { label: '+ INFO',       to: '/help' },
];

export function NavigationMenu() {
  const { menuOpen, setMenuOpen, setSelectedCategory } = useShop();
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setMenuOpen(false);
    navigate('/products');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 transition-opacity duration-500 ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={`fixed inset-y-0 left-0 z-40 w-full bg-white transition-transform duration-700 md:w-[760px] ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo / close row */}
        <div className="flex items-center justify-between px-8 py-10">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-3xl font-extralight tracking-cinematic"
          >
            ARTISAN
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="cursor-pointer text-3xl font-light leading-none text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>

        <div className="grid gap-12 px-8 md:grid-cols-2 md:px-16">
          {/* Category links */}
          <div className="space-y-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="block text-left text-lg font-light tracking-cinematic text-gray-400 hover:text-black md:text-2xl cursor-pointer"
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Utility links */}
          <div className="space-y-2 border-t border-gray-100 pt-8 md:border-0 md:pt-48">
            {utilityLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block text-[10px] tracking-cinematic text-gray-400 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
