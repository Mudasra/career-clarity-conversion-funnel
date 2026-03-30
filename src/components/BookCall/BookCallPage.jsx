import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookCall from "../components/BookCall";
import BookCallTopBar from "./BookCallTopBar";
import BookCallHero from "./BookCallHero";
import BookCallSidebar from "./BookCallSidebar";
import BookCallFooterStrip from "./BookCallFooterStrip";

export default function BookCallPage() {
  const { name } = useSelector((s) => s.leadForm);
  const [spotsLeft] = useState(Math.floor(Math.random() * 3) + 3);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f7" }}>
      <BookCallTopBar spotsLeft={spotsLeft} onBack={() => navigate("/")} />
      <BookCallHero name={name} />

      <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-5 gap-10">
        <BookCallSidebar />
        <div className="lg:col-span-3">
          <BookCall />
        </div>
      </div>

      <BookCallFooterStrip />
    </div>
  );
}