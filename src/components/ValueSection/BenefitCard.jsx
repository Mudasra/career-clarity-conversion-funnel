export default function BenefitCard({ icon, title, desc }) {
  return (
    <div
      className="card-hover group bg-secondary/30 rounded-2xl p-6 border"
      style={{ borderColor: "#e0e5e9" }}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="font-semibold text-primary text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}