'use client';

import { ArrowRight, Download } from 'lucide-react';
import { useQualificationModal } from '@/components/providers/ModalProvider';

export function CTAFinal() {
  const openModal = useQualificationModal();

  return (
    <section className="bg-espresso-900 text-sand-50 section-padding grain">
      <div className="container-c5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow text-champagne-400 mb-6">Próximo paso</p>
          <h2 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-sand-50 leading-[1.1] mb-8 text-balance">
            ¿Listo para ir <span className="accent-italic">más profundo?</span>
          </h2>
          <p className="text-lg lg:text-xl text-sand-100/80 leading-relaxed max-w-3xl mx-auto mb-12 text-pretty">
            Dos opciones — ambas gratis, ninguna vende. Si tu perfil hace match con
            Delano, agendamos una conversación con detalles de unidades disponibles. Si
            no hace match, te lo decimos de frente y respetamos tu tiempo.
          </p>

          <div className="divider-gold mb-12" />

          {/* Doble CTA — patrón de Daniel */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <button
              type="button"
              onClick={openModal}
              className="group flex-1 inline-flex items-center justify-center gap-3 bg-champagne-500 px-8 py-5 text-sm font-medium uppercase tracking-widest text-espresso-900 transition-all duration-300 hover:bg-champagne-400 hover:shadow-2xl"
            >
              Evalúa tu caso de inversión
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </button>

            <a
              href="#guia"
              className="group flex-1 inline-flex items-center justify-center gap-3 border border-champagne-400/60 px-8 py-5 text-sm font-medium uppercase tracking-widest text-champagne-400 transition-all duration-300 hover:bg-champagne-400 hover:text-espresso-900"
            >
              <Download className="h-4 w-4" strokeWidth={1.5} />
              Recibir la guía Top 10
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6 text-xs text-sand-100/50 uppercase tracking-widest">
            <p>Diagnóstico de 15 min</p>
            <p>Conoce el mercado primero</p>
          </div>
        </div>
      </div>
    </section>
  );
}
