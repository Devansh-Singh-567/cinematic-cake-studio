import { motion } from "framer-motion";
import { useState } from "react";

const frostings = [
  { name: "Noir", color: "oklch(0.18 0.04 35)" },
  { name: "Ivory", color: "oklch(0.92 0.03 80)" },
  { name: "Rose", color: "oklch(0.78 0.10 20)" },
  { name: "Pistache", color: "oklch(0.78 0.10 130)" },
  { name: "Or", color: "oklch(0.78 0.12 80)" },
];

const toppings = ["Gold leaf", "Berries", "Roses", "Pearls", "Shards"];

export function Customizer() {
  const [frosting, setFrosting] = useState(frostings[0]);
  const [topping, setTopping] = useState(toppings[0]);
  const [angle, setAngle] = useState(0);

  return (
    <section id="atelier" className="relative overflow-hidden border-y border-gold/10 py-32">
      <div className="absolute inset-0 vignette" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 md:grid-cols-2 md:px-16">
        <div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-gold/80">— Atelier · Compose</p>
          <h2 className="mt-6 font-display text-5xl md:text-7xl">
            Sculpt your <span className="italic gold-text">moment.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm text-cream/60">
            Tilt, glaze, dress. A glimpse of the bespoke flow you'll step into when
            you commission a Veloura piece.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cream/50">Glaze</p>
              <div className="flex gap-3">
                {frostings.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => setFrosting(f)}
                    className={`group relative h-12 w-12 rounded-full transition ${frosting.name === f.name ? "ring-2 ring-gold ring-offset-2 ring-offset-background" : "opacity-70 hover:opacity-100"}`}
                    style={{ background: f.color, boxShadow: "inset 0 4px 8px oklch(0 0 0 / 0.4)" }}
                  >
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-cream/40">
                      {f.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cream/50">Couronne</p>
              <div className="flex flex-wrap gap-2">
                {toppings.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTopping(t)}
                    className={`border px-4 py-2 text-[10px] uppercase tracking-[0.3em] transition ${
                      topping === t
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-cream/15 text-cream/60 hover:border-gold/40 hover:text-cream"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-cream/50">Rotate</p>
              <input
                type="range"
                min={-180}
                max={180}
                value={angle}
                onChange={(e) => setAngle(+e.target.value)}
                className="w-full accent-gold"
              />
            </div>
          </div>
        </div>

        {/* 3D preview cake */}
        <div className="relative flex h-[500px] items-center justify-center" style={{ perspective: 1400 }}>
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle at 50% 60%, ${frosting.color}, transparent 60%)`, opacity: 0.5 }}
          />
          <motion.div
            animate={{ rotateY: angle }}
            transition={{ type: "spring", stiffness: 50, damping: 14 }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* top */}
            <div
              className="absolute left-1/2 top-0 h-12 w-72 -translate-x-1/2 rounded-[50%]"
              style={{
                background: frosting.color,
                boxShadow: "inset 0 -10px 20px oklch(0 0 0 / 0.5), 0 4px 30px oklch(0 0 0 / 0.4)",
                transform: "translateZ(0)",
              }}
            />
            {/* body */}
            <div
              className="relative h-64 w-72 overflow-hidden"
              style={{
                background: `linear-gradient(180deg, ${frosting.color}, oklch(from ${frosting.color} calc(l - 0.1) c h))`,
                borderRadius: "8px 8px 50% 50% / 8px 8px 8% 8%",
                boxShadow: "inset -30px 0 60px oklch(0 0 0 / 0.5), inset 30px 0 60px oklch(0 0 0 / 0.2), 0 40px 80px oklch(0 0 0 / 0.7)",
              }}
            >
              {/* drips */}
              {[10, 30, 50, 70, 90].map((p) => (
                <div
                  key={p}
                  className="absolute top-2 h-12 w-6 rounded-b-full"
                  style={{
                    left: `${p}%`,
                    background: frosting.color,
                    filter: "brightness(0.8)",
                    transform: "translateX(-50%)",
                  }}
                />
              ))}
              {/* spotlight */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(120deg, transparent 40%, oklch(1 0 0 / 0.18) 50%, transparent 60%)" }}
              />
            </div>
            {/* base plate */}
            <div
              className="mx-auto h-3 w-80 -translate-y-2 rounded-[50%]"
              style={{ background: "oklch(0.78 0.12 80)", boxShadow: "0 20px 40px oklch(0 0 0 / 0.6)" }}
            />
            {/* topping label */}
            <div className="mt-10 text-center text-[10px] uppercase tracking-[0.4em] text-gold">
              ✦ {topping}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
