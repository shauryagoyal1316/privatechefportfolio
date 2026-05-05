import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import hero from "@/assets/hero.jpg";

const items = [
  { src: g1, alt: "Beet and walnut tart with goat curd", h: "tall" },
  { src: g3, alt: "Fresh herbs on marble", h: "short" },
  { src: g4, alt: "Velouté in a small bowl", h: "tall" },
  { src: hero, alt: "Candlelit dinner table", h: "med" },
  { src: g5, alt: "Hands kneading dough", h: "short" },
  { src: g7, alt: "Poached pear dessert", h: "med" },
  { src: g6, alt: "Single taper candle at night", h: "tall" },
];

const heightClass: Record<string, string> = {
  tall: "h-[420px] md:h-[520px]",
  med: "h-[320px] md:h-[400px]",
  short: "h-[240px] md:h-[300px]",
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-warm" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="reveal mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="font-label text-xs2 text-muted-foreground mb-4">
              <span className="ornament mr-3 align-middle" /> The Gallery
            </p>
            <h2 className="font-display text-foreground" style={{ fontSize: 39 }}>From the kitchen.</h2>
          </div>
          <p className="font-body text-base2 text-muted-foreground max-w-sm">
            Plates, tables, and the moments in between. Photographed at recent dinners.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((it, i) => (
            <figure
              key={i}
              data-stagger={i * 60}
              className="reveal mb-6 break-inside-avoid overflow-hidden bg-background group"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className={`relative w-full overflow-hidden ${heightClass[it.h]}`}>
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 ease-luxe group-hover:scale-[1.03]"
                  style={{ filter: "saturate(1.0)" }}
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-luxe"
                     style={{ background: "linear-gradient(180deg, transparent 60%, hsl(36 36% 54% / 0.10))" }} />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
