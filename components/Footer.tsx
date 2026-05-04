export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="mono text-[0.58rem] tracking-[0.25em] uppercase text-text-muted">
          Alexandre Lefranc · 2026
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Alexlechat"
            target="_blank"
            rel="noopener noreferrer"
            className="mono text-[0.58rem] tracking-[0.2em] uppercase text-text-muted hover:text-[#00d4ff] transition-colors"
          >
            GitHub / Alexlechat
          </a>
          <span className="mono text-[0.58rem] text-text-muted flex items-center gap-1.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "#39ff14", boxShadow: "0 0 6px rgba(57,255,20,0.8)" }}
            />
            Disponible pour stage
          </span>
        </div>
      </div>
    </footer>
  );
}
