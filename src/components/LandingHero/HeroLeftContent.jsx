import HeroHeadline from "./HeroHeadline";
import HeroPainPoints from "./HeroPainPoints";
import HeroCTA from "./HeroCTA";

export default function HeroLeftContent({ onCTAClick }) {
  return (
    <div>
      <HeroHeadline />

      <p
        data-anim
        className="anim-delay-3 text-secondary/75 text-lg md:text-xl leading-relaxed mb-8"
      >
        The free <strong className="text-white/90">7-Day Career Clarity Plan</strong> for
        mid-career professionals who feel stuck, underpaid, and directionless — built to give
        you a clear next move before your next Monday morning.
      </p>

      <HeroPainPoints />
      <HeroCTA onCTAClick={onCTAClick} />
    </div>
  );
}