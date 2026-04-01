import { CalendarDays } from "lucide-react";

export default function SelectedSlotBanner({ selectedSlot }) {
  if (!selectedSlot) return null;

  return (
    <div
      className="mb-5 p-4 rounded-2xl flex items-center gap-3 text-sm"
      style={{
        background: "rgba(0,168,200,0.08)",
        border: "1px solid rgba(0,168,200,0.2)",
      }}
    >
<CalendarDays size={20} strokeWidth={1.5} className="text-accent shrink-0" />      <div>
        <strong className="text-primary">{selectedSlot.day}</strong> at{" "}
        <strong className="text-accent">{selectedSlot.time}</strong>
        {" "}· 30 min · Free Strategy Call
      </div>
    </div>
  );
}