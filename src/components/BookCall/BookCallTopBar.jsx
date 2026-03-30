export default function BookCallTopBar({ spotsLeft, onBack }) {
  return (
    <div
      className="py-4 px-6 border-b"
      style={{ background: "#004e64", borderColor: "rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-secondary/60 hover:text-white text-sm flex items-center gap-2 transition-colors"
        >
          ← Back to home
        </button>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-400 rounded-full animate-pulse" />
          <span className="text-secondary/70 text-sm">
            Only <strong className="text-white">{spotsLeft} spots</strong> left this week
          </span>
        </div>
      </div>
    </div>
  );
}