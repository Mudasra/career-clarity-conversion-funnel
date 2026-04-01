import { MailX, ShieldCheck, Zap } from "lucide-react";

const trustBadges = [
  { icon: <ShieldCheck size={20} strokeWidth={1.5} />, text: "100% Private" },
  { icon: <MailX size={20} strokeWidth={1.5} />, text: "No Spam Ever" },
  { icon: <Zap size={20} strokeWidth={1.5} />, text: "Instant Access" },
];

export default function FormTrustBadges() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
      {trustBadges.map((b, i) => (
        <div key={i} className="text-center">
          <div className="flex justify-center mb-1 text-accent">{b.icon}</div>
          <div className="text-secondary/50 text-xs">{b.text}</div>
        </div>
      ))}
    </div>
  );
}