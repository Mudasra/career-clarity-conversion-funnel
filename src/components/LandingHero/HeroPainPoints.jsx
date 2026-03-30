const painPoints = [
  "😔 Wake up dreading Monday — every single week",
  "💸 You're good at your job but still underpaid and overlooked",
  "🌀 You want to make a move but fear making the wrong one",
];

export default function HeroPainPoints() {
  return (
    <div data-anim className="anim-delay-4 space-y-3 mb-10">
      {painPoints.map((pain, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="text-base leading-relaxed text-secondary/70">{pain}</span>
        </div>
      ))}
    </div>
  );
}