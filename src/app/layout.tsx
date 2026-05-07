import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ModalProvider } from '@/components/providers/ModalProvider';
import { LightboxProvider } from '@/components/providers/LightboxProvider';
import './globals.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        <LightboxProvider>
          <ModalProvider>{children}</ModalProvider>
        </LightboxProvider>
      </body>
    </html>
  );
}
