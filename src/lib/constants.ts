/**
 * Constants for the Limen website
 */

export const SITE_CONFIG = {
  name: "Limen",
  description: "Tu mundo, visible",
  tagline: "Branding desde el corazón, diseño para el mundo",
  contact: {
    email: "hola@limen.agency",
    whatsapp: "+54 11 6977-8773",
  },
};

export const PRODUCTS = [
  {
    id: "umbral",
    name: "Umbral",
    shortName: "Identidad de marca completa",
    comingSoon: true,
    badge: "Próximamente",
    description:
      "Para emprendimientos, artistas y proyectos que necesitan construir su identidad desde cero o redefinirla completamente.",
    features: [
      "Sesión de descubrimiento — narrativa, valores, mundo de marca",
      "Naming o refinamiento del nombre existente",
      "Logotipo + sistema de marca (colores, tipografía, patterns)",
      "Manual de identidad visual básico",
      "Aplicaciones clave (perfil social, tarjeta, membrete)",
    ],
  },
  {
    id: "territorio",
    name: "Territorio",
    shortName: "Identidad + presencia digital",
    comingSoon: true,
    badge: "Próximamente",
    description:
      "Para quienes necesitan tanto una identidad sólida como un espacio digital donde habitarla.",
    features: [
      "Estrategia de contenido y tono de voz",
      "Diseño y desarrollo web (hasta 5 páginas)",
      "Sistema de patterns y texturas personalizado",
      "Kit de activos para redes sociales",
      "Manual de identidad extendido",
      "Todo lo de Umbral",
    ],
  },
  {
    id: "mundo",
    name: "Mundo",
    shortName: "Diseño web a medida",
    price: 100,
    priceARS: 150000,
    currency: "USD",
    badge: "Disponible ahora",
    highlight: true,
    description:
      "Tu negocio merece un sitio que lo represente. Diseño y desarrollo web completo, mobile-first, listo para subir.",
    features: [
      "Sitio web completo — hasta 5 secciones",
      "Diseño mobile-first, 100% responsive",
      "Identidad visual aplicada al sitio",
      "WhatsApp, redes y mapas integrados",
      "Entrega en 7 días hábiles",
      "Una ronda de revisiones incluida",
    ],
  },
];

export const SERVICES = [
  {
    id: "branding",
    name: "Branding",
    description:
      "Construimos la identidad visual integral de tu marca, desde el concepto hasta el manual completo.",
    items: [
      { title: "Estrategia de marca", description: "Posicionamiento, valores, narrativa" },
      { title: "Identidad visual", description: "Logo, paleta, tipografía, patrones" },
      { title: "Manual de identidad", description: "Guía completa de aplicaciones" },
    ],
  },
  {
    id: "web-design",
    name: "Diseño Web",
    description:
      "Creamos experiencias digitales coherentes con tu marca, responsivas y pensadas para convertir.",
    items: [
      { title: "Estrategia UX", description: "Arquitectura de información" },
      { title: "Diseño Figma", description: "Prototipos de alta fidelidad" },
      { title: "Desarrollo web", description: "Next.js, responsive, optimizado" },
    ],
  },
  {
    id: "rediseno",
    name: "Rediseño",
    description:
      "Revitalizamos marcas existentes, modernizando su identidad manteniendo su esencia.",
    items: [
      { title: "Auditoría de marca", description: "Análisis y diagnóstico actual" },
      { title: "Reposicionamiento", description: "Estrategia de transformación" },
      { title: "Nueva identidad", description: "Implementación y transición" },
    ],
  },
];

export const ADDITIONAL_SERVICES = [
  { title: "Dirección de arte", description: "Para sesión fotográfica personalizada a tu marca" },
  { title: "Pack de contenido", description: "12 piezas diseñadas para redes sociales" },
  {
    title: "Consultoría de posicionamiento",
    description: "Sesión única para definir tu estrategia de marca",
  },
  { title: "Rediseño / auditoría", description: "Análisis y redefinición de marca existente" },
  { title: "Diseño de merch", description: "Packaging, productos, experiencia tangible" },
  { title: "Retainer mensual", description: "Soporte creativo continuo bajo medida" },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "La Leña",
    category: "Web Design · Restaurante",
    pattern: "fabric-1",
    description: "Sitio para restaurante patagónico en Ushuaia. Carta con tabs, horarios, reservas por WhatsApp.",
  },
  {
    id: 2,
    title: "Miga",
    category: "Web Design · Panadería",
    pattern: "fabric-2",
    description: "Sitio kawaii para panadería artesanal. Encargos, carta y sección de Instagram integrados.",
  },
  {
    id: 3,
    title: "KRUX",
    category: "Web Design · Moda",
    pattern: "geometric",
    description: "Sitio streetwear industrial B&W con catálogo por categorías, colecciones y marquee diagonal.",
  },
  {
    id: 4,
    title: "CUMBRE",
    category: "Web Design · Turismo de Nieve",
    pattern: "fabric-3",
    description: "Sitio de alquiler de equipamiento de nieve. Tarifas, proceso de reserva y catálogo por tipo.",
  },
  {
    id: 5,
    title: "ALERO",
    category: "Web Design · Hotelería",
    pattern: "animal",
    description: "Cabañas del sur con loader animado (cabaña SVG), sección de ventanas y sistema de reservas.",
  },
  {
    id: 6,
    title: "LITORAL",
    category: "Web Design · Música",
    pattern: "fabric-1",
    description: "Portfolio de banda con Spotify embed, tracklist, fechas de tour y tienda de merch integrada.",
  },
];

export const COLORS = {
  black: "#0A0A0A",
  white: "#FFFFFF",
  cream: "#F5F3F0",
  accent: "#E63946",
  accentAlt: "#457B9D",
  accentGold: "#D4A574",
};

export const ANIMATIONS = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
  },
  delay: {
    none: 0,
    small: 0.1,
    medium: 0.2,
    large: 0.3,
  },
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

export const NAV_ITEMS = [
  { label: "INICIO", href: "/" },
  { label: "SOBRE LIMEN", href: "/sobre-limen" },
  { label: "SERVICIOS", href: "/servicios" },
  { label: "PRODUCTOS", href: "/productos" },
  { label: "PORTAFOLIO", href: "/portafolio" },
  { label: "CONTACTO", href: "/contacto" },
];
