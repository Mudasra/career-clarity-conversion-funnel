import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import QualificationFormHeader from "./QualificationFormHeader";
import QualificationChallengeField from "./QualificationChallengeField";
import QualificationTimelineField from "./QualificationTimelineField";
import { setQualificationAnswers } from "../../redux/slices/bookingSlice";

export default function QualificationForm({ onSubmit: onSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setQualificationAnswers(data));
    onSuccess(data);
  };

  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-sm border"
      style={{ borderColor: "#e0e5e9" }}
    >
      <QualificationFormHeader />

      <div onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {/* Current role */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              What's your current job title / field?{" "}
              <span className="text-red-400">*</span>
            </label>
            <input
              {...register("currentJob", {
                required: "This field is required",
              })}
              type="text"
              placeholder="e.g. Marketing Manager at a tech company"
              className="form-input w-full bg-secondary/20 text-primary placeholder-gray-400 rounded-xl px-4 py-3 border-2 border-secondary"
            />
            {errors.currentJob && (
              <p className="text-red-400 text-xs mt-1">
                {errors.currentJob.message}
              </p>
            )}
          </div>

          {/* Biggest challenge */}
          <QualificationChallengeField
            register={register}
            error={errors.biggestChallenge}
          />

          {/* Goal */}
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              What does success look like for you in 90 days?{" "}
              <span className="text-red-400">*</span>
            </label>
            <textarea
              {...register("goal", {
                required: "Please share your goal",
                minLength: {
                  value: 20,
                  message: "Please be a bit more specific",
                },
              })}
              rows={3}
              placeholder="e.g. I want to have a clear path to a senior role with a $20K salary increase and more flexibility..."
              className="form-input w-full bg-secondary/20 text-primary placeholder-gray-400 rounded-xl px-4 py-3 border-2 border-secondary resize-none"
            />
            {errors.goal && (
              <p className="text-red-400 text-xs mt-1">{errors.goal.message}</p>
            )}
          </div>

          {/* Timeline */}
          <QualificationTimelineField register={register} />

          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-full cursor-pointer btn-shimmer text-white font-bold text-base py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-lg"
          >
            Continue to Booking →
          </button>
        </div>
      </div>
    </div>
  );
}
