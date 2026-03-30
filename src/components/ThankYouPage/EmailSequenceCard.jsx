export default function EmailSequenceCard({ day, subject, preview, icon }) {
  return (
    <div
      className="card-hover bg-white rounded-2xl p-5 border flex items-center gap-5 shadow-sm"
      style={{ borderColor: "#e0e5e9" }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
        style={{ background: "rgba(0,78,100,0.08)" }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            {day}
          </span>
        </div>
        <div className="font-semibold text-primary text-sm">{subject}</div>
        <div className="text-gray-400 text-xs mt-0.5">{preview}</div>
      </div>
    </div>
  );
}