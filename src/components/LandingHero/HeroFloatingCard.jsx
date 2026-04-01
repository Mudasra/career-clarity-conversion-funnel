import { Clock10 } from "lucide-react";

const cardItems = [
  "Career Direction Audit (Day 1)",
  "Hidden Strength Identifier (Day 2–3)",
  "Opportunity Gap Analysis (Day 4–5)",
  "Your Clear Next Move (Day 6–7)",
  "BONUS: Salary Negotiation Script",
];

export default function HeroFloatingCard() {
  return (
    <div data-anim className="anim-delay-6 hidden lg:flex justify-center">
      <div className="relative">
        <div className="animate-float bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-sm shadow-2xl">
          <div className="text-center mb-6">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #00a8c8, #004e64)",
              }}
            >
              <Clock10 size={36} color="white" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-white text-xl font-bold">
              Your 7-Day Clarity Plan
            </h3>
            <p className="text-secondary/60 text-sm mt-1">Includes inside</p>
          </div>

          <ul className="space-y-3">
            {cardItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-secondary/80 text-sm"
              >
                <span
                  className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(6,214,160,0.2)",
                    color: "#06d6a0",
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
            <span className="text-secondary/50 text-sm line-through">
              Value: $97
            </span>
            <span className="text-success font-bold text-lg">FREE Today</span>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 bg-warm text-dark font-bold text-xs px-3 py-2 rounded-xl rotate-6 shadow-lg">
          🔥 127 grabbed this week
        </div>
      </div>
    </div>
  );
}
