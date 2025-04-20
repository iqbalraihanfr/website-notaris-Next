
import React, { useState } from 'react';
import { useConsultation } from '../../context/ConsultationContext';

const services = [
  { id: 'pendirian-pt', name: 'Pendirian PT' },
  { id: 'akta-jual-beli', name: 'Akta Jual Beli' },
  { id: 'akta-waris', name: 'Akta Waris' },
  { id: 'surat-keterangan-hak-waris', name: 'Surat Keterangan Hak Waris' },
  { id: 'sertifikat-tanah', name: 'Sertifikat Tanah' },
  { id: 'akta-hibah', name: 'Akta Hibah' },
  { id: 'legalisasi-dokumen', name: 'Legalisasi Dokumen' },
  { id: 'lainnya', name: 'Lainnya' },
];

const FormKonsultasi: React.FC = () => {
  const { addConsultation } = useConsultation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Validate
    if (!name || !email || !service || !message) {
      alert('Mohon lengkapi semua kolom');
      setSubmitting(false);
      return;
    }

    // Add consultation
    addConsultation({
      name,
      email,
      service: services.find(s => s.id === service)?.name || service,
      message,
    });

    // Reset form
    setName('');
    setEmail('');
    setService('');
    setMessage('');
    setSubmitting(false);
    setSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {success && (
        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 text-green-700">
          Pesan konsultasi Anda telah terkirim. Kami akan segera menghubungi Anda.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary"
            placeholder="Masukkan nama lengkap"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary"
            placeholder="Masukkan email"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Jenis Layanan</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary"
            required
          >
            <option value="">Pilih Jenis Layanan</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-notary h-32"
            placeholder="Jelaskan kebutuhan konsultasi Anda"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full btn-primary"
          disabled={submitting}
        >
          {submitting ? 'Mengirim...' : 'Kirim Konsultasi'}
        </button>
      </form>
    </div>
  );
};

export default FormKonsultasi;
