// Team data — leadership and dedicated advisors

export type AdvisorLink = {
  type: 'book' | 'instagram' | 'youtube' | 'linkedin' | 'website' | 'reviews';
  label: string;
  url: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bullets?: string[];
  links?: AdvisorLink[];
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
    links: [
      { type: 'book', label: 'Libro', url: 'https://a.co/d/0bXzz7vF' },
      { type: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/marcelagalvismiami/' },
      { type: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@marcelagalvis' },
      { type: 'reviews', label: 'Reviews', url: 'https://share.google/6uJBmHgBDsCOkOQCE' },
    ],
    imageSrc: '/images/specialist-marcela-galvis.png',
    imageAlt: 'Marcela Galvis, asesora de C5 Elite',
  },
  {
    name: 'Ana Vega',
    role: 'Asesora especializada · Inversionistas internacionales',
    links: [
      { type: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/theanavegagroup/' },
      { type: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/theanavegagroup/' },
      { type: 'youtube', label: 'YouTube', url: 'https://youtube.com/@theanavegagroup' },
      { type: 'website', label: 'Website', url: 'https://www.theanavegagroup.com/' },
    ],
    imageSrc: '/images/specialist-ana-vega.png',
    imageAlt: 'Ana Vega, asesora de C5 Elite',
  },
  {
    name: 'Giselle Fermín',
    role: 'Asesora especializada · Inversionistas internacionales',
    links: [
      { type: 'book', label: 'Libro', url: 'https://shorturl.at/s8FIY' },
      { type: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/gisellefermin_realtor' },
      { type: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@giselleferminr' },
    ],
    imageSrc: '/images/specialist-giselle-fermin.png',
    imageAlt: 'Giselle Fermín, asesora de C5 Elite',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Llamada diagnóstico',
    duration: '15–20 min',
    description:
      'Evaluamos capital disponible, objetivo de la inversión (flujo, dolarización, apreciación) y horizonte. Si Delano no es el match correcto, te lo decimos directo y proponemos alternativas del portafolio.',
  },
  {
    number: '02',
    title: 'Videollamada con tu especialista asignado',
    duration: '20–25 min',
    description:
      'Marcela, Ana o Giselle revisa contigo proyecciones de renta, calendario de pagos, costos de cierre, estructura legal y comparables del mismo radio. Tu especialista te acompaña hasta entrega — no hay rotación entre 500 agentes.',
  },
  {
    number: '03',
    title: 'Selección de unidad',
    duration: '1–2 semanas',
    description:
      'Recibes máximo 2 opciones filtradas a tu perfil: piso, orientación, tipo (estudio / 1BR / 2BR), proyección de ocupación. Tours virtuales en vivo del proyecto y comparativo escrito con las opciones descartadas.',
  },
  {
    number: '04',
    title: 'Estructura legal y fiscal',
    duration: '2–3 semanas',
    description:
      'Conectamos abogado y contador especializados en compradores extranjeros: formación de LLC, ITIN, trust si aplica, planificación fiscal cross-border. Costo estimado: USD $2,500–$4,500 por estructura completa.',
  },
  {
    number: '05',
    title: 'Financiación o cash',
    duration: '2–6 semanas (si aplica)',
    description:
      'Si vas con Foreign National Loan: te conectamos con 3–4 bancos que prestan a no residentes con 30–35% inicial. Si vas cash: saltamos este paso y vamos a closing directo.',
  },
  {
    number: '06',
    title: 'Cierre + activación',
    duration: 'Continúa hasta entrega 2030–2031',
    description:
      'Firmas el cierre con poder notarial desde tu país, sin necesidad de viajar. Property manager activa la unidad una vez entregada y te conectamos con el portal de gestión. Soporte continuo durante toda la construcción.',
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

export type Speaker = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
};

// Speakers que han participado en Retiro Inmobiliario (evento que organizan los hermanos Montiel)
export const INDUSTRY_SPEAKERS: Speaker[] = [
  {
    name: 'Jon Paul & Nick Pérez',
    role: 'Related Group · liderazgo del desarrollador #1 de condos en Miami',
    imageSrc: '/images/speakers-perez-brothers.png',
    imageAlt: 'Jon Paul y Nick Pérez · Related Group',
  },
  {
    name: 'Alicia Cervera',
    role: 'Cervera Real Estate · 50+ años representando proyectos icónicos de Miami',
    imageSrc: '/images/speaker-alicia-cervera.png',
    imageAlt: 'Alicia Cervera · Cervera Real Estate',
  },
  {
    name: 'Edgardo Defortuna',
    role: 'Fortune International · +50 torres desarrolladas en Miami',
    imageSrc: '/images/speaker-edgardo-defortuna.png',
    imageAlt: 'Edgardo Defortuna · Fortune International',
  },
  {
    name: 'David Martin',
    role: 'Terra Group · desarrollador detrás de Jean-Georges Residences',
    imageSrc: '/images/david-martin.jpg',
    imageAlt: 'David Martin · Terra Group',
  },
  {
    name: 'Craig Studnicky',
    role: 'ISG World · CEO · autor del Miami Report',
    imageSrc: '/images/speaker-craig-studnicky.png',
    imageAlt: 'Craig Studnicky · ISG World',
  },
  {
    name: 'Diego Ojeda',
    role: 'Rilea Group · Presidente · desarrollador de The Rider',
    imageSrc: '/images/diego-ojeda.jpg',
    imageAlt: 'Diego Ojeda · Rilea Group',
  },
];

export const CULTURE_SPEAKERS: Speaker[] = [
  {
    name: 'Don Francisco',
    role: 'Leyenda de la TV en español',
    imageSrc: '/images/speaker-don-francisco.png',
    imageAlt: 'Don Francisco',
  },
  {
    name: 'Emilio Estefan Jr.',
    role: 'Productor multi-Grammy · ícono cultural global',
    imageSrc: '/images/speaker-emilio-estefan.png',
    imageAlt: 'Emilio Estefan Jr.',
  },
  {
    name: 'Ignacio Meyer',
    role: 'Presidente de Univisión',
    imageSrc: '/images/speaker-ignacio-meyer.png',
    imageAlt: 'Ignacio Meyer · Presidente de Univisión',
  },
  {
    name: 'Margarita Pasos',
    role: 'Coach motivacional · alta recordación en Colombia',
    imageSrc: '/images/speaker-margarita-pasos.png',
    imageAlt: 'Margarita Pasos',
  },
  {
    name: 'Ismael Cala',
    role: 'Periodista · ex-CNN · autor bestseller',
    imageSrc: '/images/speaker-ismael-cala.png',
    imageAlt: 'Ismael Cala',
  },
  {
    name: 'Maickel Melamed',
    role: 'Conferencista venezolano · maratones NY, Berlín, Chicago y Boston',
    imageSrc: '/images/speaker-maickel-melamed.jpg',
    imageAlt: 'Maickel Melamed',
  },
];

// FAQ adaptado al contexto Delano (preconstrucción 2030-2031)
export const FAQS = [
  {
    q: '¿Por qué tiene sentido comprar en preconstrucción si el edificio se entrega en 2030-2031?',
    a: 'En preconstrucción accedes al precio más bajo del ciclo de vida del proyecto. Pagas la unidad en cuotas durante los años de construcción y aseguras hoy un precio que el mercado abierto ya no ofrecerá. La apreciación entre la firma y la entrega es el principal driver de retorno en este tipo de compra.',
  },
  {
    q: '¿Cómo funciona el calendario de pagos extendido que ofrece C5 para Delano?',
    a: 'El acuerdo que negociamos con el desarrollador permite distribuir tus pagos durante todo el periodo de construcción (3 años aprox.) en lugar de los plazos estándar del mercado. Mantienes liquidez para otras inversiones mientras tu unidad se construye y solo terminas el desembolso al cierre.',
  },
  {
    q: '¿El mercado de Miami va a seguir subiendo?',
    a: 'Nadie puede prometer el futuro, pero los datos públicos son contundentes: el precio mediano de condominios en Miami pasó de aprox. $182K en 2014 a $415K en 2024 (Miami Association of Realtors). Miami es el mercado #1 en USA para inversión inmobiliaria extranjera (PRNewswire 2025) y #2 mundial en branded residences detrás de Dubai (Knight Frank 2025). El driver principal: migración constante de capital LATAM, status quo del dólar como reserva de valor, y oferta limitada en zonas premium del downtown.',
  },
  {
    q: '¿Es legal y común invertir desde mi país en bienes raíces de Miami?',
    a: 'Sí, completamente. Compras como Foreign National sin necesidad de residencia o ciudadanía estadounidense. Los compradores latinoamericanos representan más del 23% de las compras de preconstrucción en Miami. Colombia ha estado en el Top 2 países buscando real estate en Miami por 36 meses consecutivos (Miami Realtors 2025). No eres una excepción: eres parte de la norma.',
  },
  {
    q: '¿Cómo funciona el financiamiento para un inversionista extranjero?',
    a: 'Inicial desde 35% del valor de la propiedad. El 65% restante se financia con un Foreign National Loan que ofrecen prestamistas especializados en compradores internacionales (sin necesidad de SSN ni historial crediticio americano). Trabajamos con 3-4 prestamistas aliados; te conectamos con el que mejor encaje en tu perfil.',
  },
  {
    q: '¿Qué estructura legal me conviene? (LLC, trust o compra a nombre individual)',
    a: 'No hay respuesta única. Depende de tu capital, tu país de residencia fiscal, si tienes herederos en EE.UU. y tu objetivo de salida. Te conectamos con un abogado especializado en inversionistas internacionales que diseña la estructura específica para tu caso: la mayoría de nuestros clientes terminan comprando vía LLC, pero no es la respuesta correcta para todos.',
  },
  {
    q: '¿Puedo ver Delano antes de comprar si todavía está en construcción?',
    a: 'Como el edificio está en preconstrucción, no hay unidad física que mostrar. Lo que sí ofrecemos: tour virtual de los renders 3D del proyecto, recorrido en sales gallery cuando viajas a Miami, video-llamada con el desarrollador (PMG) si quieres entender el plan maestro, y acceso a las amenidades del Delano Hotel actual para que entiendas el estándar de la marca.',
  },
  {
    q: '¿Cómo sé que C5 Elite no es un scam?',
    a: 'C5 Global tiene 25+ años en el mercado. Oficina física verificable en Coral Gables (1 Alhambra Plaza, Penthouse Floor). Afiliados a eXp Realty. Licensed en Florida. Reconocidos por la Alcaldía de Doral en 2024. +11,500 inversionistas internacionales asesorados. Nuestros fundadores tienen presencia pública en Univisión, Telemundo, e Imagen Miami con apariciones verificables. La gente que organiza Retiro Inmobiliario y aparece en TV no tiene incentivo en hacer fraude.',
  },
];

export const NEARBY_LANDMARKS = [
  { name: 'Brickell Financial District', minutes: 5 },
  { name: 'Miami Worldcenter', minutes: 3 },
  { name: 'Bayside Marketplace', minutes: 2 },
  { name: 'PortMiami (cruceros y yates)', minutes: 6 },
  { name: 'Pérez Art Museum', minutes: 4 },
  { name: 'Aeropuerto Internacional Miami', minutes: 15 },
  { name: 'South Beach', minutes: 12 },
];
