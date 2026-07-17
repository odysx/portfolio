@AGENTS.md

# Portfolio de Arturo

Web personal (portfolio) de Arturo, desarrollador full-stack. Estética **Nothing OS**:
monocromo industrial, tipografía dot-matrix, acento rojo y rejilla de puntos. Mobile-first,
portada tipo "centro de control" y secciones en bento grid.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript.
- Tailwind CSS v4 (config CSS-first en `src/app/globals.css`, sin `tailwind.config`).
- Animaciones con `motion` (`motion/react`).
- Fuentes vía `next/font/google`: **Doto** (display/dot-matrix) y **Space Mono** (etiquetas/mono).
- Export **estático** (`output: 'export'`) para desplegar en **Cloudflare Pages**.

## Comandos
- `npm run dev` — servidor de desarrollo (http://localhost:3000).
- `npm run build` — build + export estático a `out/`.
- `npm run lint` — ESLint.

## Estructura
- `src/lib/content.ts` — **única fuente de contenido** (datos, proyectos, servicios, contacto).
  Editar aquí para cambiar textos, proyectos o datos de contacto.
- `src/app/globals.css` — sistema de diseño (tokens de tema claro/oscuro, utilidades).
- `src/app/layout.tsx` — fuentes, metadatos y script anti-parpadeo del tema.
- `src/components/` — componentes: `status-bar`, `control-center` (portada), `bento`,
  `sections` (Work/About/Services/Contact/Footer), `theme-toggle`, `display-text`, `reveal`,
  `Icon`.
- `public/projects/` — imágenes de proyectos.

## Convenciones
- Tema claro/oscuro con la clase `.dark` en `<html>` (persistida en `localStorage`).
- Colores solo vía tokens (`bg-surface`, `text-fg`, `text-muted`, `border-line`,
  `text-accent`, `bg-invert-bg`...). No hardcodear hex en componentes.
- Todo debe funcionar en export estático: sin API routes, SSR ni `next/image` con loader por
  defecto (las imágenes usan `unoptimized`). Contacto por enlaces `wa.me` / `mailto:`.
- Respetar `prefers-reduced-motion` (ya contemplado en CSS y en los componentes de animación).

## Pendiente de Arturo
- Rellenar `contact` en `src/lib/content.ts` (WhatsApp, email, GitHub, LinkedIn).
- Añadir más proyectos e imágenes en `content.ts` + `public/projects/`.
- Decidir dominio.
