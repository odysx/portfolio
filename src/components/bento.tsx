import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function BentoGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
}

const variants = {
  default: "bg-surface border border-line",
  invert: "bg-invert-bg text-invert-fg border border-transparent",
  ghost: "bg-transparent border border-dashed border-line-strong",
} as const;

export function BentoCard({
  children,
  variant = "default",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`rounded-[18px] p-4 sm:p-5 ${variants[variant]} ${className}`}
    >
      {children}
    </Reveal>
  );
}
