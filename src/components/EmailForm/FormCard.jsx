import FormFields from "./FormFields";
import FormSubmitButton from "./FormSubmitButton";
import FormTrustBadges from "./FormTrustBadges";

export default function FormCard({ register, errors, loading, onSubmit }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
      <div onSubmit={onSubmit}>
        <FormFields register={register} errors={errors} />
        <FormSubmitButton loading={loading} onSubmit={onSubmit} />
      </div>
      <FormTrustBadges />
    </div>
  );
}