import BenefitsSectionHeader from "./BenefitsSectionHeader";
import BenefitCard from "./BenefitCard";
import { Target, Lightbulb, BarChart2, Map, MessageSquare, CalendarDays } from "lucide-react";

const benefits = [
  {
    icon: <Target size={24} strokeWidth={1.5} />,
    title: "Day 1: Career Direction Audit",
    desc: "A structured 20-minute exercise that reveals exactly where you are, and where you're actually capable of going.",
  },
  {
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
    title: "Day 2–3: Hidden Strength Identifier",
    desc: "Uncover the skills and experiences you've been undervaluing, the ones hiring managers are actively paying premium for.",
  },
  {
    icon: <BarChart2 size={24} strokeWidth={1.5} />,
    title: "Day 4–5: Opportunity Gap Analysis",
    desc: "Map the gap between your current role and your ideal role, with a clear bridge that doesn't require starting over.",
  },
  {
    icon: <Map size={24} strokeWidth={1.5} />,
    title: "Day 6–7: Your Clear Next Move",
    desc: "Walk away with 1–3 concrete, actionable next steps tailored to your situation. Not generic advice, your move.",
  },
  {
    icon: <MessageSquare size={24} strokeWidth={1.5} />,
    title: "BONUS: Salary Negotiation Script",
    desc: "A word-for-word script used by professionals who have negotiated $10K–$40K raises without damaging relationships.",
  },
  {
    icon: <CalendarDays size={24} strokeWidth={1.5} />,
    title: "BONUS: 30-Day Action Roadmap",
    desc: "A printable daily action guide so you never lose momentum after getting clarity on your direction.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <BenefitsSectionHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <BenefitCard key={i} icon={b.icon} title={b.title} desc={b.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}