import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ModalProvider } from '@/components/providers/ModalProvider';
import { LightboxProvider } from '@/components/providers/LightboxProvider';
import './globals.css';
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Delano Residences Miami | C5 Elite',
  description:
    'Delano Miami con condiciones que el mercado abierto no tiene. Calendario de pagos extendido, upgrades incluidos y acceso prioritario al inventario. Servicio para inversionistas con capacidad desde $700,000 USD.',
  keywords: [
    'Delano Miami',
    'preconstrucción Miami',
    'inversión inmobiliaria Miami',
    'C5 Elite',
    'PMG Miami',
    'dolarizar patrimonio',
    'inversión inmobiliaria internacional',
  ],
  openGraph: {
    title: 'Delano Residences Miami | C5 Elite',
    description:
      'Acceso preferente a Delano Residences Miami para inversionistas con capacidad desde $700,000 USD.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'C5 Elite',
  },
  robots: {
    index: true,
    follow: true,
  },
};
import Script from "next/script";
// (...tus otros imports: inter, playfair, providers, etc...)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N59N8H64');`}
        </Script>
      </head>
      <body className="min-h-screen">
        <LightboxProvider>
          <ModalProvider>{children}</ModalProvider>
        </LightboxProvider>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N59N8H64"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
