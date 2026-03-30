export default function QualificationChallengeOption({ label, register }) {
  return (
    <label
      className="flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all hover:border-accent"
      style={{ borderColor: "#e0e5e9" }}
    >
      <input
        {...register("biggestChallenge", { required: "Please select a challenge" })}
        type="radio"
        value={label}
        className="accent-primary"
      />
      <span className="text-sm text-gray-600">{label}</span>
    </label>
  );
}