import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { NAV_LINKS } from '../constants';
import { Currency } from '../types';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const [currency, setCurrency] = useState<Currency>(Currency.CAD);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <Logo className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) =>
              link.isExternal ? (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-brand-accent text-gray-300`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-brand-accent ${location.pathname === link.path ? 'text-brand-accent' : 'text-gray-300'
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group cursor-pointer flex items-center space-x-1 text-sm font-bold text-gray-300 hover:text-white">
              <span>{currency}</span>
              <ChevronDown size={14} />
              {/* Mock Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-24 bg-white text-brand-dark rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => setCurrency(Currency.CAD)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >CAD</button>
                <button
                  onClick={() => setCurrency(Currency.USD)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >USD</button>
              </div>
            </div>

            <button className="text-gray-300 hover:text-white transition-colors">
              <Search size={20} />
            </button>

            <Link to="/cart" className="relative text-gray-300 hover:text-brand-accent transition-colors">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative text-gray-300 hover:text-brand-accent transition-colors mr-4">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) =>
              link.isExternal ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="block px-3 py-4 text-base font-bold uppercase text-white hover:bg-white/5 hover:text-brand-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-4 text-base font-bold uppercase text-white hover:bg-white/5 hover:text-brand-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;