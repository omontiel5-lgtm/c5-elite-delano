// Team data — leadership and dedicated advisors

export type TeamMember = {
  name: string;
  role: string;
  bullets: string[];
  imageSrc: string; // placeholder path, equipo de Orlando reemplaza
  imageAlt: string;
};

export const FOUNDERS: TeamMember[] = [
  {
    name: 'Orlando Montiel',
    role: 'Co-fundador · C5 Global / C5 Elite',
    bullets: [
      'Conferencista en Univisión, Telemundo, Imagen Miami',
      'Reconocido por la Alcaldía de Doral (2024)',
      'Anfitrión de Retiro Inmobiliario, evento que reúne a las figuras más influyentes de Miami real estate',
      'Host de podcast con Ismael Cala (The Abundance Revolution)',
    ],
    imageSrc: '/images/team/orlando-montiel.jpg',
    imageAlt: 'Orlando Montiel, Co-fundador de C5 Global y C5 Elite',
  },
  {
    name: 'Daniel Montiel',
    role: 'Co-fundador · C5 Global / C5 Elite',
    bullets: [
      'Conferencista en Univisión, Telemundo, Hoy Día',
      'Reconocido por la Alcaldía de Doral (2024)',
      'Co-anfitrión de Retiro Inmobiliario, conferencia referente del sector',
      'Speaker invitado en eventos con Don Francisco, Emilio Estefan e Ignacio Meyer',
    ],
    imageSrc: '/images/team/daniel-montiel.jpg',
    imageAlt: 'Daniel Montiel, Co-fundador de C5 Global y C5 Elite',
  },
];

export const ADVISORS: TeamMember[] = [
  {
    name: 'Marcela Galvis',
    role: 'Asesora especializada · Inversionistas internacionales',
    bullets: [
      'Autora · Educadora del sector',
      'Especialista en asesoría a inversionistas internacionales',
      'Procesos EB-5 (visa de inversión)',
    ],
    imageSrc: '/images/team/marcela-galvis.jpg',
    imageAlt: 'Marcela Galvis, asesora de C5 Elite',
  },
  {
    name: 'Ana Vega',
    role: 'Asesora especializada · Inversionistas internacionales',
    bullets: [
      'Autora de metodología propia · Educadora del sector',
      'Especialista en asesoría a inversionistas internacionales',
      'Procesos EB-5 (visa de inversión)',
    ],
    imageSrc: '/images/team/ana-vega.jpg',
    imageAlt: 'Ana Vega, asesora de C5 Elite',
  },
  {
    name: 'Giselle Fermín',
    role: 'Asesora especializada · Inversionistas internacionales',
    bullets: [
      'Autora · Educadora del sector',
      'Especialista en asesoría a inversionistas internacionales',
      'Procesos EB-5 (visa de inversión)',
    ],
    imageSrc: '/images/team/giselle-fermin.jpg',
    imageAlt: 'Giselle Fermín, asesora de C5 Elite',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Llamada diagnóstica',
    duration: '15-20 min',
    description:
      'Entendemos tu capital, objetivo y horizonte. Te decimos si Delano es el match correcto para ti, o si conviene otro proyecto de nuestro portafolio.',
  },
  {
    number: '02',
    title: 'Selección de unidad',
    duration: '1-2 semanas',
    description:
      'Te mostramos las unidades disponibles que hacen sentido con tu objetivo. Video tour virtual del proyecto y de la zona si no puedes viajar.',
  },
  {
    number: '03',
    title: 'Estructura legal y fiscal',
    duration: '2-3 semanas',
    description:
      'Abrimos LLC si aplica. Gestionamos ITIN. Conectamos con abogado y contador especializados en inversionistas extranjeros. Tu compra queda blindada legal y fiscalmente.',
  },
  {
    number: '04',
    title: 'Financiamiento o cash',
    duration: '2-6 semanas si aplica',
    description:
      'Foreign National Loan pre-aprobado o cierre en cash. Te conectamos con 3-4 prestamistas aliados que dan financiamiento a inversionistas internacionales sin necesidad de residencia.',
  },
  {
    number: '05',
    title: 'Cierre + activación',
    duration: 'Continuo hasta entrega',
    description:
      'Firma con poder notarial desde tu país. Property manager activa la unidad para renta una vez entregada. Soporte continuo durante toda la construcción (2030-2031).',
  },
];

export const C5_DIFFERENCES = [
  {
    title: 'Calendario de pagos extendido',
    description:
      'Compras hoy y distribuyes los pagos durante 3 años de construcción, en lugar del estándar del mercado. Mantén liquidez para otras inversiones mientras tu unidad se construye.',
    note: 'Acuerdo formalizado con el desarrollador, exclusivo para nuestros clientes.',
  },
  {
    title: 'Tu unidad lista sin facturas extras',
    description:
      'Paquete de upgrades incluido en cada unidad: acabados premium, electrodomésticos de marca, paquetes de cocina y closets terminados. Mejoras que normalmente se cobran aparte vienen incluidas para nuestros clientes.',
    note: 'Tu unidad llega lista para usar o rentar.',
  },
  {
    title: 'Escoge primero',
    description:
      'Como aliados directos del desarrollador, accedemos al inventario antes de cada apertura al mercado. Eliges piso, vista y orientación cuando hay opciones, no cuando solo quedan las que nadie eligió.',
    note: 'Posición exclusiva como canal preferente.',
  },
];

export const QUALIFICATION_CRITERIA = {
  yes: [
    'Tienes capital desde $700,000 USD disponible o con financiamiento bancario parcial',
    'Buscas dolarizar y proteger tu patrimonio en USD',
    'Tomarás decisión de inversión en los próximos 6 meses',
    'Quieres un asesor que represente tus intereses, no los del desarrollador',
    'Estás dispuesto a una llamada de 15 minutos para evaluar match real',
  ],
  no: [
    'Solo buscas información general sobre el mercado de Miami',
    'Tu capital disponible es menor a $500,000 USD',
    'No tienes plazo de decisión definido',
    'Eres agente inmobiliario, desarrollador o competencia directa',
    'Buscas un broker que te muestre unidades sin antes entender tus objetivos',
  ],
};

export const NEARBY_LANDMARKS = [
  { name: 'Brickell Financial District', minutes: 5 },
  { name: 'Miami Worldcenter', minutes: 3 },
  { name: 'Bayside Marketplace', minutes: 2 },
  { name: 'PortMiami (cruceros y yates)', minutes: 6 },
  { name: 'Pérez Art Museum', minutes: 4 },
  { name: 'Aeropuerto Internacional Miami', minutes: 15 },
  { name: 'South Beach', minutes: 12 },
];
