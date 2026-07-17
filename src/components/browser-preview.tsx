export function cleanHost(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

// Representación abstracta de una ventana de navegador que imita la
// estructura real de la página (nav, hero, CTA, valoración, galería),
// sin usar fotos ni texto literal del sitio.
export function BrowserPreview({
  url,
  brand,
  cta = "Pedir cita",
  rating = "5,0",
  className = "",
}: {
  url: string;
  brand: string;
  cta?: string;
  rating?: string;
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

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="text-[9px] font-bold uppercase tracking-wider">
              {brand}
            </span>
          </span>
          <span className="flex gap-1">
            <span className="h-1.5 w-4 rounded-full bg-line" />
            <span className="h-1.5 w-4 rounded-full bg-line" />
            <span className="h-1.5 w-4 rounded-full bg-line" />
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="h-3 w-[85%] rounded-full bg-fg/75" />
          <div className="h-3 w-[55%] rounded-full bg-fg/75" />
          <div className="h-1.5 w-[65%] rounded-full bg-line" />
        </div>

        <div className="flex items-center gap-2.5">
          <span className="rounded-full bg-accent px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide text-white">
            {cta}
          </span>
          <span className="flex items-center gap-1 text-[9px] tracking-wide text-accent">
            ★★★★★
            <span className="text-muted">{rating}</span>
          </span>
        </div>

        <div className="mt-auto grid grid-cols-4 gap-1.5 pt-2">
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
