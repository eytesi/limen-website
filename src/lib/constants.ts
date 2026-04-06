/**
 * Constants for the Limen website
 */

export const SITE_CONFIG = {
  name: "Limen",
  description: "Tu mundo, visible",
  tagline: "Branding desde el corazón, diseño para el mundo",
  contact: {
    email: "ivo@limen.agency",
    whatsapp: "+1 (555) 123-4567",
  },
};

export const PRODUCTS = [
  {
    id: "umbral",
    name: "Umbral",
    shortName: "Identidad de marca completa",
    price: 800,
    currency: "USD",
    badge: "Proyecto único",
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
    price: 1800,
    currency: "USD",
    badge: "más completo",
    highlight: true,
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
    shortName: "Solo diseño web",
    price: 600,
    currency: "USD",
    badge: "Proyecto único",
    description:
      "Para clientes que ya tienen identidad definida y necesitan un sitio web que la traduzca con coherencia.",
    features: [
      "Diseño en Figma + desarrollo (hasta 4 páginas)",
      "Versión mobile responsive",
      "Integración de CMS básico si se necesita",
      "Una ronda de revisiones",
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
    title: "Studio Aurora",
    category: "Branding + Web Design",
    pattern: "fabric-1",
    description: "Identidad visual para studio de fotografía conceptual",
  },
  {
    id: 2,
    title: "Verde Vivo",
    category: "Branding",
    pattern: "fabric-2",
    description: "Marca para emprendimiento de productos ecológicos",
  },
  {
    id: 3,
    title: "Nexus Tech",
    category: "Web Design",
    pattern: "animal",
    description: "Sitio web para startup de tecnología",
  },
  {
    id: 4,
    title: "Artístico Collective",
    category: "Rediseño de Marca",
    pattern: "geometric",
    description: "Modernización de galería de arte contemporáneo",
  },
  {
    id: 5,
    title: "Wellness Co",
    category: "Branding + Web",
    pattern: "fabric-3",
    description: "Identidad para marca de bienestar y meditación",
  },
  {
    id: 6,
    title: "Local Market",
    category: "E-Commerce Design",
    pattern: "animal",
    description: "Plataforma de comercio electrónico local",
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
