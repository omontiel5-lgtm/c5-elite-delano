import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Evaluación privada | C5 Elite × Delano',
  robots: { index: false, follow: false },
};

// Esta ruta ahora redirige al home, donde el modal de calificación se abre automáticamente
// si el usuario llega con ?qualify=true en el query string. El formulario ya no es página independiente.
export default function CalificacionPage() {
  redirect('/?qualify=true');
}
