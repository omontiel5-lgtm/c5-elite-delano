import { SectionHeading } from '@/components/ui/SectionHeading';

const ICONS_PEOPLE = [
  { name: 'Don Francisco', desc: 'Leyenda de la TV en español', src: '/images/speaker-don-francisco.png' },
  { name: 'Emilio Estefan Jr.', desc: 'Productor multi-Grammy', src: '/images/speaker-emilio-estefan.png' },
  { name: 'Ignacio Meyer', desc: 'Presidente de Univisión', src: '/images/speaker-ignacio-meyer.png' },
  { name: 'Margarita Pasos', desc: 'Coach motivacional', src: '/images/speaker-margarita-pasos.png' },
  { name: 'Ismael Cala', desc: 'Periodista · ex-CNN', src: '/images/speaker-ismael-cala.png' },
];

export function Authority() {
  return (
    <section className="bg-white section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="La autoridad detrás del nombre"
          title="Somos la mesa institucional latina de Miami real estate."
        />

        {/* C5 Portfolio — track record + project logos */}
        <div className="mb-20">
          <img
            src="/images/c5-portfolio.png"
            alt="C5 Elite — +$500M en ventas, +750 unidades cerradas, 12+ proyectos en portfolio, +11,500 compradores internacionales asesorados. Proyectos: One Twenty Brickell, Domus Brickell Center, Frida Kahlo Wynwood Residences, The Elser Hotel, Cassia Coral Gables, 14 River District, Lennar, Visions Resort & Spa, Millenia Park, Jean-Georges Miami Tropic, The Standard Brickell, The Rider Residences, Delano Residences, Flow, One Park Tower by Turnberry"
            className="w-full h-auto"
          />
        </div>

        {/* Media recognition — press logos */}
        <div className="mb-20">
          <img
            src="/images/media-logos.png"
            alt="Reconocidos por Univisión, Telemundo, Imagen Miami, Doral, El Heraldo, El Mexicano, Notistarz, The Abundance Revolution, Sinergéticos"
            className="w-full max-w-6xl mx-auto h-auto"
          />
        </div>

        {/* Iconic people grid */}
        <div className="mb-20">
          <p className="eyebrow text-center mb-12">Íconos que validan a C5</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ICONS_PEOPLE.map((p) => (
              <div key={p.name} className="text-center">
                <div className="aspect-square bg-sand-100 mb-4 relative overflow-hidden grain">
                  {p.src ? (
                    <img
                      src={p.src}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sand-300 text-xs uppercase tracking-widest text-center px-2">
                        Foto
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="font-serif text-lg text-espresso-800 mb-1 leading-tight">
                  {p.name}
                </h4>
                <p className="text-xs text-espresso-700/70 uppercase tracking-wide">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Doral institutional recognition */}
        <div className="bg-espresso-800 text-sand-50 p-12 lg:p-16 grain">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-espresso-700 relative overflow-hidden">
              <img
                src="/images/mayor-fraga-certificado.png"
                alt="Mayor Christi Fraga entregando Congratulatory Certificate a Orlando y Daniel Montiel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-champagne-400 mb-4">Reconocimiento institucional</p>
              <h3 className="font-serif text-3xl lg:text-4xl text-sand-50 leading-tight mb-6 text-balance">
                Reconocidos por la Alcaldía de Doral.
              </h3>
              <p className="text-sand-100/80 leading-relaxed">
                En abril 2024, la Alcaldesa Christi Fraga entregó un{' '}
                <em>Congratulatory Certificate</em> de la Ciudad de Doral a Orlando y
                Daniel Montiel por su impacto en la comunidad de emprendedores latinos
                en el sur de Florida.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial closing */}
        <div className="text-center max-w-3xl mx-auto mt-20">
          <p className="font-serif text-3xl lg:text-4xl text-espresso-800 italic leading-tight text-balance mb-3">
            &ldquo;No vamos a sus eventos. Ellos vienen al nuestro.&rdquo;
          </p>
          <p className="text-sm text-espresso-700/70 italic">
            Esa es la diferencia entre un broker y una mesa institucional.
          </p>
        </div>
      </div>
    </section>
  );
}
