import TestimonialsSectionHeader from "./TestimonialsSectionHeader";
import TestimonialCard from "./TestimonialCard";
import TrustBar from "./TrustBar";

const testimonials = [
  {
    name: "Rachel Kim",
    role: "Marketing Manager → Head of Growth",
    outcome: "Got a $28K raise in 60 days",
    text: "I'd been stuck at the same salary for 3 years. The clarity plan helped me finally see what was holding me back, it wasn't my skills, it was my strategy. I had a new offer within 2 months.",
    avatar: "RK",
    stars: 5,
    highlight: "$28K raise",
  },
  {
    name: "Daniel Torres",
    role: "Software Engineer → Engineering Lead",
    outcome: "Promoted without asking for it",
    text: "I kept waiting to feel 'ready' for the next step. After the 7-day plan, I knew exactly how to position myself. My manager came to me with the leadership offer, I didn't even have to pitch it.",
    avatar: "DT",
    stars: 5,
    highlight: "Promoted in 45 days",
  },
  {
    name: "Priya Nair",
    role: "Operations Analyst → Product Manager",
    outcome: "Switched industries successfully",
    text: "I thought changing industries at 34 was too risky. The plan showed me a clear bridge from what I had to what I wanted. I made the switch without taking a pay cut, actually negotiated up by 18%.",
    avatar: "PN",
    stars: 5,
    highlight: "+18% salary switch",
  },
  {
    name: "James Whitfield",
    role: "Sales Director (Burned out)",
    outcome: "Found work-life balance + $15K more",
    text: "I was burnt out but didn't know what else I could do. The clarity exercises on Day 2 and 3 were a game-changer. I mapped out 4 real options I hadn't even considered before.",
    avatar: "JW",
    stars: 5,
    highlight: "4 new career paths found",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6" style={{ background: "#f0f4f7" }}>
      <div className="max-w-6xl mx-auto">
        <TestimonialsSectionHeader />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        <TrustBar />
      </div>
    </section>
  );
}