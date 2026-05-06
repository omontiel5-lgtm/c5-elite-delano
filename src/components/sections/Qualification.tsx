import { Check, X } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { QUALIFICATION_CRITERIA } from '@/lib/team';

export function Qualification() {
  return (
    <section className="bg-white section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Antes de continuar"
          title="Quién califica para hablar con nosotros."
          subtitle="Trabajamos con un perfil específico de inversionista. Esta es nuestra forma honesta de decirte si tiene sentido que conversemos."
        />

        <div className="grid md:grid-cols-2 gap-px bg-espresso-800/10 border border-espresso-800/10 mt-16 max-w-5xl mx-auto">
          {/* Yes column */}
          <div className="bg-sand-50 p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne-500">
                <Check className="h-5 w-5 text-espresso-900" strokeWidth={2.5} />
              </div>
              <h3 className="font-serif text-xl text-espresso-800 uppercase tracking-wider">
                Esta evaluación es para ti si:
              </h3>
            </div>
            <ul className="space-y-4">
              {QUALIFICATION_CRITERIA.yes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-espresso-700 leading-relaxed"
                >
                  <Check
                    className="h-5 w-5 text-champagne-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No column */}
          <div className="bg-white p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso-800/10">
                <X
                  className="h-5 w-5 text-espresso-700"
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="font-serif text-xl text-espresso-800 uppercase tracking-wider">
                NO es para ti si:
              </h3>
            </div>
            <ul className="space-y-4">
              {QUALIFICATION_CRITERIA.no.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-espresso-700/70 leading-relaxed"
                >
                  <X
                    className="h-5 w-5 text-espresso-700/50 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="font-serif text-2xl lg:text-3xl text-espresso-800 italic leading-tight text-balance mb-3">
            Si te identificas con la columna izquierda, agendemos una conversación.
          </p>
          <p className="text-sm text-espresso-700/70">
            Si no, te agradecemos sinceramente tu interés y respetamos tu tiempo.
          </p>
        </div>
      </div>
    </section>
  );
}
