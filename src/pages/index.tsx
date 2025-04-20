
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const servicesPreview = [
  {
    title: 'Pendirian PT',
    description: 'Layanan pendirian Perseroan Terbatas dengan legalitas yang kuat dan proses yang efisien.',
  },
  {
    title: 'Akta Jual Beli',
    description: 'Pembuatan akta jual beli properti dan aset dengan kepastian hukum yang terjamin.',
  },
  {
    title: 'Akta Waris',
    description: 'Solusi terpercaya untuk pembagian waris sesuai dengan ketentuan hukum yang berlaku.',
  },
];

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-notary text-white h-[80vh] min-h-[500px] flex items-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              Solusi Notaris Digital untuk Kebutuhan Legal Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Layanan notaris profesional dengan pendekatan modern dan efisien untuk kebutuhan hukum Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/konsultasi" className="btn-secondary">
                Konsultasi Sekarang
              </Link>
              <Link to="/layanan" className="btn-outline">
                Jelajahi Layanan
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <a 
            href="#about-preview" 
            className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-sm mb-2">Pelajari Lebih Lanjut</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-notary to-notary-light opacity-90"></div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-notary font-serif">
                Tentang Notaris Digital
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Notaris Digital hadir sebagai solusi terpercaya untuk berbagai kebutuhan legal Anda. 
                Dengan pengalaman lebih dari 15 tahun, kami memberikan layanan notaris yang profesional, 
                cepat, dan sesuai dengan ketentuan hukum yang berlaku.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Tim kami terdiri dari notaris berpengalaman dan staff yang terlatih untuk memberikan 
                pelayanan terbaik dan solusi yang tepat untuk setiap kebutuhan klien.
              </p>
              <Link to="/tentang" className="btn-primary">
                Selengkapnya Tentang Kami
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full h-72 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-notary-light bg-opacity-20 flex items-center justify-center text-notary">
                    <span className="text-lg font-medium">Foto Tim Notaris</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-notary-accent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-notary font-serif mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan notaris untuk kebutuhan personal maupun bisnis Anda dengan proses yang cepat dan tepat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-notary text-white rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-notary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/layanan" className="btn-primary">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-notary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Perlukan Bantuan Notaris?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan legal Anda dengan tim notaris profesional kami sekarang juga.
          </p>
          <Link to="/konsultasi" className="btn-secondary text-lg px-8 py-3">
            Mulai Konsultasi
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
