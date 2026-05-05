const items = [
  "Le Monde · Gastronomie",
  "Condé Nast Traveler",
  "Eater · Private Tables",
  "The Guardian Weekend",
  "Monocle · The Forecast",
  "Apartamento Magazine",
];

export default function Featured() {
  // duplicate for seamless loop
  const loop = [...items, ...items];
  return (
    <section
      aria-label="Featured in"
      className="bg-background border-t border-b border-foreground/5 overflow-hidden"
      style={{ paddingTop: 32, paddingBottom: 32 }}
    >
      <div className="relative">
        <div className="flex w-max animate-marquee gap-16 will-change-transform" style={{ animationTimingFunction: "linear" }}>
          {loop.map((label, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span className="font-label text-xs2 text-muted-foreground">{label}</span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-[hsl(var(--gold))]" />
            </div>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24" style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24" style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />
      </div>
    </section>
  );
}
