'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { useLightbox } from '@/components/providers/LightboxProvider';
import { INDUSTRY_SPEAKERS, CULTURE_SPEAKERS, type Speaker } from '@/lib/team';

function SpeakerCard({ s }: { s: Speaker }) {
  const openLightbox = useLightbox();
  const hasImage = Boolean(s.imageSrc);

  return (
    <article className="bg-white border border-espresso-800/10 p-5 flex flex-col">
      <button
        type="button"
        onClick={() => hasImage && openLightbox(s.imageSrc, s.imageAlt)}
        disabled={!hasImage}
        aria-label={hasImage ? `Ampliar foto de ${s.name}` : `Foto pendiente de ${s.name}`}
        className="aspect-[4/5] bg-sand-100 mb-4 relative overflow-hidden block w-full group cursor-zoom-in disabled:cursor-default"
      >
        {hasImage ? (
          <img
            src={s.imageSrc}
            alt={s.imageAlt}
            className="absolute inset-0 w-full h-full object-contain transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sand-300 text-xs uppercase tracking-widest text-center px-2">
            Foto pendiente
          </div>
        )}
      </button>
      <h4 className="font-serif text-base text-espresso-800 mb-1 leading-tight">{s.name}</h4>
      <p className="text-xs text-espresso-700/70 leading-snug">{s.role}</p>
    </article>
  );
}

export function Speakers() {
  const openLightbox = useLightbox();

  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Eventos · Retiro Inmobiliario"
          title="El escenario inmobiliario más grande de habla hispana en U.S.A."
          subtitle="Nuestros eventos son el punto de encuentro. Cuando convocamos, la industria responde. +1,200 asistentes por edición. Los desarrolladores que construyen Miami — y las figuras culturales que mueven LatAm — pisan los escenarios de los eventos inmobiliarios que organizamos en cada ciudad."
        />

        {/* Banner: foto del evento con coaches */}
        <button
          type="button"
          onClick={() =>
            openLightbox(
              '/images/banner-retiro-coaches-2026.jpg',
              'Coaches y comunidad Retiro Inmobiliario 2026'
            )
          }
          className="aspect-[16/7] bg-sand-100 relative overflow-hidden grain mt-12 max-w-6xl mx-auto block w-full cursor-zoom-in group"
          aria-label="Ampliar foto del evento Retiro Inmobiliario 2026"
        >
          <img
            src="/images/banner-retiro-coaches-2026.jpg"
            alt="Coaches y comunidad Retiro Inmobiliario 2026"
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </button>

        {/* Industria de Miami real estate */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-8 text-center">
            Industria de Miami real estate
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {INDUSTRY_SPEAKERS.map((s) => (
              <SpeakerCard key={s.name} s={s} />
            ))}
          </div>
        </div>

        {/* Cultura y autoridades LatAm */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-8 text-center">
            Cultura y autoridades LatAm
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {CULTURE_SPEAKERS.map((s) => (
              <SpeakerCard key={s.name} s={s} />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-espresso-700/60 mt-12 italic max-w-3xl mx-auto">
          +20 speakers internacionales adicionales han subido al escenario de Retiro Inmobiliario en sus
          ediciones recientes.
        </p>

        <div className="text-center max-w-3xl mx-auto mt-16">
          <p className="font-serif text-2xl lg:text-3xl text-espresso-800 italic leading-tight text-balance mb-3">
            &ldquo;No vamos a sus eventos. Ellos vienen al nuestro.&rdquo;
          </p>
          <p className="text-sm text-espresso-700/70 italic">
            Esa es la diferencia entre un broker y la firma hispana que organiza la conferencia.
          </p>
        </div>
      </div>
    </section>
  );
}
