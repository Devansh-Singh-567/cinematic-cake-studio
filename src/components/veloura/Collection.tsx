import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/cake-hero.jpg";
import rose from "@/assets/cake-rose.jpg";
import wedding from "@/assets/cake-wedding.jpg";
import strawberry from "@/assets/cake-strawberry.jpg";

const cakes = [
  { name: "Noir d'Or", note: "Single-origin 72% chocolate · 23k gold leaf", img: hero, n: "01" },
  { name: "Rose Pistache", note: "Sicilian pistachio · Damask rose · honey", img: rose, n: "02" },
  { name: "Couronne", note: "Four-tier fondant · pearl cascade", img: wedding, n: "03" },
  { name: "Fraise Sauvage", note: "Wild strawberry · dark ganache shards", img: strawberry, n: "04" },
];

export function Collection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="collection" ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="flex items-end justify-between px-8 pt-32 md:px-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold/70">— Signature Collection</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              Composed like <span className="italic gold-text">scenes.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-xs text-cream/50 md:block">
            Four pieces from the seasonal atelier — drag, scroll, observe.
          </p>
        </div>

        <motion.div style={{ x }} className="mt-12 flex gap-8 px-8 md:px-16">
          {cakes.map((c) => (
            <CakeCard key={c.name} cake={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CakeCard({ cake }: { cake: typeof cakes[number] }) {
  return (
    <div className="group relative h-[70vh] w-[80vw] flex-shrink-0 overflow-hidden md:w-[55vw]">
      <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-105">
        <img src={cake.img} alt={cake.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:rotate-3" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle at 50% 30%, oklch(0.78 0.12 80 / 0.3), transparent 60%)" }}
      />
      <div className="absolute left-8 top-8 font-display text-6xl italic text-gold/40">{cake.n}</div>
      <div className="absolute bottom-10 left-8 right-8">
        <h3 className="font-display text-4xl md:text-5xl">{cake.name}</h3>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/60">{cake.note}</p>
        <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Compose this piece <span>→</span>
        </div>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
    </div>
  );
}
