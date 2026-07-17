import type { Metadata, Viewport } from "next";
import { Doto, Space_Mono } from "next/font/google";
import "./globals.css";

const doto = Doto({
  subsets: ["latin"],
  variable: "--doto",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arturo — Desarrollador Full-Stack",
  description:
    "Desarrollo de aplicaciones, webs y productos digitales a medida. Del frontend al backend, todo bajo un mismo techo.",
  openGraph: {
    title: "Arturo — Desarrollador Full-Stack",
    description:
      "Desarrollo de aplicaciones, webs y productos digitales a medida.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e7e5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var m=t||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');if(m==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${doto.variable} ${spaceMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh dot-grid">{children}</body>
    </html>
  );
}
