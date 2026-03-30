const trustStats = [
  { n: "2,400+", t: "Professionals Helped" },
  { n: "94%", t: "Gained Career Clarity" },
  { n: "4.9/5", t: "Average Rating" },
  { n: "60 days", t: "Avg. Time to Results" },
];

export default function TrustBar() {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      {trustStats.map((s, i) => (
        <div
          key={i}
          className="text-center py-5 bg-white rounded-2xl border shadow-sm card-hover"
          style={{ borderColor: "#e0e5e9" }}
        >
          <div className="font-display text-2xl font-bold text-primary mb-1">{s.n}</div>
          <div className="text-gray-400 text-xs">{s.t}</div>
        </div>
      ))}
    </div>
  );
}