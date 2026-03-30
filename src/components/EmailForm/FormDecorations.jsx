export default function FormDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #00a8c8, transparent)" }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ffd166, transparent)" }}
      />
    </div>
  );
}