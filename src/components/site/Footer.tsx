import { Instagram } from "lucide-react";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.09 2.46 7.59 5.97 9.13-.08-.78-.16-1.97.03-2.82.18-.77 1.16-4.91 1.16-4.91s-.3-.59-.3-1.47c0-1.38.8-2.41 1.79-2.41.85 0 1.26.63 1.26 1.39 0 .85-.54 2.12-.82 3.3-.23.99.5 1.79 1.47 1.79 1.77 0 3.13-1.86 3.13-4.55 0-2.38-1.71-4.04-4.15-4.04-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.18.07.28-.07.31-.25 1.02-.28 1.16-.04.18-.15.22-.34.13-1.27-.59-2.06-2.43-2.06-3.91 0-3.18 2.31-6.1 6.66-6.1 3.5 0 6.21 2.49 6.21 5.82 0 3.47-2.19 6.27-5.23 6.27-1.02 0-1.98-.53-2.31-1.16l-.63 2.4c-.23.88-.84 1.98-1.25 2.65.94.29 1.93.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative">
      <div className="h-px w-full" style={{ background: "hsl(var(--gold))" }} />
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-display text-md2" style={{ color: "hsl(var(--gold))" }}>Julien Marceau</p>
          <p className="font-body text-base2 text-background/70 mt-6 max-w-sm">
            Private chef. Tasting menus and dinner parties, cooked in your home.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="font-label text-xs2 text-background/50 mb-4">Visit</p>
          <p className="font-body text-base2 text-background/85">123 Anywhere Street</p>
          <p className="font-body text-base2 text-background/85 mt-2">hello@julienmarceau.example</p>
        </div>
        <div className="md:col-span-2">
          <p className="font-label text-xs2 text-background/50 mb-4">Explore</p>
          <ul className="space-y-2">
            {[["#menu","Menu"],["#gallery","Gallery"],["#about","About"],["#book","Book"]].map(([h,l]) => (
              <li key={h}><a href={h} className="nav-link font-body text-base2 text-background/85">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="font-label text-xs2 text-background/50 mb-4">Follow</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="h-11 w-11 inline-flex items-center justify-center border border-background/20 hover:border-[hsl(var(--gold))] transition-colors duration-200 ease-luxe">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="h-11 w-11 inline-flex items-center justify-center border border-background/20 hover:border-[hsl(var(--gold))] transition-colors duration-200 ease-luxe">
              <PinterestIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-background/50" style={{ fontSize: 12.8 }}>
            © {new Date().getFullYear()} Julien Marceau · All rights reserved
          </p>
          <p className="font-body text-background/40" style={{ fontSize: 12.8 }}>
            This is a portfolio website. Julien Marceau is not a real chef or business.
          </p>
        </div>
      </div>
    </footer>
  );
}
