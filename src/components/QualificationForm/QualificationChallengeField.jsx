import QualificationChallengeOption from "./QualificationChallengeOption";

const challenges = [
  "I don't know what career direction is right for me",
  "I'm underpaid and don't know how to change that",
  "I want to switch industries but fear starting over",
  "I'm burned out and need a new direction",
  "I've been passed over for promotion too many times",
  "I want to start my own business but feel stuck",
];

export default function QualificationChallengeField({ register, error }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-primary mb-3">
        What's your biggest career challenge right now? <span className="text-red-400">*</span>
      </label>
      <div className="grid gap-2">
        {challenges.map((c, i) => (
          <QualificationChallengeOption key={i} label={c} register={register} />
        ))}
      </div>
      {error && (
        <p className="text-red-400 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
}