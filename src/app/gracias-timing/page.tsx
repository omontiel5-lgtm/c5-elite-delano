import { ThankYou } from '@/components/sections/ThankYou';

export const metadata = {
  title: 'Gracias por tu interés | C5 Elite',
  robots: { index: false, follow: false },
};

export default function GraciasTimingPage() {
  return (
    <ThankYou
      title="Gracias por tu interés."
      body={`Nuestras llamadas están reservadas para inversionistas con planes de decisión inmediata. Como tu horizonte es más largo, queremos respetar tu tiempo.

Te invitamos a recibir nuestros reportes mensuales del mercado de Miami para mantenerte informado mientras maduras tu decisión.`}
      showGuideDownload
      showReportSubscription
      closing="Cuando estés listo para evaluar propiedades específicas, vuelve y agenda directo."
    />
  );
}
