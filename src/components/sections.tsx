import {
  site,
  projects,
  services,
  stats,
  stack,
  contact,
} from "@/lib/content";
import { Icon } from "./Icon";
import { BentoGrid, BentoCard } from "./bento";
import { BrowserPreview } from "./browser-preview";
import { DisplayText } from "./display-text";
import { Reveal } from "./reveal";

function SectionHeader({
  code,
  label,
  title,
}: {
  code: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-4 flex items-baseline justify-between border-b border-dashed border-line-strong pb-2">
      <span className="flex items-baseline">
        <DisplayText text={title} className="text-2xl sm:text-3xl" />
        <span
          aria-hidden="true"
          className="font-doto text-2xl font-bold text-accent sm:text-3xl"
        >
          .
        </span>
      </span>
      <span className="label">
        <span className="text-accent">{code}</span> / {label}
      </span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line-strong px-2.5 py-1 text-[11px] uppercase tracking-wide">
      {children}
    </span>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-3xl scroll-mt-14 px-4 py-8">
      <SectionHeader code="01" label="Work" title="PROYECTOS" />
      <BentoGrid>
        {projects.map((p) => (
          <BentoCard key={p.slug} className="col-span-2 md:col-span-4">
            <div className="group grid gap-4 md:grid-cols-[1.1fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <BrowserPreview url={p.url} brand={p.name} />
                <span className="label absolute left-3 top-3 rounded-full bg-accent px-2 py-1 !text-white">
                  {p.year}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="label">{p.tagline}</span>
                <h3 className="font-doto mt-1 text-2xl font-bold tracking-wide">
                  {p.name.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-sm font-bold uppercase tracking-wide transition-colors hover:text-accent"
                >
                  Ver proyecto <Icon name="external" size={16} />
                </a>
              </div>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-14 px-4 py-8">
      <SectionHeader code="02" label="About" title="SOBRE MÍ" />
      <BentoGrid>
        <BentoCard variant="invert" className="col-span-2 md:col-span-2">
          <Icon name="user" size={22} />
          <p className="mt-3 text-[15px] leading-relaxed">{site.about}</p>
        </BentoCard>

        <BentoCard className="col-span-2 md:col-span-2">
          <span className="label">Stack</span>
          <div className="mt-3 space-y-3">
            {stack.map((g) => (
              <div key={g.group}>
                <span className="label opacity-70">{g.group}</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <Pill key={i}>{i}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {stats.map((s, i) => (
          <BentoCard key={s.label} variant="ghost" className="col-span-1" delay={i * 0.05}>
            <span className="font-doto block text-3xl font-bold tracking-wide">
              {s.value}
            </span>
            <span className="label mt-1 block">{s.label}</span>
          </BentoCard>
        ))}
      </BentoGrid>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-3xl scroll-mt-14 px-4 py-8">
      <SectionHeader code="03" label="Services" title="SERVICIOS" />
      <BentoGrid>
        {services.map((s, i) => (
          <BentoCard key={s.code} className="col-span-1 md:col-span-2" delay={i * 0.05}>
            <div className="flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong">
                <Icon name={s.icon} size={18} />
              </span>
              <span className="font-doto text-lg font-bold tracking-wider text-accent">
                {s.code}
              </span>
            </div>
            <h3 className="mt-3 text-base font-bold uppercase tracking-wide">
              {s.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {s.description}
            </p>
          </BentoCard>
        ))}
      </BentoGrid>
    </section>
  );
}

function ContactChannel({
  icon,
  label,
  value,
  href,
  accent = false,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${
          accent
            ? "bg-accent text-white"
            : "border border-invert-fg/25"
        }`}
      >
        <Icon name={icon} size={18} />
      </span>
      <span className="min-w-0 flex-1 leading-tight">
        <span className="label block text-invert-fg/60">{label}</span>
        <span className="block truncate text-sm font-bold">{value}</span>
      </span>
      {href && <Icon name="arrowUpRight" size={18} />}
    </>
  );
  const cls =
    "flex items-center gap-3 rounded-2xl border border-invert-fg/15 p-3 transition-colors";
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} hover:border-invert-fg/40`}
    >
      {inner}
    </a>
  ) : (
    <div className={`${cls} opacity-60`}>{inner}</div>
  );
}

export function Contact() {
  const wa = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        "Hola Arturo, he visto tu web y me gustaría comentarte un proyecto.",
      )}`
    : undefined;
  const mail = contact.email ? `mailto:${contact.email}` : undefined;

  return (
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-14 px-4 py-8">
      <SectionHeader code="04" label="Contact" title="HABLEMOS" />
      <Reveal className="rounded-[26px] bg-invert-bg p-5 text-invert-fg sm:p-7">
        <p className="label !text-accent">¿Tienes algo en mente?</p>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed">
          {site.tagline} Cuéntame qué necesitas y le damos forma.
        </p>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          <ContactChannel
            icon="whatsapp"
            label="WhatsApp"
            value={contact.whatsapp || "Número pendiente"}
            href={wa}
            accent
          />
          <ContactChannel
            icon="mail"
            label="Email"
            value={contact.email || "Email pendiente"}
            href={mail}
          />
          {contact.github && (
            <ContactChannel
              icon="github"
              label="GitHub"
              value={contact.github.replace(/^https?:\/\//, "")}
              href={contact.github}
            />
          )}
          {contact.linkedin && (
            <ContactChannel
              icon="arrowUpRight"
              label="LinkedIn"
              value={contact.linkedin.replace(/^https?:\/\//, "")}
              href={contact.linkedin}
            />
          )}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 pb-10 pt-4">
      <div className="flex items-center justify-between border-t border-dashed border-line-strong pt-4">
        <span className="label">
          {site.name} — {new Date().getFullYear()}
        </span>
        <a href="#top" className="label transition-colors hover:text-fg">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
