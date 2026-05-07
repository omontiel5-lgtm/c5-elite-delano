'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS } from '@/lib/team';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Lo que más preguntan antes de cerrar"
          title="Preguntas frecuentes sobre Delano y la compra desde el extranjero."
          subtitle="Si tienes una duda que no encuentras aquí, te la resolvemos en la primera llamada."
        />

        <div className="max-w-3xl mx-auto mt-16 border-t border-espresso-800/15">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-espresso-800/15">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left py-6 flex items-start gap-4 group"
                >
                  <span className="font-serif text-champagne-600 text-lg flex-shrink-0 leading-none mt-1">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-lg lg:text-xl text-espresso-800 flex-1 leading-tight group-hover:text-champagne-700 transition-colors">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-champagne-600" strokeWidth={1.5} />
                    ) : (
                      <Plus className="h-5 w-5 text-espresso-800" strokeWidth={1.5} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-8 pl-12 pr-12">
                    <p className="text-espresso-700 leading-relaxed text-pretty">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
