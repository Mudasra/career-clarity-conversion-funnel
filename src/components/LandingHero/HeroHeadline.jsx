export default function HeroHeadline() {
  return (
    <h1
      data-anim
      className="anim-delay-2 font-display text-white text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] font-bold mb-6"
    >
      Escape Your Stagnant Job in{" "}
      <span className="relative inline-block">
        <span
          className="text-transparent bg-clip-text"
          style={{ backgroundImage: "linear-gradient(90deg, #00a8c8, #ffd166)" }}
        >
          7 Days
        </span>
        <span
          className="absolute -bottom-1 left-0 w-full h-0.5 opacity-50"
          style={{ background: "linear-gradient(90deg, #00a8c8, #ffd166)" }}
        />
      </span>{" "}
      , Without Risking Your Income
    </h1>
  );
}