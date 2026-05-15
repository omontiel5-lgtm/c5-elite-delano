import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND } from '@/lib/constants';

const GUIDE_DOWNLOAD_URL =
  'https://drive.google.com/drive/folders/1ZOwxMDYI6Ui-gYmVLytv18S4QwSz3Xhs';

interface ThankYouProps {
  title: string;
  body: string;
  showGuideDownload?: boolean;
  showReportSubscription?: boolean;
  closing?: string;
}

export function ThankYou({
  title,
  body,
  showGuideDownload = true,
  showReportSubscription = false,
  closing,
}: ThankYouProps) {
  return (
    <main className="min-h-screen bg-sand-50 flex items-center">
      <div className="container-c5 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-6">Gracias por tu interés</p>
            <h1 className="font-serif text-4xl lg:text-5xl text-espresso-800 leading-tight mb-8 text-balance">
              {title}
            </h1>
            <div className="divider-gold mb-8" />
            <p className="text-lg text-espresso-700/80 leading-relaxed text-pretty whitespace-pre-line">
              {body}
            </p>
          </div>

          {(showGuideDownload || showReportSubscription) && (
            <div className="bg-white border border-espresso-800/10 p-8 lg:p-10 space-y-6">
              {showGuideDownload && (
                <div className="text-center">
                  <p className="text-sm text-espresso-700/70 mb-4">
                    Te compartimos sin compromiso
                  </p>
                  <a
                    href={GUIDE_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium uppercase tracking-widest border border-espresso-800 text-espresso-800 transition-all duration-300 hover:bg-espresso-800 hover:text-sand-50"
                  >
                    <Download className="h-4 w-4" strokeWidth={1.5} />
                    Descargar guía para inversionistas
                  </a>
                </div>
              )}

              {showReportSubscription && (
                <div className="text-center pt-6 border-t border-espresso-800/10">
                  <p className="text-sm text-espresso-700/70 mb-4">
                    Recibe nuestros reportes mensuales del mercado de Miami
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Tu email"
                      className="flex-1 input-c5"
                    />
                    <Button variant="primary" size="md">
                      Suscribirme
                    </Button>
                  </form>
                </div>
              )}
            </div>
          )}

          {closing && (
            <p className="text-center mt-12 font-serif italic text-espresso-700/70 text-lg">
              {closing}
            </p>
          )}

          <p className="text-center mt-12 text-xs text-espresso-700/50">
            ¿Preguntas? WhatsApp{' '}
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne-600 hover:text-champagne-700"
            >
              {BRAND.whatsapp}
            </a>
          </p>

          <p className="text-center mt-6">
            <a
              href="/"
              className="text-xs uppercase tracking-widest text-espresso-700/60 hover:text-espresso-800 transition-colors"
            >
              ← Volver al inicio
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
