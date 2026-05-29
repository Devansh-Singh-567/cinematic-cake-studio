import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.6, duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 md:px-16"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-gold" />
          <span className="font-display text-xl tracking-[0.3em] text-cream">
            VELOURA
          </span>
        </div>
        <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.25em] text-cream/70 md:flex">
          <a href="#collection" className="transition hover:text-gold">Collection</a>
          <a href="#craft" className="transition hover:text-gold">Craft</a>
          <a href="#atelier" className="transition hover:text-gold">Atelier</a>
          <a href="#gallery" className="transition hover:text-gold">Gallery</a>
        </div>
        <button className="glass rounded-none px-5 py-2.5 text-[10px] uppercase tracking-[0.3em] text-cream transition hover:text-gold">
          Reserve
        </button>
      </div>
    </motion.nav>
  );
}
