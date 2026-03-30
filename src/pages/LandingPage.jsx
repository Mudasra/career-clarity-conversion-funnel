import { useRef } from "react";
import EmailForm from "../components/EmailForm/EmailForm";
import LandingHero from "../components/LandingHero/LandingHero";
import Testimonials from "../components/Testimonials/Testimonials";
import ValueSection from "../components/ValueSection/ValueSection";

export default function LandingPage () {
      const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <div>
            <LandingHero onCTAClick={scrollToForm} />
            <ValueSection />
            <Testimonials />
            <div ref={formRef}>
                <EmailForm />
            </div>
        </div>
    )
}