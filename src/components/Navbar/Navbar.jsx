import { useLocation } from "react-router-dom";
import NavLogo from "./NavLogo";
import NavActions from "./NavActions";
import useNavbarScroll from "../../hooks/useNavBarScroll";

export default function Navbar() {
  const scrolled = useNavbarScroll(40);
  const location = useLocation();

  const isLanding = location.pathname === "/";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background:
          scrolled || !isLanding ? "rgba(0,31,41,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLogo />
        <NavActions />
      </div>
    </nav>
  );
}