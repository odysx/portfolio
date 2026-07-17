"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong text-fg transition-colors hover:bg-fg hover:text-invert-bg"
    >
      {mounted ? (
        <Icon name={dark ? "sun" : "moon"} size={16} />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
