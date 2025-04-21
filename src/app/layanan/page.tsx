/**
 * @file Layanan.tsx
 * @description Halaman yang menampilkan daftar layanan notaris yang tersedia
 * @author Iqbal Raihan Faturrahman Rahardjo
 * @created 2024
 */

import React from 'react';
import { Layout } from "../../app/layout";
import PageHeader from '../../components/ui/PageHeader';
import Link from 'next/link';

/**
 * Data layanan notaris yang tersedia
 * @type {Array<{
 *   id: string,
 *   title: string,
 *   description: string,
 *   features: string[],
 *   icon: string
 * }>}
 */
const services = [
  {
    id: 'pendirian-pt',
    title: 'Pendirian PT',
    description: 'Pendirian badan usaha berbentuk Perseroan Terbatas dengan legalitas yang kuat sesuai dengan peraturan yang berlaku.',
    features: [
      'Konsultasi pendirian PT',
      'Pembuatan akta pendirian',
      'Pengurusan SK Kemenkumham',
      'Pengurusan NPWP & PKP',
      'Pendaftaran NIB',
    ],
    icon: '🏢',
  },
  {
    id: 'pendirian-cv',
    title: 'Pendirian CV',
    description: 'Layanan pendirian CV dengan proses cepat dan efisien untuk memulai usaha Anda dengan landasan hukum yang kuat.',
    features: [
      'Konsultasi pendirian CV',
      'Pembuatan akta CV',
      'Pengurusan izin usaha',
      'Pendaftaran NPWP',
      'Pendaftaran NIB',
    ],
    icon: '🏪',
  },
  {
    id: 'pendirian-yayasan',
    title: 'Pendirian Yayasan',
    description: 'Layanan pendirian yayasan untuk organisasi nirlaba dengan tujuan sosial, keagamaan, dan kemanusiaan.',
    features: [
      'Konsultasi pendirian yayasan',
      'Pembuatan akta yayasan',
      'Pengurusan SK Kemenkumham',
      'Pengurusan NPWP yayasan',
      'Pendaftaran izin operasional',
    ],
    icon: '🤝',
  },
  {
    id: 'akta-jual-beli',
    title: 'Akta Jual Beli',
    description: 'Pembuatan akta jual beli properti dan aset dengan kepastian hukum agar transaksi Anda terlindungi secara legal.',
    features: [
      'Verifikasi dokumen kepemilikan',
      'Pembuatan akta jual beli',
      'Pengurusan balik nama',
      'Konsultasi pajak transaksi',
      'Pendampingan saat transaksi',
    ],
    icon: '🏠',
  },
  {
    id: 'akta-hibah',
    title: 'Akta Hibah',
    description: 'Pembuatan akta hibah untuk pengalihan hak kepemilikan properti atau aset kepada pihak lain tanpa kompensasi.',
    features: [
      'Verifikasi dokumen kepemilikan',
      'Pembuatan akta hibah',
      'Pengurusan balik nama',
      'Konsultasi pajak hibah',
      'Pendampingan saat pengalihan',
    ],
    icon: '🎁',
  },
  {
    id: 'akta-waris',
    title: 'Akta Waris',
    description: 'Layanan pembuatan akta waris untuk pembagian warisan sesuai dengan ketentuan hukum yang berlaku.',
    features: [
      'Konsultasi kewarisan',
      'Pembuatan surat keterangan waris',
      'Pembagian harta waris',
      'Pengurusan balik nama aset',
      'Mediasi pembagian warisan',
    ],
    icon: '📜',
  },
  {
    id: 'pengurusan-ppat',
    title: 'Pengurusan PPAT',
    description: 'Layanan PPAT (Pejabat Pembuat Akta Tanah) untuk transaksi properti dan tanah dengan kepastian hukum.',
    features: [
      'Pembuatan AJB (Akta Jual Beli)',
      'Pembuatan APHB (Akta Pembagian Hak Bersama)',
      'Pembuatan APHT (Akta Pemberian Hak Tanggungan)',
      'Pengurusan balik nama sertifikat',
      'Pengecekan sertifikat',
    ],
    icon: '🏞️',
  },
  {
    id: 'konsultasi-hukum',
    title: 'Konsultasi Hukum',
    description: 'Layanan konsultasi hukum terkait kenotariatan dan PPAT untuk membantu Anda memahami aspek legal.',
    features: [
      'Konsultasi tatap muka',
      'Konsultasi online',
      'Pendampingan legal',
      'Pembuatan legal opinion',
      'Review dokumen hukum',
    ],
    icon: '⚖️',
  },
];

/**
 * Komponen Halaman Layanan
 * @component
 * @returns {JSX.Element} Halaman yang menampilkan daftar layanan notaris
 */
const Layanan: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Layanan Notaris" 
        subtitle="Berbagai layanan notaris dan PPAT profesional untuk kebutuhan personal dan bisnis Anda"
      />

      {/* Bagian Daftar Layanan */}
      <section className="py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[2000px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="card group hover:border-violet-500 border-2 border-gray-100"
                >
                  <div className="w-12 h-12 bg-black text-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h4 className="font-medium text-gray-800 mb-2">Fitur Layanan:</h4>
                  <ul className="text-gray-600 space-y-1 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-violet-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/konsultasi"
                    className="text-black hover:text-violet-500 font-medium inline-flex items-center"
                  >
                    Konsultasi Sekarang
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Call-to-Action */}
      <section className="py-16 bg-notary-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-notary mb-6">
              Butuh Layanan Khusus?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Jika Anda membutuhkan layanan notaris yang tidak tercantum di atas, 
              tim kami siap membantu kebutuhan spesifik Anda. Hubungi kami untuk 
              konsultasi personal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/konsultasi" className="btn-primary">
                Konsultasi Gratis
              </Link>
              <Link href="/kontak" className="btn-outline">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Layanan;
