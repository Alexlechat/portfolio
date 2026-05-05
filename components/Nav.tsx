"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]"
          : "bg-transparent"
      )}
      style={scrolled ? { background: "var(--bg-nav)" } : undefined}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-[0.25em] uppercase transition-colors"
          style={{ color: "var(--cyan)", opacity: 0.8 }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
        >
          ALFRC_
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-[0.18em] uppercase
                  text-text-muted hover:text-text transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden mono text-xs text-text-muted hover:text-text transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "[ ✕ ]" : "[ ≡ ]"}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden border-b"
          style={{ background: "var(--bg-nav)", borderColor: "var(--border)" }}
        >
          <ul className="flex flex-col px-6 py-5 gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="mono text-xs tracking-[0.18em] uppercase text-text-muted
                    hover:text-text transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
