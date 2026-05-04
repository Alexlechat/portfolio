"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Projet X — Réseaux",
    tech: "C · Réseaux · Sockets",
    status: "live",
    statusLabel: "42 — En cours",
    color: "#ff6b35",
    desc: "Projet réseau développé à l'École 42. Manipulation de sockets, gestion de la mémoire, implémentation de protocoles de communication. Approche bas niveau en C pur.",
    highlights: [
      "Gestion mémoire manuelle (malloc/free)",
      "Communication via sockets POSIX",
      "Architecture réseau bas niveau",
    ],
    stack: ["C", "Réseaux", "Sockets", "Linux"],
    github: "#",
    note: null,
  },
  {
    id: "02",
    name: "Projet Y — Sécurité",
    tech: "Bash · Scripts · Sécurité système",
    status: "done",
    statusLabel: "42 — Validé",
    color: "#00d4ff",
    desc: "Projet axé sécurité et scripting système. Automatisation, durcissement Linux, analyse des vecteurs d'attaque courants. Approche défensive de la sécurité des systèmes.",
    highlights: [
      "Scripting Bash avancé",
      "Sécurisation de configurations Linux",
      "Analyse et mitigation des vulnérabilités",
    ],
    stack: ["Bash", "Linux", "Sécurité", "Scripts"],
    github: "#",
    note: null,
  },
];

export default function Projets() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projets"
      ref={ref}
      className="py-32 px-6 md:px-12"
      style={{ background: "#080808" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="label mb-4">02 / Projets</p>
          <h2
            className="font-sans font-black text-[#f0ede8] leading-none tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Travaux
          </h2>
        </motion.div>

        {/* Project list */}
        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="card-depth group relative overflow-hidden"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Accent left bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: p.color, opacity: i === 0 ? 0.9 : 0.4 }}
              />

              <div className="p-6 md:p-10 pl-8 md:pl-12">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="mono text-[0.6rem] text-text-dim">{p.id}</span>
                      <h3
                        className="font-sans font-black text-[#f0ede8] leading-none"
                        style={{ fontSize: "clamp(1.3rem,3vw,2rem)" }}
                      >
                        {p.name}
                      </h3>
                    </div>
                    <p className="mono text-xs" style={{ color: p.color, opacity: 0.8 }}>
                      {p.tech}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: p.color,
                        boxShadow: `0 0 6px ${p.color}`,
                      }}
                    />
                    <span
                      className="mono text-[0.6rem] tracking-[0.15em] uppercase"
                      style={{ color: p.color }}
                    >
                      {p.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-3xl">
                  {p.desc}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <span
                        className="mono text-[0.6rem] shrink-0 mt-0.5"
                        style={{ color: p.color }}
                      >
                        →
                      </span>
                      <span className="text-xs text-text-muted">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack + link row */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="mono text-[0.58rem] tracking-[0.08em] uppercase px-2 py-0.5"
                        style={{
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.35)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {(p.github || p.note) && (
                    <div className="flex items-center gap-3">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mono text-[0.62rem]
                            tracking-[0.1em] uppercase text-text-muted hover:text-[#00d4ff]
                            transition-colors"
                        >
                          <GitFork size={11} />
                          Code
                          <ExternalLink size={10} />
                        </a>
                      )}
                      {p.note && (
                        <span className="mono text-[0.58rem] text-text-dim italic">
                          {p.note}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Note */}
        <p className="mono text-[0.65rem] text-text-dim mt-8">
          <span style={{ color: "rgba(0,212,255,0.3)" }}>{"// "}</span>
          D&apos;autres projets 42 en cours — liens GitHub à venir.
        </p>
      </div>
    </section>
  );
}
