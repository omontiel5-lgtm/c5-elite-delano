import { BookOpen, Instagram, Youtube, Linkedin, Globe, Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ADVISORS, type AdvisorLink } from '@/lib/team';

const LINK_ICONS: Record<AdvisorLink['type'], typeof BookOpen> = {
  book: BookOpen,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  website: Globe,
  reviews: Star,
};

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
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-serif text-2xl text-espresso-800 mb-2 leading-tight">
                {advisor.name}
              </h3>
              <p className="eyebrow text-xs mb-5">Asesora especializada · Inversionistas internacionales</p>

              {advisor.links && advisor.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {advisor.links.map((link) => {
                    const Icon = LINK_ICONS[link.type];
                    return (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-espresso-800 border border-espresso-800/20 hover:border-champagne-500 hover:bg-champagne-500/10 hover:text-espresso-900 transition-all"
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                        <span>{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              )}
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
