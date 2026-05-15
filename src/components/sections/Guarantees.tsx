import { ShieldCheck, Lock, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: 'Es un diagnóstico, no una venta',
    description:
      'La primera llamada evalúa si Delano hace sentido para tu caso. Si tu capital o timeline no califica, te lo decimos directo. Si otra propiedad te conviene más, te la recomendamos. Si necesitas 6 meses para estructurar, también te lo decimos.',
  },
  {
    icon: Lock,
    title: 'Tu información no se comparte',
    description:
      'No vendemos ni compartimos tu información. No te asignamos a 4 agentes simultáneos. No usamos tu data para campañas externas.',
  },
  {
    icon: MapPin,
    title: 'Oficina física verificable en Miami',
    description:
      'Tienes 3 formas de verificar que existimos: dirección física pública, ubicación en Google Maps y video-llamada a nuestro estudio si lo pides. Estamos acá, no escondidos.',
  },
];

export function Guarantees() {
  return (
    <section className="bg-sand-50 section-padding">
      <div className="container-c5">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Las tres garantías de nuestra consulta."
          subtitle="Pero la mayoría de brokers no las da. Nosotros las ponemos por escrito."
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
