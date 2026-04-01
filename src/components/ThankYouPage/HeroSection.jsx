import { Check, CircleCheck, PartyPopper } from "lucide-react";

export default function HeroSection({ name, email, visible }) {
  return (
    <div className="hero-bg py-24 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #06d6a0, transparent)" }}
        />
      </div>

      <div
        className={`max-w-2xl mx-auto relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 animate-float"
          style={{
            background: "rgba(6,214,160,0.2)",
            border: "2px solid rgba(6,214,160,0.4)",
          }}
        >
          <CircleCheck size={36} color="white" strokeWidth={1.5} />
        </div>

        <div className="inline-flex items-center gap-2 bg-success/20 text-success rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          <span className="w-2 h-2 bg-success rounded-full inline-block" />
          Plan Sent Successfully
        </div>

        <h1 className="font-display text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="inline-flex items-center gap-3">
  {name ? `You're in, ${name}!` : "You're in!"}
  <PartyPopper size={36} strokeWidth={1.5} className="text-warm" />
</span>
        </h1>
        <p className="text-secondary/70 text-lg mb-2">
          Your 7-Day Career Clarity Plan is heading to{" "}
          <strong className="text-accent">{email || "your inbox"}</strong> right now.
        </p>
        <p className="text-secondary/50 text-sm">
          Check your spam/promotions folder if you don't see it in 2 minutes.
        </p>
      </div>
    </div>
  );
}