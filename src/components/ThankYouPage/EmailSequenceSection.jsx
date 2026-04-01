import { MailOpen, Zap, CalendarDays } from "lucide-react";
import { emailSequence } from "../../utils/constants";
import EmailSequenceCard from "./EmailSequenceCard";

const iconMap = {
  MailOpen: <MailOpen size={20} strokeWidth={1.5} className="text-primary" />,
  Zap: <Zap size={20} strokeWidth={1.5} className="text-primary" />,
  CalendarDays: <CalendarDays size={20} strokeWidth={1.5} className="text-primary" />,
};

export default function EmailSequenceSection() {
  return (
    <div className="text-center mb-10">
      <h2 className="font-display text-primary text-2xl md:text-3xl font-bold mb-2">
        Here's What's Coming to Your Inbox
      </h2>
      <p className="text-gray-500">Three emails. Zero fluff. Real results.</p>

      <div className="space-y-4 mt-10">
        {emailSequence.map((e, i) => (
          <EmailSequenceCard key={i} {...e} icon={iconMap[e.icon]} />
        ))}
      </div>
    </div>
  );
}