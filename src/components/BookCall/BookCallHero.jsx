export default function BookCallHero({ name }) {
  return (
    <div
      className="py-14 px-6 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #001f29 0%, #004e64 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #00a8c8, transparent)",
            transform: "translateY(-50%)",
          }}
        />
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-warm/20 text-warm rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          🔒 Free · No Credit Card · No Obligation
        </div>
        <h1 className="font-display text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
          Book Your Free 30-Minute
          <br />
          <span className="text-accent">Career Strategy Call</span>
        </h1>
        <p className="text-secondary/70 text-base max-w-lg mx-auto">
          {name
            ? `${name}, you've got the clarity plan — now let's turn it into your exact next move.`
            : "You've got the clarity plan — now let's turn it into your exact next move."}
        </p>
      </div>
    </div>
  );
}