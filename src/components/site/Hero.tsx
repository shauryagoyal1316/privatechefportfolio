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
            "linear-gradient(180deg, hsl(0 0% 8% / 0.30) 0%, hsl(0 0% 8% / 0.55) 60%, hsl(0 0% 8% / 0.78) 100%)",
        }}
        aria-hidden
      />

      <div
        className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-10 lg:px-16"
        style={{ paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="mx-auto w-full max-w-[1280px]">
          {/* meta row */}
          <div className="flex items-center justify-between mb-16 animate-fade-up" style={{ animationDelay: "60ms" }}>
            <p className="font-label text-xs2 text-background/80">
              <span className="ornament mr-4 align-middle" /> Private Chef · Lyon trained
            </p>
            <p className="font-label text-xs2 text-background/60 hidden sm:block">
              Est. <span className="text-background/85">2018</span>
            </p>
          </div>

          <h1
            className="font-display text-background animate-fade-up max-w-[1100px]"
            style={{
              fontSize: "clamp(44px, 9.5vw, 116px)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              animationDelay: "120ms",
            }}
          >
            Where every dinner
            <span className="block italic font-normal text-background/90" style={{ fontWeight: 400 }}>
              becomes a memory.
            </span>
          </h1>

          <div className="mt-12 flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-10">
            <p
              className="font-body text-md2 text-background/80 max-w-[460px] animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              Tasting menus and dinner parties, cooked in your kitchen. Built around what's growing this week and the people you've sat down with.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "360ms" }}
            >
              <a href="#book" className="btn-base btn-primary group">
                <span>Reserve a Table</span>
                <span aria-hidden className="ml-3 inline-block transition-transform duration-300 ease-luxe group-hover:translate-x-1">→</span>
              </a>
              <a href="#menu" className="btn-base btn-ghost-light">Explore the Menu</a>
            </div>
          </div>
        </div>
      </div>

      {/* Refined corner indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 animate-fade-up" style={{ animationDelay: "600ms" }}>
        <span className="h-px w-10 bg-background/50" />
        <span className="font-label text-xs2 text-background/70">01 — Hello</span>
      </div>
    </section>
  );
}
