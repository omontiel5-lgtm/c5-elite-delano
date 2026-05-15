import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/lib/team';

export function Process() {
  return (
    <section className="bg-white section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Cómo compras Delano desde tu país sin ser residente de EE.UU."
          subtitle="Seis pasos, ~6–10 semanas hasta cierre (si el calendario de pagos lo permite). Cero necesidad de visa, residencia o cuenta bancaria estadounidense."
        />

        <div className="max-w-4xl mx-auto mt-16">
          <ol className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-espresso-800/15 hidden md:block" />

            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.number}
                className="relative pb-12 last:pb-0 md:pl-24"
              >
                {/* Number circle */}
                <div className="md:absolute md:left-0 md:top-0 mb-4 md:mb-0 inline-flex h-16 w-16 items-center justify-center bg-espresso-800 text-sand-50 font-serif text-xl">
                  {step.number}
                </div>

                <div className="border-l-2 border-champagne-500 pl-6 md:border-none md:pl-0">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="font-serif text-2xl text-espresso-800 leading-tight">
                      {step.title}
                    </h3>
                    <span className="eyebrow">{step.duration}</span>
                  </div>
                  <p className="text-espresso-700/80 leading-relaxed text-pretty">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Garantía callout */}
        <div className="max-w-3xl mx-auto mt-16 bg-sand-100 border-l-4 border-champagne-500 p-8 lg:p-10">
          <p className="font-serif text-lg lg:text-xl text-espresso-800 leading-relaxed text-balance">
            Todo el proceso se hace desde tu país con poder notarial. No necesitas visa
            ni residencia estadounidense para comprar.
          </p>
        </div>
      </div>
    </section>
  );
}
