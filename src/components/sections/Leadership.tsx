import { SectionHeading } from '@/components/ui/SectionHeading';
import { FOUNDERS } from '@/lib/team';

export function Leadership() {
  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Fundadores y voces de referencia en Miami real estate"
          title="Detrás de C5 Elite: los hermanos Montiel."
          subtitle="C5 Elite no es una operación corporativa anónima. Detrás de cada decisión están Daniel y Orlando Montiel, los hermanos que construyeron la red de inversión inmobiliaria latina más relevante de Miami."
        />

        <div className="grid lg:grid-cols-2 gap-px bg-espresso-800/10 border border-espresso-800/10 mt-16">
          {FOUNDERS.map((member) => (
            <article
              key={member.name}
              className="bg-sand-50 p-10 lg:p-14 flex flex-col"
            >
              <div className="aspect-[4/5] bg-sand-100 mb-8 relative overflow-hidden grain">
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif text-3xl lg:text-4xl text-espresso-800 mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="eyebrow mb-6">{member.role}</p>
                <ul className="space-y-3">
                  {member.bullets?.map((b) => (
                    <li key={b} className="flex gap-3 text-espresso-700">
                      <span className="text-champagne-500 mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Evidence row of small photos */}
        <div className="mt-16">
          <p className="text-center eyebrow mb-8">
            Apariciones públicas y validaciones institucionales
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {/* Instagram reel — primer item, izquierda */}
            <div className="aspect-[4/5] bg-sand-100 relative overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/C0m80EXuFMm/embed"
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                scrolling="no"
                allow="encrypted-media; clipboard-write; picture-in-picture"
                title="Aparición pública C5 Global"
              />
            </div>

            {/* Resto: fotos */}
            {[
              { src: '/images/despierta%20america%20.png', alt: 'Univisión Despierta América' },
              { src: '/images/revista%20imagen%20most%20influential.png', alt: 'Revista Imagen - Most Influential Men Miami' },
              { src: '', alt: '' },
              { src: '', alt: '' },
            ].map((event, i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-sand-100 relative overflow-hidden grain"
              >
                {event.src ? (
                  <img
                    src={event.src}
                    alt={event.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sand-300 text-xs uppercase tracking-widest">
                    Foto {i + 2}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-serif text-xl italic text-espresso-700/80 text-balance">
          El cliente que invierte con C5 Elite no compra con una marca anónima. Compra
          con personas que tienen reputación pública que cuidar.
        </p>
      </div>
    </section>
  );
}
