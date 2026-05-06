'use client';

import { ArrowRight } from 'lucide-react';
import { useQualificationModal } from '@/components/providers/ModalProvider';
import { PROJECT } from '@/lib/constants';

export function Hero() {
  const openModal = useQualificationModal();

  return (
    <section className="relative min-h-screen overflow-hidden bg-espresso-800 grain">
      {/* Background image — equipo: reemplazar /public/images/hero-delano.jpg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-700" />
        <div className="absolute inset-0 bg-[url('/images/hero-delano-placeholder.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 gradient-warm" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center pt-32 pb-16">
        <div className="container-c5">
          <div className="max-w-5xl">
            {/* Eyebrow with brand strip */}
            <p className="text-xs sm:text-sm uppercase tracking-widest text-sand-200 mb-10 font-medium">
              <span className="text-champagne-400">eXp Realty</span>
              <span className="mx-3 text-sand-200/40">·</span>
              <span>Licensed in Florida</span>
              <span className="mx-3 text-sand-200/40">·</span>
              <span className="text-champagne-400">C5 Elite</span>
              <span className="mx-3 text-sand-200/40">·</span>
              <span>25+ años</span>
              <span className="mx-3 text-sand-200/40">·</span>
              <span>100% enfoque hispano</span>
            </p>

            <p className="text-xs sm:text-sm uppercase tracking-widest text-champagne-400 mb-10 font-medium">
              — Reconocidos por Univisión · Telemundo · Imagen Miami · Alcaldía de Doral —
            </p>

            <h1 className="heading-editorial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-balance text-sand-50 mb-10 max-w-5xl">
              La firma inmobiliaria{' '}
              <span className="accent-italic">hispana</span> que tus medios de
              confianza{' '}
              <span className="accent-italic">ya validaron.</span>
            </h1>

            <div className="max-w-3xl mb-12 space-y-3">
              <p className="text-lg sm:text-xl text-sand-100/90 leading-relaxed">
                Especialistas en <strong className="text-champagne-400">Delano Residences Miami</strong>{' '}
                — Downtown, junto a Waldorf Astoria.
              </p>
              <p className="text-lg sm:text-xl text-sand-100/90 leading-relaxed">
                Marca de lujo internacional. Desarrollo de PMG. Primer Observation Deck
                residencial de Miami.
              </p>
              <p className="text-lg sm:text-xl text-sand-100/90 leading-relaxed">
                Como aliados directos del desarrollador, accedemos al inventario antes que
                el mercado.{' '}
                <span className="text-champagne-400">
                  Posición exclusiva en uno de los proyectos más icónicos en construcción.
                </span>
              </p>
            </div>

            {/* Single CTA */}
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex items-center gap-3 bg-champagne-500 px-10 py-5 text-sm sm:text-base font-medium uppercase tracking-widest text-espresso-900 transition-all duration-300 hover:bg-champagne-400 hover:shadow-2xl"
            >
              Evalúa tu caso de inversión
              <span className="opacity-60">·</span>
              <span>15 min</span>
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </button>

            <p className="mt-6 max-w-xl text-sm text-sand-200/70 italic leading-relaxed">
              Solo para inversionistas con capital desde {PROJECT.minInvestmentDisplay}{' '}
              (cash o apalancado) y timeline definido. Te llamamos antes de agendar.
            </p>

            {/* Bottom strip stats */}
            <div className="mt-20 pt-10 border-t border-sand-100/15">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-sand-100/70 uppercase tracking-wider">
                <span>+11,500 compradores internacionales asesorados</span>
                <span className="text-sand-100/30">·</span>
                <span>+200K seguidores</span>
                <span className="text-sand-100/30">·</span>
                <span>Figuras públicas verificadas</span>
                <span className="text-sand-100/30">·</span>
                <span className="text-champagne-400">100% enfoque hispano</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
