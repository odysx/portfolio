export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  stack: string[];
  url: string;
  featured?: boolean;
};

export type Service = {
  code: string;
  title: string;
  description: string;
  icon: string;
};

export type Stat = { value: string; label: string };

// --- Datos de contacto: sustituir aquí cuando estén disponibles ---
export const contact = {
  // Número en formato internacional sin signos, p. ej. "34600111222". Vacío = pendiente.
  whatsapp: "",
  email: "", // p. ej. "arturo@dominio.com". Vacío = pendiente.
  github: "", // p. ej. "https://github.com/usuario"
  linkedin: "",
};

export const site = {
  name: "Arturo",
  role: "Desarrollador Full-Stack",
  available: true,
  location: "España",
  tagline: "Desarrollo de aplicaciones, webs y productos digitales a medida.",
  about:
    "Soy Arturo, desarrollador full-stack. Diseño y desarrollo aplicaciones y sitios web completos, desde la interfaz hasta la base de datos, cuidando tanto la experiencia de usuario como la calidad del código. Trabajo directamente con cada cliente para entender sus necesidades y entregar soluciones a medida, sin plantillas genéricas.",
};

export const stats: Stat[] = [
  { value: "FULL", label: "Stack" },
  { value: "100%", label: "A medida" },
  { value: "0", label: "Plantillas" },
  { value: "1:1", label: "Trato directo" },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["TypeScript", "React", "Next.js", "Astro", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "PostgreSQL", "APIs REST"] },
  { group: "Herramientas", items: ["Git", "Vite", "Vercel"] },
];

export const services: Service[] = [
  {
    code: "01",
    title: "Webs a medida",
    description:
      "Sitios rápidos, cuidados y pensados para convertir. Nada de plantillas recicladas.",
    icon: "globe",
  },
  {
    code: "02",
    title: "Aplicaciones",
    description:
      "Apps y paneles a medida, del prototipo funcional al producto en producción.",
    icon: "layout",
  },
  {
    code: "03",
    title: "Full-stack",
    description:
      "Del frontend al backend y la base de datos, todo bajo un mismo techo.",
    icon: "stack",
  },
  {
    code: "04",
    title: "Integraciones",
    description:
      "Automatizaciones y conexiones con APIs, pagos y otras herramientas de terceros.",
    icon: "sparkles",
  },
];

export const projects: Project[] = [
  {
    slug: "atodocolor",
    name: "A Todo Color",
    tagline: "Peluquería · Cartagena",
    description:
      "Web completa para una peluquería de Cartagena: servicios, galería de trabajos, reseñas y ubicación. Rápida, cuidada y fácil de mantener.",
    year: "2026",
    stack: ["Astro", "TypeScript", "CSS"],
    url: "https://www.atodocolorpeluqueria.es",
    featured: true,
  },
];

export const featuredProject =
  projects.find((p) => p.featured) ?? projects[0];
