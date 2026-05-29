import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Lenis from "lenis";
import { CinematicLoader } from "@/components/veloura/Loader";
import { Nav } from "@/components/veloura/Nav";
import { Hero } from "@/components/veloura/Hero";
import { Collection } from "@/components/veloura/Collection";
import { Craft } from "@/components/veloura/Craft";
import { Customizer } from "@/components/veloura/Customizer";
import { Gallery } from "@/components/veloura/Gallery";
import { Testimonials } from "@/components/veloura/Testimonials";
import { Footer } from "@/components/veloura/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veloura — Pune's Most Luxurious Cake Experience" },
      { name: "description", content: "Hand-finished couture cakes from Pune's boutique patisserie. Composed for the evenings you'll remember." },
      { property: "og:title", content: "Veloura — Crafted for Celebrations" },
      { property: "og:description", content: "Pune's most luxurious cake atelier. Single-origin chocolate, edible gold, quiet obsession." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="grain relative min-h-screen bg-background text-foreground">
      <CinematicLoader />
      <Nav />
      <Hero />
      <Collection />
      <Craft />
      <Customizer />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
