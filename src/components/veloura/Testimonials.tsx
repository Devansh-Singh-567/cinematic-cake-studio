import { motion } from "framer-motion";

const quotes = [
  {
    q: "I have never seen a cake hold a room silent. Veloura's noir d'or did, for a full minute.",
    a: "Ananya R.",
    e: "Wedding · Taj Blue Diamond",
  },
  {
    q: "It tasted like the photograph looked. That has never happened to me.",
    a: "Rohan M.",
    e: "40th Birthday · Koregaon Park",
  },
  {
    q: "An object of theatre. We almost didn't want to cut it.",
    a: "Saira & Vikram",
    e: "Anniversary · Private estate",
  },
];

export function Testimonials() {
  return (
    <section className="relative px-8 py-32 md:px-16">
      <div
        className="absolute inset-0 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 20% 40%, oklch(0.78 0.12 80 / 0.4), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.35 0.08 30 / 0.4), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80">— Whispers</p>
        <h2 className="mt-6 max-w-2xl font-display text-4xl md:text-6xl">
          Words from the rooms we've <span className="italic gold-text">walked into.</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className={`glass relative p-10 ${i === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="absolute -top-6 left-8 font-display text-7xl italic text-gold/60">"</div>
              <p className="relative font-display text-2xl leading-snug italic text-cream/90">
                {t.q}
              </p>
              <footer className="mt-8 border-t border-gold/15 pt-4">
                <div className="text-sm text-cream">{t.a}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-cream/50">{t.e}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
