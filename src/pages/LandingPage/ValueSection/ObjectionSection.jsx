import ObjectionCard from "./ObjectionCard";
import FunnelSequenceBanner from "./FunnelSequenceBanner";

const objections = [
  {
    q: "What if I've been in the same job for years?",
    a: "That's exactly who this is for. Your experience is an asset — we help you see why and how to leverage it.",
  },
  {
    q: "I don't have time for a long program",
    a: "This is 7 days. 20–30 minutes per day. No fluff. Designed for busy professionals with full-time jobs.",
  },
  {
    q: "What if I don't know what I want?",
    a: "Confusion is the starting point. Day 1 is specifically designed to break through \"I don't know\" and give you real options.",
  },
  {
    q: "Is this just generic career advice?",
    a: "No. The exercises are diagnostic and personalized. Your answers shape your specific clarity plan — it's not a template.",
  },
];

export default function ObjectionSection() {
  return (
    <section className="py-20 px-6" style={{ background: "#f0f4f7" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-primary text-3xl md:text-4xl font-bold mb-3">
            "But what if..."
          </h2>
          <p className="text-gray-500 text-lg">
            Every hesitation you have — we've heard it. Here's the honest answer.
          </p>
        </div>

        <div className="space-y-4">
          {objections.map((o, i) => (
            <ObjectionCard key={i} q={o.q} a={o.a} />
          ))}
        </div>

        <FunnelSequenceBanner />
      </div>
    </section>
  );
}