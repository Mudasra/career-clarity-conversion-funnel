export default function ObjectionCard({ q, a }) {
  return (
    <div
      className="card-hover bg-white rounded-2xl p-7 border shadow-sm"
      style={{ borderColor: "#e0e5e9" }}
    >
      <div className="flex items-start gap-5">
        <div
          className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full font-bold text-sm mt-0.5"
          style={{ background: "rgba(0,168,200,0.12)", color: "#00a8c8" }}
        >
          Q
        </div>
        <div>
          <h3 className="font-semibold text-primary text-base mb-2">{q}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}