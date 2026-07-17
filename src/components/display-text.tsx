"use client";

import { motion, useReducedMotion } from "motion/react";

// Parpadeo tipo panel LED encendiéndose, con jitter estable por carácter.
export function DisplayText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const chars = Array.from(text);

  return (
    <span className={`display inline-block ${className}`} aria-label={text}>
      {chars.map((c, i) => {
        const jitter = ((i * 37) % 7) / 100;
        return (
          <motion.span
            key={i}
            aria-hidden="true"
            className="inline-block"
            initial={reduce ? { opacity: 1 } : { opacity: 0.12 }}
            whileInView={
              reduce
                ? { opacity: 1 }
                : { opacity: [0.12, 1, 0.35, 0.85, 1] }
            }
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: 0.5,
                    delay: delay + i * 0.05 + jitter,
                    times: [0, 0.35, 0.55, 0.75, 1],
                    ease: "easeOut",
                  }
            }
          >
            {c === " " ? " " : c}
          </motion.span>
        );
      })}
    </span>
  );
}
