import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmBooking } from "../redux/slices/bookingSlice";
import { submitBookingToCRM, trackEvent } from "../utils/api";
import QualificationForm from "./QualificationForm";
import PickSlotStep from "./PickSlotStep";
import BookingConfirmedView from "./BookingConfirmedView";
import ConfirmationModal from "./ConfirmationModal";
import { generateSlots } from "./generateSlots";

const slots = generateSlots();

export default function BookCall() {
  const [step, setStep] = useState("qualify"); // qualify → pick → confirmed
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const { name } = useSelector((s) => s.leadForm);
  const dispatch = useDispatch();

  const handleQualified = () => setStep("pick");

  const handleBook = async () => {
    if (!selectedSlot) return;
    setLoading(true);
    const bookingData = {
      ...selectedSlot,
      id: `BOOK-${Date.now()}`,
      name,
    };
    try {
      await submitBookingToCRM(bookingData);
      dispatch(confirmBooking(`${selectedSlot.day} ${selectedSlot.time}`));
      trackEvent("call_booked", { slot: selectedSlot });
      setConfirmModal(bookingData);
      setStep("confirmed");
    } finally {
      setLoading(false);
    }
  };

  const grouped = slots.reduce((acc, s) => {
    if (!acc[s.day]) acc[s.day] = [];
    acc[s.day].push(s);
    return acc;
  }, {});

  return (
    <div>
      {step === "qualify" && <QualificationForm onSubmit={handleQualified} />}

      {step === "pick" && (
        <PickSlotStep
          grouped={grouped}
          selectedSlot={selectedSlot}
          onSelectSlot={setSelectedSlot}
          onBook={handleBook}
          loading={loading}
        />
      )}

      {step === "confirmed" && confirmModal && (
        <BookingConfirmedView confirmModal={confirmModal} />
      )}

      {confirmModal && (
        <ConfirmationModal booking={confirmModal} onClose={() => setConfirmModal(null)} />
      )}
    </div>
  );
}