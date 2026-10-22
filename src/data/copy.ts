import type { Lang } from './site';

type Step = { n: string; title: string; text: string; ask: string };
type Card = { icon: string; title: string; text: string; points: string[] };
type Faq = { q: string; a: string };
export type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  summary: string;
  seo: string;
  feels: string[];
  build: { title: string; text: string }[];
  change: string[];
  measure: string[];
  stack: string;
  ask: string;
};

const es = {
  lang: 'es' as Lang,
  htmlLang: 'es-ES',
  ogLocale: 'es_ES',
  seo: {
    title: 'David Luengo Juárez · Consultor de IA y automatización para pymes',
    description:
      'Automatizo las tareas repetitivas de tu negocio con IA, apps y herramientas a medida. Prueba de 30 días, sin permanencia y con garantía de devolución. Logística, viajes, restauración, educación y salud.',
  },
  nav: { method: 'Método', services: 'Servicios', cases: 'Casos de uso', offer: 'Oferta', about: 'Sobre mí', faq: 'FAQ', cta: 'Contacto', menu: 'Menú', switch: 'English', switchLabel: 'Read this site in English' },
  hero: {
    eyebrow: 'Consultor de IA y automatización',
    h1a: 'Recupera las horas que tu negocio pierde en tareas repetitivas.',
    h1b: 'En 30 días, o te devuelvo el dinero.',
    audit:
      'Probablemente pienses que otro consultor de IA solo traerá promesas, presentaciones y una factura. Es una reacción lógica: has oído demasiado humo. Por eso empezamos con una prueba de 30 días, sin permanencia y con garantía.',
    cta: 'Reservar una llamada',
    ctaSecondary: 'Ver casos de uso',
    trust: ['Prueba única de 30 días', 'Sin permanencia', 'Garantía de devolución', 'Respuesta en 48 h'],
  },
  industries: { label: 'Experiencia aplicada en', items: ['Logística', 'Viajes', 'Restauración', 'Educación de idiomas', 'Salud'] },
  feels: {
    eyebrow: 'Te escucho',
    h2: 'Parece que…',
    items: [
      'tu equipo pasa horas copiando datos de una herramienta a otra.',
      'ya intentaste automatizar algo y se quedó a medias.',
      'te cuesta delegar porque nadie lo hace exactamente como tú.',
      'te preocupa depender de un sistema que nadie más entiende.',
      'no tienes tiempo para aprender “otra herramienta más”.',
    ],
    summaryLead: 'Si lo resumo bien:',
    summary:
      'quieres crecer sin trabajar más horas, necesitas ver resultados reales antes de comprometerte y no quieres convertirte en experto técnico para conseguirlo.',
    summaryAsk: '¿Voy bien encaminado?',
    summaryCta: 'Sí, es justo eso',
  },
  method: {
    eyebrow: 'Método',
    h2: 'Es más sencillo de lo que parece',
    lead: 'Tres pasos. Tú aportas conocimiento del negocio; yo me encargo de lo técnico.',
    askLabel: 'La pregunta que guía este paso',
    steps: [
      { n: '1', title: 'Descubrimiento', text: 'Identificamos los 3-6 procesos que de verdad mueven tu negocio y dejamos fuera el ruido. Escucho cómo trabajáis hoy antes de proponer nada.', ask: '¿Qué tarea te quita más tiempo y menos valor aporta?' },
      { n: '2', title: 'Simplificar y acelerar', text: 'Antes de automatizar, simplificamos. Una tarea mal diseñada automatizada solo falla más rápido. Diseño soluciones sencillas y con impacto rápido.', ask: '¿Cómo sería un día normal si esto funcionara solo?' },
      { n: '3', title: 'Automatizar', text: 'Despliego la automatización con IA, la conecto a tus herramientas actuales y la dejo medida y documentada: sabrás qué hace y cuánto ahorra.', ask: '¿Qué tendría que pasar para que lo consideres un éxito?' },
    ] as Step[],
  },
  services: {
    eyebrow: 'Servicios',
    h2: 'Qué puedo construir para ti',
    cards: [
      { icon: '⚙️', title: 'Automatización e IA', text: 'Flujos que quitan trabajo manual y errores, con un humano supervisando lo que importa.', points: ['Procesos y flujos entre herramientas', 'Extracción de datos de documentos y correos', 'Asistentes y chatbots para atención al cliente', 'Informes y analítica predictiva'] },
      { icon: '🧩', title: 'Apps y herramientas a medida', text: 'Software que encaja con tu forma de trabajar, no al revés.', points: ['Aplicaciones web y herramientas internas', 'Integraciones con tus sistemas actuales', 'Paneles con métricas en tiempo real', 'Gestión de flujos de trabajo del equipo'] },
      { icon: '🧭', title: 'Chief Automation Officer as a Service', text: 'Liderazgo estratégico en automatización sin el coste de un directivo a tiempo completo.', points: ['Hoja de ruta de automatización priorizada por ROI', 'Selección de herramientas y proveedores', 'Supervisión de la implementación', 'Formación de tu equipo interno'] },
    ] as Card[],
  },
  cases: {
    eyebrow: 'Casos de uso',
    h2: 'Escenarios reales de tu sector',
    lead: 'Cada caso describe un problema habitual, cómo lo resolvería y qué mediríamos para demostrar que funciona.',
    note: 'Escenarios representativos de proyectos de automatización. Los resultados concretos dependen de tu operación y se acuerdan por escrito antes de empezar.',
    read: 'Ver el caso',
    back: 'Todos los casos',
    feelsH: 'Quizá te suene',
    buildH: 'Qué construiría',
    changeH: 'Qué cambia',
    measureH: 'Qué mediríamos',
    stackH: 'Herramientas',
    askH: 'Para empezar',
    ctaH: '¿Te suena este escenario?',
    ctaText: 'Cuéntame cómo trabajáis hoy y te digo con honestidad si puedo ayudarte.',
    items: [
      {
        slug: 'logistica', industry: 'Logística', title: 'Cotizaciones y seguimiento de envíos sin copiar y pegar',
        summary: 'De correos y PDFs desordenados a un tablero de envíos que se actualiza solo.',
        seo: 'Automatización con IA para empresas de logística: cotizaciones, extracción de datos de albaranes y facturas, y avisos de estado de envíos a clientes.',
        feels: ['Parece que el equipo de operaciones pasa el día leyendo correos y volcando datos en hojas de cálculo.', 'Parece que los clientes preguntan constantemente “¿dónde está mi envío?” y alguien tiene que responder a mano.', 'Parece que un error de transcripción en un albarán se paga caro.'],
        build: [
          { title: 'Entrada inteligente de solicitudes', text: 'La IA lee los correos de solicitud de cotización, extrae origen, destino, mercancía y fechas, y crea el registro en tu sistema.' },
          { title: 'Lectura de documentos', text: 'Albaranes, CMR y facturas se convierten en datos estructurados con validación automática y revisión humana solo en los casos dudosos.' },
          { title: 'Avisos al cliente', text: 'Cuando cambia el estado de un envío, el cliente recibe un mensaje claro sin que nadie lo escriba.' },
        ],
        change: ['El equipo revisa excepciones en lugar de teclear datos.', 'Las cotizaciones salen en minutos y no en horas.', 'Menos llamadas de “¿cómo va lo mío?”.'],
        measure: ['Horas semanales dedicadas a entrada de datos', 'Tiempo desde la solicitud hasta la cotización', 'Errores de transcripción por mes', 'Consultas de estado recibidas por cliente'],
        stack: 'Tu TMS/ERP o hoja de cálculo actual, correo, un modelo de IA para extracción y un orquestador de flujos (n8n, Make o código a medida).',
        ask: '¿Qué parte del proceso de un envío te hace perder más tiempo hoy?',
      },
      {
        slug: 'viajes', industry: 'Viajes', title: 'De la consulta al itinerario en minutos',
        summary: 'Respuestas rápidas a cada lead y borradores de propuestas listos para aprobar.',
        seo: 'Automatización con IA para agencias de viajes: gestión de consultas por web y WhatsApp, borradores de itinerarios y presupuestos, y seguimiento de reservas.',
        feels: ['Parece que cada consulta llega por un canal distinto y alguna se queda sin respuesta.', 'Parece que montar un presupuesto personalizado consume horas que podrías dedicar a vender.', 'Parece que el cliente decide con quien responde primero.'],
        build: [
          { title: 'Bandeja unificada', text: 'Web, correo y WhatsApp convergen en un único lugar con respuesta inicial inmediata y preguntas de cualificación.' },
          { title: 'Borrador de propuesta', text: 'Con los datos del viaje y tus proveedores habituales, la IA prepara itinerario y presupuesto; tú revisas y envías.' },
          { title: 'Seguimiento automático', text: 'Recordatorios, documentos previos al viaje y petición de reseña después, sin acordarte tú.' },
        ],
        change: ['Ningún lead sin respuesta.', 'Más propuestas enviadas con el mismo equipo.', 'Tu criterio sigue en cada decisión; la IA solo prepara el borrador.'],
        measure: ['Tiempo de primera respuesta', 'Propuestas enviadas por semana', 'Tasa de conversión de consulta a reserva', 'Reseñas recibidas'],
        stack: 'CRM o hoja de cálculo, WhatsApp Business API, correo, modelo de IA para redacción y orquestador de flujos.',
        ask: '¿Cuántas consultas se enfrían cada semana antes de que alguien responda?',
      },
      {
        slug: 'restaurantes', industry: 'Restauración', title: 'Menos papeleo, más tiempo en sala',
        summary: 'Reservas, reseñas y pedidos a proveedores funcionando en segundo plano.',
        seo: 'Automatización con IA para restaurantes: reservas, respuestas a reseñas, pedidos a proveedores y alertas de inventario.',
        feels: ['Parece que el teléfono suena justo cuando el servicio está más cargado.', 'Parece que las reseñas se quedan sin contestar por falta de tiempo.', 'Parece que los pedidos a proveedores dependen de la memoria de una sola persona.'],
        build: [
          { title: 'Reservas por mensaje', text: 'Un asistente atiende reservas y dudas frecuentes (horarios, alérgenos, menús) por WhatsApp y web, y vuelca todo en tu agenda.' },
          { title: 'Reseñas con tu voz', text: 'Borradores de respuesta a reseñas en tu tono; tú das el visto bueno con un clic.' },
          { title: 'Pedidos y alertas', text: 'Aviso cuando un producto baja de un mínimo y pedido prellenado al proveedor habitual.' },
        ],
        change: ['El equipo de sala se centra en el cliente que tiene delante.', 'Menos no-shows gracias a recordatorios.', 'Reputación online cuidada sin esfuerzo diario.'],
        measure: ['Llamadas atendidas por el personal', 'Tasa de no-show', 'Tiempo de respuesta a reseñas', 'Roturas de stock por mes'],
        stack: 'Tu sistema de reservas y TPV actuales, WhatsApp Business, hoja de inventario y un modelo de IA para redacción.',
        ask: '¿Cuál es el momento del servicio en el que más echas de menos una mano extra?',
      },
      {
        slug: 'educacion-idiomas', industry: 'Educación de idiomas', title: 'Matrículas y seguimiento de alumnos en piloto automático',
        summary: 'Del primer contacto a la clase de prueba, y de ahí al seguimiento del progreso.',
        seo: 'Automatización con IA para academias de idiomas: captación, pruebas de nivel, agenda de clases, recordatorios e informes de progreso.',
        feels: ['Parece que la secretaría gasta la mayor parte del día coordinando horarios.', 'Parece que los alumnos desaparecen entre la clase de prueba y la matrícula.', 'Parece que los informes de progreso se retrasan porque llevan demasiado tiempo.'],
        build: [
          { title: 'Captación y prueba de nivel', text: 'Un flujo que responde al interesado, le propone una prueba de nivel y agenda la clase de prueba.' },
          { title: 'Agenda y recordatorios', text: 'Reservas, cambios y recordatorios automáticos a alumnos y profesores.' },
          { title: 'Informes de progreso', text: 'La IA redacta un primer borrador a partir de las notas del profesor; el profesor lo revisa y lo envía.' },
        ],
        change: ['Menos coordinación manual para la secretaría.', 'Más alumnos que pasan de la prueba a la matrícula.', 'Familias mejor informadas sin sobrecargar a los profesores.'],
        measure: ['Conversión de clase de prueba a matrícula', 'Horas de gestión de horarios', 'Faltas sin aviso', 'Tiempo de preparación de informes'],
        stack: 'Formulario web, calendario, correo/WhatsApp, hoja de alumnos o tu plataforma actual y un modelo de IA para borradores.',
        ask: '¿En qué punto del camino de un alumno se te escapan más personas?',
      },
      {
        slug: 'salud', industry: 'Salud', title: 'Citas y admisiones con menos fricción y más cuidado',
        summary: 'Recordatorios, formularios de admisión y organización documental, respetando la privacidad.',
        seo: 'Automatización para clínicas y centros de salud: recordatorios de citas, formularios de admisión y clasificación de documentos con enfoque en privacidad.',
        feels: ['Parece que la recepción dedica horas a llamar para confirmar citas.', 'Parece que los formularios en papel se acaban reescribiendo en el sistema.', 'Parece que te preocupa, con razón, dónde acaban los datos de tus pacientes.'],
        build: [
          { title: 'Confirmación de citas', text: 'Recordatorios y confirmaciones automáticas, con reprogramación sencilla para el paciente.' },
          { title: 'Admisión digital', text: 'Formularios previos a la visita que llegan ya estructurados a tu sistema.' },
          { title: 'Orden documental', text: 'Clasificación y archivado de documentos administrativos con revisión humana.' },
        ],
        change: ['Menos huecos por ausencias.', 'Recepción centrada en las personas, no en el teléfono.', 'Datos tratados con el mínimo necesario.'],
        measure: ['Ausencias sin aviso', 'Llamadas de confirmación evitadas', 'Tiempo de admisión por paciente'],
        stack: 'Tu agenda y software clínico actuales, mensajería, y un diseño que minimiza datos personales. No doy consejo médico ni sustituyo criterio clínico: la automatización se limita a lo administrativo. Antes de empezar revisamos tus obligaciones de protección de datos (RGPD/HIPAA según corresponda).',
        ask: '¿Qué datos de pacientes no deberían salir nunca de tu sistema actual?',
      },
    ] as CaseStudy[],
  },
  offer: {
    eyebrow: 'Oferta',
    h2: 'Prueba de 30 días. Sin ataduras.',
    ask: '¿Sería una locura probar durante 30 días antes de decidir nada más?',
    price: 'desde 997 USD',
    priceNote: 'pago único; el importe final depende de la complejidad de tus procesos',
    points: [
      'Un pago único, sin cuotas ocultas ni permanencia.',
      'Una semana antes del fin de la prueba decides si seguir con un plan mensual, que puedes cancelar cuando quieras.',
      'Sólo acepto proyectos donde estoy seguro de poder entregar resultados.',
      'Garantía de devolución si no se cumplen los resultados acordados por escrito.',
    ],
    cta: 'Empezar la prueba',
    risk: 'El riesgo lo asumo yo, no tú.',
  },
  about: {
    eyebrow: 'Sobre mí',
    h2: 'Hola, soy David',
    p1: 'Soy David Luengo Juárez, fundador de DLJ Tech. Diseño y construyo automatizaciones con IA, aplicaciones y herramientas internas para pequeñas y medianas empresas que quieren dejar de perder tiempo en trabajo repetitivo.',
    p2: 'Trabajo en español e inglés, explico las cosas sin jerga y dejo todo documentado para que no dependas de mí. Mi código y mis proyectos están abiertos en GitHub.',
    factsH: 'De un vistazo',
    facts: [
      ['Qué hago', 'Automatización con IA, apps a medida, estrategia de automatización'],
      ['Para quién', 'Pymes de logística, viajes, restauración, educación de idiomas y salud'],
      ['Idiomas', 'Español e inglés'],
      ['Empresa', 'David Luengo Juarez LLC (DLJ Tech)'],
      ['Primer paso', 'Llamada de descubrimiento y prueba de 30 días'],
    ],
    linkedin: 'Perfil de LinkedIn',
    github: 'Código en GitHub',
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Preguntas frecuentes',
    items: [
      { q: '¿Con qué rapidez puedes implantar una automatización?', a: 'La mayoría de las soluciones se implantan en 2-4 semanas según su complejidad. Empiezo con un análisis de tus procesos y te doy un calendario detallado en la primera conversación.' },
      { q: '¿Cuánto cuesta empezar?', a: 'La prueba de pago cuesta desde 997 USD, un único pago que depende de la complejidad de tus procesos. Sin compromiso, sin cuotas y sin contrato de 12 meses.' },
      { q: '¿Cuánto tiempo quedo atado al contrato?', a: 'Ninguno. La prueba no se renueva sola: pagas una vez y obtienes 30 días de servicio y resultados. Una semana antes del final puedes elegir un plan mensual, que también cancelas cuando quieras.' },
      { q: '¿Cuánto tiempo me va a exigir a mí?', a: 'Muy poco. Necesito unas conversaciones al principio para entender tu negocio y revisar resultados; el trabajo técnico lo hago yo.' },
      { q: '¿Tengo que aprender algo técnico?', a: 'No. Te explico lo que hace cada automatización en lenguaje claro y lo dejo documentado.' },
      { q: '¿Y si no funciona para mi tipo de negocio?', a: 'Antes de proponerte la prueba compruebo que puedo entregar resultados en tu caso concreto; no me interesa devolver dinero ni perder reputación. Si no se cumple lo acordado por escrito, te devuelvo el dinero.' },
      { q: '¿Qué pasa con mis datos?', a: 'Trabajo con el mínimo de datos necesario, uso proveedores con garantías de privacidad y revisamos juntos las obligaciones aplicables (RGPD u otras) antes de empezar.' },
    ] as Faq[],
  },
  final: {
    h2: '¿Qué tendría que pasar en 30 días para que esto te pareciera un éxito?',
    text: 'Cuéntamelo en el formulario. Te respondo en un máximo de 48 horas y, si no puedo ayudarte, te lo digo con honestidad.',
    cta: 'Reservar una llamada',
  },
  footer: { tagline: 'Automatización e IA para negocios que quieren recuperar su tiempo.', privacy: 'Privacidad', rights: 'Todos los derechos reservados.' },
  modal: { title: 'Cuéntame tu caso', sub: 'Respondo en un máximo de 48 horas.', close: 'Cerrar', loading: 'Cargando formulario…', fallback: 'Abrir el formulario en una pestaña nueva' },
  privacy: {
    title: 'Política de privacidad',
    description: 'Cómo DLJ Tech trata tus datos personales cuando visitas esta web o rellenas el formulario de contacto.',
    updated: 'Última actualización: 22 de octubre de 2026',
    sections: [
      ['Quién es el responsable', 'David Luengo Juarez LLC (DLJ Tech). Puedes contactar a través del formulario de esta web.'],
      ['Qué datos recogemos', 'Los que nos facilitas voluntariamente en el formulario de contacto (nombre, correo, empresa y descripción de tu necesidad). El formulario está alojado en Tally (tally.so), que actúa como proveedor de tratamiento de datos.'],
      ['Analítica', 'Usamos analítica respetuosa con la privacidad que no emplea cookies y no recopila datos personales; solo ofrece estadísticas agregadas y anónimas.'],
      ['Para qué los usamos', 'Para responder a tu consulta, valorar si podemos ayudarte y, si lo deseas, enviarte una propuesta. No vendemos tus datos.'],
      ['Tus derechos', 'Puedes solicitar acceso, rectificación o eliminación de tus datos en cualquier momento escribiéndonos a través del formulario.'],
    ] as [string, string][],
  },
  notFound: { title: 'Página no encontrada', text: 'Esta página no existe o se ha movido.', cta: 'Volver al inicio' },
};

const en: typeof es = {
  lang: 'en',
  htmlLang: 'en-US',
  ogLocale: 'en_US',
  seo: {
    title: 'David Luengo Juárez · AI & automation consultant for small businesses',
    description:
      'I automate the repetitive work in your business with AI, apps and custom tools. 30-day trial, no lock-in, money-back guarantee. Logistics, travel, restaurants, language education and health.',
  },
  nav: { method: 'Method', services: 'Services', cases: 'Use cases', offer: 'Offer', about: 'About', faq: 'FAQ', cta: 'Contact', menu: 'Menu', switch: 'Español', switchLabel: 'Leer esta web en español' },
  hero: {
    eyebrow: 'AI & automation consultant',
    h1a: 'Get back the hours your business loses to repetitive tasks.',
    h1b: 'In 30 days, or your money back.',
    audit:
      "You probably think another AI consultant will just bring promises, slide decks and an invoice. That's a fair reaction: you've heard a lot of hype. That's why we start with a 30-day trial, no lock-in, and a guarantee.",
    cta: 'Book a call',
    ctaSecondary: 'See use cases',
    trust: ['One-time 30-day trial', 'No lock-in', 'Money-back guarantee', 'Reply within 48 h'],
  },
  industries: { label: 'Hands-on experience in', items: ['Logistics', 'Travel', 'Restaurants', 'Language education', 'Health'] },
  feels: {
    eyebrow: 'I hear you',
    h2: 'It sounds like…',
    items: [
      'your team spends hours copying data from one tool to another.',
      'you already tried automating something and it ended up half-finished.',
      "you find it hard to delegate because nobody does it exactly like you.",
      "you worry about depending on a system nobody else understands.",
      "you don't have time to learn “yet another tool”.",
    ],
    summaryLead: 'If I put it together:',
    summary:
      "you want to grow without working more hours, you need to see real results before committing, and you don't want to become a technical expert to get there.",
    summaryAsk: 'Am I getting this right?',
    summaryCta: "Yes, that's it",
  },
  method: {
    eyebrow: 'Method',
    h2: "It's simpler than it looks",
    lead: 'Three steps. You bring the business knowledge; I handle the technical side.',
    askLabel: 'The question that guides this step',
    steps: [
      { n: '1', title: 'Discovery', text: 'We identify the 3-6 processes that truly drive your business and leave the noise out. I listen to how you work today before proposing anything.', ask: 'Which task takes the most time and adds the least value?' },
      { n: '2', title: 'Simplify & accelerate', text: 'Before automating, we simplify. Automating a badly designed task only makes it fail faster. I design simple solutions with fast impact.', ask: 'What would a normal day look like if this ran by itself?' },
      { n: '3', title: 'Automate', text: "I deploy the AI automation, connect it to your current tools and leave it measured and documented: you'll know what it does and how much it saves.", ask: 'What would have to happen for you to call this a success?' },
    ],
  },
  services: {
    eyebrow: 'Services',
    h2: 'What I can build for you',
    cards: [
      { icon: '⚙️', title: 'AI & automation', text: 'Workflows that remove manual work and errors, with a human supervising what matters.', points: ['Processes and workflows across your tools', 'Data extraction from documents and emails', 'Assistants and chatbots for customer service', 'Reporting and predictive analytics'] },
      { icon: '🧩', title: 'Custom apps & tools', text: 'Software that fits how you work, not the other way around.', points: ['Web apps and internal tools', 'Integrations with your current systems', 'Real-time metrics dashboards', 'Team workflow management'] },
      { icon: '🧭', title: 'Chief Automation Officer as a Service', text: "Strategic automation leadership without the cost of a full-time executive.", points: ['ROI-prioritised automation roadmap', 'Tool and vendor selection', 'Implementation oversight', 'Training for your internal team'] },
    ],
  },
  cases: {
    eyebrow: 'Use cases',
    h2: 'Real scenarios from your industry',
    lead: 'Each case describes a common problem, how I would solve it and what we would measure to prove it works.',
    note: 'Representative automation scenarios. Actual results depend on your operation and are agreed in writing before we start.',
    read: 'Read the case',
    back: 'All use cases',
    feelsH: 'This may sound familiar',
    buildH: 'What I would build',
    changeH: 'What changes',
    measureH: 'What we would measure',
    stackH: 'Tools',
    askH: 'To get started',
    ctaH: 'Does this scenario sound like yours?',
    ctaText: 'Tell me how you work today and I will honestly tell you if I can help.',
    items: [
      {
        slug: 'logistics', industry: 'Logistics', title: 'Quotes and shipment tracking without copy-paste',
        summary: 'From messy emails and PDFs to a shipment board that updates itself.',
        seo: 'AI automation for logistics companies: quote requests, data extraction from delivery notes and invoices, and shipment status updates for customers.',
        feels: ['It sounds like operations spends the day reading emails and pasting data into spreadsheets.', 'It sounds like customers keep asking “where is my shipment?” and someone answers by hand.', 'It sounds like one typo on a delivery note gets expensive.'],
        build: [
          { title: 'Smart request intake', text: 'AI reads quote-request emails, extracts origin, destination, cargo and dates, and creates the record in your system.' },
          { title: 'Document reading', text: 'Delivery notes, CMRs and invoices become structured data with automatic validation and human review only for doubtful cases.' },
          { title: 'Customer updates', text: 'When a shipment changes status, the customer gets a clear message without anyone writing it.' },
        ],
        change: ['The team reviews exceptions instead of typing data.', 'Quotes go out in minutes, not hours.', 'Fewer “how is my order going?” calls.'],
        measure: ['Weekly hours spent on data entry', 'Time from request to quote', 'Transcription errors per month', 'Status enquiries per customer'],
        stack: 'Your current TMS/ERP or spreadsheet, email, an AI model for extraction and a workflow orchestrator (n8n, Make or custom code).',
        ask: 'Which part of a shipment’s lifecycle costs you the most time today?',
      },
      {
        slug: 'travel', industry: 'Travel', title: 'From enquiry to itinerary in minutes',
        summary: 'Fast replies to every lead and proposal drafts ready for approval.',
        seo: 'AI automation for travel agencies: handling web and WhatsApp enquiries, drafting itineraries and quotes, and booking follow-up.',
        feels: ['It sounds like each enquiry arrives through a different channel and some go unanswered.', 'It sounds like building a custom quote eats hours you could spend selling.', 'It sounds like the customer picks whoever replies first.'],
        build: [
          { title: 'Unified inbox', text: 'Web, email and WhatsApp converge in one place with an instant first reply and qualifying questions.' },
          { title: 'Proposal draft', text: 'Using trip details and your usual suppliers, AI prepares the itinerary and quote; you review and send.' },
          { title: 'Automatic follow-up', text: 'Reminders, pre-trip documents and a review request afterwards, without you having to remember.' },
        ],
        change: ['No lead left unanswered.', 'More proposals sent by the same team.', 'Your judgement stays in every decision; AI only prepares the draft.'],
        measure: ['Time to first reply', 'Proposals sent per week', 'Enquiry-to-booking conversion', 'Reviews received'],
        stack: 'CRM or spreadsheet, WhatsApp Business API, email, an AI model for drafting and a workflow orchestrator.',
        ask: 'How many enquiries go cold every week before anyone replies?',
      },
      {
        slug: 'restaurants', industry: 'Restaurants', title: 'Less paperwork, more time on the floor',
        summary: 'Bookings, reviews and supplier orders running in the background.',
        seo: 'AI automation for restaurants: bookings, review replies, supplier orders and inventory alerts.',
        feels: ['It sounds like the phone rings exactly when service is busiest.', 'It sounds like reviews go unanswered for lack of time.', 'It sounds like supplier orders depend on one person’s memory.'],
        build: [
          { title: 'Bookings by message', text: 'An assistant handles bookings and common questions (hours, allergens, menus) on WhatsApp and web, and writes everything to your calendar.' },
          { title: 'Reviews in your voice', text: 'Draft replies to reviews in your tone; you approve with one click.' },
          { title: 'Orders and alerts', text: 'An alert when a product drops below a minimum and a pre-filled order to your usual supplier.' },
        ],
        change: ['Floor staff focus on the guest in front of them.', 'Fewer no-shows thanks to reminders.', 'Online reputation looked after without daily effort.'],
        measure: ['Calls handled by staff', 'No-show rate', 'Review response time', 'Stock-outs per month'],
        stack: 'Your current booking system and POS, WhatsApp Business, an inventory sheet and an AI model for drafting.',
        ask: 'At which point of service do you most wish for an extra pair of hands?',
      },
      {
        slug: 'language-education', industry: 'Language education', title: 'Enrolment and student follow-up on autopilot',
        summary: 'From first contact to trial class, and on to progress tracking.',
        seo: 'AI automation for language schools: lead capture, placement tests, class scheduling, reminders and progress reports.',
        feels: ['It sounds like the front desk spends most of the day coordinating schedules.', 'It sounds like students vanish between the trial class and enrolment.', 'It sounds like progress reports run late because they take too long.'],
        build: [
          { title: 'Lead capture and placement test', text: 'A flow that replies to the enquiry, offers a placement test and books the trial class.' },
          { title: 'Scheduling and reminders', text: 'Automatic bookings, changes and reminders for students and teachers.' },
          { title: 'Progress reports', text: 'AI writes a first draft from the teacher’s notes; the teacher reviews and sends it.' },
        ],
        change: ['Less manual coordination for the front desk.', 'More students moving from trial to enrolment.', 'Better-informed families without overloading teachers.'],
        measure: ['Trial-to-enrolment conversion', 'Hours spent managing schedules', 'No-shows', 'Report preparation time'],
        stack: 'Web form, calendar, email/WhatsApp, a student sheet or your current platform and an AI model for drafts.',
        ask: 'At which point of a student’s journey do you lose the most people?',
      },
      {
        slug: 'health', industry: 'Health', title: 'Appointments and intake with less friction and more care',
        summary: 'Reminders, intake forms and document organisation, with privacy in mind.',
        seo: 'Automation for clinics and health centres: appointment reminders, intake forms and document sorting with a privacy-first approach.',
        feels: ['It sounds like reception spends hours phoning to confirm appointments.', 'It sounds like paper forms end up being retyped into the system.', 'It sounds like you rightly worry about where patient data ends up.'],
        build: [
          { title: 'Appointment confirmation', text: 'Automatic reminders and confirmations, with easy rescheduling for the patient.' },
          { title: 'Digital intake', text: 'Pre-visit forms that arrive already structured in your system.' },
          { title: 'Document organisation', text: 'Sorting and filing of administrative documents with human review.' },
        ],
        change: ['Fewer gaps caused by no-shows.', 'Reception focused on people, not the phone.', 'Data handled with the minimum necessary.'],
        measure: ['No-shows', 'Confirmation calls avoided', 'Intake time per patient'],
        stack: 'Your current scheduling and clinical software, messaging, and a design that minimises personal data. I do not give medical advice or replace clinical judgement: automation is limited to administrative work. Before starting we review your data-protection obligations (GDPR/HIPAA as applicable).',
        ask: 'Which patient data should never leave your current system?',
      },
    ],
  },
  offer: {
    eyebrow: 'Offer',
    h2: '30-day trial. No strings attached.',
    ask: 'Would it be crazy to try it for 30 days before deciding anything else?',
    price: 'from USD 997',
    priceNote: 'one-time payment; the final amount depends on the complexity of your processes',
    points: [
      'One payment, no hidden fees and no lock-in.',
      'A week before the trial ends you decide whether to continue on a monthly plan, which you can cancel any time.',
      "I only take projects where I'm confident I can deliver results.",
      'Money-back guarantee if the results agreed in writing are not met.',
    ],
    cta: 'Start the trial',
    risk: 'I take on the risk, not you.',
  },
  about: {
    eyebrow: 'About',
    h2: "Hi, I'm David",
    p1: "I'm David Luengo Juárez, founder of DLJ Tech. I design and build AI automations, applications and internal tools for small and mid-sized businesses that want to stop losing time to repetitive work.",
    p2: "I work in Spanish and English, explain things without jargon and document everything so you don't depend on me. My code and projects are open on GitHub.",
    factsH: 'At a glance',
    facts: [
      ['What I do', 'AI automation, custom apps, automation strategy'],
      ['Who for', 'Small businesses in logistics, travel, restaurants, language education and health'],
      ['Languages', 'Spanish and English'],
      ['Company', 'David Luengo Juarez LLC (DLJ Tech)'],
      ['First step', 'Discovery call and a 30-day trial'],
    ],
    linkedin: 'LinkedIn profile',
    github: 'Code on GitHub',
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Frequently asked questions',
    items: [
      { q: 'How quickly can you implement an automation?', a: 'Most solutions are live within 2-4 weeks depending on complexity. I start with an analysis of your processes and give you a detailed timeline in the first conversation.' },
      { q: 'How much does it cost to start?', a: 'The paid trial starts at USD 997, a one-time payment that depends on the complexity of your processes. No commitment, no instalments and no 12-month contract.' },
      { q: 'How long am I locked in?', a: "Not at all. The trial doesn't renew by itself: you pay once and get 30 days of service and results. A week before the end you can choose a monthly plan, which you can also cancel any time." },
      { q: 'How much of my time will this need?', a: 'Very little. I need a few conversations at the start to understand your business and to review results; I do the technical work.' },
      { q: 'Do I need to learn anything technical?', a: "No. I explain what each automation does in plain language and leave it documented." },
      { q: "What if this doesn't work for my type of business?", a: "Before proposing the trial I check that I can deliver results in your specific case; I have no interest in refunding money or damaging my reputation. If what we agreed in writing isn't met, I refund you." },
      { q: 'What happens to my data?', a: 'I work with the minimum data needed, use providers with privacy guarantees, and we review applicable obligations (GDPR or others) together before starting.' },
    ],
  },
  final: {
    h2: 'What would have to happen in 30 days for this to feel like a success?',
    text: "Tell me in the form. I'll reply within 48 hours, and if I can't help, I'll tell you honestly.",
    cta: 'Book a call',
  },
  footer: { tagline: 'AI and automation for businesses that want their time back.', privacy: 'Privacy', rights: 'All rights reserved.' },
  modal: { title: 'Tell me about your case', sub: 'I reply within 48 hours.', close: 'Close', loading: 'Loading form…', fallback: 'Open the form in a new tab' },
  privacy: {
    title: 'Privacy policy',
    description: 'How DLJ Tech handles your personal data when you visit this site or fill in the contact form.',
    updated: 'Last updated: 22 October 2026',
    sections: [
      ['Who is responsible', 'David Luengo Juarez LLC (DLJ Tech). You can reach us through the form on this site.'],
      ['What data we collect', 'Whatever you voluntarily provide in the contact form (name, email, company and a description of your need). The form is hosted by Tally (tally.so), which acts as a data processor.'],
      ['Analytics', 'We use privacy-friendly analytics that does not use cookies and does not collect personal data; it only provides aggregate, anonymous statistics.'],
      ['What we use it for', 'To reply to your enquiry, assess whether we can help and, if you wish, send you a proposal. We do not sell your data.'],
      ['Your rights', 'You may request access, correction or deletion of your data at any time by writing to us through the form.'],
    ],
  },
  notFound: { title: 'Page not found', text: 'This page does not exist or has moved.', cta: 'Back to home' },
};

export const COPY: Record<Lang, typeof es> = { es, en };
