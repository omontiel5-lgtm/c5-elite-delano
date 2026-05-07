'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useQualificationModal } from '@/components/providers/ModalProvider';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const openModal = useQualificationModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-espresso-900/95 backdrop-blur-sm py-3 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-c5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="C5 Elite"
            className="h-10 w-auto"
          />
        </a>

        <button
          type="button"
          onClick={openModal}
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all',
            scrolled
              ? 'bg-champagne-500 text-espresso-900 hover:bg-champagne-400'
              : 'border border-champagne-400/60 text-champagne-400 hover:bg-champagne-500 hover:text-espresso-900 hover:border-champagne-500'
          )}
        >
          Agendar llamada
        </button>
      </div>
    </nav>
  );
}
