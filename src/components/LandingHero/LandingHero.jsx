import { useEffect, useRef } from "react";
import HeroDecorations from "./HeroDecorations";
import HeroLeftContent from "./HeroLeftContent";
import HeroFloatingCard from "./HeroFloatingCard";
import HeroStats from "./HeroStats";

export default function LandingHero({ onCTAClick }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll("[data-anim]");
    els?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("animate-fade-up");
      }, i * 120);
    });
  }, []);

  return (
    <section
      className="hero-bg min-h-screen flex items-center relative overflow-hidden"
      ref={heroRef}
    >
      <HeroDecorations />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroLeftContent onCTAClick={onCTAClick} />
          <HeroFloatingCard />
        </div>

        <HeroStats />
      </div>
    </section>
  );
}