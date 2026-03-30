export default function BenefitsSectionHeader() {
  return (
    <div className="text-center mb-14">
      <div
        className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-1.5 mb-4"
        style={{ background: "rgba(0,78,100,0.1)", color: "#004e64" }}
      >
        ✦ What's Inside Your Free Plan
      </div>
      <h2 className="font-display text-primary text-3xl md:text-4xl font-bold mb-4">
        Everything You Need to Go From Stuck to{" "}
        <span className="italic text-accent">Certain</span>
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto">
        Each day builds on the last. By day 7, you won't just feel better — you'll have a real plan.
      </p>
    </div>
  );
}