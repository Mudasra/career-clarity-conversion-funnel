export default function SlotPicker({ grouped, selectedSlot, onSelectSlot }) {
  return (
    <div className="space-y-5 mb-7">
      {Object.entries(grouped).map(([day, daySlots]) => (
        <div key={day}>
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            {day}
          </div>
          <div className="flex flex-wrap gap-2">
            {daySlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => onSelectSlot(slot)}
                className={`px-4 py-2 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                  selectedSlot?.id === slot.id
                    ? "text-white border-accent"
                    : "text-primary hover:border-accent/50"
                }`}
                style={{
                  background:
                    selectedSlot?.id === slot.id
                      ? "linear-gradient(135deg, #004e64, #006d8a)"
                      : "rgba(0,78,100,0.04)",
                  borderColor:
                    selectedSlot?.id === slot.id ? "#00a8c8" : "#e0e5e9",
                }}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}