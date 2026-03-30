const callMetrics = [
  { n: "91%", t: "Book a follow-up" },
  { n: "4.98", t: "Average call rating" },
  { n: "30 min", t: "No overruns" },
  { n: "Free", t: "Zero cost, ever" },
];

export default function CallMetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {callMetrics.map((s, i) => (
        <div
          key={i}
          className="text-center py-4 bg-white rounded-xl border shadow-sm"
          style={{ borderColor: "#e0e5e9" }}
        >
          <div className="font-display text-lg font-bold text-primary">{s.n}</div>
          <div className="text-gray-400 text-xs">{s.t}</div>
        </div>
      ))}
    </div>
  );
}