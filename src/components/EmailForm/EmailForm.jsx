import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormDecorations from "./FormDecorations";
import FormSectionHeader from "./FormSectionHeader";
import FormCard from "./FormCard";
import ToastNotification from "./ToastNotification";
import { submitLeadToCRM, trackEvent } from "../../utils/api";
import { setLeadData } from "../../redux/slices/leadFormSlice";
import { PartyPopper } from "lucide-react";

export default function EmailForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const formRef = useRef(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await submitLeadToCRM(data);
      dispatch(setLeadData({ name: data.name, email: data.email }));
      trackEvent("lead_captured", { source: "landing_page_form" });
      showToast(
  <span className="flex items-center gap-2">
    <PartyPopper size={16} strokeWidth={1.5} />
    Your plan is on its way! Redirecting...
  </span>
);
      setTimeout(() => navigate("/thank-you"), 1500);

    } catch {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="get-plan"
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #001f29 0%, #004e64 100%)" }}
      ref={formRef}
    >
      <FormDecorations />

      <div className="max-w-2xl mx-auto relative z-10">
        <FormSectionHeader />

        <FormCard
          register={register}
          errors={errors}
          loading={loading}
          onSubmit={handleSubmit(onSubmit)}
        />
        <p className="text-center text-secondary/40 text-sm mt-4">
          Join{" "}
          <strong className="text-secondary/60">2,400+ professionals</strong>{" "}
          who've already claimed their plan this month
        </p>
      </div>

      <ToastNotification toast={toast} />
    </section>
  );
}