import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#book", label: "Book a Table" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ease-luxe ${
        scrolled ? "bg-background/80" : "bg-background/40"
      }`}
      style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="font-display text-md2 text-primary" style={{ letterSpacing: "0.02em" }}>
          Julien Marceau
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link font-label text-xs2 text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden h-11 w-11 inline-flex items-center justify-center text-foreground"
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl2 text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
