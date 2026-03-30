export default function HeroDecorations() {
  return (
    <>
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #00a8c8, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ffd166, transparent)" }}
      />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-60" />
      <div
        className="absolute top-1/4 right-1/4 w-3 h-3 bg-warm rounded-full animate-float opacity-40"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-success rounded-full animate-float opacity-50"
        style={{ animationDelay: "4s" }}
      />
    </>
  );
}