import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeroSection from "./HeroSection";
import EmailSequenceSection from "./EmailSequenceSection";
import BookCallCTA from "./BookCallCTA";

export default function ThankYou() {
  const { name, email } = useSelector((s) => s.leadForm);
  const [spotsLeft] = useState(Math.floor(Math.random() * 3) + 3); 
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f7" }}>
      <HeroSection name={name} email={email} visible={visible} />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <EmailSequenceSection />
        <BookCallCTA spotsLeft={spotsLeft} />
      </div>
    </div>
  );
}