import WhyCallList from "./WhyCallList";
import CallMiniTestimonial from "./CallMiniTestimonial";
import CallMetricsGrid from "./CallMetricsGrid";

export default function BookCallSidebar() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div>
        <h2 className="font-display text-primary text-2xl font-bold mb-2">
          What Happens on the Call
        </h2>
        <p className="text-gray-400 text-sm">30 minutes. High signal. Real output.</p>
      </div>

      <WhyCallList />
      <CallMiniTestimonial />
      <CallMetricsGrid />
    </div>
  );
}