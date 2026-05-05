import { useEffect, useRef } from "react";
import hero from "@/assets/hero.jpg";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!bgRef.current) return;
        const y = Math.min(window.scrollY, 800) * 0.18;
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.08)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(0 0% 8% / 0.35) 0%, hsl(0 0% 8% / 0.55) 60%, hsl(0 0% 8% / 0.75) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-24 pt-32" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="font-label text-xs2 text-background/80 mb-8 animate-fade-up" style={{ animationDelay: "60ms" }}>
            <span className="ornament mr-4 align-middle" /> Private Chef · Lyon trained
          </p>
          <h1
            className="font-display text-background animate-fade-up max-w-[920px]"
            style={{ fontSize: "clamp(40px, 7vw, 61px)", animationDelay: "120ms" }}
          >
            Where every dinner becomes a memory.
          </h1>
          <p
            className="font-body text-md2 text-background/80 mt-8 max-w-[560px] animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Tasting menus and dinner parties, cooked in your kitchen. Built around what's growing this week and the people you've sat down with.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
            <a href="#book" className="btn-base btn-primary">Reserve a Table</a>
            <a href="#menu" className="btn-base btn-ghost-light">Explore the Menu</a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-label text-xs2 text-background/70">
        Scroll
      </div>
    </section>
  );
}
