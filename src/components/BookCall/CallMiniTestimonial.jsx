export default function CallMiniTestimonial() {
  return (
    <div
      className="rounded-2xl p-6 relative"
      style={{
        background: "rgba(0,78,100,0.05)",
        border: "1px solid rgba(0,78,100,0.1)",
      }}
    >
      <span
        className="absolute top-3 left-4 font-display text-5xl leading-none"
        style={{ color: "rgba(0,168,200,0.15)" }}
      >
        "
      </span>
      <p className="text-gray-500 text-sm leading-relaxed pt-4 italic">
        "I almost skipped the call thinking it would be a sales pitch. It wasn't. We mapped
        out my entire next 90 days in 30 minutes. I left knowing exactly what to do."
      </p>
      <div className="flex items-center gap-3 mt-4">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ background: "linear-gradient(135deg, #004e64, #00a8c8)" }}
        >
          MJ
        </div>
        <div>
          <div className="text-primary text-xs font-semibold">Marcus J.</div>
          <div className="text-gray-400 text-xs">Finance → Fintech PM, +$35K</div>
        </div>
      </div>
    </div>
  );
}