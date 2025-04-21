'use client';
// Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentangKami' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Konsultasi', path: '/konsultasi' },
    { name: 'Data Konsultasi', path: '/dataKonsultasi' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center max-w-[2000px] mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className={`text-xl sm:text-2xl font-serif font-bold transition-colors duration-300 ${
                scrolled ? 'text-primary-600' : 'text-white'
              }`}>
                Kantor <span className="text-accent-500">Notaris</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors duration-200 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-primary-600' 
                    : 'text-white hover:text-accent-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/konsultasi" 
              className={`px-4 text-amber-50 hover:text-amber-500
                 py-2 rounded-lg font-medium transition-all duration-200 ${
                scrolled 
                  ? 'bg-violet-500 text-white hover:bg-accent-100' 
                  : 'bg-violet-500 text-primary-600 hover:bg-accent-100'
              }`}
            >
              Konsultasi Gratis
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden transition-colors duration-200 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <div className="bg-white rounded-xl shadow-soft p-4 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="block py-2 px-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/konsultasi"
                className="block mt-2 py-2 px-3 btn-primary rounded-md font-medium text-center transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
