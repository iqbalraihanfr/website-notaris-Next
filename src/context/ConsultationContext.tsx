'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Consultation {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  date: string;
}

interface ConsultationContextType {
  consultations: Consultation[];
  addConsultation: (consultation: Omit<Consultation, 'id' | 'date'>) => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const useConsultation = (): ConsultationContextType => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};

interface ConsultationProviderProps {
  children: ReactNode;
}

export const ConsultationProvider: React.FC<ConsultationProviderProps> = ({ children }) => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  const addConsultation = (consultation: Omit<Consultation, 'id' | 'date'>) => {
    const newConsultation: Consultation = {
      ...consultation,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setConsultations([...consultations, newConsultation]);
  };

  return (
    <ConsultationContext.Provider value={{ consultations, addConsultation }}>
      {children}
    </ConsultationContext.Provider>
  );
};
