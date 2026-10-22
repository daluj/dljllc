import type { Lang } from './site';

export type CaseStudy = { slug: string; industry: string; title: string; problem: string; build: string[]; measure: string[]; seo: string };

const es = {
  htmlLang: 'es-ES',
  ogLocale: 'es_ES',
  seo: {
    title: 'David Luengo Juárez · Consultor de IA y automatización',
    description: 'Automatizo las tareas repetitivas de tu negocio con IA y herramientas a medida. Prueba de 30 días, sin permanencia y con garantía de devolución.',
  },
  nav: { cta: 'Contacto', switch: 'English', switchLabel: 'Read this site in English', home: 'Inicio', skip: 'Saltar al contenido' },
  hero: {
    h1: 'Recupera tu tiempo.',
    h1b: 'En 30 días, o te devuelvo el dinero.',
    sub: 'Parece que tu equipo pierde horas en tareas repetitivas, y que ya has oído muchas promesas. Por eso empezamos con una prueba de 30 días, sin permanencia.',
    cta: 'Reservar una llamada',
    industries: 'Logística · Viajes · Restauración · Idiomas · Salud',
  },
  services: {
    h2: 'Cómo te ayudo a crecer',
    items: [
      { t: 'Reduce costes', d: 'Elimina tareas repetitivas y errores manuales con automatización inteligente.' },
      { t: 'Crece más rápido', d: 'Herramientas a medida que simplifican tu operación.' },
      { t: 'Resultados o te devuelvo el dinero', d: 'Mejoras medibles acordadas por escrito, o reembolso completo.' },
    ],
  },
  method: {
    h2: 'Es sencillo',
    steps: [
      { t: 'Descubrimiento', d: 'Identificamos los 3-6 procesos que de verdad importan.' },
      { t: 'Simplificar', d: 'Diseñamos soluciones sencillas y rápidas.' },
      { t: 'Automatizar', d: 'Lo desplegamos y lo dejamos midiendo resultados.' },
    ],
  },
  compare: {
    h2: '¿Por qué DLJ Tech?',
    othersH: 'Otros',
    meH: 'DLJ Tech',
    others: ['Soluciones genéricas', 'Sistemas complejos', 'Plazos largos y resultados poco claros', 'Contratos largos'],
    me: ['Adaptado a tu sector', 'Herramientas simples', 'Resultados medibles en semanas', 'Sin permanencia'],
  },
  faq: {
    h2: 'Preguntas frecuentes',
    items: [
      { q: '¿Qué tan rápido puedes implantarlo?', a: 'Normalmente en 2-4 semanas, según la complejidad.' },
      { q: '¿Cuánto cuesta empezar?', a: 'La prueba de 30 días cuesta desde 997 USD, un único pago. Sin permanencia ni cuotas.' },
      { q: '¿Cuánto tiempo me exige?', a: 'Muy poco. Hablamos al principio y revisamos resultados; el trabajo técnico lo hago yo.' },
      { q: '¿Y si no funciona en mi negocio?', a: 'Antes de empezar compruebo que puedo conseguirlo. Si no se cumple lo acordado, te devuelvo el dinero.' },
    ],
  },
  about: {
    h2: 'Sobre mí',
    text: 'Soy David Luengo Juárez, fundador de DLJ Tech. Automatizo procesos con IA y construyo herramientas para pymes, en español e inglés.',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  cta: { h2: '¿Qué tendría que pasar en 30 días para que fuera un éxito?', sub: 'Llamada gratuita de 30 minutos. Sin compromiso.', btn: 'Reservar una llamada' },
  footer: { privacy: 'Privacidad', rights: 'Todos los derechos reservados.' },
  cases: {
    back: 'Todos los casos', buildH: 'Qué construiría', measureH: 'Qué mediríamos',
    note: 'Escenario representativo. Los resultados dependen de tu operación y se acuerdan por escrito.',
    ctaH: '¿Te suena?',
    items: [
      { slug: 'logistica', industry: 'Logística', title: 'Cotizaciones y envíos sin copiar y pegar', problem: 'Parece que tu equipo pasa el día pasando datos de correos y PDFs a hojas de cálculo.', build: ['Lectura automática de solicitudes y albaranes', 'Cotizaciones en minutos', 'Avisos de estado al cliente'], measure: ['Horas de entrada de datos', 'Tiempo hasta la cotización', 'Errores al mes'], seo: 'Automatización con IA para logística: cotizaciones, lectura de albaranes y avisos de estado de envíos.' },
      { slug: 'viajes', industry: 'Viajes', title: 'De la consulta al itinerario en minutos', problem: 'Parece que cada consulta llega por un canal distinto y alguna se queda sin respuesta.', build: ['Bandeja única con respuesta inmediata', 'Borrador de itinerario y presupuesto', 'Seguimiento automático'], measure: ['Tiempo de primera respuesta', 'Propuestas por semana', 'Conversión a reserva'], seo: 'Automatización con IA para agencias de viajes: consultas, itinerarios y presupuestos.' },
      { slug: 'restaurantes', industry: 'Restauración', title: 'Menos papeleo, más tiempo en sala', problem: 'Parece que el teléfono suena justo cuando el servicio está más cargado.', build: ['Reservas y dudas por WhatsApp', 'Respuestas a reseñas con tu tono', 'Alertas de stock y pedidos'], measure: ['Llamadas atendidas', 'No-shows', 'Roturas de stock'], seo: 'Automatización con IA para restaurantes: reservas, reseñas y pedidos a proveedores.' },
      { slug: 'educacion-idiomas', industry: 'Idiomas', title: 'Matrículas y seguimiento en piloto automático', problem: 'Parece que los alumnos se pierden entre la clase de prueba y la matrícula.', build: ['Prueba de nivel y clase de prueba automáticas', 'Agenda y recordatorios', 'Borradores de informes de progreso'], measure: ['Conversión a matrícula', 'Horas de gestión', 'Faltas sin aviso'], seo: 'Automatización con IA para academias de idiomas: captación, agenda e informes de progreso.' },
      { slug: 'salud', industry: 'Salud', title: 'Citas y admisiones con menos fricción', problem: 'Parece que recepción dedica horas a confirmar citas por teléfono.', build: ['Recordatorios y confirmaciones', 'Formularios de admisión digitales', 'Orden documental con revisión humana'], measure: ['Ausencias sin aviso', 'Llamadas evitadas', 'Tiempo de admisión'], seo: 'Automatización administrativa para clínicas: citas, admisión y documentos, cuidando la privacidad.' },
    ] as CaseStudy[],
  },
  modal: { title: 'Cuéntame tu caso', sub: 'Respondo en un máximo de 48 horas.', close: 'Cerrar', loading: 'Cargando…', fallback: 'Abrir el formulario en una pestaña nueva' },
  privacy: {
    title: 'Política de privacidad',
    description: 'Cómo DLJ Tech trata tus datos personales.',
    updated: 'Última actualización: 22 de octubre de 2026',
    sections: [
      ['Responsable', 'David Luengo Juarez LLC (DLJ Tech). Contacto a través del formulario de esta web.'],
      ['Datos que recogemos', 'Los que nos facilitas en el formulario de contacto (nombre, correo, empresa y mensaje). El formulario está alojado en Tally (tally.so), que actúa como encargado del tratamiento.'],
      ['Analítica', 'Usamos analítica sin cookies y sin datos personales; solo estadísticas agregadas.'],
      ['Uso', 'Para responder a tu consulta y, si lo deseas, enviarte una propuesta. No vendemos tus datos.'],
      ['Tus derechos', 'Puedes pedir acceso, rectificación o eliminación de tus datos escribiéndonos a través del formulario.'],
    ] as [string, string][],
  },
  notFound: { title: 'Página no encontrada', cta: 'Volver al inicio' },
};

const en: typeof es = {
  htmlLang: 'en-US',
  ogLocale: 'en_US',
  seo: {
    title: 'David Luengo Juárez · AI & automation consultant',
    description: 'I automate the repetitive work in your business with AI and custom tools. 30-day trial, no lock-in, money-back guarantee.',
  },
  nav: { cta: 'Contact', switch: 'Español', switchLabel: 'Leer esta web en español', home: 'Home', skip: 'Skip to content' },
  hero: {
    h1: 'Get your time back.',
    h1b: 'In 30 days, or your money back.',
    sub: "It sounds like your team loses hours to repetitive tasks, and that you've heard plenty of promises. That's why we start with a 30-day trial, no lock-in.",
    cta: 'Book a call',
    industries: 'Logistics · Travel · Restaurants · Languages · Health',
  },
  services: {
    h2: 'How I help you grow',
    items: [
      { t: 'Cut costs', d: 'Remove repetitive tasks and manual errors with smart automation.' },
      { t: 'Grow faster', d: 'Custom tools that simplify your operations.' },
      { t: 'Results or your money back', d: 'Measurable improvements agreed in writing, or a full refund.' },
    ],
  },
  method: {
    h2: "It's simple",
    steps: [
      { t: 'Discovery', d: 'We find the 3-6 processes that really matter.' },
      { t: 'Simplify', d: 'We design simple, fast solutions.' },
      { t: 'Automate', d: 'We deploy it and track the results.' },
    ],
  },
  compare: {
    h2: 'Why DLJ Tech?',
    othersH: 'Others',
    meH: 'DLJ Tech',
    others: ['Generic solutions', 'Complex systems', 'Long timelines, unclear results', 'Long contracts'],
    me: ['Built for your industry', 'Simple tools', 'Measurable results in weeks', 'No lock-in'],
  },
  faq: {
    h2: 'FAQ',
    items: [
      { q: 'How fast can you implement it?', a: 'Usually 2-4 weeks, depending on complexity.' },
      { q: 'How much does it cost to start?', a: 'The 30-day trial starts at USD 997, one payment. No lock-in, no instalments.' },
      { q: 'How much of my time does it need?', a: 'Very little. We talk at the start and review results; I do the technical work.' },
      { q: "What if it doesn't work for my business?", a: "Before starting I check I can deliver. If what we agreed isn't met, I refund you." },
    ],
  },
  about: {
    h2: 'About',
    text: "I'm David Luengo Juárez, founder of DLJ Tech. I automate processes with AI and build tools for small businesses, in Spanish and English.",
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  cta: { h2: 'What would have to happen in 30 days for this to be a success?', sub: 'Free 30-minute call. No obligation.', btn: 'Book a call' },
  footer: { privacy: 'Privacy', rights: 'All rights reserved.' },
  cases: {
    back: 'All use cases', buildH: 'What I would build', measureH: 'What we would measure',
    note: 'Representative scenario. Results depend on your operation and are agreed in writing.',
    ctaH: 'Sound familiar?',
    items: [
      { slug: 'logistics', industry: 'Logistics', title: 'Quotes and shipments without copy-paste', problem: 'It sounds like your team spends the day moving data from emails and PDFs into spreadsheets.', build: ['Automatic reading of requests and delivery notes', 'Quotes in minutes', 'Status updates to customers'], measure: ['Hours of data entry', 'Time to quote', 'Errors per month'], seo: 'AI automation for logistics: quotes, delivery-note reading and shipment status updates.' },
      { slug: 'travel', industry: 'Travel', title: 'From enquiry to itinerary in minutes', problem: 'It sounds like each enquiry arrives through a different channel and some go unanswered.', build: ['One inbox with instant replies', 'Itinerary and quote drafts', 'Automatic follow-up'], measure: ['Time to first reply', 'Proposals per week', 'Booking conversion'], seo: 'AI automation for travel agencies: enquiries, itineraries and quotes.' },
      { slug: 'restaurants', industry: 'Restaurants', title: 'Less paperwork, more time on the floor', problem: 'It sounds like the phone rings just when service is busiest.', build: ['Bookings and questions on WhatsApp', 'Review replies in your tone', 'Stock alerts and supplier orders'], measure: ['Calls handled', 'No-shows', 'Stock-outs'], seo: 'AI automation for restaurants: bookings, reviews and supplier orders.' },
      { slug: 'language-education', industry: 'Languages', title: 'Enrolment and follow-up on autopilot', problem: 'It sounds like students get lost between the trial class and enrolment.', build: ['Automatic placement test and trial class', 'Scheduling and reminders', 'Progress report drafts'], measure: ['Enrolment conversion', 'Admin hours', 'No-shows'], seo: 'AI automation for language schools: lead capture, scheduling and progress reports.' },
      { slug: 'health', industry: 'Health', title: 'Appointments and intake with less friction', problem: 'It sounds like reception spends hours phoning to confirm appointments.', build: ['Reminders and confirmations', 'Digital intake forms', 'Document filing with human review'], measure: ['No-shows', 'Calls avoided', 'Intake time'], seo: 'Administrative automation for clinics: appointments, intake and documents, with privacy in mind.' },
    ],
  },
  modal: { title: 'Tell me about your case', sub: 'I reply within 48 hours.', close: 'Close', loading: 'Loading…', fallback: 'Open the form in a new tab' },
  privacy: {
    title: 'Privacy policy',
    description: 'How DLJ Tech handles your personal data.',
    updated: 'Last updated: 22 October 2026',
    sections: [
      ['Controller', 'David Luengo Juarez LLC (DLJ Tech). Contact through the form on this site.'],
      ['Data we collect', 'What you provide in the contact form (name, email, company and message). The form is hosted by Tally (tally.so), which acts as a data processor.'],
      ['Analytics', 'We use cookie-free analytics with no personal data; aggregate statistics only.'],
      ['Use', 'To reply to your enquiry and, if you wish, send a proposal. We do not sell your data.'],
      ['Your rights', 'You can request access, correction or deletion of your data by writing to us through the form.'],
    ],
  },
  notFound: { title: 'Page not found', cta: 'Back to home' },
};

export const COPY: Record<Lang, typeof es> = { es, en };
