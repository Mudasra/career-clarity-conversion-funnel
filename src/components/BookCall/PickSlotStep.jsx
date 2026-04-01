import SlotPicker from "./SlotPicker";
import SelectedSlotBanner from "./SelectedSlotBanner";

export default function PickSlotStep({ grouped, selectedSlot, onSelectSlot, onBook, loading }) {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-sm border"
      style={{ borderColor: "#e0e5e9" }}
    >
      <div className="mb-6">
        <h3 className="font-display text-primary text-xl font-bold mb-1">
          Choose Your Call Time
        </h3>
        <p className="text-gray-400 text-sm">
          All times shown in your local timezone. Select a slot that works best.
        </p>
      </div>

      <SlotPicker grouped={grouped} selectedSlot={selectedSlot} onSelectSlot={onSelectSlot} />
      <SelectedSlotBanner selectedSlot={selectedSlot} />

      <button
        onClick={onBook}
        disabled={!selectedSlot || loading}
        className="w-full cursor-pointer btn-shimmer text-white font-bold text-base py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? "Confirming..." : "Confirm My Free Strategy Call →"}
      </button>
    </div>
  );
}