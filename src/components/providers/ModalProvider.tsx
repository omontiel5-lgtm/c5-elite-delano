'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { QualificationModal } from '@/components/form/QualificationModal';

interface ModalContextValue {
  openQualification: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openQualification: () => setOpen(true) }}>
      {children}
      <QualificationModal open={open} onClose={() => setOpen(false)} />
    </ModalContext.Provider>
  );
}

export function useQualificationModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useQualificationModal debe usarse dentro de ModalProvider');
  return ctx.openQualification;
}
