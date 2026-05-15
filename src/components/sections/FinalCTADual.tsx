'use client';

import { ArrowRight, Check } from 'lucide-react';
import { useQualificationModal } from '@/components/providers/ModalProvider';
import { BRAND } from '@/lib/constants';

const VIDEOCALL_BENEFITS = [
  'Evaluamos si Delano es el match para tu caso',
  'Proyecciones de renta con datos del comparable más cercano',
  'Calendario de pagos extendido — desglose paso a paso',
  'Estructura legal sugerida (LLC, trust, individual)',
  'Costos totales reales hasta cierre (sin sorpresas)',
];

const GUIDE_BENEFITS = [
  'Top 10 preconstrucciones activas de Miami (no solo Delano)',
  'Comparativa de calendario de pagos por proyecto',
  'Perfil financiero ideal para cada tipo de inversión',
  'Datos del desarrollador, arquitecto y interiorista',
  'Versión actualizada trimestralmente',
];

export function FinalCTADual() {
  const openModal = useQualificationModal();
  const guideUrl = `${BRAND.whatsappLink}?text=${encodeURIComponent(
    'Quiero la guía Top 10 preconstrucciones Miami (Delano Residences)'
  )}`;

  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-champagne-600 mb-4">¿Listo para empezar?</p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-espresso-800 leading-tight text-balance mb-4">
            Dos formas de empezar — ambas gratis, ninguna vende.
          </h2>
          <p className="text-lg text-espresso-700/80 leading-relaxed">
            Una para ti que ya sabes lo que quieres y necesitas validar el match. Otra para ti
            que quieres ver el panorama completo de Miami antes de decidir.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-espresso-800/10 border border-espresso-800/10 max-w-6xl mx-auto">
          {/* Card 1: Videollamada estratégica (Recomendado) */}
          <article className="bg-white p-10 lg:p-12 flex flex-col relative">
            <span className="absolute top-0 right-0 bg-champagne-500 text-espresso-900 text-xs uppercase tracking-widest px-4 py-2 font-medium">
              Recomendado
            </span>
            <p className="eyebrow mb-3">Opción A · Videollamada estratégica</p>
            <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-3 leading-tight">
              Evaluamos tu caso para Delano Residences.
            </h3>
            <p className="text-sm text-espresso-700/70 mb-8">
              15–20 min con tu especialista asignado. Por Zoom.
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
              Agenda tu videollamada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
            <p className="text-xs text-espresso-700/60 mt-4 italic">
              Capital líquido desde $300,000 USD. Si no hay match, te lo decimos.
            </p>
          </article>

          {/* Card 2: Guía Top 10 */}
          <article className="bg-white p-10 lg:p-12 flex flex-col">
            <p className="eyebrow mb-3">Opción B · Guía Top 10 Miami</p>
            <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-3 leading-tight">
              Recibe el panorama completo antes de elegir.
            </h3>
            <p className="text-sm text-espresso-700/70 mb-8">
              PDF actualizado · entrega inmediata por WhatsApp.
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
              Recibe la guía por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
            <p className="text-xs text-espresso-700/60 mt-4 italic">
              Sin obligación de agendar llamada después. Vas a tu ritmo.
            </p>
          </article>
        </div>

        <p className="text-center text-sm text-espresso-700/60 italic mt-12 max-w-2xl mx-auto">
          Si prefieres resolverlo directo por WhatsApp, escríbenos al {BRAND.whatsapp}. Te responde
          un asistente y, si hay match con tu caso, te conecta con tu especialista en minutos.
        </p>
      </div>
    </section>
  );
}
