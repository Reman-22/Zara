import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { heroCategories } from '../data/catalog';
import { useShop } from '../context/ShopContext';
import { ArrowLeftIcon, ArrowRightIcon } from '../components/icons';

export function HomePage() {
  const navigate = useNavigate();
  const { setSelectedCategory, heroIndex, setHeroIndex } = useShop();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const current = heroCategories[heroIndex];

  useEffect(() => {
    const timer = setInterval(() => setCurrentImage((prev) => (prev + 1) % current.images.length), 4500);
    return () => clearInterval(timer);
  }, [current.images.length, heroIndex]);

  useEffect(() => setCurrentImage(0), [heroIndex]);

  const changeHero = (direction: 1 | -1) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setHeroIndex((heroIndex + direction + heroCategories.length) % heroCategories.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const openHero = () => {
    if (current.isService) {
      navigate('/services');
      return;
    }
    setSelectedCategory(current.routeCategory || 'women');
    navigate('/products');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {heroCategories.map((category, categoryIndex) => (
        <div key={category.id} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${categoryIndex === heroIndex ? 'translate-y-0 opacity-100 z-10' : 'translate-y-full opacity-0 z-0'}`}>
          {category.images.map((image, imageIndex) => (
            <button key={image} onClick={openHero} className={`absolute inset-0 h-full w-full cursor-pointer transition-all duration-1000 ease-in-out ${imageIndex === currentImage && categoryIndex === heroIndex ? 'translate-y-0 opacity-100 z-10' : 'translate-y-full opacity-0 z-0'}`}>
              <img src={image} alt={category.title} className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-black/10" />
            </button>
          ))}
        </div>
      ))}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-6xl font-extralight leading-none tracking-cinematic md:text-8xl lg:text-9xl">ARTISAN</h1>
      </div>
      <button
        onClick={() => changeHero(-1)}
        className="absolute bottom-8 left-6 z-30 cursor-pointer text-white transition-all duration-300 hover:scale-110 hover:opacity-70 md:left-8"
        aria-label="Previous collection"
      >
        <ArrowLeftIcon />
      </button>
      <button
        onClick={() => changeHero(1)}
        className="absolute bottom-8 right-6 z-30 cursor-pointer text-white transition-all duration-300 hover:scale-110 hover:opacity-70 md:right-8"
        aria-label="Next collection"
      >
        <ArrowRightIcon />
      </button>
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroCategories.map((_, index) => <button key={index} onClick={() => setHeroIndex(index)} className={`h-2 w-2 rounded-full ${index === heroIndex ? 'bg-white' : 'bg-white/40'}`} />)}
      </div>
    </section>
  );
}