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
          ? "bg-[#050505]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[rgba(0,212,255,0.6)]
            hover:text-[#00d4ff] transition-colors"
        >
          ALFRC
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[0.62rem] tracking-[0.2em] uppercase
                  text-text-muted hover:text-[#f0ede8] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden mono text-[0.62rem] text-text-muted hover:text-[#f0ede8] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "[ ✕ ]" : "[ ≡ ]"}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden border-b border-[rgba(255,255,255,0.05)]"
          style={{ background: "#050505" }}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="mono text-[0.62rem] tracking-[0.2em] uppercase text-text-muted
                    hover:text-[#f0ede8] transition-colors"
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
