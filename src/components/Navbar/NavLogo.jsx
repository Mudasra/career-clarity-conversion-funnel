import { useNavigate } from "react-router-dom";

export default function NavLogo() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="flex cursor-pointer items-center gap-2.5 group"
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
        style={{ background: "linear-gradient(135deg, #00a8c8, #004e64)" }}
      >
        CC
      </div>
      <span className="font-display text-white font-semibold text-lg leading-none">
        Career<span className="text-accent">Clarity</span>
      </span>
    </button>
  );
}