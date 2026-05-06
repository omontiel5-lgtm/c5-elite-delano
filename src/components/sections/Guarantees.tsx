import { ShieldCheck, Lock, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: 'No vendemos en la primera llamada',
    description:
      'La llamada es 100% educativa. Si no hace match con tu objetivo, te lo decimos de frente.',
  },
  {
    icon: Lock,
    title: 'Tu información no se comparte',
    description:
      'Política de privacidad explícita. No te llenamos de llamadas ni spam de otros brokers.',
  },
  {
    icon: MapPin,
    title: 'Oficina física verificable en Miami',
    description:
      'Dirección, Google Maps, video-llamada a nuestro estudio si lo pides. Estamos acá, no escondidos.',
  },
];

export function Guarantees() {
  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Tres garantías que cualquier broker debería darte."
          subtitle="Pero la mayoría no las da. Nosotros las ponemos por escrito."
        />

        <div className="grid gap-8 md:grid-cols-3 mt-16">
          {GUARANTEES.map((g) => (
            <div key={g.title} className="card-elegant text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sand-100">
                <g.icon
                  className="h-7 w-7 text-champagne-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-2xl text-espresso-800 mb-4 leading-tight">
                {g.title}
              </h3>
              <p className="text-espresso-700/80 leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
