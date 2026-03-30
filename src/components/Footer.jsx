export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#001f29" }}>
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#8a9baa" }}>
            © {year} CareerClarity. All rights reserved.
          </p>

            <p className="text-xs" style={{ color: "#8a9baa" }}>
        Developed and coded by{" "}
        <a
          href="https://mudasra-s-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block group font-bold transition-colors duration-200"
          style={{ color: "#004e64" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#006f8e")}
          onMouseLeave={e => (e.currentTarget.style.color = "#004e64")}
        >
          Mudasra
          <span
            className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
            style={{ backgroundColor: "#004e64" }}
          />
        </a>
      </p>

        </div>
      </div>
    </footer>
  );
}
