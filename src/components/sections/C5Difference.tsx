import { CalendarRange, Sparkles, Crown } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { C5_DIFFERENCES } from '@/lib/team';

const ICONS = [CalendarRange, Sparkles, Crown];

export function C5Difference() {
  return (
    <section className="bg-espresso-800 section-padding text-sand-50 grain">
      <div className="container-c5">
        <SectionHeading
          eyebrow="La diferencia C5"
          title="Tres ventajas que ningún otro broker puede ofrecerte."
          subtitle="Porque nuestro acuerdo formalizado con el desarrollador no es transferible. Solo nuestros clientes acceden."
          light
        />

        <div className="grid gap-8 lg:grid-cols-3 mt-20">
          {C5_DIFFERENCES.map((diff, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={diff.title}
                className="group relative border border-sand-50/15 bg-espresso-900/40 p-10 backdrop-blur-sm transition-all duration-500 hover:border-champagne-400/60 hover:bg-espresso-900/60"
              >
                <div className="absolute -top-px left-0 h-px w-full bg-gradient-to-r from-transparent via-champagne-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-8">
                  <div className="inline-flex h-14 w-14 items-center justify-center border border-champagne-400/40 bg-champagne-400/5">
                    <Icon className="h-6 w-6 text-champagne-400" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl lg:text-3xl mb-5 text-sand-50 leading-tight">
                  {diff.title}
                </h3>

                <p className="text-sand-100/80 leading-relaxed mb-6">
                  {diff.description}
                </p>

                <p className="text-sm text-champagne-400/90 italic border-l border-champagne-400/40 pl-4">
                  {diff.note}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-20 max-w-2xl text-center font-serif text-2xl italic text-sand-50/70 text-balance">
          &ldquo;No vendemos un edificio. Estructuramos el acceso a él.&rdquo;
        </p>
      </div>
    </section>
  );
}
