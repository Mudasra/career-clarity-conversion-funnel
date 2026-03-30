export default function FormSubmitButton({ loading, onSubmit }) {
  return (
    <button
      type="button"
      onClick={onSubmit}
      disabled={loading}
      className="w-full btn-shimmer text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          Sending your plan...
        </span>
      ) : (
        "Send My Free 7-Day Plan →"
      )}
    </button>
  );
}