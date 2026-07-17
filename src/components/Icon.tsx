import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  stack: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5M3 18l9 5 9-5" />
    </>
  ),
  sparkles: (
    <path d="M12 3v6m0 6v6m-9-9h6m6 0h6M6.5 6.5l3 3m5 5 3 3m0-11-3 3m-5 5-3 3" />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </>
  ),
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />,
  whatsapp: (
    <>
      <path d="M4 20l1.5-4A8 8 0 1 1 9 19.5L4 20Z" />
      <path d="M9 9c0 4 2 6 6 6 1 0 1.5-1 1-1.5l-1.5-1-1 1c-1 0-2.5-1.5-2.5-2.5l1-1-1-1.5C10.5 7.5 9.5 8 9 9Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.2-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 4.5-1.4 4.5-5a4 4 0 0 0-1-2.7 3.7 3.7 0 0 0-.1-2.7s-1-.3-3.5 1.3a12 12 0 0 0-6 0C6.4 3.6 5.4 3.9 5.4 3.9a3.7 3.7 0 0 0-.1 2.7A4 4 0 0 0 4.3 9.3c0 3.6 1.7 4.7 4.5 5-.6.6-.6 1.2-.5 2V21" />
  ),
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  arrowRight: <path d="M4 12h16m-6-6 6 6-6 6" />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.5 7.5 20 18M8.5 16.5 20 6" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
    </>
  ),
  moon: <path d="M20 14a8 8 0 1 1-10-10 6 6 0 0 0 10 10Z" />,
};

export function Icon({
  name,
  size = 20,
  ...props
}: { name: string; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}
