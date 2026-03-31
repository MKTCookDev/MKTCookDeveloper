export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  instructor: string;
  duration: string;
  level: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  studentsCount: number;
  modules: Module[];
  testimonials: Testimonial[];
}

export interface Module {
  id: string;
  title: string;
  lessons: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface EnrolledCourse {
  courseId: string;
  progress: number;
  enrolledDate: string;
  lastAccessed: string;
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Marketing Culinario Digital",
    description: "Domina las estrategias digitales para posicionar tu restaurante en el mercado actual. Aprende a crear contenido que venda, gestionar redes sociales de manera profesional y diseñar campañas publicitarias efectivas.",
    shortDescription: "Estrategias digitales para restaurantes exitosos",
    instructor: "Chef María González",
    duration: "8 semanas",
    level: "Intermedio",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzcwNzgwOTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Marketing Digital",
    rating: 4.8,
    studentsCount: 1250,
    modules: [
      {
        id: "m1",
        title: "Fundamentos del Marketing Gastronómico",
        lessons: [
          "Introducción al marketing gastronómico",
          "Análisis de mercado y competencia",
          "Definición de tu propuesta de valor",
          "Identificación de tu público objetivo"
        ],
        duration: "2 horas"
      },
      {
        id: "m2",
        title: "Redes Sociales para Restaurantes",
        lessons: [
          "Instagram para gastronomía",
          "Fotografía de alimentos profesional",
          "Estrategia de contenido",
          "Engagement y comunidad"
        ],
        duration: "3 horas"
      },
      {
        id: "m3",
        title: "Publicidad Digital",
        lessons: [
          "Facebook e Instagram Ads",
          "Google My Business",
          "Campañas de conversión",
          "Medición de resultados"
        ],
        duration: "2.5 horas"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Carlos Ruiz",
        role: "Propietario de Restaurante",
        comment: "Este curso transformó completamente la presencia digital de mi restaurante. Las reservas aumentaron un 40% en solo 2 meses.",
        rating: 5,
        avatar: ""
      },
      {
        id: "t2",
        name: "Ana Martínez",
        role: "Chef Ejecutiva",
        comment: "Contenido muy práctico y aplicable. Los módulos sobre fotografía gastronómica fueron especialmente útiles.",
        rating: 5,
        avatar: ""
      }
    ]
  },
  {
    id: "2",
    title: "Gestión de Redes Sociales para Chefs",
    description: "Convierte tu perfil en una marca personal potente. Aprende técnicas profesionales de fotografía gastronómica, storytelling y construcción de comunidad en redes sociales.",
    shortDescription: "Construye tu marca personal como chef",
    instructor: "Laura Fernández",
    duration: "6 semanas",
    level: "Principiante",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1697020358336-3db2f502242a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Redes Sociales",
    rating: 4.9,
    studentsCount: 2100,
    modules: [
      {
        id: "m1",
        title: "Personal Branding para Chefs",
        lessons: [
          "Definiendo tu marca personal",
          "Análisis de referentes",
          "Creación de tu estilo visual",
          "Voz y tono de comunicación"
        ],
        duration: "1.5 horas"
      },
      {
        id: "m2",
        title: "Fotografía y Video Gastronómico",
        lessons: [
          "Iluminación para food photography",
          "Composición y styling",
          "Edición con apps móviles",
          "Video reels y TikTok"
        ],
        duration: "3 horas"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Diego Sánchez",
        role: "Chef Independiente",
        comment: "Gracias a este curso conseguí colaboraciones con marcas importantes. Totalmente recomendado.",
        rating: 5,
        avatar: ""
      }
    ]
  },
  {
    id: "3",
    title: "Branding y Posicionamiento de Restaurantes",
    description: "Crea una identidad de marca sólida y memorable para tu restaurante. Desde el naming hasta la experiencia del cliente, aprende a diferenciarte en un mercado competitivo.",
    shortDescription: "Construye una marca gastronómica memorable",
    instructor: "Roberto Díaz",
    duration: "10 semanas",
    level: "Avanzado",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1610957899934-fcc0db8d7287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBlbGVnYW50fGVufDF8fHx8MTc3MDc4MDk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Branding",
    rating: 4.7,
    studentsCount: 850,
    modules: [
      {
        id: "m1",
        title: "Estrategia de Marca",
        lessons: [
          "Arquitectura de marca",
          "Posicionamiento estratégico",
          "Propuesta de valor única",
          "Personalidad de marca"
        ],
        duration: "2 horas"
      },
      {
        id: "m2",
        title: "Identidad Visual",
        lessons: [
          "Diseño de logo y naming",
          "Paleta de colores y tipografía",
          "Manual de marca",
          "Aplicaciones físicas y digitales"
        ],
        duration: "3 horas"
      },
      {
        id: "m3",
        title: "Experiencia de Marca",
        lessons: [
          "Customer journey mapping",
          "Touchpoints de marca",
          "Diseño de experiencias",
          "Medición de brand equity"
        ],
        duration: "2.5 horas"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Patricia Romero",
        role: "Directora de Marketing",
        comment: "Un curso completo y profesional. Aplicamos todo lo aprendido en nuestro rebranding y los resultados fueron excepcionales.",
        rating: 5,
        avatar: ""
      }
    ]
  },
  {
    id: "4",
    title: "Fotografía Gastronómica Profesional",
    description: "Domina el arte de fotografiar alimentos como un profesional. Aprende técnicas de iluminación, composición, styling y post-producción para crear imágenes que vendan.",
    shortDescription: "Captura imágenes gastronómicas impactantes",
    instructor: "Elena Torres",
    duration: "5 semanas",
    level: "Intermedio",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1760383710574-73f43fd3370d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBwcm9mZXNzaW9uYWwlMjBzdHlsaW5nfGVufDF8fHx8MTc3MDcwNjIyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Fotografía",
    rating: 4.9,
    studentsCount: 1500,
    modules: [
      {
        id: "m1",
        title: "Fundamentos Técnicos",
        lessons: [
          "Configuración de cámara",
          "Exposición y enfoque",
          "Lentes recomendados",
          "Equipo esencial"
        ],
        duration: "2 horas"
      },
      {
        id: "m2",
        title: "Iluminación y Composición",
        lessons: [
          "Luz natural vs artificial",
          "Esquemas de iluminación",
          "Reglas de composición",
          "Ángulos y perspectivas"
        ],
        duration: "3 horas"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Miguel Herrera",
        role: "Fotógrafo Freelance",
        comment: "Pasé de aficionado a profesional gracias a este curso. Ahora trabajo con varios restaurantes de la ciudad.",
        rating: 5,
        avatar: ""
      }
    ]
  },
  {
    id: "5",
    title: "Email Marketing para Restaurantes",
    description: "Aprende a crear campañas de email marketing que generen ventas y fidelicen clientes. Desde la creación de listas hasta la automatización de campañas.",
    shortDescription: "Domina el email marketing gastronómico",
    instructor: "Andrea López",
    duration: "4 semanas",
    level: "Principiante",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1599110906471-54c8ba535658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZW1haWwlMjBuZXdzbGV0dGVyfGVufDF8fHx8MTc3MDc4MDk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Email Marketing",
    rating: 4.6,
    studentsCount: 680,
    modules: [
      {
        id: "m1",
        title: "Fundamentos de Email Marketing",
        lessons: [
          "Construcción de listas",
          "Segmentación de audiencia",
          "Plataformas y herramientas",
          "Regulaciones y privacidad"
        ],
        duration: "1.5 horas"
      },
      {
        id: "m2",
        title: "Diseño de Campañas",
        lessons: [
          "Copywriting para emails",
          "Diseño visual efectivo",
          "Call-to-actions que convierten",
          "A/B testing"
        ],
        duration: "2 horas"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Sofía Vargas",
        role: "Gerente de Restaurante",
        comment: "Implementamos todo lo aprendido y nuestras campañas de email ahora tienen un 35% de tasa de apertura. ¡Increíble!",
        rating: 5,
        avatar: ""
      }
    ]
  },
  {
    id: "6",
    title: "Análisis de Datos para Restaurantes",
    description: "Toma decisiones basadas en datos. Aprende a analizar métricas clave, interpretar estadísticas y optimizar tu negocio gastronómico con información precisa.",
    shortDescription: "Decisiones inteligentes basadas en datos",
    instructor: "Javier Moreno",
    duration: "7 semanas",
    level: "Avanzado",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1761515397001-c8e82879c4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYW5hbHl0aWNzJTIwZGF0YSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA3ODA5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Analytics",
    rating: 4.8,
    studentsCount: 520,
    modules: [
      {
        id: "m1",
        title: "KPIs Gastronómicos",
        lessons: [
          "Métricas fundamentales",
          "Costos y márgenes",
          "Productividad y eficiencia",
          "Satisfacción del cliente"
        ],
        duration: "2 horas"
      },
      {
        id: "m2",
        title: "Herramientas de Análisis",
        lessons: [
          "Google Analytics para restaurantes",
          "Dashboards personalizados",
          "Análisis de redes sociales",
          "Software de gestión"
        ],
        duration: "3 horas"
      }
    ],
    testimonials: [
      {
        id: "t1",
        name: "Luis Mendoza",
        role: "Director de Operaciones",
        comment: "Este curso nos ayudó a identificar oportunidades de mejora que nunca habríamos detectado. ROI inmediato.",
        rating: 5,
        avatar: ""
      }
    ]
  }
];