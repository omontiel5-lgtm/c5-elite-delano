// Brand and project constants for C5 Elite × Delano
// All copy approved by Orlando Montiel — do not change without his approval

export const BRAND = {
  name: 'C5 Elite',
  parent: 'C5 Global',
  whatsapp: '+1 786-396-5621',
  whatsappLink: 'https://wa.me/17863965621',
  email: 'info@c5elite.com',
  address: '1 Alhambra Plaza, Penthouse Floor, Coral Gables, FL 33134',
  city: 'Coral Gables, Florida',
} as const;

export const PROJECT = {
  name: 'Delano Residences Miami',
  developer: 'PMG · Property Markets Group',
  brand: 'Delano',
  location: '400 Biscayne Blvd · Downtown Miami',
  priceRangeLow: 800_000,
  priceRangeHigh: 4_500_000,
  priceRangeDisplay: '$800,000 – $4,500,000 USD',
  deliveryEstimate: '2030 – 2031',
  minInvestment: 700_000,
  minInvestmentDisplay: '$700,000 USD',
} as const;

export const AUTHORITY_NUMBERS = [
  { value: '+$500M', label: 'En volumen comercializado en preconstrucción Miami' },
  { value: '+11,500', label: 'Inversionistas internacionales asesorados' },
  { value: '25+', label: 'Años en el mercado de Miami' },
  { value: '12+', label: 'Proyectos en portafolio histórico' },
] as const;

export const MEDIA_RECOGNITION = [
  'Univisión',
  'Telemundo',
  'Imagen Miami',
  'Hoy Día',
  'El Heraldo',
  'El Mexicano',
  'Notistarz',
  'The Abundance Revolution',
  'City of Doral',
] as const;

// 10-question qualification form
export type QuestionOption = {
  value: string;
  label: string;
  disqualifies?: 'capital' | 'timing' | 'info';
  flag?: string;
};

export type Question = {
  id: string;
  field: string;
  type: 'radio';
  question: string;
  intro?: string;
  options: QuestionOption[];
};

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    field: 'inv_capital',
    type: 'radio',
    question: 'Capacidad de inversión disponible para este proyecto:',
    options: [
      { value: 'lt_250k', label: 'Menos de $250,000 USD', disqualifies: 'capital' },
      { value: '250k_550k', label: '$250,000 – $550,000 USD', disqualifies: 'capital' },
      { value: '550k_1m', label: '$550,000 – $1,000,000 USD' },
      { value: '1m_2m', label: '$1,000,000 – $2,000,000 USD' },
      { value: '2m_5m', label: '$2,000,000 – $5,000,000 USD' },
      { value: 'gt_5m', label: 'Más de $5,000,000 USD' },
    ],
  },
  {
    id: 'q2',
    field: 'inv_estructura_capital',
    type: 'radio',
    question: '¿Cómo está estructurado el capital que invertirías?',
    options: [
      { value: 'liquid_100', label: '100% disponible en cuenta líquida' },
      { value: 'mostly_liquid', label: 'Mayoritariamente líquido, parte en otros activos' },
      { value: 'sell_asset', label: 'Necesito vender una propiedad u otro activo primero' },
      { value: 'financing_50', label: 'Necesito financiamiento bancario para 50%+' },
      { value: 'structuring', label: 'Aún estoy estructurando el capital', disqualifies: 'capital' },
    ],
  },
  {
    id: 'q3',
    field: 'inv_experiencia',
    type: 'radio',
    question: '¿Has invertido antes en bienes raíces fuera de tu país?',
    options: [
      { value: 'usa', label: 'Sí, tengo propiedades en Estados Unidos' },
      { value: 'latam_eu', label: 'Sí, en otros países de Latinoamérica o Europa' },
      { value: 'home_country', label: 'Sí, tengo propiedades en mi país pero no fuera' },
      { value: 'first_intl', label: 'No, esta sería mi primera inversión inmobiliaria internacional' },
      { value: 'never', label: 'No he invertido en bienes raíces aún' },
    ],
  },
  {
    id: 'q4',
    field: 'inv_timing',
    type: 'radio',
    question: '¿En qué plazo planeas tomar la decisión de invertir?',
    options: [
      { value: '30_days', label: 'En los próximos 30 días' },
      { value: '1_3_months', label: 'Entre 1 y 3 meses' },
      { value: '3_6_months', label: 'Entre 3 y 6 meses' },
      { value: '6_plus_months', label: '6 meses o más', disqualifies: 'timing' },
    ],
  },
  {
    id: 'q5',
    field: 'inv_objetivo',
    type: 'radio',
    question: '¿Cuál es tu objetivo principal con esta inversión?',
    options: [
      { value: 'protect_dollarize', label: 'Proteger y dolarizar mi patrimonio frente a la devaluación' },
      { value: 'rental_usd', label: 'Generar ingresos por renta en dólares' },
      { value: 'appreciation', label: 'Apreciación de capital (comprar y vender en 3-5 años)' },
      { value: 'diversification', label: 'Diversificación geográfica de mi patrimonio' },
      { value: 'visa_eb5', label: 'Obtener residencia o visa de inversión en EE.UU.' },
      { value: 'second_home', label: 'Vivienda secundaria para mi familia' },
      { value: 'unclear', label: 'Aún no lo tengo claro, busco asesoría' },
    ],
  },
  {
    id: 'q6',
    field: 'inv_reto',
    type: 'radio',
    question: '¿Cuál ha sido tu mayor barrera para invertir en Estados Unidos hasta ahora?',
    options: [
      { value: 'trusted_advisor', label: 'Encontrar un asesor confiable que represente mis intereses' },
      { value: 'legal_tax', label: 'Entender la estructura legal y fiscal correcta' },
      { value: 'project_info', label: 'Falta de información clara sobre proyectos disponibles' },
      { value: 'remote_ops', label: 'Preocupación por la operación a distancia desde mi país' },
      { value: 'market_timing', label: 'El timing del mercado' },
      { value: 'capital_ready', label: 'Aún no he tenido el capital reunido' },
    ],
  },
  {
    id: 'q7',
    field: 'inv_decision',
    type: 'radio',
    question: '¿Eres la única persona involucrada en esta decisión de inversión?',
    options: [
      { value: 'solo', label: 'Sí, yo tomo la decisión solo' },
      { value: 'partner_in_call', label: 'No, mi pareja, socio o familiar participa y estará en la llamada' },
      { value: 'partner_not_in_call', label: 'No, mi pareja, socio o familiar participa pero NO estará en la llamada', flag: 'second_call_needed' },
      { value: 'advisor', label: 'Tengo asesor financiero/contador que también participa' },
    ],
  },
  {
    id: 'q8',
    field: 'inv_tipo_reunion',
    type: 'radio',
    question: '¿Confirmas que entiendes el proceso?',
    intro:
      'Importante: tu primera llamada será con un asesor de pre-evaluación de 15 minutos. En esa llamada confirmamos que tu perfil califica y entendemos tus objetivos. No mostramos propiedades ni hacemos presentaciones de venta en esta primera llamada. Si calificas, agendamos una segunda llamada con un asesor especializado donde sí revisamos proyectos específicos.',
    options: [
      { value: 'confirm', label: 'Sí, lo confirmo y entiendo el proceso de dos llamadas' },
      { value: 'just_info', label: 'No, busco solo información general', disqualifies: 'info' },
    ],
  },
  {
    id: 'q9',
    field: 'inv_etapa',
    type: 'radio',
    question: '¿En qué etapa de decisión estás?',
    intro:
      'Debido a la disponibilidad limitada de propiedades de calidad, priorizamos a inversionistas listos para tomar decisiones.',
    options: [
      { value: 'ready_now', label: 'Necesito asesoría inmediata, estoy listo para evaluar opciones' },
      { value: 'next_30_90', label: 'En los próximos 30-90 días tomaré decisión', disqualifies: 'timing' },
      { value: 'just_browsing', label: 'Solo busco información, sin intención de invertir pronto', disqualifies: 'info' },
    ],
  },
  {
    id: 'q10',
    field: 'inv_disponibilidad',
    type: 'radio',
    question: '¿Estás disponible en los próximos 4 días hábiles?',
    intro:
      'Tu primera llamada de pre-evaluación es de 15 minutos por video.',
    options: [
      { value: 'yes_now', label: 'Sí, agendo ahora' },
      { value: 'yes_extended', label: 'Sí, pero necesito más de 4 días por viaje o agenda', flag: 'flexible_calendar' },
      { value: 'need_info', label: 'Necesito más información antes de agendar', disqualifies: 'info' },
      { value: 'not_available', label: 'No estoy disponible', disqualifies: 'timing' },
    ],
  },
];

export type QualificationResult = 'qualified' | 'rejected_capital' | 'rejected_timing' | 'rejected_info';

export function evaluateQualification(answers: Record<string, string>): QualificationResult {
  // Check each question's answer for disqualifying flags
  for (const question of QUESTIONS) {
    const answerValue = answers[question.field];
    if (!answerValue) continue;
    const option = question.options.find((o) => o.value === answerValue);
    if (option?.disqualifies) {
      return `rejected_${option.disqualifies}` as QualificationResult;
    }
  }
  return 'qualified';
}
