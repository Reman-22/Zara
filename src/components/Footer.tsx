import { Link } from 'react-router-dom';

const columns: { heading: string; links: { label: string; to: string }[] }[] = [
  {
    heading: 'HELP',
    links: [
      { label: 'MY ACCOUNT', to: '/help' },
      { label: 'SHIPPING',   to: '/help' },
      { label: 'RETURNS',    to: '/help' },
      { label: 'CONTACT',    to: '/help' },
    ],
  },
  {
    heading: 'FOLLOW US',
    links: [
      { label: 'INSTAGRAM', to: '/story' },
      { label: 'PINTEREST',  to: '/story' },
      { label: 'FACEBOOK',   to: '/story' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { label: 'OUR STORY',  to: '/story' },
      { label: 'ARTISANS',   to: '/story' },
      { label: 'SERVICES',   to: '/services' },
    ],
  },
  {
    heading: 'POLICIES',
    links: [
      { label: 'PRIVACY',    to: '/help' },
      { label: 'TERMS',      to: '/help' },
      { label: 'COOKIES',    to: '/help' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-[10px] tracking-cinematic text-gray-400">{col.heading}</h4>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="mb-2 block text-xs tracking-cinematic text-gray-600 hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-8 text-center text-[10px] tracking-cinematic text-gray-300">
          © {new Date().getFullYear()} ARTISAN. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
