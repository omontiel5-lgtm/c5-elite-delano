import { Youtube, Instagram, Linkedin } from 'lucide-react';
import { BRAND } from '@/lib/constants';

const SOCIAL = [
  { icon: Youtube, label: 'C5 Global en YouTube', url: 'https://www.youtube.com/c/C5Global' },
  { icon: Instagram, label: 'Orlando Montiel en Instagram', url: 'https://www.instagram.com/orlandovmontiel/' },
  { icon: Linkedin, label: 'Orlando Montiel en LinkedIn', url: 'https://www.linkedin.com/in/orlando-montiel-65680538/' },
];

export function Footer() {
  return (
    <footer className="bg-espresso-900 text-sand-50/70">
      <div className="container-c5 py-16">
        {/* Top: brand + tagline + socials */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-2xl text-sand-50 mb-2">C5 ELITE</p>
            <p className="eyebrow text-champagne-400 mb-4">División premium de C5 Global</p>
            <p className="text-sm leading-relaxed text-sand-50/60">
              Dolariza tu patrimonio en Miami con la firma hispana #1 en preconstrucción.
            </p>

            <div className="flex gap-3 mt-6">
              {SOCIAL.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center h-10 w-10 border border-sand-50/20 text-sand-50/70 hover:text-champagne-400 hover:border-champagne-400 transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-champagne-400 mb-4">Contacto</p>
            <ul className="space-y-2 text-sm">
              <li>{BRAND.city}</li>
              <li>{BRAND.address}</li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-champagne-400 transition-colors">
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

          {/* Affiliations */}
          <div>
            <p className="eyebrow text-champagne-400 mb-4">Afiliaciones</p>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>Afiliados a eXp Realty</li>
              <li>Miembros de National Association of Realtors</li>
              <li>Miembros de MIAMI Association of Realtors</li>
              <li>Licensed in Florida</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-sand-50/10 pt-8 mb-6">
          <p className="text-xs text-sand-50/50 leading-relaxed max-w-5xl">
            C5 Global es una firma inmobiliaria especializada en preconstrucción Miami. Las imágenes y renders
            son referenciales y pueden modificarse durante el desarrollo. Las proyecciones de apreciación,
            calendarios de pagos y características del producto pueden ajustarse conforme al avance del proyecto
            y a los términos finales del desarrollador. Esta información no constituye asesoría financiera,
            fiscal ni legal personalizada — consulte con un profesional independiente antes de tomar decisiones
            de inversión. Datos de mercado citados de fuentes públicas como Miami Association of Realtors,
            Knight Frank Wealth Report y U.S. Census Bureau, vigentes al momento de publicación.
          </p>
        </div>

        {/* Legal links + copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-sand-50/10">
          <div className="flex gap-6 text-xs text-sand-50/60">
            <a
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=c0b4ef0d-dd1f-4025-a664-23a85f179614"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne-400 transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=c494a0ea-12a6-4356-8405-665e6b0c55c9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne-400 transition-colors"
            >
              Términos
            </a>
            <a
              href="https://app.termly.io/policy-viewer/policy.html?policyUUID=85eecde1-a1fa-43da-abf6-5cca75ecb7c0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne-400 transition-colors"
            >
              Cookies
            </a>
          </div>
          <p className="text-xs text-sand-50/50">
            © {new Date().getFullYear()} C5 Global. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
