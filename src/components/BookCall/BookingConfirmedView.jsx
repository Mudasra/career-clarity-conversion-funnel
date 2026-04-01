import { PartyPopper } from "lucide-react";

export default function BookingConfirmedView({ confirmModal }) {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-sm border text-center"
      style={{ borderColor: "#e0e5e9" }}
    >
      <div className="flex justify-center mb-4 text-accent">
  <PartyPopper size={48} strokeWidth={1.5} />
</div>
      <h3 className="font-display text-primary text-xl font-bold mb-2">You're booked!</h3>
      <p className="text-gray-500 text-sm">
        {confirmModal.day} at {confirmModal.time} , check your inbox for the calendar invite.
      </p>
    </div>
  );
}