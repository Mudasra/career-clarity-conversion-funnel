export default function HeroCTA({ onCTAClick }) {
  return (
    <div data-anim className="anim-delay-5">
      <button
        onClick={onCTAClick}
        className="btn-shimmer text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-accent/30 hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
      >
        Get My Free 7-Day Plan →
      </button>
      <p className="text-secondary/50 text-sm mt-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        No spam. No credit card. Unsubscribe anytime.
      </p>
    </div>
  );
}