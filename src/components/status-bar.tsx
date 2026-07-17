"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

function useClock() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function StatusBar() {
  const time = useClock();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-3xl items-center justify-between px-4">
        <span className="font-doto text-sm font-bold tracking-wider tabular-nums">
          {time}
        </span>
        <div className="flex items-center gap-4">
          {site.available && (
            <span className="label flex items-center gap-1.5">
              Disponible
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
            </span>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
