"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";

const ParticleSphere = dynamic(() => import("./ParticleSphere"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    let v = true;
    const id = setInterval(() => {
      v = !v;
      el.style.opacity = v ? "1" : "0";
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── 3D sphere — full bleed background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleSphere />
        {/* Radial fade — edges to black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, #050505 80%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-24 pb-16">

        {/* Status badge */}
        <div className="flex items-center gap-2.5 mb-10">
          <span className="dot-live" />
          <span
            className="mono text-[0.6rem] tracking-[0.25em] uppercase"
            style={{ color: "rgba(57,255,20,0.8)" }}
          >
            Disponible · Stage 2025
          </span>
          <span className="mono text-[0.6rem] text-text-muted mx-2">·</span>
          <span className="mono text-[0.6rem] tracking-[0.15em] uppercase text-text-muted">
            Lyon · École 42
          </span>
        </div>

        {/* Name — hero scale */}
        <h1
          className="font-sans font-black leading-none tracking-[-0.04em] mb-8 select-none"
        >
          <span
            className="block text-[#f0ede8]"
            style={{ fontSize: "clamp(4.5rem,12vw,12rem)" }}
          >
            ALEXANDRE
          </span>
          <span
            className="block"
            style={{
              fontSize: "clamp(4.5rem,12vw,12rem)",
              WebkitTextStroke: "1.5px rgba(0,212,255,0.7)",
              color: "transparent",
            }}
          >
            LEFRANC
          </span>
        </h1>

        {/* Descriptor */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p
            className="mono text-sm text-text-muted leading-relaxed max-w-sm"
            style={{ borderLeft: "2px solid rgba(0,212,255,0.3)", paddingLeft: "1rem" }}
          >
            Développeur — École 42 Lyon
            <br />
            Parcours : Finance · International · Code
            <br />
            <span style={{ color: "rgba(0,212,255,0.7)" }}>
              Cible : cybersécurité · systèmes · réseaux
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projets"
              className="inline-flex items-center gap-2 px-5 py-2.5
                font-mono text-[0.7rem] tracking-[0.15em] uppercase
                bg-[rgba(0,212,255,0.1)] text-[#00d4ff]
                border border-[rgba(0,212,255,0.35)]
                hover:bg-[rgba(0,212,255,0.18)] hover:border-[rgba(0,212,255,0.6)]
                transition-all duration-200"
            >
              Projets
              <ArrowDownRight size={13} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5
                font-mono text-[0.7rem] tracking-[0.15em] uppercase
                text-text-muted
                border border-[rgba(255,255,255,0.1)]
                hover:text-text hover:border-[rgba(255,255,255,0.25)]
                transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* CLI prompt — bottom of hero */}
        <div className="mt-16 mono text-[0.65rem] text-text-dim flex items-center gap-1.5">
          <span style={{ color: "rgba(0,212,255,0.35)" }}>$</span>
          <span>./init --profile cybersecurity-42lyon</span>
          <span
            ref={cursorRef}
            className="inline-block w-[6px] h-[0.9em] ml-0.5 translate-y-[1px]"
            style={{ background: "rgba(0,212,255,0.5)" }}
          />
        </div>
      </div>

      {/* Vertical line scroll hint */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20">
        <div
          className="w-px h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, #00d4ff)",
          }}
        />
      </div>
    </section>
  );
}
