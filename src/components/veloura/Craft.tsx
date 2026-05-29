import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import chef from "@/assets/chef.jpg";

export function Craft() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="craft" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <img src={chef} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-8 py-32 md:px-16">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80">— Made With Emotion</p>
        <h2 className="mt-8 font-display text-5xl leading-[1] md:text-8xl">
          Twelve hours.
          <br />
          <span className="italic gold-text">One cake.</span>
          <br />
          A single evening.
        </h2>
        <p className="mt-10 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
          In our Koregaon Park atelier, every piece moves through the hands of one
          pastry chef — from tempered chocolate to the final, breath-held flick of
          gold. Nothing is rushed. Nothing is repeated.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-8 text-cream/60 md:max-w-md">
          {[
            { k: "12h", v: "per cake" },
            { k: "1", v: "chef per piece" },
            { k: "0", v: "shortcuts" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-3xl text-gold md:text-4xl">{s.k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em]">{s.v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
