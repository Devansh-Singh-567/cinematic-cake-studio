import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import cake from "@/assets/cake-hero.jpg";
import strawberry from "@/assets/cake-strawberry.jpg";
import rose from "@/assets/cake-rose.jpg";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // mouse-reactive lighting
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tiltX = useTransform(sy, [0, 1], [8, -8]);
  const tiltY = useTransform(sx, [0, 1], [-8, 8]);
  const lightX = useTransform(sx, [0, 1], ["20%", "80%"]);
  const lightY = useTransform(sy, [0, 1], ["20%", "80%"]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: useTransform(
            [lightX, lightY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, oklch(0.78 0.12 80 / 0.18), transparent 50%)`,
          ),
        }}
      />
      <Particles count={50} />
      <div className="absolute inset-0 vignette" />

      <motion.div style={{ y, scale, opacity }} className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 md:grid-cols-12 md:px-16">
        {/* Left copy */}
        <div className="md:col-span-5">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4, duration: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-gold/80"
          >
            — Pune · Est. Boutique Patisserie
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-display text-5xl leading-[0.95] md:text-7xl"
          >
            Pune's Most
            <br />
            <span className="italic gold-text">Luxurious</span>
            <br />
            Cake Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.8, duration: 1.2 }}
            className="mt-8 max-w-md text-sm leading-relaxed text-cream/60"
          >
            Hand-finished couture cakes composed of single-origin chocolate, edible gold,
            and quiet obsession. Each piece is a scene staged for one evening only.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="group relative overflow-hidden bg-gold px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-gold/90">
              <span className="relative z-10">Explore Collection</span>
              <span className="absolute inset-0 -translate-x-full bg-cream transition-transform duration-500 group-hover:translate-x-0" />
              <span className="absolute inset-0 -translate-x-full text-primary-foreground transition-transform duration-500 group-hover:translate-x-0" />
            </button>
            <button className="group flex items-center gap-3 border border-gold/30 px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-cream transition hover:border-gold hover:text-gold">
              Order Celebration Cake
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>

        {/* Right 3D cake stage */}
        <div className="relative md:col-span-7">
          <motion.div
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
            className="relative mx-auto aspect-square w-full max-w-xl"
          >
            {/* floating strawberry */}
            <motion.img
              src={strawberry}
              alt=""
              loading="lazy"
              className="absolute -left-8 top-8 z-20 h-32 w-32 rounded-full object-cover shadow-2xl animate-float-y"
              style={{ boxShadow: "0 30px 60px oklch(0 0 0 / 0.6)", animationDelay: "-2s" }}
            />
            {/* floating rose cake */}
            <motion.img
              src={rose}
              alt=""
              loading="lazy"
              className="absolute -right-6 bottom-12 z-20 h-40 w-40 rounded-full object-cover animate-float-y"
              style={{ boxShadow: "0 30px 60px oklch(0 0 0 / 0.6)" }}
            />
            {/* centerpiece */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.8, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full"
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.78 0.12 80 / 0.35), transparent 60%)" }}
              />
              <img
                src={cake}
                alt="Signature Veloura cake"
                width={1280}
                height={1280}
                className="relative h-full w-full rounded-full object-cover"
                style={{ boxShadow: "0 60px 120px oklch(0 0 0 / 0.8), inset 0 0 80px oklch(0 0 0 / 0.4)" }}
              />
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-0 animate-light-sweep bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-full ring-1 ring-gold/20" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] text-cream/50"
      >
        <div className="flex flex-col items-center gap-3">
          Scroll
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-10 w-px origin-top bg-gold/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
