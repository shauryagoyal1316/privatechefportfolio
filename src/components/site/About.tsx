import julien from "@/assets/julien.jpg";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { n: 14, suffix: "", l: "Years in Professional Kitchens" },
  { n: 800, suffix: "+", l: "Private Dinners" },
  { n: 3, suffix: "", l: "Countries Trained In" },
];

function Stat({ n, suffix, l }: { n: number; suffix: string; l: string }) {
  const { val, ref } = useCountUp(n);
  return (
    <div ref={ref}>
      <p className="font-display text-[hsl(var(--gold))] tabular-nums" style={{ fontSize: 39, lineHeight: 1 }}>
        {val}
        {suffix}
      </p>
      <p className="font-label text-xs2 text-muted-foreground mt-3 leading-snug">{l}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-background overflow-hidden" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Image with overlap & section number */}
        <div className="lg:col-span-5 reveal relative">
          <div
            aria-hidden
            className="absolute -top-4 -left-2 font-display text-[hsl(var(--gold))/40] select-none pointer-events-none"
            style={{ fontSize: 200, lineHeight: 1, color: "hsl(var(--gold) / 0.15)", letterSpacing: "-0.04em" }}
          >
            04
          </div>
          <div className="relative">
            <div
              className="absolute -bottom-6 -right-6 w-40 h-40 hidden md:block z-0"
              style={{ background: "hsl(var(--primary) / 0.08)" }}
              aria-hidden
            />
            <img
              src={julien}
              alt="Julien Marceau plating a dish in his kitchen"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative z-10 w-full h-[520px] lg:h-[640px] object-cover"
              style={{ boxShadow: "var(--shadow-lift)" }}
            />
            <p className="font-label text-xs2 text-muted-foreground mt-6 relative z-10">
              <span className="ornament mr-3 align-middle" /> Prepping for Saturday's tasting
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-8">
          <p className="font-label text-xs2 text-muted-foreground mb-4 reveal">
            <span className="text-[hsl(var(--gold))]">04 ·</span> About
          </p>
          <h2
            className="font-display text-foreground reveal"
            style={{ fontSize: "clamp(32px, 4.4vw, 56px)", letterSpacing: "-0.035em", lineHeight: 1.05 }}
          >
            I cook the way my grandmother taught me — slowly,
            <span className="italic font-normal" style={{ fontWeight: 400 }}> and for people I like.</span>
          </h2>

          <div className="mt-10 space-y-6 max-prose">
            <p className="font-body text-md2 text-foreground/90 reveal" data-stagger="60">
              I'm Julien. I grew up in the hills above Lyon, foraging mushrooms with my grandmother before I could spell her name properly. After culinary school in Lyon, I cooked through kitchens in Copenhagen and San Sebastián — places that taught me to listen to ingredients before I picked up a knife.
            </p>
            <p className="font-body text-md2 text-foreground/90 reveal" data-stagger="120">
              Eight years ago I left restaurants to cook in homes. The reason is simple: the food is better when the table is closer. I plan everything around what's in season this week, and around the people you've asked to sit down with you.
            </p>
            <p className="font-body text-md2 text-foreground/90 reveal" data-stagger="180">
              A dinner with me looks like this — I arrive in the afternoon with crates and knives. I cook quietly while you pour the first glass. By the time the candles are lit, the kitchen smells like brown butter and rosemary, and nobody is checking their phone.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-foreground/10 grid grid-cols-3 gap-6 lg:gap-10 reveal" data-stagger="240">
            {stats.map((s) => (
              <Stat key={s.l} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
