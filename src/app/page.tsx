import React from "react";
import Link from "next/link";
import { ArrowDown, CheckCircle, Clock, Shield, Users, FileText, Building, Home } from "lucide-react";

const servicesPreview = [
  {
    title: "Pendirian PT",
    description:
      "Layanan pendirian Perseroan Terbatas dengan legalitas yang kuat dan proses yang efisien.",
    icon: Building,
  },
  {
    title: "Akta Jual Beli",
    description:
      "Pembuatan akta jual beli properti dan aset dengan kepastian hukum yang terjamin.",
    icon: Home,
  },
  {
    title: "Akta Waris",
    description:
      "Solusi terpercaya untuk pembagian waris sesuai dengan ketentuan hukum yang berlaku.",
    icon: FileText,
  },
];

const features = [
  {
    title: "Tim Profesional",
    description: "Dilayani oleh notaris berpengalaman dan staff yang terlatih.",
    icon: Users,
  },
  {
    title: "Proses Cepat",
    description: "Penyelesaian dokumen legal dengan waktu yang efisien.",
    icon: Clock,
  },
  {
    title: "Kepastian Hukum",
    description: "Dokumen legal yang sah dan diakui secara hukum.",
    icon: Shield,
  },
  {
    title: "Konsultasi Gratis",
    description: "Layanan konsultasi awal tanpa biaya untuk memahami kebutuhan Anda.",
    icon: CheckCircle,
  },
];

const Index: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900 opacity-90"></div>
        <div className="absolute inset-0 pattern-grid-lg opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-serif">
              Solusi Notaris Digital untuk Kebutuhan Legal Anda
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Layanan notaris profesional dengan pendekatan modern dan efisien
              untuk kebutuhan hukum Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/konsultasi" className="btn-secondary">
                Konsultasi Sekarang
              </Link>
              <Link href="/layanan" className="btn-outline">
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
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Mengapa Memilih Kami</h2>
            <p className="section-subtitle">
              Kami menawarkan layanan notaris yang profesional, cepat, dan terpercaya untuk berbagai kebutuhan legal Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card group hover:border-primary-200 border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[rgb(2,132,199)] group-hover:text-white transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="section-title text-primary-700">
                Tentang Notaris Digital
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Notaris Digital hadir sebagai solusi terpercaya untuk berbagai
                kebutuhan legal Anda. Dengan pengalaman lebih dari 15 tahun,
                kami memberikan layanan notaris yang profesional, cepat, dan
                sesuai dengan ketentuan hukum yang berlaku.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Tim kami terdiri dari notaris berpengalaman dan staff yang
                terlatih untuk memberikan pelayanan terbaik dan solusi yang
                tepat untuk setiap kebutuhan klien.
              </p>
              <Link href="/tentangKami" className="btn-primary">
                Selengkapnya Tentang Kami
              </Link>
            </div>
            <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="w-full h-72 md:h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-soft">
                  <div className="w-full h-full bg-primary-100 bg-opacity-20 flex items-center justify-center text-primary-600">
                    <span className="text-lg font-medium">
                      Foto Tim Notaris
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-2xl shadow-soft"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-primary-700">
              Layanan Kami
            </h2>
            <p className="section-subtitle">
              Kami menyediakan berbagai layanan notaris untuk kebutuhan personal
              maupun bisnis Anda dengan proses yang cepat dan tepat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => (
              <div
                key={index}
                className="card group hover:border-primary-200 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[rgb(2,132,199)] group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={`/layanan#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Pelajari Lebih Lanjut
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/layanan" className="btn-primary">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-primary-700">
              Apa Kata Klien Kami
            </h2>
            <p className="section-subtitle">
              Testimoni dari klien yang telah menggunakan layanan kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card bg-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Nama Klien {item}</h4>
                    <p className="text-gray-500 text-sm">Pendirian PT</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;Layanan yang sangat profesional dan cepat. Tim Notaris Digital membantu saya dalam proses pendirian PT dengan sangat baik.&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid-lg opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Perlukan Bantuan Notaris?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan legal Anda dengan tim notaris profesional
            kami sekarang juga.
          </p>
          <Link href="/konsultasi" className="btn-secondary text-lg px-8 py-3">
            Mulai Konsultasi
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
