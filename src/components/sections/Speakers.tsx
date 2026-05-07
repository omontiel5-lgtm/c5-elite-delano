import { SectionHeading } from '@/components/ui/SectionHeading';
import { INDUSTRY_SPEAKERS, CULTURE_SPEAKERS } from '@/lib/team';

export function Speakers() {
  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Retiro Inmobiliario · Quién pisa nuestro escenario"
          title="Las personas que mueven Miami real estate suben primero a hablarle a nuestra audiencia."
          subtitle="Retiro Inmobiliario es el evento de bienes raíces en español más grande del mundo. +1,500 inversionistas hispanos por edición. Lo organizan Orlando y Daniel Montiel."
        />

        {/* Industria de Miami real estate */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-8 text-center">
            Industria de Miami real estate
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRY_SPEAKERS.map((s) => (
              <article key={s.name} className="bg-white border border-espresso-800/10 p-5 flex flex-col">
                <div className="aspect-[4/5] bg-sand-100 mb-4 relative overflow-hidden grain">
                  {s.imageSrc ? (
                    <img
                      src={s.imageSrc}
                      alt={s.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-sand-300 text-xs uppercase tracking-widest text-center px-2">
                      Foto pendiente
                    </div>
                  )}
                </div>
                <h4 className="font-serif text-base text-espresso-800 mb-1 leading-tight">
                  {s.name}
                </h4>
                <p className="text-xs text-espresso-700/70 leading-snug">
                  {s.role}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Cultura y autoridades LatAm */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-8 text-center">
            Cultura y autoridades LatAm
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CULTURE_SPEAKERS.map((s) => (
              <article key={s.name} className="bg-white border border-espresso-800/10 p-5 flex flex-col">
                <div className="aspect-[4/5] bg-sand-100 mb-4 relative overflow-hidden grain">
                  {s.imageSrc ? (
                    <img
                      src={s.imageSrc}
                      alt={s.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-sand-300 text-xs uppercase tracking-widest text-center px-2">
                      Foto pendiente
                    </div>
                  )}
                </div>
                <h4 className="font-serif text-base text-espresso-800 mb-1 leading-tight">
                  {s.name}
                </h4>
                <p className="text-xs text-espresso-700/70 leading-snug">
                  {s.role}
                </p>
              </article>
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
