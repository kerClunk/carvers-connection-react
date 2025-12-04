import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, ChevronDown } from 'lucide-react';

// WordPress site URL - staging environment
const WP_SITE_URL = 'https://carving.clunk.tech';

// Navigation links configured for WordPress
const MAIN_SITE_URL = 'https://carvers.clunk.tech';

const NAV_LINKS = [
  { label: 'Home', path: `${MAIN_SITE_URL}/`, isExternal: true },
  { label: 'Forum', path: '/community/', isExternal: false },
  {
    label: 'Prototypes',
    path: '#',
    isExternal: false,
    children: [
      { label: 'Snowboards', path: '/community/prototype-prototype/', isExternal: false },
      { label: 'Bindings', path: 'https://www.edgelever.com/', isExternal: true },
    ]
  },
  { label: 'Coaching', path: `${MAIN_SITE_URL}/coaching/`, isExternal: true },
  { label: 'Store', path: '/store/', isExternal: false },
  { label: 'Contact', path: `${MAIN_SITE_URL}/contact/`, isExternal: true },
];

enum Currency {
  USD = 'USD',
  CAD = 'CAD'
}

interface HeaderEmbedProps {
  cartCount?: number;
  cartUrl?: string;
  logoUrl?: string;
  siteUrl?: string;
  currentPath?: string;
}

const HeaderEmbed: React.FC<HeaderEmbedProps> = ({
  cartCount = 0,
  cartUrl = '/cart/',
  logoUrl = '/wp-content/uploads/cc-header/LogoCC.webp',
  siteUrl = WP_SITE_URL,
  currentPath = '/',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>(Currency.CAD);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Build full URL for internal links
  const getHref = (path: string, isExternal: boolean) => {
    if (isExternal) return path;
    // For internal links, use relative paths (WordPress handles routing)
    return path;
  };

  // Check if current path matches link
  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="cc-sticky cc-top-0 cc-z-50 cc-bg-brand-dark cc-text-white cc-border-b cc-border-white/10 cc-shadow-xl">
      <div className="cc-max-w-7xl cc-mx-auto cc-px-4 sm:cc-px-6 lg:cc-px-8">
        <div className="cc-flex cc-justify-between cc-items-center cc-h-20">

          {/* Logo */}
          <div className="cc-flex-shrink-0 cc-flex cc-items-center">
            <a href={MAIN_SITE_URL} className="hover:cc-opacity-90 cc-transition-opacity">
              <img
                src={logoUrl}
                alt="Carvers Connection"
                className="cc-h-14 cc-w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="cc-hidden md:cc-flex cc-space-x-8 cc-items-center">
            {NAV_LINKS.map((link) =>
              link.children ? (
                // Dropdown menu
                <div key={link.label} className="cc-relative cc-group">
                  <button className="cc-flex cc-items-center cc-gap-1 cc-text-sm cc-font-bold cc-uppercase cc-tracking-wider cc-transition-colors hover:cc-text-brand-accent cc-text-gray-300">
                    {link.label}
                    <ChevronDown size={14} className="cc-transform group-hover:cc-rotate-180 cc-transition-transform" />
                  </button>
                  <div className="cc-absolute cc-top-full cc-left-0 cc-mt-2 cc-w-48 cc-bg-white cc-text-brand-dark cc-rounded-lg cc-shadow-xl cc-opacity-0 cc-invisible group-hover:cc-opacity-100 group-hover:cc-visible cc-transition-all cc-duration-200 cc-overflow-hidden">
                    {link.children.map((child) => (
                      <a
                        key={child.path}
                        href={getHref(child.path, child.isExternal)}
                        target={child.isExternal ? "_blank" : undefined}
                        rel={child.isExternal ? "noopener noreferrer" : undefined}
                        className="cc-block cc-px-4 cc-py-3 hover:cc-bg-gray-100 cc-text-sm cc-font-medium cc-border-b cc-border-gray-100 last:cc-border-0"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : link.isExternal ? (
                <a
                  key={link.path}
                  href={getHref(link.path, link.isExternal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cc-text-sm cc-font-bold cc-uppercase cc-tracking-wider cc-transition-colors hover:cc-text-brand-accent cc-text-gray-300"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.path}
                  href={getHref(link.path, link.isExternal)}
                  className={`cc-text-sm cc-font-bold cc-uppercase cc-tracking-wider cc-transition-colors hover:cc-text-brand-accent ${isActive(link.path) ? 'cc-text-brand-accent' : 'cc-text-gray-300'
                    }`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="cc-hidden md:cc-flex cc-items-center cc-space-x-6">
            <div className="cc-relative cc-group cc-cursor-pointer cc-flex cc-items-center cc-space-x-1 cc-text-sm cc-font-bold cc-text-gray-300 hover:cc-text-white">
              <span>{currency}</span>
              <ChevronDown size={14} />
              {/* Currency Dropdown */}
              <div className="cc-absolute cc-top-full cc-right-0 cc-mt-2 cc-w-24 cc-bg-white cc-text-brand-dark cc-rounded cc-shadow-lg cc-opacity-0 cc-invisible group-hover:cc-opacity-100 group-hover:cc-visible cc-transition-all cc-duration-200">
                <button
                  onClick={() => setCurrency(Currency.CAD)}
                  className="cc-block cc-w-full cc-text-left cc-px-4 cc-py-2 hover:cc-bg-gray-100"
                >CAD</button>
                <button
                  onClick={() => setCurrency(Currency.USD)}
                  className="cc-block cc-w-full cc-text-left cc-px-4 cc-py-2 hover:cc-bg-gray-100"
                >USD</button>
              </div>
            </div>

            <button className="cc-text-gray-300 hover:cc-text-white cc-transition-colors">
              <Search size={20} />
            </button>

            <a href={cartUrl} className="cc-relative cc-text-gray-300 hover:cc-text-brand-accent cc-transition-colors">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="cc-absolute cc--top-2 cc--right-2 cc-bg-brand-accent cc-text-white cc-text-xs cc-font-bold cc-rounded-full cc-h-5 cc-w-5 cc-flex cc-items-center cc-justify-center">
                  {cartCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:cc-hidden cc-flex cc-items-center">
            <a href={cartUrl} className="cc-relative cc-text-gray-300 hover:cc-text-brand-accent cc-transition-colors cc-mr-4">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="cc-absolute cc--top-2 cc--right-2 cc-bg-brand-accent cc-text-white cc-text-xs cc-font-bold cc-rounded-full cc-h-5 cc-w-5 cc-flex cc-items-center cc-justify-center">
                  {cartCount}
                </span>
              )}
            </a>
            <button
              onClick={toggleMenu}
              className="cc-text-gray-300 hover:cc-text-white cc-p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:cc-hidden cc-bg-brand-dark cc-border-t cc-border-white/10">
          <div className="cc-px-2 cc-pt-2 cc-pb-3 cc-space-y-1 sm:cc-px-3">
            {NAV_LINKS.map((link) =>
              link.children ? (
                // Mobile dropdown
                <div key={link.label}>
                  <div className="cc-px-3 cc-py-4 cc-text-base cc-font-bold cc-uppercase cc-text-gray-400">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <a
                      key={child.path}
                      href={getHref(child.path, child.isExternal)}
                      target={child.isExternal ? "_blank" : undefined}
                      rel={child.isExternal ? "noopener noreferrer" : undefined}
                      className="cc-block cc-px-6 cc-py-3 cc-text-sm cc-font-medium cc-text-white hover:cc-bg-white/5 hover:cc-text-brand-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : link.isExternal ? (
                <a
                  key={link.path}
                  href={getHref(link.path, link.isExternal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cc-block cc-px-3 cc-py-4 cc-text-base cc-font-bold cc-uppercase cc-text-white hover:cc-bg-white/5 hover:cc-text-brand-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.path}
                  href={getHref(link.path, link.isExternal)}
                  className="cc-block cc-px-3 cc-py-4 cc-text-base cc-font-bold cc-uppercase cc-text-white hover:cc-bg-white/5 hover:cc-text-brand-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderEmbed;
