'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLightbox } from '@/components/providers/LightboxProvider';

type EditorialClip = {
  outlet: string;
  hook: string;
  description: string;
  embedUrl: string;
};

// Reels/posts de Instagram donde C5 / los hermanos Montiel aparecen en medios.
// Orlando: si quieres cambiar la selección, reemplaza el embedUrl de Instagram aquí.
const EDITORIAL_CLIPS: EditorialClip[] = [
  {
    outlet: 'Univisión Despierta América',
    hook: '"De la angustia a la abundancia"',
    description:
      'Orlando Montiel presenta en vivo su libro sobre cómo cambiar la relación con el dinero en familia.',
    embedUrl: 'https://www.instagram.com/p/C0m80EXuFMm/embed',
  },
  {
    outlet: 'Telemundo Hoy Día',
    hook: '"De vender ollas a millonarios"',
    description:
      'El origen de los hermanos Montiel narrado en horario AM nacional.',
    embedUrl: 'https://www.instagram.com/p/C8pytu5KGLr/embed',
  },
  {
    outlet: 'Imagen Miami · Most Influential Men',
    hook: '"Entre los 7 hombres más influyentes de Miami"',
    description:
      'Daniel y Orlando Montiel reconocidos junto a Emilio Estefan Jr., Walter Kolm e Ignacio Meyer.',
    embedUrl: 'https://www.instagram.com/p/C1DBwalOFFp/embed',
  },
];

export function Editorial() {
  const openLightbox = useLightbox();

  return (
    <section className="bg-white section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="La autoridad detrás del nombre"
          title="Cuando lo decimos nosotros, es marketing. Cuando lo dicen ellos, es editorial."
        />

        {/* Media logos band */}
        <div className="mb-20 mt-12">
          <img
            src="/images/media-logos.png"
            alt="Reconocidos por Univisión, Telemundo, Imagen Miami, Doral, El Heraldo, El Mexicano, Notistarz, The Abundance Revolution, Sinergéticos"
            className="w-full max-w-6xl mx-auto h-auto"
          />
        </div>

        {/* IG embed cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {EDITORIAL_CLIPS.map((clip) => (
            <article
              key={clip.outlet}
              className="bg-sand-50 border border-espresso-800/10 overflow-hidden flex flex-col"
            >
              <div className="h-[680px] bg-sand-100 relative overflow-hidden">
                <iframe
                  src={clip.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  frameBorder={0}
                  scrolling="no"
                  allow="encrypted-media; clipboard-write; picture-in-picture"
                  title={`Aparición C5 en ${clip.outlet}`}
                />
              </div>
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <p className="eyebrow text-champagne-600 mb-3">{clip.outlet}</p>
                <p className="font-serif text-lg lg:text-xl text-espresso-800 italic leading-tight mb-3">
                  {clip.hook}
                </p>
                <p className="text-sm text-espresso-700/80 leading-relaxed">
                  {clip.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Doral institutional recognition — 2 fotos arriba, copy abajo */}
        <div className="mt-20 max-w-6xl mx-auto">
          <p className="eyebrow text-center mb-6">Reconocimiento institucional</p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() =>
                openLightbox(
                  '/images/mayor-fraga-ceremonia.jpg',
                  'Mayor Christi Fraga entregando el Congratulatory Certificate a Orlando y Daniel Montiel en el evento Retiro Inmobiliario, abril 2024'
                )
              }
              aria-label="Ampliar foto de la ceremonia con Mayor Fraga"
              className="aspect-[4/3] bg-sand-100 relative overflow-hidden block w-full cursor-zoom-in group"
            >
              <img
                src="/images/mayor-fraga-ceremonia.jpg"
                alt="Mayor Christi Fraga entregando el Congratulatory Certificate a Orlando y Daniel Montiel en el evento Retiro Inmobiliario, abril 2024"
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                openLightbox(
                  '/images/mayor-fraga-certificado.png',
                  'Congratulatory Certificate oficial enmarcado de la City of Doral, Florida'
                )
              }
              aria-label="Ampliar Congratulatory Certificate"
              className="aspect-[4/3] bg-sand-100 relative overflow-hidden flex items-center justify-center p-4 block w-full cursor-zoom-in group"
            >
              <img
                src="/images/mayor-fraga-certificado.png"
                alt="Congratulatory Certificate oficial enmarcado de la City of Doral, Florida"
                className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105"
              />
            </button>
          </div>

          <p className="text-sm text-espresso-700/70 italic text-center mb-8 max-w-2xl mx-auto">
            Mayor Christi Fraga entregando el Congratulatory Certificate a Orlando y Daniel Montiel
            en el evento Retiro Inmobiliario, abril 2024.
          </p>

          <h3 className="font-serif text-3xl lg:text-4xl text-espresso-800 leading-tight mb-4 text-balance text-center max-w-3xl mx-auto">
            La Alcaldía de Doral subió al escenario para reconocernos.
          </h3>
          <p className="text-espresso-700/80 leading-relaxed text-center max-w-3xl mx-auto">
            En abril de 2024, la Alcaldesa Christi Fraga llegó por sorpresa a una edición de Retiro
            Inmobiliario y entregó un <em>Congratulatory Certificate</em> de la Ciudad de Doral a
            Orlando y Daniel Montiel por su impacto en la comunidad de emprendedores latinos del sur
            de Florida.
          </p>
        </div>
      </div>
    </section>
  );
}
