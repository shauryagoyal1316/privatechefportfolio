export default function Philosophy() {
  const items = ["Seasonal.", "Soulful.", "Unforgettable."];
  return (
    <section className="bg-primary text-primary-foreground" aria-label="Philosophy">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-10 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {items.map((it, i) => (
          <div key={it} className="flex items-center gap-6">
            <span className="font-label text-xs2 text-primary-foreground/90">{it}</span>
            {i < items.length - 1 && (
              <span aria-hidden className="inline-flex items-center gap-2">
                <span className="ornament" style={{ background: "hsl(var(--gold))" }} />
                <span className="h-1 w-1 rounded-full bg-[hsl(var(--gold))]" />
                <span className="ornament" style={{ background: "hsl(var(--gold))" }} />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
