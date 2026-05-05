import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#menu", label: "Menu", id: "menu" },
  { href: "#gallery", label: "Gallery", id: "gallery" },
  { href: "#about", label: "About", id: "about" },
  { href: "#book", label: "Book a Table", id: "book" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ease-luxe ${
        scrolled ? "bg-background/85" : "bg-background/40"
      }`}
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="font-display text-md2 text-primary inline-flex items-center gap-3" style={{ letterSpacing: "0.01em" }}>
          <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--gold))]" />
          Julien Marceau
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link font-label text-xs2 transition-colors duration-200 ease-luxe ${
                  isActive ? "text-[hsl(var(--gold))]" : "text-foreground"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden h-11 w-11 inline-flex items-center justify-center text-foreground focus-visible:outline-2 focus-visible:outline-[hsl(var(--gold))]"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-background transition-opacity duration-300 ease-luxe ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[72px]">
          <span className="font-display text-md2 text-primary">Julien Marceau</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="h-11 w-11 inline-flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-8 px-8 pt-16">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl2 text-foreground animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-[hsl(var(--gold))] font-label text-xs2 mr-4 align-middle">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
