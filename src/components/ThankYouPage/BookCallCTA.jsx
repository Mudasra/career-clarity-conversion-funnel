import { useNavigate } from "react-router-dom";

export default function BookCallCTA({ spotsLeft }) {
  const navigate = useNavigate();

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-xl"
      style={{ background: "linear-gradient(135deg, #004e64 0%, #001f29 100%)" }}
    >
      <div className="p-10 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-20 translate-x-20"
          style={{ background: "radial-gradient(circle, #ffd166, transparent)" }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" />
            <span className="text-secondary/70 text-sm font-semibold">
              Only <strong className="text-white">{spotsLeft} spots</strong> left
              for free strategy calls this week
            </span>
          </div>

          <h2 className="font-display text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Don't Stop at Clarity —<br />
            <span className="text-accent">Turn It Into Action</span>
          </h2>

          <p className="text-secondary/70 text-base mb-7 max-w-lg">
            Book a free 30-minute Career Strategy Call. We'll review your clarity
            plan together and map out the fastest path to your first real move. No
            pitch. Just strategy.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              "Personalized action plan",
              "Identify your #1 blocker",
              "Your next 90-day roadmap",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-secondary/70 text-sm"
              >
                <span className="text-success shrink-0">✓</span> {item}
              </div>
            ))}
          </div>

          <button
                onClick={() => navigate("/book-call")}
                className="btn-shimmer text-white font-bold text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-black/30 w-full sm:w-auto"
              >
                Book My Free 30-Min Call →
              </button>

          <p className="text-secondary/40 text-sm mt-3">
            Free. No obligation. Spots fill by Thursday each week.
          </p>
        </div>
      </div>
    </div>
  );
}