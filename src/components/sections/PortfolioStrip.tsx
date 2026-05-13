'use client';

import { ArrowRight } from 'lucide-react';
import { useQualificationModal } from '@/components/providers/ModalProvider';
import { cn } from '@/lib/utils';

type PortfolioStripPosition = 'top' | 'bottom';
type PortfolioStripVariant = 'dark' | 'light';

interface PortfolioStripProps {
  position?: PortfolioStripPosition;
  variant?: PortfolioStripVariant;
}

export function PortfolioStrip({
  position = 'bottom',
  variant = 'dark',
}: PortfolioStripProps) {
  const openModal = useQualificationModal();

  const handleClick = () => {
    // GTM event push ANTES de abrir el modal para que el tag dispare con la posición
    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'portfolio_cta_click',
        cta_location: `portfolio_strip_${position}`,
      });
    }

    openModal();
  };

  const isLight = variant === 'light';

  return (
    <section
      className={cn(
        'section-padding',
        isLight
          ? 'bg-sand-50 text-espresso-800 border-y border-champagne-500/40'
          : 'bg-espresso-800 text-sand-50'
      )}
    >
      <div className="container-c5">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className={cn(
              'eyebrow mb-4',
              isLight ? 'text-champagne-600' : 'text-champagne-400'
            )}
          >
            Más allá de Delano
          </p>
          <h2
            className={cn(
              'font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-6',
              isLight ? 'text-espresso-800' : 'text-sand-50'
            )}
          >
            Acceso a la cartera{' '}
            <em
              className={cn(
                'italic font-normal',
                isLight ? 'text-champagne-600' : 'text-champagne-400'
              )}
            >
              premium
            </em>{' '}
            de Miami.
          </h2>
          <p
            className={cn(
              'text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto',
              isLight ? 'text-espresso-700/80' : 'text-sand-50/80'
            )}
          >
            Delano es nuestro proyecto destacado. Pero como asesores expertos
            del mercado, también te orientamos sobre las mejores
            pre-construcciones en Brickell, Downtown, Edgewater y Wynwood.
          </p>
          <button
            type="button"
            onClick={handleClick}
            className={cn(
              'group inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-medium uppercase tracking-widest border-2 transition-all duration-300',
              isLight
                ? 'border-champagne-500 text-espresso-800 hover:bg-champagne-500 hover:text-espresso-900'
                : 'border-sand-50 text-sand-50 hover:bg-sand-50 hover:text-espresso-800'
            )}
          >
            Ver portafolio comparativo
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
