import { ThankYou } from '@/components/sections/ThankYou';

export const metadata = {
  title: 'Gracias por tu interés | C5 Elite',
  robots: { index: false, follow: false },
};

export default function GraciasInfoPage() {
  return (
    <ThankYou
      title="Gracias por tu interés."
      body={`Te compartimos sin compromiso nuestra Guía para Inversionistas en Propiedades Miami. Tiene la información que necesitas para entender el mercado.`}
      showGuideDownload
      closing="Cuando estés listo para evaluar propiedades específicas para tu situación, vuelve a llenar la solicitud."
    />
  );
}
