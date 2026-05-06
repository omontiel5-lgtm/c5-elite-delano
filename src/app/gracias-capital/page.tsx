import { ThankYou } from '@/components/sections/ThankYou';

export const metadata = {
  title: 'Gracias por tu interés | C5 Elite',
  robots: { index: false, follow: false },
};

export default function GraciasCapitalPage() {
  return (
    <ThankYou
      title="Gracias por tu interés."
      body={`Trabajamos exclusivamente con inversionistas con capacidad desde $550,000 USD, lo cual nos permite ofrecer un servicio especializado a quienes están preparados para invertir en propiedades de calidad en Miami.

Si tu situación cambia en el futuro, estaremos a tu disposición. Mientras tanto, te compartimos sin compromiso nuestra Guía para Inversionistas en Propiedades Miami.`}
      showGuideDownload
      closing="Te deseamos mucho éxito."
    />
  );
}
