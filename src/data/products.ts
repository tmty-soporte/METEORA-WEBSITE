import type { HomeProduct } from '@/types/product';

export const homeProducts: HomeProduct[] = [
  {
    name: 'ERGON',
    description: 'Gestión de servicios en campo con evidencia y trazabilidad total.',
    href: '/ergon',
    logoSrc: '/assets/logos/ergonblanco.png',
    logoAlt: 'ERGON',
    imageSrc: '/assets/images/ergonfoto2.png',
    imageAlt: 'ERGON',
    features: [
      'Evidencia fotográfica y georreferenciada',
      'Reportes automáticos en tiempo real',
    ],
  },
  {
    name: 'HYDRA',
    description: 'Gestión integral de organismos operadores de agua.',
    href: '/hydra',
    logoSrc: '/assets/logos/hydrablanco.png',
    logoAlt: 'HYDRA',
    imageSrc: '/assets/images/hydrafoto2.png',
    imageAlt: 'HYDRA',
    features: [
      'Control operativo y administrativo',
      'Automatización de procesos',
    ],
    delayClass: 'delay-100',
    imageRevealClass: 'reveal fade-right delay-300',
  },
  {
    name: 'MENTHOR',
    description: 'Desarrollo de talento y gestión del aprendizaje con herramientas inteligentes.',
    href: '/menthor',
    logoSrc: '/assets/logos/menthorblanco.png',
    logoAlt: 'MENTHOR',
    imageSrc: '/assets/images/menthorfoto2.png',
    imageAlt: 'MENTHOR Talent Development',
    features: [
      'Gestión de mentorías y capacitación estructurada',
      'Seguimiento de habilidades y progreso profesional',
      'Desarrollo de talento con procesos medibles',
    ],
    delayClass: 'delay-200',
    imageRevealClass: 'reveal fade-left delay-400',
  },
  {
    name: 'SIGE',
    description: 'Gestión eficiente de la operación energética con control y automatización.',
    href: '/sige',
    logoSrc: '/assets/logos/sigeblanco.png',
    logoAlt: 'SIGE',
    imageSrc: '/assets/images/sigefoto2.png',
    imageAlt: 'SIGE Industrial Operations',
    features: [
      'Control de volumetría y análisis energético en tiempo real',
      'Automatización de procesos operativos y técnicos',
      'Gestión comercial, facturación y seguimiento de consumo',
    ],
    delayClass: 'delay-300',
    imageRevealClass: 'reveal fade-right delay-500',
  },
];