const reviews = [
  {
    name: "Sophie R.",
    where: "Anniversary dinner, six guests",
    text: "Julien served a salt-baked celeriac that genuinely silenced the table for a moment. Then everyone started talking again, but louder. He stayed for a glass of wine after dessert. We've already booked him again for January.",
  },
  {
    name: "Daniel M.",
    where: "Tasting menu for eight",
    text: "I'd had the fennel velouté described to me before he made it and assumed it would be fine. It was not fine. It was the best thing I'd eaten in two years. Quiet, generous cooking — no theatre, just very good food.",
  },
  {
    name: "Priya K.",
    where: "Birthday dinner party",
    text: "He arrived early, met my mum, asked about her favourite herbs, and then disappeared into the kitchen for three hours. The poached pear at the end made her cry. Worth every cent.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="reveal mb-16 max-w-3xl">
          <p className="font-label text-xs2 text-muted-foreground mb-4">
            <span className="text-[hsl(var(--gold))]">05 ·</span> Kind Words
          </p>
          <h2 className="font-display text-foreground" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", letterSpacing: "-0.035em", lineHeight: 1.05 }}>
            From people who've <span className="italic font-normal" style={{ fontWeight: 400 }}>sat at the table.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              data-stagger={i * 80}
              className="reveal lift-card bg-surface-warm p-8 flex flex-col"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span
                className="font-display text-[hsl(var(--primary))] leading-none"
                style={{ fontSize: 61 }}
                aria-hidden
              >
                "
              </span>
              <p className="font-body text-base2 text-foreground/90 mt-2 leading-relaxed">
                {r.text}
              </p>
              <div className="mt-8 pt-6 border-t border-foreground/10">
                <p className="font-label text-xs2 text-foreground" style={{ fontWeight: 500 }}>
                  {r.name}
                </p>
                <p className="font-body text-xs2 text-muted-foreground mt-1">{r.where}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
