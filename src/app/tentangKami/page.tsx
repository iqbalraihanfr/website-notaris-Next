import React from 'react';
import { Layout } from "../../app/layout";
import PageHeader from '../../components/ui/PageHeader';

// Team members data
const teamMembers = [
  {
    name: 'Dr. Budi Santoso, S.H., M.Kn.',
    role: 'Notaris & PPAT',
    bio: 'Berpengalaman lebih dari 20 tahun di bidang kenotariatan dengan spesialisasi dalam pendirian perusahaan dan transaksi properti.',
  },
  {
    name: 'Ratna Dewi, S.H., M.Kn.',
    role: 'Notaris Associate',
    bio: 'Memiliki keahlian dalam perjanjian komersial dan hukum perusahaan dengan pengalaman 12 tahun di bidang kenotariatan.',
  },
  {
    name: 'Agus Wijaya, S.H.',
    role: 'Legal Consultant',
    bio: 'Konsultan hukum dengan keahlian dalam hukum properti, waris, dan pendirian yayasan. Alumni Fakultas Hukum Universitas Indonesia.',
  },
];

// Timeline milestones
const milestones = [
  {
    year: '2005',
    title: 'Pendirian',
    description: 'Kantor notaris didirikan di Jakarta Selatan dengan fokus pada pelayanan notaris umum.',
  },
  {
    year: '2010',
    title: 'Ekspansi Layanan',
    description: 'Memperluas layanan ke bidang PPAT dan konsultasi hukum perusahaan.',
  },
  {
    year: '2015',
    title: 'Digitalisasi Layanan',
    description: 'Mengimplementasikan sistem digital untuk meningkatkan efisiensi dan kualitas layanan.',
  },
  {
    year: '2020',
    title: 'Notaris Digital',
    description: 'Meluncurkan platform Notaris Digital untuk memberikan layanan lebih cepat dan modern.',
  },
];

const TentangKami: React.FC = () => {
  return (
    <Layout>
      <PageHeader 
        title="Tentang Kami" 
        subtitle="Kenali lebih dekat Notaris Digital, partner terpercaya untuk kebutuhan legal Anda"
      />

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-notary-muted p-8 rounded-lg border-l-4 border-notary">
                <h2 className="text-2xl font-bold font-serif text-notary mb-4">Visi Kami</h2>
                <p className="text-gray-700">
                  Menjadi penyedia layanan notaris terdepan yang menggabungkan profesionalisme hukum dengan inovasi digital 
                  untuk memberikan layanan berkualitas tinggi yang mudah diakses oleh masyarakat.
                </p>
              </div>
              
              <div className="bg-notary-muted p-8 rounded-lg border-l-4 border-notary-accent">
                <h2 className="text-2xl font-bold font-serif text-notary mb-4">Misi Kami</h2>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Memberikan layanan notaris yang profesional, akurat, dan tepat waktu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Meningkatkan aksesibilitas layanan notaris melalui platform digital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Memberikan edukasi hukum praktis kepada masyarakat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-notary-accent mr-2">•</span>
                    <span>Menjunjung tinggi integritas dan etika profesi notaris</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-notary mb-4">Tim Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Didukung oleh para profesional berpengalaman dan berkomitmen untuk memberikan layanan terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-notary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-notary text-center mb-1">{member.name}</h3>
                <p className="text-notary-accent text-center text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-notary mb-4">Perjalanan Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Perjalanan kami dalam memberikan layanan notaris terbaik selama lebih dari satu dekade.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-notary pl-8 ml-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-12 w-8 h-8 bg-notary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-notary-muted p-6 rounded-lg">
                    <div className="inline-block px-3 py-1 bg-notary text-white text-sm font-medium rounded mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-notary mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TentangKami;
