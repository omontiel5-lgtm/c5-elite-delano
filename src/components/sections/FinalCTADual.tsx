'use client';

import { ArrowRight, Check } from 'lucide-react';
import { useQualificationModal } from '@/components/providers/ModalProvider';
import { BRAND } from '@/lib/constants';

const VIDEOCALL_BENEFITS = [
  'Diagnóstico de tu objetivo y capital disponible',
  'Te decimos si Delano es el match correcto para ti',
  'O si otro proyecto del portafolio C5 hace más sentido',
  'Revisión de unidades disponibles según tu perfil',
  'Si no hay match, te lo decimos de frente',
];

const GUIDE_BENEFITS = [
  'Las 10 preconstrucciones con mejor proyección 2026',
  'Comparativo de ubicación, ticket y calendario de pagos',
  'Quién es el desarrollador detrás de cada proyecto',
  'Qué perfil de inversionista encaja con cada uno',
  'Actualizado al trimestre actual',
];

export function FinalCTADual() {
  const openModal = useQualificationModal();
  const guideUrl = `${BRAND.whatsappLink}?text=${encodeURIComponent(
    'Hola C5, me interesa recibir la guía Top 10 de pre-construcciones Miami.'
  )}`;

  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-champagne-600 mb-4">¿Listo para empezar?</p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-espresso-800 leading-tight text-balance mb-4">
            Dos formas de empezar — ambas gratis, ninguna vende.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-espresso-800/10 border border-espresso-800/10 max-w-6xl mx-auto">
          {/* Card 1: Videollamada estratégica (Recomendado) */}
          <article className="bg-white p-10 lg:p-12 flex flex-col relative">
            <span className="absolute top-0 right-0 bg-champagne-500 text-espresso-900 text-xs uppercase tracking-widest px-4 py-2 font-medium">
              Recomendado
            </span>
            <p className="eyebrow mb-3">Para quien tiene capital y plazo</p>
            <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-3 leading-tight">
              Videollamada estratégica con tu specialist
            </h3>
            <p className="text-sm text-espresso-700/70 mb-8">
              Zoom · 20-25 min · Sin venta. Sin presión.
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {VIDEOCALL_BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 text-espresso-700">
                  <Check className="h-5 w-5 text-champagne-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-3 bg-espresso-800 px-8 py-4 text-sm font-medium uppercase tracking-widest text-sand-50 transition-all hover:bg-espresso-900"
            >
              Agendar mi videollamada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </article>

          {/* Card 2: Guía Top 10 */}
          <article className="bg-white p-10 lg:p-12 flex flex-col">
            <p className="eyebrow mb-3">Si quieres conocer el mercado primero</p>
            <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-3 leading-tight">
              Recibí la guía Top 10 de pre-construcciones de Miami
            </h3>
            <p className="text-sm text-espresso-700/70 mb-8">
              PDF gratuito · te la enviamos a tu correo.
            </p>
            <ul className="space-y-3 mb-10 flex-1">
              {GUIDE_BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 text-espresso-700">
                  <Check className="h-5 w-5 text-champagne-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={guideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border-2 border-espresso-800 px-8 py-4 text-sm font-medium uppercase tracking-widest text-espresso-800 transition-all hover:bg-espresso-800 hover:text-sand-50"
            >
              Recibir la guía
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </article>
        </div>

        <p className="text-center text-sm text-espresso-700/60 italic mt-12 max-w-2xl mx-auto">
          ¿Prefieres WhatsApp directo? Ícono verde abajo a la derecha. Te responde un asistente y, si hay match
          con tu caso, te conecta con un specialist en minutos.
        </p>
      </div>
    </section>
  );
}
