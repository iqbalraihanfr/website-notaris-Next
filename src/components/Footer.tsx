import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Tentang Kami', href: '/tentangKami' },
      { name: 'Tim Kami', href: '/tentangKami#tim' },
      { name: 'Karir', href: '/karir' },
      { name: 'Blog', href: '/blog' },
    ],
    services: [
      { name: 'Pendirian PT', href: '/layanan#pendirian-pt' },
      { name: 'Akta Jual Beli', href: '/layanan#akta-jual-beli' },
      { name: 'Akta Waris', href: '/layanan#akta-waris' },
      { name: 'Semua Layanan', href: '/layanan' },
    ],
    support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Kontak', href: '/kontak' },
      { name: 'Konsultasi', href: '/konsultasi' },
      { name: 'Data Konsultasi', href: '/data-konsultasi' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 max-w-[2000px] mx-auto">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-4">Notaris Digital</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Layanan notaris profesional dan terpercaya untuk kebutuhan legal Anda. 
              Kami menyediakan solusi hukum yang efisien dan tepat.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Dukungan</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-400" />
              <span className="text-gray-400">
                Jl. Contoh No. 123, Jakarta Selatan, DKI Jakarta, Indonesia
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary-400" />
              <span className="text-gray-400">+62 812 3456 7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary-400" />
              <span className="text-gray-400">info@notarisdigital.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Notaris Digital. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
