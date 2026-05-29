import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import cakeHero from "@/assets/cake-hero.jpg";
import rose from "@/assets/cake-rose.jpg";

const insta = [cakeHero, g3, rose, g2, g1, g4];

export function Footer() {
  return (
    <footer className="relative border-t border-gold/10 px-8 pb-12 pt-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rotate-45 bg-gold" />
              <span className="font-display text-2xl tracking-[0.3em]">VELOURA</span>
            </div>
            <p className="mt-8 max-w-sm font-display text-3xl italic leading-tight text-cream/80">
              Cakes composed for the evenings you will remember.
            </p>
            <div className="mt-10 space-y-1 text-sm text-cream/60">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold/80">Atelier</div>
              <p>14, Lane 7, Koregaon Park</p>
              <p>Pune · 411001</p>
              <p className="mt-4">+91 98220 00000</p>
              <p>hello@veloura.cakes</p>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold/80">Maison</div>
            <ul className="mt-6 space-y-3 font-display text-2xl">
              <li><a href="#collection" className="transition hover:text-gold">Collection</a></li>
              <li><a href="#atelier" className="transition hover:text-gold">Atelier</a></li>
              <li><a href="#gallery" className="transition hover:text-gold">Archive</a></li>
              <li><a href="#craft" className="transition hover:text-gold">Philosophy</a></li>
              <li><a href="#" className="transition hover:text-gold">Reserve a tasting</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold/80">@veloura.cakes</div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {insta.map((src, i) => (
                <a key={i} href="#" className="group relative aspect-square overflow-hidden">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-background/30 transition-opacity group-hover:opacity-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-gold/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-cream/40 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Veloura Patisserie · Pune</div>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-gold">Instagram</a>
            <a href="#" className="transition hover:text-gold">Privacy</a>
            <a href="#" className="transition hover:text-gold">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
