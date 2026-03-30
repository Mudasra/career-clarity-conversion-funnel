export default function BookCallFooterStrip() {
  return (
    <div
      className="border-t py-6 px-6 text-center text-gray-400 text-sm"
      style={{ borderColor: "#e0e5e9", background: "white" }}
    >
      Questions? Email us at{" "}
      <a href="mailto:hello@careerclarity.co" className="text-accent hover:underline">
        hello@careerclarity.co
      </a>{" "}
      · We reply within 4 hours.
    </div>
  );
}