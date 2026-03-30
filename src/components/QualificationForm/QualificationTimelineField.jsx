const timelines = [
  "As soon as possible (1–30 days)",
  "Within 3 months",
  "Within 6 months",
  "I'm exploring my options",
];

export default function QualificationTimelineField({ register }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-primary mb-2">
        How urgently are you looking to make a change?
      </label>
      <select
        {...register("timeline")}
        className="form-input w-full bg-secondary/20 text-primary rounded-xl px-4 py-3 border-2 border-secondary cursor-pointer"
      >
        <option value="">Select a timeline...</option>
        {timelines.map((t, i) => (
          <option key={i} value={t}>{t}</option>
        ))}
      </select>
    </div>
  );
}