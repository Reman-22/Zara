import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { BagIcon, FilterIcon, GridIcon, SearchIcon, UserIcon } from './icons';
import { FilterSidebar } from './FilterSidebar';
import { NavigationMenu } from './NavigationMenu';

// Mobile-only filter/grid buttons (still used in the mobile header bar)
function MobileFilterButton() {
  const { filterOpen, setFilterOpen } = useShop();
  return (
    <>
      <button
        onClick={() => setFilterOpen(true)}
        className="cursor-pointer p-2 text-gray-700 hover:text-black"
        aria-label="Open filters"
      >
        <FilterIcon />
      </button>
      {filterOpen && <FilterSidebar onClose={() => setFilterOpen(false)} />}
    </>
  );
}

function MobileGridButton() {
  const { gridView, setGridView } = useShop();
  const cycle = () => setGridView(gridView === 1 ? 2 : gridView === 2 ? 3 : 1);
  return (
    <button
      onClick={cycle}
      className="cursor-pointer p-2 text-gray-700 hover:text-black"
      aria-label="Cycle grid view"
    >
      <GridIcon columns={gridView} />
    </button>
  );
}

export function GlobalShell() {
  const { menuOpen, setMenuOpen, filterOpen, cart } = useShop();
  const { pathname } = useLocation();
  const isProducts = pathname.startsWith('/products');
  const isHome = pathname === '/';
  const isSearch = pathname === '/search';

  return (
    <>
      {/* ── Hamburger ── */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed left-6 top-6 z-50 transition-all duration-1000 md:left-8 md:top-8 ${
          menuOpen ? 'text-black' : 'text-black hover:opacity-50'
        }`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className="relative block h-6 w-6">
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-1000 ${menuOpen ? 'top-1/2 rotate-45' : 'top-1'}`} />
          <span className={`absolute left-0 top-1/2 h-px w-6 bg-current transition-all duration-1000 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute left-0 h-px w-6 bg-current transition-all duration-1000 ${menuOpen ? 'top-1/2 -rotate-45' : 'top-5'}`} />
        </span>
      </button>

      {/* ── DESKTOP TOP-RIGHT: SEARCH + line (products page only) ── */}
      {isProducts && (
        <Link
          to="/search"
          className={`fixed right-8 top-8 z-40 hidden flex-col items-end gap-1 transition-all duration-1000 md:flex ${
            menuOpen || filterOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          aria-label="Search"
        >
          <div className="flex items-center gap-2 text-gray-700 hover:text-black">
            <SearchIcon />
            <span className="text-[10px] tracking-cinematic">SEARCH</span>
          </div>
          <span className="h-px w-full bg-gray-300" />
        </Link>
      )}

      {/* ── DESKTOP TOP-RIGHT: just search icon on non-products pages ── */}
      {!isProducts && !isSearch && (
        <Link
          to="/search"
          className={`fixed right-8 top-6 z-40 hidden cursor-pointer p-2 text-gray-700 transition-all duration-1000 hover:text-black md:flex md:items-center md:gap-2 ${
            menuOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          aria-label="Search"
        >
          <SearchIcon />
        </Link>
      )}

      {/* ── MOBILE top bar (all pages) ── */}
      <div
        className={`fixed right-4  top-0 z-40 flex h-14 items-center gap-2 transition-all duration-1000 md:hidden ${
          isProducts ? 'left-0 justify-end border-b border-gray-100 bg-white px-4' : ''
        } ${menuOpen || filterOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      >
        {isProducts && <MobileFilterButton />}
        {isProducts && <MobileGridButton />}
        {!isProducts && (
          <Link to="/search" className="cursor-pointer p-2 text-gray-700 hover:text-black" aria-label="Search">
            <SearchIcon />
          </Link>
        )}
        <Link to="/bag" className="relative cursor-pointer p-2 text-gray-700 hover:text-black" aria-label="Shopping bag">
          <BagIcon />
          {cart.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] text-white">
              {cart.length}
            </span>
          )}
        </Link>
        <Link to="/login" className="cursor-pointer p-2 text-gray-700 hover:text-black" aria-label="Login">
          <UserIcon />
        </Link>
      </div>

      {/* ── DESKTOP RIGHT RAIL: BAG / LOGIN / HELP ──
           z-40 — sits BELOW the filter sidebar (z-50) automatically */}
      {(isProducts || isHome) && (
        <div
          className={`fixed right-8 z-40 hidden -translate-y-1/2 flex-col gap-3 transition-all duration-1000 md:flex ${
            isProducts ? 'top-1/2 ml-22' : 'top-1/2'
          } ${menuOpen || filterOpen ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
        >
          <Link
            to="/bag"
            className={`text-xs tracking-cinematic ${isHome ? 'text-white hover:opacity-60' : 'text-gray-500 hover:text-black'}`}
          >
            BAG [{cart.length}]
          </Link>
          <Link
            to="/login"
            className={`text-xs tracking-cinematic ${isHome ? 'text-white hover:opacity-60' : 'text-gray-500 hover:text-black'}`}
          >
            LOG IN
          </Link>
          <Link
            to="/help"
            className={`text-xs tracking-cinematic ${isHome ? 'text-white hover:opacity-60' : 'text-gray-500 hover:text-black'}`}
          >
            HELP
          </Link>
        </div>
      )}

      <NavigationMenu />
    </>
  );
}
