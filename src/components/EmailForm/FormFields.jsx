export default function FormFields({ register, errors }) {
  return (
    <div className="space-y-4">
      {/* Name field */}
      <div>
        <label className="block text-secondary/80 text-sm font-medium mb-2">
          First Name <span className="text-secondary/40">(optional)</span>
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="e.g. Sarah"
          className="form-input w-full bg-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 border-2 border-white/10"
        />
      </div>

      {/* Email field */}
      <div>
        <label className="block text-secondary/80 text-sm font-medium mb-2">
          Work Email <span className="text-red-400">*</span>
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
          type="email"
          placeholder="you@example.com"
          className="form-input w-full bg-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 border-2 border-white/10"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
    </div>
  );
}