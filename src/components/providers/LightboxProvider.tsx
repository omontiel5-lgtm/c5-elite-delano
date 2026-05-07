'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface LightboxContextValue {
  openLightbox: (src: string, alt: string) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = useCallback((src: string, alt: string) => {
    setImage({ src, alt });
  }, []);

  const close = useCallback(() => setImage(null), []);

  // Cerrar con tecla Escape
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [image, close]);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      {image && (
        <div
          role="dialog"
          aria-label="Imagen ampliada"
          className="fixed inset-0 z-[100] bg-espresso-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar imagen ampliada"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 bg-sand-50/10 hover:bg-sand-50/20 text-sand-50 transition-colors"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-full object-contain cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox debe usarse dentro de LightboxProvider');
  return ctx.openLightbox;
}
