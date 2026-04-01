import { ClipboardList, PartyPopper } from "lucide-react";

export default function ConfirmationModal({ booking, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,31,41,0.85)", backdropFilter: "blur(4px)" }}
    >
      <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl animate-fade-up relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 text-2xl leading-none"
        >
          ×
        </button>

        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 animate-float"
          style={{
            background: "rgba(6,214,160,0.15)",
            border: "2px solid rgba(6,214,160,0.3)",
            color: "#06d6a0",
          }}
        >
          <PartyPopper size={36} strokeWidth={1.5} />
        </div>

        <div className="inline-flex items-center gap-2 bg-success/10 text-success rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          ✓ Call Confirmed
        </div>

        <h2 className="font-display text-primary text-2xl font-bold mb-2">
          You're on the calendar!
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Your free 30-minute Career Strategy Call is booked for:
        </p>

        <div
          className="bg-secondary/30 rounded-2xl py-4 px-6 mb-6 border"
          style={{ borderColor: "#e0e5e9" }}
        >
          <div className="text-primary font-bold text-lg">{booking.day}</div>
          <div className="text-accent font-semibold">{booking.time}</div>
          <div className="text-gray-400 text-xs mt-1">
            30 minutes · Video or Phone
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6">
          A calendar invite + reminder will be sent to your email. Come prepared
          with your biggest challenge, we'll dive straight in.
        </p>

        <div className="text-xs text-gray-600 bg-secondary/20 rounded-xl px-4 py-3 flex items-center gap-2">
  <ClipboardList size={16} strokeWidth={1.5} className="text-primary/50" />
  Booking ID: <span className="font-mono text-primary">{booking.id}</span>
</div>
      </div>
    </div>
  );
}
