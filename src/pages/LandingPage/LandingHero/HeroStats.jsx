const stats = [
  { value: "2,400+", label: "Professionals Transformed" },
  { value: "94%", label: "Got Clarity in 30 Days" },
  { value: "3.2×", label: "Average Salary Increase" },
];

export default function HeroStats() {
  return (
    <div
      data-anim
      className="anim-delay-7 grid grid-cols-3 gap-4 mt-16 pt-10 border-t border-white/10"
    >
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
            {s.value}
          </div>
          <div className="text-secondary/50 text-xs md:text-sm">{s.label}</div>
        </div>
      ))}
    </div>
  );
}