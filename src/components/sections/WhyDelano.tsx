import Image from 'next/image';
import { Building2, Briefcase, DollarSign, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROJECT } from '@/lib/constants';
import { NEARBY_LANDMARKS } from '@/lib/team';

const PROJECT_DATA = [
  { icon: Building2, label: 'Ubicación', value: PROJECT.location },
  { icon: Briefcase, label: 'Desarrollador', value: PROJECT.developer },
  { icon: DollarSign, label: 'Rango de precios', value: PROJECT.priceRangeDisplay },
  { icon: Calendar, label: 'Entrega estimada', value: PROJECT.deliveryEstimate },
];

export function WhyDelano() {
  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Marca de lujo internacional · Desarrollo de PMG"
          title="Delano Residences Miami"
          subtitle="Delano es una de las marcas de hospitalidad de lujo más reconocidas del mundo. Sus residencias en Miami llevan esa firma a la propiedad privada: amenidades de hotel, servicio de marca y diseño de autor en un edificio que va a redefinir el skyline de la ciudad."
        />

        {/* Renders grid 3x2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {[
            { src: '/images/Delano%20Residences%20%26%20Hotel%20Miami%20-%20Sky%20Lounge.jpg', alt: 'Delano Residences Miami - Sky Lounge' },
            { src: '/images/Delano%20Residences%20%26%20Hotel%20Miami%20-%20Pool%20Deck.jpg', alt: 'Delano Residences Miami - Pool Deck' },
            { src: '/images/Delano%20Residences%20%26%20Hotel%20Miami%20-%20Residence%20Kitchen.jpg', alt: 'Delano Residences Miami - Residence Kitchen' },
            { src: '/images/Delano%20Residences%20%26%20Hotel%20Miami%20-%20Residence%20Dining%20Room.jpg', alt: 'Delano Residences Miami - Dining Room' },
            { src: '/images/Delano%20Residences%20%26%20Hotel%20Miami%20-%20Fitness%20Center.jpg', alt: 'Delano Residences Miami - Fitness Center' },
            { src: '/images/skydeck.png', alt: 'Delano Residences Miami - Sky Deck' },
          ].map((render, i) => (
            <div
              key={i}
              className="aspect-[4/5] bg-sand-100 relative overflow-hidden grain"
            >
              <img
                src={render.src}
                alt={render.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Project data cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-espresso-800/10 border border-espresso-800/10 mb-24">
          {PROJECT_DATA.map((item) => (
            <div
              key={item.label}
              className="bg-sand-50 p-6 lg:p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className="h-4 w-4 text-champagne-600" strokeWidth={1.5} />
                <span className="eyebrow">{item.label}</span>
              </div>
              <p className="font-serif text-lg lg:text-xl text-espresso-800 leading-tight text-balance">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Observation Deck — la amenidad ancla */}
        <div className="bg-espresso-800 text-sand-50 p-12 lg:p-20 mb-24 grain">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] bg-espresso-700 relative overflow-hidden">
              <img
                src="/images/Delano%20Residences%20%26%20Hotel%20Miami%20-%20Observation%20Deck.jpg"
                alt="Observation Deck Delano Residences Miami - Primer observation deck residencial de Miami"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="eyebrow text-champagne-400 mb-6">
                Una amenidad que ningún otro edificio de Miami tiene
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-sand-50 leading-tight mb-6 text-balance">
                El primer Observation Deck residencial de Miami.
              </h3>
              <p className="text-sand-100/80 text-lg leading-relaxed mb-6">
                Delano Residences será el primer edificio residencial de Miami con un
                observation deck privado para sus residentes. Una pieza arquitectónica
                que convierte al edificio en un ícono permanente del skyline de la
                ciudad.
              </p>
              <p className="font-serif text-xl italic text-champagne-400/90 border-l border-champagne-400/50 pl-5">
                No estás comprando una unidad en un edificio. Estás comprando un
                fragmento del paisaje urbano más reconocible de Miami.
              </p>
            </div>
          </div>
        </div>

        {/* Vistas cardinales desde el edificio */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="eyebrow text-champagne-600 mb-4">Vistas desde tu unidad</p>
            <h3 className="font-serif text-3xl lg:text-4xl text-espresso-800 leading-tight text-balance max-w-3xl mx-auto">
              360° del corazón de Miami a través de tus ventanas.
            </h3>
            <div className="divider-gold mt-8" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/north%20view.png', label: 'Vista Norte', alt: 'Vista Norte desde Delano Residences Miami' },
              { src: '/images/east%20view.png', label: 'Vista Este', alt: 'Vista Este — Biscayne Bay y océano' },
              { src: '/images/south%20view.png', label: 'Vista Sur', alt: 'Vista Sur — Brickell skyline' },
              { src: '/images/west%20view.png', label: 'Vista Oeste', alt: 'Vista Oeste — Downtown Miami' },
            ].map((view) => (
              <div key={view.label} className="relative">
                <div className="aspect-[4/3] bg-sand-100 overflow-hidden grain relative">
                  <img
                    src={view.src}
                    alt={view.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-3 text-center">{view.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vecindad con Waldorf */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="eyebrow text-champagne-600 mb-4">El nuevo eje de lujo</p>
            <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-espresso-800 leading-tight text-balance max-w-4xl mx-auto">
              Junto al futuro edificio residencial más alto de Miami.
            </h3>
            <div className="divider-gold mt-8" />
          </div>

          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-espresso-700/80 leading-relaxed mb-6">
              Delano Residences se levanta literalmente al lado de{' '}
              <strong className="text-espresso-800">Waldorf Astoria Residences Miami</strong>,
              el que será el edificio residencial más alto de toda la ciudad. Ambos
              proyectos son desarrollados por PMG.
            </p>
            <p className="text-lg text-espresso-700/80 leading-relaxed">
              Cuando un desarrollador del calibre de PMG decide construir dos torres
              icónicas una al lado de la otra, no es casualidad. Es la apuesta deliberada
              de crear el nuevo eje de lujo residencial de Miami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-espresso-800/10 border border-espresso-800/10">
            <div className="bg-sand-50 p-10">
              <p className="eyebrow mb-3">Waldorf Astoria Residences Miami</p>
              <div className="aspect-video bg-sand-100 mb-6 relative overflow-hidden">
                <img
                  src="/images/waldorf-render.jpg"
                  alt="Waldorf Astoria Residences Miami"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-2 text-sm text-espresso-700">
                <li>• Edificio residencial más alto de Miami</li>
                <li>• 100 pisos</li>
                <li>• Marca Waldorf Astoria</li>
                <li>• Por PMG</li>
                <li>• Desde $1M USD</li>
              </ul>
            </div>
            <div className="bg-sand-50 p-10 border-l-2 border-champagne-500">
              <p className="eyebrow text-champagne-600 mb-3">Delano Residences Miami</p>
              <div className="aspect-video bg-sand-100 mb-6 relative overflow-hidden">
                <img
                  src="/images/Delano%20Residences%20%26%20Hotel%20Miami%20-%20Sky%20Lounge.jpg"
                  alt="Delano Residences Miami"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-2 text-sm text-espresso-700">
                <li>• Primer Observation Deck residencial de Miami</li>
                <li>• Marca Delano</li>
                <li>• Por PMG</li>
                <li>• Desde $800K USD</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-12 font-serif text-xl italic text-espresso-700/80">
            Dos torres. Un mismo desarrollador. El nuevo skyline de Miami.
          </p>
        </div>

        {/* Ubicación / Landmarks */}
        <div className="bg-white border border-espresso-800/10 p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-4">Ubicación</p>
              <h3 className="font-serif text-3xl lg:text-4xl text-espresso-800 leading-tight mb-6 text-balance">
                El centro neurálgico de Miami.
              </h3>
              <p className="text-espresso-700/80 leading-relaxed">
                Delano se levanta en el corazón de Downtown Miami, frente a Biscayne Bay.
                A pasos del Brickell Financial District, Bayside Marketplace, Miami
                Worldcenter, museos, marinas y restaurantes de autor. Una zona en
                transformación constante que el mercado lleva años apreciando con fuerza.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-6">A minutos de</p>
              <ul className="space-y-3">
                {NEARBY_LANDMARKS.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between border-b border-espresso-800/10 pb-3"
                  >
                    <span className="text-espresso-800">{l.name}</span>
                    <span className="font-serif text-champagne-600 text-lg">
                      {l.minutes} min
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-espresso-700/50 mt-4 italic">
                Distancias estimadas en auto.
              </p>
            </div>
          </div>
        </div>

        {/* PMG endorsement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">El respaldo institucional</p>
          <h3 className="font-serif text-2xl lg:text-3xl text-espresso-800 mb-6 leading-tight text-balance">
            PMG · Property Markets Group
          </h3>
          <p className="text-espresso-700/80 leading-relaxed">
            Uno de los desarrolladores con mayor trayectoria en Miami, con un portafolio
            que incluye proyectos icónicos como{' '}
            <strong>Echo Brickell, Muse Sunny Isles y Waldorf Astoria Residences Miami</strong>.
            Como aliados directos de PMG, C5 Elite estructura para sus clientes
            condiciones que el mercado abierto no puede ofrecer.
          </p>
        </div>
      </div>
    </section>
  );
}
