
import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import FormKonsultasi from '../components/konsultasi/FormKonsultasi';

const Konsultasi: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Konsultasi" 
        subtitle="Konsultasikan kebutuhan legal Anda dengan tim notaris profesional kami"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-notary mb-6 font-serif">
                Kirim Pesan Konsultasi
              </h2>
              <p className="text-gray-600 mb-6">
                Silakan isi form di bawah ini untuk berkonsultasi dengan tim notaris kami. 
                Kami akan merespons pesan Anda secepat mungkin.
              </p>
              <FormKonsultasi />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-notary mb-6 font-serif">
                Informasi Konsultasi
              </h2>
              <div className="bg-notary-muted p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-notary mb-3">Jam Konsultasi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Senin - Jumat:</span>
                    <span>08:00 - 17:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sabtu:</span>
                    <span>09:00 - 13:00 WIB</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minggu & Libur:</span>
                    <span>Tutup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-notary-muted p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-notary mb-3">Jenis Konsultasi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Konsultasi Langsung di Kantor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Konsultasi Online via Zoom/Google Meet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Konsultasi via Telepon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Konsultasi via WhatsApp</span>
                  </li>
                </ul>
              </div>

              <div className="bg-notary-muted p-6 rounded-lg">
                <h3 className="text-lg font-bold text-notary mb-3">Persiapan Konsultasi</h3>
                <p className="text-gray-700 mb-3">
                  Untuk konsultasi yang lebih efektif, silakan persiapkan:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Dokumen yang relevan dengan kebutuhan Anda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Daftar pertanyaan yang ingin Anda ajukan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Identitas diri (KTP, NPWP, dll)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Konsultasi;
