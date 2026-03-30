const trustBadges = [
  { icon: "🔒", text: "100% Private" },
  { icon: "📧", text: "No Spam Ever" },
  { icon: "🎯", text: "Instant Access" },
];

export default function FormTrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
      {trustBadges.map((b, i) => (
        <div key={i} className="text-center">
          <div className="text-xl mb-1">{b.icon}</div>
          <div className="text-secondary/50 text-xs">{b.text}</div>
        </div>
      ))}
    </div>
  );
}