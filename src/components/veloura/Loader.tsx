import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import cake from "@/assets/cake-hero.jpg";

export function CinematicLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 vignette" />
          <div className="relative flex flex-col items-center gap-12">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-56 w-56 overflow-hidden rounded-full"
              style={{
                boxShadow:
                  "0 0 80px oklch(0.78 0.12 80 / 0.35), inset 0 0 60px oklch(0 0 0 / 0.6)",
              }}
            >
              <img
                src={cake}
                alt=""
                className="h-full w-full animate-slow-spin object-cover"
                style={{ animationDuration: "12s" }}
              />
              <div className="absolute inset-0 animate-light-sweep bg-gradient-to-r from-transparent via-cream/30 to-transparent" />
              <div className="absolute inset-0 rounded-full ring-1 ring-gold/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1.6, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">
                Veloura
              </p>
              <h1 className="mt-4 font-display text-4xl italic gold-text md:text-5xl">
                Crafted for Celebrations.
              </h1>
            </motion.div>

            {/* music visualizer */}
            <div className="flex h-6 items-end gap-1">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <motion.span
                  key={i}
                  className="w-0.5 rounded-full bg-gold/70"
                  animate={{ height: [4, 18, 8, 22, 6] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
