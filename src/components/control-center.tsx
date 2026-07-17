"use client";

import { motion, useReducedMotion } from "motion/react";
import { site, featuredProject, projects } from "@/lib/content";
import { cleanHost } from "./browser-preview";
import { Icon } from "./Icon";
import { DisplayText } from "./display-text";

type Tile = {
  href: string;
  title: string;
  state: string;
  icon: string;
  variant: "on" | "default" | "accent";
};

const tiles: Tile[] = [
  { href: "#about", title: "Sobre mí", state: "ACTIVO", icon: "user", variant: "on" },
  {
    href: "#work",
    title: "Proyectos",
    state: `${String(projects.length).padStart(2, "0")}`,
    icon: "folder",
    variant: "default",
  },
  { href: "#services", title: "Servicios", state: "", icon: "stack", variant: "default" },
  { href: "#contact", title: "Contacto", state: "", icon: "whatsapp", variant: "accent" },
];

const tileBase =
  "group flex items-center gap-2.5 rounded-[18px] p-3.5 transition-colors";
const tileStyles: Record<Tile["variant"], string> = {
  on: "bg-invert-bg text-invert-fg",
  default: "bg-surface-2 border border-line hover:border-line-strong",
  accent: "bg-surface-2 border border-line hover:border-line-strong",
};
const circleStyles: Record<Tile["variant"], string> = {
  on: "bg-invert-fg text-invert-bg",
  default: "border border-line-strong text-fg",
  accent: "bg-accent text-white border border-accent",
};

export function ControlCenter() {
  const reduce = useReducedMotion();
  return (
    <section aria-label="Inicio" className="mx-auto max-w-3xl px-4 pt-6 pb-4">
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[26px] border border-line bg-surface/70 p-4 backdrop-blur-sm sm:p-5"
      >
        <div className="mb-4 flex items-center justify-center">
          <span className="h-1.5 w-11 rounded-full bg-line-strong" />
        </div>

        <div className="mb-5 flex items-end justify-between px-1">
          <div>
            <DisplayText
              text={site.name.toUpperCase()}
              className="text-5xl sm:text-6xl"
            />
            <p className="label mt-2">{site.role}</p>
          </div>
          <span className="label hidden sm:block">Portafolio / 2026</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {tiles.map((t) => (
            <a key={t.href} href={t.href} className={`${tileBase} ${tileStyles[t.variant]}`}>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${circleStyles[t.variant]}`}
              >
                <Icon name={t.icon} size={16} />
              </span>
              <span className="leading-tight">
                <span className="block text-[13px] font-bold uppercase tracking-wide">
                  {t.title}
                </span>
                {t.state && (
                  <span className="label opacity-70">{t.state}</span>
                )}
              </span>
            </a>
          ))}
        </div>

        <a
          href="#work"
          className="mt-2.5 flex items-center gap-3 rounded-[18px] border border-line bg-surface-2 p-3.5 transition-colors hover:border-line-strong sm:mt-3"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-strong">
            <Icon name={featuredProject.icon} size={20} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="label flex items-center justify-between gap-2">
              <span className="truncate text-accent">Proyecto destacado</span>
              <span className="shrink-0">
                01 / {String(projects.length).padStart(2, "0")}
              </span>
            </span>
            <span className="mt-0.5 flex items-center justify-between gap-2">
              <span className="font-doto truncate text-lg font-bold tracking-wide">
                {featuredProject.name.toUpperCase()}
              </span>
              <Icon name="arrowRight" size={18} className="shrink-0 text-accent" />
            </span>
            <span className="mt-1 flex items-center justify-between gap-2">
              <span className="truncate text-xs text-muted">
                {featuredProject.tagline}
              </span>
              <span className="label shrink-0 normal-case tracking-normal text-muted">
                {cleanHost(featuredProject.url)}
              </span>
            </span>
          </span>
        </a>
      </motion.div>
    </section>
  );
}
