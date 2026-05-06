import { BRAND } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-espresso-900 text-sand-50/70">
      <div className="container-c5 py-16">
        {/* Gold divider */}
        <div className="h-px w-24 bg-champagne-500 mb-12" />

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-sand-50 mb-2">C5 ELITE</p>
            <p className="eyebrow text-champagne-400 mb-4">
              División premium de C5 Global
            </p>
            <p className="text-sm leading-relaxed text-sand-50/60">
              Especialistas en inversión inmobiliaria internacional. Servicio para
              inversionistas con capital desde $700,000 USD.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-champagne-400 mb-4">Contacto</p>
            <ul className="space-y-2 text-sm">
              <li>{BRAND.city}</li>
              <li>{BRAND.address}</li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-champagne-400 transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                WhatsApp:{' '}
                <a
                  href={BRAND.whatsappLink}
                  className="hover:text-champagne-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BRAND.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="eyebrow text-champagne-400 mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacidad" className="hover:text-champagne-400 transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-champagne-400 transition-colors">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a
                  href="/real-estate-disclosure"
                  className="hover:text-champagne-400 transition-colors"
                >
                  Real estate disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom legal disclaimer */}
        <div className="border-t border-sand-50/10 pt-8">
          <p className="text-xs text-sand-50/50 leading-relaxed text-center max-w-4xl mx-auto">
            © {new Date().getFullYear()} C5 Elite. Todos los derechos reservados. C5
            Elite es una división de C5 Global Real Estate, eXp Realty Licensed in
            Florida. Esta información tiene carácter referencial y no constituye asesoría
            financiera, fiscal o legal individualizada. Consulte siempre con su asesor
            profesional antes de tomar decisiones de inversión.
          </p>
        </div>
      </div>
    </footer>
  );
}
