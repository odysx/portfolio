function cleanHost(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

// Representación abstracta de una ventana de navegador, sin fotos reales del sitio.
export function BrowserPreview({
  url,
  className = "",
}: {
  url: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-surface-2 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
        <span className="h-2 w-2 rounded-full border border-line-strong" />
        <span className="h-2 w-2 rounded-full border border-line-strong" />
        <span className="h-2 w-2 rounded-full border border-line-strong" />
        <span className="label ml-2 truncate rounded-full border border-line px-2 py-0.5 text-[9px] normal-case tracking-normal">
          {cleanHost(url)}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-accent" />
          <span className="h-1.5 w-16 rounded-full bg-line-strong" />
          <span className="ml-auto flex gap-1">
            <span className="h-1.5 w-6 rounded-full bg-line" />
            <span className="h-1.5 w-6 rounded-full bg-line" />
          </span>
        </div>
        <div className="mt-2 h-3 w-3/4 rounded-full bg-fg/70" />
        <div className="h-3 w-1/2 rounded-full bg-fg/70" />
        <div className="mt-1 h-1.5 w-full rounded-full bg-line" />
        <div className="h-1.5 w-5/6 rounded-full bg-line" />
        <div className="mt-auto grid grid-cols-4 gap-1.5 pt-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="aspect-square rounded-md border border-line bg-surface"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
