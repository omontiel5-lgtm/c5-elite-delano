import { CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export const metadata = {
  title: 'Tu cita | C5 Elite × Delano',
  robots: { index: false, follow: false },
};

export default function ExitoPage() {
  // El URL del calendario embed de GHL se configura en .env como NEXT_PUBLIC_GHL_CALENDAR_URL
  const calendarUrl =
    process.env.NEXT_PUBLIC_GHL_CALENDAR_URL ||
    'https://api.leadconnectorhq.com/widget/booking/PLACEHOLDER';

  return (
    <main className="min-h-screen bg-sand-50">
      <div className="container-c5 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-champagne-500 mb-8">
            <CheckCircle2 className="h-8 w-8 text-espresso-900" strokeWidth={1.5} />
          </div>

          <p className="eyebrow text-champagne-600 mb-4">Tu perfil califica</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-espresso-800 leading-tight mb-6 text-balance">
            Estás listo para una conversación con nuestro equipo.
          </h1>
          <p className="text-lg text-espresso-700/80 leading-relaxed text-pretty">
            Basado en tus respuestas, eres el tipo de inversionista con quien trabajamos.
            A continuación elige el horario para tu video llamada de 15 minutos con un
            asesor de pre-evaluación.
          </p>
        </div>

        {/* Calendar embed */}
        <div className="max-w-4xl mx-auto bg-white border border-espresso-800/10 p-6 lg:p-8 mb-12">
          <iframe
            src={calendarUrl}
            style={{ width: '100%', minHeight: '700px', border: 'none' }}
            scrolling="no"
            title="Agenda tu cita con C5 Elite"
          />
        </div>

        {/* Next steps */}
        <div className="max-w-3xl mx-auto bg-espresso-800 text-sand-50 p-8 lg:p-12 grain">
          <h2 className="font-serif text-2xl mb-6">Después de agendar recibirás:</h2>
          <ul className="space-y-3 text-sand-100/90">
            <li className="flex gap-3">
              <span className="text-champagne-400">→</span>
              <span>Confirmación inmediata por WhatsApp y email</span>
            </li>
            <li className="flex gap-3">
              <span className="text-champagne-400">→</span>
              <span>Nuestra Guía para Inversionistas en Propiedades Miami</span>
            </li>
            <li className="flex gap-3">
              <span className="text-champagne-400">→</span>
              <span>Datos directos del asesor que te atenderá</span>
            </li>
            <li className="flex gap-3">
              <span className="text-champagne-400">→</span>
              <span>Recordatorio 24h y 2h antes de la llamada</span>
            </li>
          </ul>

          <p className="mt-8 pt-8 border-t border-sand-50/15 text-sm text-sand-100/60">
            ¿Necesitas reagendar o tienes una pregunta urgente? Escríbenos por WhatsApp
            al{' '}
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-400 hover:text-champagne-300 transition-colors"
            >
              {BRAND.whatsapp}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
