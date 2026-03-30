import StarRating from "./StarRating";

export default function TestimonialCard({ name, role, outcome, text, avatar, stars, highlight }) {
  return (
    <div
      className="card-hover relative bg-white rounded-3xl p-8 shadow-sm border border-secondary"
      style={{ borderColor: "#e0e5e9" }}
    >
      {/* Quote mark */}
      <span
        className="absolute top-4 left-6 font-display text-6xl leading-none"
        style={{ color: "rgba(0,168,200,0.15)" }}
      >
        "
      </span>

      {/* Stars */}
      <div className="flex justify-between items-start mb-4">
        <StarRating count={stars} />
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: "rgba(6,214,160,0.12)", color: "#04a882" }}
        >
          {highlight}
        </span>
      </div>

      {/* Text */}
      <p className="text-gray-600 leading-relaxed mb-6 relative z-10 pt-2">"{text}"</p>

      {/* Author */}
      <div
        className="flex items-center gap-4 pt-5 border-t"
        style={{ borderColor: "#e0e5e9" }}
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ background: "linear-gradient(135deg, #004e64, #00a8c8)" }}
        >
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-primary text-sm">{name}</div>
          <div className="text-gray-400 text-xs">{role}</div>
        </div>
        <div className="ml-auto">
          <div
            className="text-xs font-medium px-2 py-1 rounded-lg"
            style={{ background: "rgba(0,78,100,0.06)", color: "#006d8a" }}
          >
            {outcome}
          </div>
        </div>
      </div>
    </div>
  );
}