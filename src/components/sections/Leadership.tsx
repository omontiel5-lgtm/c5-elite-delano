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
                {/* Equipo: reemplazar con <Image src={member.imageSrc} alt={member.imageAlt} fill className="object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sand-300 text-xs uppercase tracking-widest text-center px-6">
                    Foto profesional
                    <br />
                    {member.name}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-3xl lg:text-4xl text-espresso-800 mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="eyebrow mb-6">{member.role}</p>
                <ul className="space-y-3">
                  {member.bullets.map((b) => (
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
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-sand-100 relative overflow-hidden grain"
              >
                <div className="absolute inset-0 flex items-center justify-center text-sand-300 text-xs uppercase tracking-widest">
                  Foto {i}
                </div>
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
