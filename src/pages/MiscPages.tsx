import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { useShop } from '../context/ShopContext';

export function ServicesPage() {
  const services = [
    {
      title: 'BESPOKE COMMISSIONS',
      text: 'Work directly with our atelier to create a one-off handmade piece sized, finished, and detailed for your space or wardrobe.',
      image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=900&q=80'
    },
    {
      title: 'ARTISAN SOURCING',
      text: 'We connect collectors with independent makers across ceramics, textiles, jewelry, leather, and small-batch home objects.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80'
    },
    {
      title: 'WHITE GLOVE DELIVERY',
      text: 'Fragile and high-value products are packed by hand, insured, tracked, and delivered with careful handling instructions.',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&q=80'
    },
    {
      title: 'RESTORATION & CARE',
      text: 'Our aftercare service helps preserve each handmade piece with repair recommendations, material guidance, and restoration support.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&q=80'
    }
  ];

  const process = ['CONSULTATION', 'MATERIAL SELECTION', 'ARTISAN MATCHING', 'HANDMADE PRODUCTION', 'QUALITY REVIEW', 'DELIVERY'];
  const details = [
    { title: 'TIMELINE', text: 'Most bespoke requests are scoped within 72 hours. Production windows are shared before confirmation and depend on material availability.' },
    { title: 'CERTIFICATION', text: 'Select collector pieces include maker notes, material origin, care instructions, and a signed authenticity card.' },
    { title: 'PACKAGING', text: 'Objects are wrapped in archival tissue, reinforced by material-specific protection, and prepared for safe long-distance shipping.' },
    { title: 'AFTERCARE', text: 'Our team keeps a care record for commissioned pieces so future repair, cleaning, or restoration can be handled consistently.' }
  ];

  return (
    <section className="min-h-screen bg-white pt-20 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-extralight tracking-cinematic md:text-7xl">OUR SERVICES</h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-gray-600">
            A quiet, premium service model built for handmade objects: personal sourcing, careful delivery, and long-term care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className="group">
              <div className="mb-5 aspect-[4/3] overflow-hidden bg-gray-50">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex gap-5">
                <span className="text-[10px] tracking-cinematic text-gray-300">|{String(index + 1).padStart(2, '0')}|</span>
                <div>
                  <h2 className="mb-3 text-sm tracking-cinematic">{service.title}</h2>
                  <p className="text-sm font-light leading-relaxed text-gray-600">{service.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-100 pt-14">
          <h2 className="mb-8 text-center text-sm tracking-cinematic">HOW IT WORKS</h2>
          <div className="grid gap-4 md:grid-cols-6">
            {process.map((step, index) => (
              <div key={step} className="border-t border-gray-100 pt-4">
                <p className="mb-3 text-[10px] tracking-cinematic text-gray-300">|{String(index + 1).padStart(2, '0')}|</p>
                <p className="text-[10px] tracking-cinematic text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-gray-100 pt-14 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <h2 className="mb-5 text-3xl font-extralight tracking-cinematic md:text-4xl">PRIVATE APPOINTMENTS</h2>
            <p className="text-sm font-light leading-relaxed text-gray-600">
              For interiors, gifts, or collector pieces, schedule a private appointment with our team. We prepare a curated edit of makers, finishes, timelines, and care instructions before production begins.
            </p>
          </div>
          <div className="aspect-[16/10] overflow-hidden bg-gray-50">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80" alt="Private appointment" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="mt-20 border-t border-gray-100 pt-14">
          <h2 className="mb-10 text-center text-sm tracking-cinematic">SERVICE DETAILS</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {details.map((detail) => (
              <article key={detail.title} className="border-t border-gray-100 pt-5">
                <h3 className="mb-4 text-[10px] tracking-cinematic text-black">{detail.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">{detail.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-gray-100 pt-14 md:grid-cols-3">
          <div>
            <p className="mb-3 text-[10px] tracking-cinematic text-gray-400">01</p>
            <h3 className="mb-3 text-sm tracking-cinematic">CUSTOM GIFTING</h3>
            <p className="text-sm font-light leading-relaxed text-gray-600">Curated handmade gifts for private clients, events, and corporate orders with discreet packaging.</p>
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-cinematic text-gray-400">02</p>
            <h3 className="mb-3 text-sm tracking-cinematic">INTERIOR EDITS</h3>
            <p className="text-sm font-light leading-relaxed text-gray-600">Material-led edits for homes, studios, and hospitality spaces, including ceramics, textiles, and sculptural objects.</p>
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-cinematic text-gray-400">03</p>
            <h3 className="mb-3 text-sm tracking-cinematic">COLLECTOR SUPPORT</h3>
            <p className="text-sm font-light leading-relaxed text-gray-600">Documentation, storage guidance, and long-term care planning for rare handmade pieces.</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export function StoryPage() {
  return <SimplePage title="OUR STORY" image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80" />;
}

export function HelpPage() {
  return <SimplePage title="HELP" image="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&q=80" />;
}

export function BagPage() {
  const { cart, removeFromCart } = useShop();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="min-h-screen bg-white pt-20 animate-fade-in">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12 text-center text-4xl font-extralight tracking-cinematic md:text-6xl">YOUR BAG</h1>

        {cart.length === 0 ? (
          <div className="flex min-h-[45vh] flex-col items-center justify-center text-center">
            <p className="mb-3 text-sm tracking-cinematic">YOUR BASKET IS EMPTY</p>
            <p className="mb-8 text-xs text-gray-400">The items you add will be shown here.</p>
            <Link to="/products" className="rounded-full border border-black px-8 py-3 text-[10px] tracking-cinematic hover:bg-black hover:text-white">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-5 border-b border-gray-100 pb-6">
                  <Link to={`/product/${item.id}`} className="h-36 w-28 flex-shrink-0 overflow-hidden bg-gray-50 md:h-44 md:w-36">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="mb-1 text-[9px] tracking-cinematic text-gray-400">BY {item.artisan.toUpperCase()}</p>
                      <Link to={`/product/${item.id}`} className="text-sm font-light tracking-cinematic hover:text-gray-500">{item.name}</Link>
                      <p className="mt-2 text-[10px] tracking-cinematic text-gray-400">QTY {item.quantity}</p>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-sm text-gray-600">${item.price * item.quantity}</p>
                      <button onClick={() => removeFromCart(item.id)} className="text-[10px] tracking-cinematic text-gray-400 hover:text-black">REMOVE</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit border border-gray-100 p-6 md:sticky md:top-24">
              <div className="mb-6 flex justify-between border-b border-gray-100 pb-6">
                <span className="text-xs tracking-cinematic">SUBTOTAL</span>
                <span className="text-sm">${subtotal}</span>
              </div>
              <button className="w-full rounded-full bg-black py-4 text-xs tracking-cinematic text-white hover:bg-gray-800">PROCEED TO CHECKOUT</button>
              <Link to="/products" className="mt-3 block rounded-full border border-black py-4 text-center text-xs tracking-cinematic hover:bg-black hover:text-white">CONTINUE SHOPPING</Link>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}

function SimplePage({ title, image }: { title: string; image: string }) {
  return (
    <section className="min-h-screen bg-white pt-20 animate-fade-in">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-12 text-center text-5xl font-extralight tracking-cinematic md:text-7xl">{title}</h1>
        <div className="aspect-[16/9] overflow-hidden bg-gray-50"><img src={image} alt={title} className="h-full w-full object-cover" /></div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-light leading-relaxed text-gray-600">A quiet editorial space for a premium handmade brand, built around materials, craftsmanship, and modern restraint.</p>
      </div>
      <Footer />
    </section>
  );
}