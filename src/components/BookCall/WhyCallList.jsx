const whyCallItems = [
  {
    icon: "🎯",
    title: "Personalized, Not Generic",
    desc: "We review YOUR situation, not a template. Every call is unique.",
  },
  {
    icon: "⚡",
    title: "Clarity in 30 Minutes",
    desc: "Most people leave the call with their #1 next step finally clear.",
  },
  {
    icon: "🚫",
    title: "No Sales Pressure",
    desc: "This is a strategy call — not a pitch. If coaching is a fit, we'll both know.",
  },
];

export default function WhyCallList() {
  return (
    <div className="space-y-4">
      {whyCallItems.map((item, i) => (
        <div
          key={i}
          className="card-hover bg-white rounded-2xl p-5 border shadow-sm flex gap-4"
          style={{ borderColor: "#e0e5e9" }}
        >
          <div className="text-3xl shrink-0">{item.icon}</div>
          <div>
            <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}