import { MailOpen, Zap, CalendarDays } from "lucide-react";

const funnelSteps = [
  { day: "Day 0", label: "Get Plan Instantly", icon: <MailOpen size={24} strokeWidth={1.5} /> },
  { label: "→", icon: null, spacer: true },
  { day: "Day 1", label: "First Quick Win", icon: <Zap size={24} strokeWidth={1.5} /> },
  { label: "→", icon: null, spacer: true },
  { day: "Day 7", label: "Book Your Call", icon: <CalendarDays size={24} strokeWidth={1.5} /> },
];

export default function FunnelSequenceBanner() {
  return (
    <div
      className="mt-14 rounded-3xl p-8 text-center text-white relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #004e64, #001f29)" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #00a8c8 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <p className="text-secondary/60 text-sm font-medium uppercase tracking-wider mb-3">
          What Happens After You Sign Up
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 mb-6">
          {funnelSteps.map((step, i) =>
            step.spacer ? (
              <span key={i} className="text-white/30 text-xl mx-2 hidden sm:block">
                →
              </span>
            ) : (
              <div key={i} className="text-center px-3 py-2">
                <div className="flex justify-center mb-1 text-secondary">{step.icon}</div>
                <div className="text-xs text-secondary/50 font-medium">{step.day}</div>
                <div className="text-white text-sm font-semibold">{step.label}</div>
              </div>
            )
          )}
        </div>
        <p className="text-secondary/50 text-sm max-w-lg mx-auto">
          You'll receive 3 emails over 7 days, each with a new exercise and insight. No fluff, no filler.
        </p>
      </div>
    </div>
  );
}