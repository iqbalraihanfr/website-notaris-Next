
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-notary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">Notaris Digital</h3>
            <p className="text-gray-300 mb-4">
              Layanan notaris profesional dan terpercaya untuk kebutuhan legal Anda. 
              Kami menyediakan solusi hukum yang efisien dan tepat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-notary-accent transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-gray-300 hover:text-notary-accent transition-colors duration-200">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-gray-300 hover:text-notary-accent transition-colors duration-200">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/konsultasi" className="text-gray-300 hover:text-notary-accent transition-colors duration-200">
                  Konsultasi
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-300 hover:text-notary-accent transition-colors duration-200">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-notary-accent" />
                <span className="text-gray-300">
                  Jl. Contoh No. 123, Jakarta Selatan, DKI Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-notary-accent" />
                <span className="text-gray-300">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-notary-accent" />
                <span className="text-gray-300">info@notarisdigital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Notaris Digital. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
