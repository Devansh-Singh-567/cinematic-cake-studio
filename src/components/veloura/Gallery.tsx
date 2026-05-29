import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import rose from "@/assets/cake-rose.jpg";
import wedding from "@/assets/cake-wedding.jpg";

const items = [
  { img: g1, h: "tall", caption: "The Westin · Spring Wedding" },
  { img: g3, h: "short", caption: "Ganache Pour · Studio" },
  { img: wedding, h: "tall", caption: "Couronne · 4-tier" },
  { img: g2, h: "short", caption: "Sparkler Soirée" },
  { img: rose, h: "tall", caption: "Rose Pistache" },
  { img: g4, h: "short", caption: "Private Tasting · Kalyani Nagar" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative px-8 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80">— Celebration Archive</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl">
              Evenings, <span className="italic gold-text">remembered.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden ${it.h === "tall" ? "row-span-2 aspect-[3/4]" : "aspect-[4/5]"} ${i === 0 ? "md:row-span-2" : ""}`}
            >
              <img
                src={it.img}
                alt={it.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-6 left-6 right-6 translate-y-2 text-[10px] uppercase tracking-[0.3em] text-cream/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {it.caption}
              </figcaption>
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/5" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
