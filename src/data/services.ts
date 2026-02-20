export type FaqItem = {
  question: string
  answer: string
}

export type Service = {
  id: string
  slug: string
  title: string
  category: string
  summary: string
  heroTitle: string
  heroDescription: string
  forWho: string
  includes: string[]
  process: string[]
  faqs: FaqItem[]
  whatsappTopic: string
  seoTitle: string
  seoDescription: string
}

export const services: Service[] = [
  {
    id: 'gestion-redes',
    slug: 'gestion-redes',
    title: 'Gestion de Redes Sociales',
    category: 'Presencia digital',
    summary:
      'Planificacion, produccion y publicacion para sostener una presencia profesional sin depender del dia a dia.',
    heroTitle: 'Gestion de redes con foco en consistencia y resultados',
    heroDescription:
      'Organizamos tu calendario, generamos contenido y cuidamos cada detalle para que tu marca se vea profesional.',
    forWho: 'Empresas y emprendedores que necesitan presencia constante sin sumar carga operativa.',
    includes: [
      'Auditoria de perfiles y objetivos',
      'Calendario editorial mensual',
      'Lineamientos visuales y copywriting',
      'Community management y moderacion',
      'Reporte mensual con aprendizajes',
    ],
    process: ['Diagnostico inicial', 'Plan mensual', 'Produccion y publicaciones', 'Analisis y ajustes'],
    faqs: [
      {
        question: 'Que redes trabajan?',
        answer: 'Nos enfocamos en Instagram y Facebook, ajustando cada formato al publico objetivo.',
      },
      {
        question: 'Necesito tener material previo?',
        answer: 'No. Podemos producir contenido nuevo o mejorar el material que ya tengas.',
      },
      {
        question: 'Como medimos resultados?',
        answer: 'Usamos indicadores de alcance, interaccion y consultas para ajustar cada mes.',
      },
    ],
    whatsappTopic: 'Gestion de Redes Sociales',
    seoTitle: 'Gestion de Redes Sociales',
    seoDescription:
      'Gestion de redes sociales profesional con calendario, contenido y reportes para marcas que quieren crecer.',
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    title: 'Meta Ads (Instagram/Facebook)',
    category: 'Performance',
    summary: 'Campanas de Meta Ads con control de inversion, optimizacion semanal y datos medibles.',
    heroTitle: 'Meta Ads para crecer con control y claridad',
    heroDescription:
      'Estructuramos y optimizamos campanas para lograr resultados reales sin desperdiciar presupuesto.',
    forWho: 'Marcas que necesitan leads, ventas o trafico calificado a corto y mediano plazo.',
    includes: [
      'Investigacion de audiencias y propuesta',
      'Arquitectura de campanas y funnels',
      'Creatividades y copies orientados a conversion',
      'Configuracion de eventos y medicion',
      'Optimizacion semanal y reportes',
    ],
    process: ['Brief y objetivos', 'Lanzamiento y pruebas', 'Optimizacion continua', 'Escalado'],
    faqs: [
      {
        question: 'Trabajan con presupuestos pequenos?',
        answer: 'Si. Adaptamos la estrategia para que cada peso tenga impacto.',
      },
      {
        question: 'Cuanto tiempo tarda en verse resultados?',
        answer: 'Las primeras senales aparecen en las primeras semanas, y se optimiza mes a mes.',
      },
      {
        question: 'Necesito pagina web?',
        answer: 'No necesariamente. Podemos trabajar con WhatsApp o formularios segun el objetivo.',
      },
    ],
    whatsappTopic: 'Meta Ads en Instagram y Facebook',
    seoTitle: 'Meta Ads en Instagram y Facebook',
    seoDescription:
      'Campanas de Meta Ads con enfoque en resultados, optimizacion semanal y reportes claros.',
  },
  {
    id: 'branding',
    slug: 'branding',
    title: 'Branding Estrategico',
    category: 'Identidad',
    summary: 'Definimos posicionamiento e identidad para marcas que necesitan coherencia y confianza.',
    heroTitle: 'Branding para marcas que quieren diferenciarse',
    heroDescription:
      'Construimos una identidad solida que comunica valor y genera confianza en cada punto de contacto.',
    forWho: 'Negocios que buscan profesionalizar su marca o reordenar su comunicacion visual.',
    includes: [
      'Analisis de posicionamiento y competencia',
      'Definicion de atributos y tono',
      'Identidad visual completa',
      'Sistema grafico para uso digital',
      'Manual basico de marca',
    ],
    process: ['Investigacion', 'Concepto creativo', 'Diseno de identidad', 'Aplicaciones'],
    faqs: [
      {
        question: 'Incluye naming?',
        answer: 'Podemos trabajar naming y arquitectura de marca como servicio adicional.',
      },
      {
        question: 'Sirve para marcas ya activas?',
        answer: 'Si, especialmente si hay falta de coherencia o imagen desactualizada.',
      },
      {
        question: 'Puedo pedir solo identidad visual?',
        answer: 'Si, armamos paquetes segun el estado actual de la marca.',
      },
    ],
    whatsappTopic: 'Branding Estrategico',
    seoTitle: 'Branding Estrategico para empresas',
    seoDescription:
      'Branding estrategico y desarrollo de identidad visual para marcas que buscan coherencia y posicionamiento.',
  },
  {
    id: 'diseno-aplicado',
    slug: 'diseno-aplicado',
    title: 'Diseno Grafico Aplicado',
    category: 'Comunicacion',
    summary: 'Piezas graficas para ventas, presentaciones y activos digitales alineados a la marca.',
    heroTitle: 'Diseno grafico pensado para convertir',
    heroDescription:
      'Creamos piezas visuales que elevan la percepcion de tu marca y funcionan en el mundo real.',
    forWho: 'Equipos comerciales y marcas que necesitan piezas profesionales con rapidez.',
    includes: [
      'Piezas para campanas y promociones',
      'Presentaciones comerciales',
      'Assets para redes y pauta',
      'Plantillas editables',
      'Adaptaciones multiformato',
    ],
    process: ['Brief y referencias', 'Diseno y ajustes', 'Entrega final'],
    faqs: [
      {
        question: 'Entregan archivos editables?',
        answer: 'Si, podemos entregar formatos editables segun el uso del cliente.',
      },
      {
        question: 'Cuanto tarda una tanda?',
        answer: 'Depende del volumen, pero trabajamos con tiempos claros desde el inicio.',
      },
      {
        question: 'Se puede pedir urgencia?',
        answer: 'Si, contamos con modalidad express sujeta a disponibilidad.',
      },
    ],
    whatsappTopic: 'Diseno Grafico Aplicado',
    seoTitle: 'Diseno Grafico Aplicado',
    seoDescription: 'Diseno grafico aplicado a piezas comerciales, redes sociales y materiales de venta.',
  },
  {
    id: 'produccion-contenido',
    slug: 'produccion-contenido',
    title: 'Produccion de Contenido',
    category: 'Contenido',
    summary: 'Produccion audiovisual y fotografia enfocada en historias claras y piezas que se recuerdan.',
    heroTitle: 'Contenido que se entiende y se recuerda',
    heroDescription:
      'Planificamos y producimos contenido audiovisual alineado a tu estrategia de marca y performance.',
    forWho: 'Marcas que necesitan reforzar su imagen y mejorar su comunicacion visual.',
    includes: [
      'Guion y concepto creativo',
      'Produccion foto/video',
      'Edicion y postproduccion',
      'Adaptaciones por formato',
      'Biblioteca de contenido reutilizable',
    ],
    process: ['Preproduccion', 'Jornada de grabacion', 'Edicion', 'Entrega y ajustes'],
    faqs: [
      {
        question: 'Trabajan en locacion?',
        answer: 'Si, coordinamos producciones en estudio o en locacion segun la necesidad.',
      },
      {
        question: 'Que formatos entregan?',
        answer: 'Entregamos contenido optimizado para redes, pauta y uso institucional.',
      },
      {
        question: 'Puedo sumar este servicio a redes?',
        answer: 'Si, es una combinacion ideal para elevar la calidad del contenido.',
      },
    ],
    whatsappTopic: 'Produccion de Contenido',
    seoTitle: 'Produccion de Contenido',
    seoDescription:
      'Produccion de contenido audiovisual para marcas que buscan comunicar con claridad y calidad.',
  },
]

export const futureServices = ['Landing Pages', 'Automatizacion IA', 'Consultoria']
