export default function BookingConfirmedView({ confirmModal }) {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-sm border text-center"
      style={{ borderColor: "#e0e5e9" }}
    >
      <div className="text-5xl mb-4">🎉</div>
      <h3 className="font-display text-primary text-xl font-bold mb-2">You're booked!</h3>
      <p className="text-gray-500 text-sm">
        {confirmModal.day} at {confirmModal.time} — check your inbox for the calendar invite.
      </p>
    </div>
  );
}