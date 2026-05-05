import julien from "@/assets/julien.jpg";

const stats = [
  { n: "14", l: "Years in Professional Kitchens" },
  { n: "800+", l: "Private Dinners" },
  { n: "3", l: "Countries Trained In" },
];

export default function About() {
  return (
    <section id="about" className="bg-background overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Image with overlap */}
        <div className="lg:col-span-5 reveal">
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-32 h-32 hidden md:block"
              style={{ background: "hsl(var(--gold) / 0.15)" }}
              aria-hidden
            />
            <img
              src={julien}
              alt="Julien Marceau plating a dish in his kitchen"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-full h-[520px] lg:h-[620px] object-cover"
              style={{ boxShadow: "var(--shadow-lift)" }}
            />
            <p className="font-label text-xs2 text-muted-foreground mt-6">
              Julien, prepping for a Saturday tasting menu.
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-8">
          <p className="font-label text-xs2 text-muted-foreground mb-4 reveal">
            <span className="ornament mr-3 align-middle" /> About
          </p>
          <h2 className="font-display text-foreground reveal" style={{ fontSize: 49 }}>
            I cook the way my grandmother taught me — slowly, and for people I like.
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

          <div className="mt-16 grid grid-cols-3 gap-6 lg:gap-10 reveal" data-stagger="240">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="font-display text-[hsl(var(--gold))]" style={{ fontSize: 31 }}>
                  {s.n}
                </p>
                <p className="font-label text-xs2 text-muted-foreground mt-2 leading-snug">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
