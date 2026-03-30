import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BookCallTopBar from "../components/BookCall/BookCallTopBar";
import BookCallHero from "../components/BookCall/BookCallHero";
import BookCallSidebar from "../components/BookCall/BookCallSidebar";
import BookCall from "../components/BookCall/BookCall";
import BookCallFooterStrip from "../components/BookCall/BookCallFooterStrip";

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