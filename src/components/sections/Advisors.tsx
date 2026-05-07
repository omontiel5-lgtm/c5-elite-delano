import { SectionHeading } from '@/components/ui/SectionHeading';
import { ADVISORS } from '@/lib/team';

export function Advisors() {
  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Tu equipo dedicado"
          title="Tres especialistas para inversionistas internacionales."
          subtitle="No llegas a un pool de 500 agentes. Una de estas 3 expertas te acompaña directamente durante todo el proceso, desde la primera llamada hasta el cierre y la activación de tu propiedad."
        />

        <div className="grid md:grid-cols-3 gap-px bg-espresso-800/10 border border-espresso-800/10 mt-16">
          {ADVISORS.map((advisor) => (
            <article
              key={advisor.name}
              className="bg-sand-50 p-8 lg:p-10 flex flex-col"
            >
              <div className="aspect-[4/5] bg-sand-100 mb-6 relative overflow-hidden grain">
                <img
                  src={advisor.imageSrc}
                  alt={advisor.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl text-espresso-800 mb-2 leading-tight">
                {advisor.name}
              </h3>
              <p className="eyebrow text-xs mb-5">Asesora especializada</p>
              <ul className="space-y-2">
                {advisor.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm text-espresso-700/90 leading-relaxed"
                  >
                    <span className="text-champagne-500 mt-1.5 flex-shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-xl italic text-espresso-700/80 text-balance">
          Cuando te asignen tu asesora, será una de ellas. No un agente más en una larga
          cadena.
        </p>
        <p className="text-center text-sm text-espresso-700/60 mt-3">
          Esa es la diferencia entre una mesa institucional y un broker.
        </p>
      </div>
    </section>
  );
}
