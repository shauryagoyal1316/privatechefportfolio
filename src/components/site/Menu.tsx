import { useState } from "react";

type Dish = { name: string; desc: string; season: "Spring" | "Summer" | "Autumn" | "Winter" };

const tasting: Dish[] = [
  { name: "Fennel Velouté with Preserved Lemon Oil", desc: "Slow-sweated fennel from Provence, finished tableside with a thread of lemon oil cured since January.", season: "Spring" },
  { name: "Roasted Beet & Walnut Tart, Aged Goat Curd", desc: "Heirloom beets baked in salt, walnuts toasted in brown butter, set on a flake-thin sablé crust.", season: "Autumn" },
  { name: "Smoked Trout, Cucumber, Crème Fraîche", desc: "Lake trout smoked over apple wood, paired with shaved cucumber and a spoon of yesterday's crème fraîche.", season: "Summer" },
  { name: "Hand-Cut Tagliatelle, Brown Butter & Sage", desc: "Egg yolk pasta rolled the morning of, sauced with nut-brown butter, crisped sage, and a snow of aged Parmesan.", season: "Winter" },
  { name: "Grilled Leeks, Romesco, Hazelnut Picada", desc: "Whole leeks charred until soft inside, smoked almond romesco, a scatter of toasted hazelnuts.", season: "Spring" },
  { name: "Saffron Risotto, Bone Marrow, Gremolata", desc: "Carnaroli rice carried for forty minutes, finished with marrow butter and a bright lemon gremolata.", season: "Winter" },
  { name: "Poached Pear, Pistachio Crumble, Crème Fraîche", desc: "Pears slow-poached in Sauternes and bay, served warm with a crumble that snaps when you press it.", season: "Autumn" },
  { name: "Honey & Olive Oil Cake, Fig Leaf Cream", desc: "Light, syrupy, the kind of dessert you eat with a spoon and your eyes closed.", season: "Summer" },
];

const party: Dish[] = [
  { name: "Tomato & Stracciatella, Torn Basil, Confit Garlic Toast", desc: "End-of-season tomatoes, milky stracciatella, and crisp toast rubbed with garlic confit.", season: "Summer" },
  { name: "Charred Broccolini, Anchoïade, Soft Egg", desc: "Broccolini blistered over open flame, draped in anchoïade and a 6-minute egg.", season: "Spring" },
  { name: "Wild Mushroom Pithivier, Madeira Jus", desc: "Buttery puff pastry, slow-cooked mushrooms, glossy Madeira reduction poured at the table.", season: "Autumn" },
  { name: "Salt-Baked Celeriac, Brown Butter Hollandaise", desc: "A whole celeriac under a salt crust, broken open with the back of a spoon.", season: "Winter" },
  { name: "Burrata, Stone Fruit, Lardo Vinaigrette", desc: "Cold burrata, warm peaches, a pour of vinaigrette built on rendered lardo and aged sherry.", season: "Summer" },
  { name: "Squash & Sage Cappellacci, Amaretto Crumb", desc: "Pumpkin folded into pasta hats, amaretto crumb for sweetness, fried sage for crackle.", season: "Autumn" },
  { name: "Buckwheat Galette, Ricotta, Greens, Honeycomb", desc: "Crisp galette folded around lemon ricotta, bitter greens, and a chunk of honeycomb.", season: "Winter" },
  { name: "Olive Oil Ice Cream, Fleur de Sel, Sourdough Crumb", desc: "Three ingredients you'll think about the next morning.", season: "Spring" },
];

const seasonGold = "text-[hsl(var(--gold))]";

function Card({ d, idx }: { d: Dish; idx: number }) {
  // Asymmetry: stagger column offsets
  const offset = idx % 4 === 1 ? "md:translate-y-12" : idx % 4 === 3 ? "md:translate-y-8" : "";
  return (
    <article
      data-stagger={idx * 60}
      className={`reveal lift-card bg-card p-8 ${offset}`}
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <p className={`font-label text-xs2 ${seasonGold} mb-4`}>{d.season}</p>
      <h3 className="font-display text-foreground" style={{ fontSize: 25 }}>{d.name}</h3>
      <p className="font-body text-base2 text-muted-foreground mt-4 leading-relaxed">{d.desc}</p>
    </article>
  );
}

export default function Menu() {
  const [tab, setTab] = useState<"tasting" | "party">("tasting");
  const data = tab === "tasting" ? tasting : party;

  return (
    <section id="menu" className="bg-background" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 reveal">
          <div>
            <p className="font-label text-xs2 text-muted-foreground mb-4">
              <span className="ornament mr-3 align-middle" /> The Menu
            </p>
            <h2 className="font-display text-foreground" style={{ fontSize: 39 }}>
              What's on the table.
            </h2>
          </div>
          <div className="inline-flex border-t border-b border-foreground/10">
            {(["tasting", "party"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-label text-xs2 px-6 py-4 transition-colors duration-200 ease-luxe ${
                  tab === t ? "text-foreground bg-surface-warm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "tasting" ? "Tasting Menu" : "Dinner Party"}
              </button>
            ))}
          </div>
        </div>

        <div key={tab} className="grid md:grid-cols-2 gap-x-8 gap-y-10 animate-fade-in">
          {data.map((d, i) => (
            <Card key={d.name} d={d} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
