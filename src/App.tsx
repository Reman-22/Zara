import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalShell } from './components/GlobalShell';
import { ShopProvider } from './context/ShopContext';

// Eagerly load pages that are critical for first render
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';

// Lazy-load less-critical pages to keep initial bundle lean
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })));
const SearchPage         = lazy(() => import('./pages/SearchPage').then((m) => ({ default: m.SearchPage })));
const LoginPage          = lazy(() => import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const BagPage            = lazy(() => import('./pages/MiscPages').then((m) => ({ default: m.BagPage })));
const HelpPage           = lazy(() => import('./pages/MiscPages').then((m) => ({ default: m.HelpPage })));
const StoryPage          = lazy(() => import('./pages/MiscPages').then((m) => ({ default: m.StoryPage })));
const ServicesPage       = lazy(() => import('./pages/MiscPages').then((m) => ({ default: m.ServicesPage })));

// Minimal fallback shown while a lazy chunk loads
function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-[10px] tracking-cinematic text-gray-300">LOADING…</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/Zara">
      <ShopProvider>
        <div className="min-h-screen overflow-x-hidden bg-white text-black">
          <GlobalShell />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"             element={<HomePage />} />
              <Route path="/products"     element={<ProductsPage />} />
              <Route path="/product/:id"  element={<ProductDetailPage />} />
              <Route path="/search"       element={<SearchPage />} />
              <Route path="/login"        element={<LoginPage />} />
              <Route path="/bag"          element={<BagPage />} />
              <Route path="/help"         element={<HelpPage />} />
              <Route path="/story"        element={<StoryPage />} />
              <Route path="/services"     element={<ServicesPage />} />
              {/* 404 catch-all */}
              <Route path="*"             element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </ShopProvider>
    </BrowserRouter>
  );
}
