import { SectionHeading } from '@/components/ui/SectionHeading';

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
      'El origen de los hermanos Montiel narrado en horario AM nacional. Reemplazar URL del reel con el embed real.',
    embedUrl: 'https://www.instagram.com/p/PLACEHOLDER_TELEMUNDO/embed',
  },
  {
    outlet: 'Imagen Miami · Most Influential Men',
    hook: '"Entre los 7 hombres más influyentes de Miami"',
    description:
      'Daniel y Orlando Montiel reconocidos junto a Emilio Estefan Jr., Walter Kolm e Ignacio Meyer. Reemplazar URL con el post oficial.',
    embedUrl: 'https://www.instagram.com/p/PLACEHOLDER_IMAGEN/embed',
  },
];

export function Editorial() {
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
              <div className="aspect-[9/16] bg-sand-100 relative overflow-hidden">
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

        {/* Doral institutional recognition */}
        <div className="bg-espresso-800 text-sand-50 p-12 lg:p-16 grain mt-20 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-espresso-700 relative overflow-hidden">
              <img
                src="/images/mayor-fraga-certificado.png"
                alt="Mayor Christi Fraga entregando el Congratulatory Certificate de la City of Doral a Orlando y Daniel Montiel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-champagne-400 mb-4">Reconocimiento institucional</p>
              <h3 className="font-serif text-3xl lg:text-4xl text-sand-50 leading-tight mb-6 text-balance">
                La Alcaldía de Doral subió al escenario para reconocernos.
              </h3>
              <p className="text-sand-100/80 leading-relaxed">
                En abril de 2024, la Alcaldesa Christi Fraga llegó por sorpresa a una edición de Retiro
                Inmobiliario y entregó un <em>Congratulatory Certificate</em> de la Ciudad de Doral a
                Orlando y Daniel Montiel por su impacto en la comunidad de emprendedores latinos del sur
                de Florida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
