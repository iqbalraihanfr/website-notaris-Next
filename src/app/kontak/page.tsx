import React from 'react';
import { Layout } from "../../app/layout";
import PageHeader from '../../components/ui/PageHeader';
import { Mail, Phone, MapPin, User, MessageSquare } from 'lucide-react';

const KontakPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Kontak Kami" 
        subtitle="Hubungi tim Notaris Digital untuk informasi lebih lanjut"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-notary mb-6 font-serif">
                Informasi Kontak
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-notary text-white rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Alamat Kantor</h3>
                    <p className="mt-1 text-gray-600">
                      Gedung Notaris Center, Lantai 5<br />
                      Jl. Contoh No. 123, Jakarta Selatan<br />
                      DKI Jakarta, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-notary text-white rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Telepon & WhatsApp</h3>
                    <p className="mt-1 text-gray-600">
                      +62 812 3456 7890 (Kantor)<br />
                      +62 878 9012 3456 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-notary text-white rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      info@notarisdigital.com<br />
                      konsultasi@notarisdigital.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-notary mb-6 font-serif">
                  Jam Operasional
                </h2>
                <div className="bg-notary-muted p-6 rounded-lg">
                  <table className="w-full text-gray-700">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">Senin - Jumat</td>
                        <td className="py-2 text-right">08:00 - 17:00 WIB</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">Sabtu</td>
                        <td className="py-2 text-right">09:00 - 13:00 WIB</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Minggu & Hari Libur</td>
                        <td className="py-2 text-right">Tutup</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-notary mb-6 font-serif">
                Kirim Pesan
              </h2>
              
              <form className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary focus:border-transparent"
                      placeholder="Masukkan alamat email"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary focus:border-transparent"
                    placeholder="Masukkan subjek pesan"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Pesan
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary focus:border-transparent"
                      placeholder="Tulis pesan Anda di sini"
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex justify-center items-center"
                >
                  Kirim Pesan
                </button>
              </form>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-notary mb-6 font-serif">
                  Lokasi Kami
                </h2>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px] flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-8 w-8 text-notary mx-auto mb-2" />
                    <p className="text-gray-700">
                      {/* Placeholder for Google Maps embed */}
                      Map akan ditampilkan di sini (Google Maps Embed)
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  * Dalam implementasi aktual, embedded Google Maps akan ditampilkan di sini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KontakPage;
