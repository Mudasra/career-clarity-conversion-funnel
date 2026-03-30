import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavActions() {
  const navigate = useNavigate();
  const location = useLocation();
  const { submitted, name } = useSelector((s) => s.leadForm);

  const isLanding = location.pathname === "/";

  return (
    <div className="flex items-center gap-4">
      {submitted && name && (
        <span className="hidden sm:block text-secondary/50 text-sm">
          👋 Hey, <strong className="text-secondary/80">{name}</strong>
        </span>
      )}

      {isLanding ? (
        <a
          href="#get-plan"
          className="btn-shimmer text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow hover:scale-105 transition-transform duration-150"
        >
          Get Free Plan →
        </a>
      ) : submitted ? (
        <button
          onClick={() => navigate("/book-call")}
          className="btn-shimmer text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow hover:scale-105 transition-transform duration-150"
        >
          Book Your Call →
        </button>
      ) : (
        <button
          onClick={() => navigate("/")}
          className="text-secondary/60 hover:text-white text-sm transition-colors"
        >
          Get Free Plan →
        </button>
      )}
    </div>
  );
}