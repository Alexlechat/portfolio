"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const domains = [
  {
    name: "Technique",
    items: ["C", "Bash", "Linux", "Architecture réseaux", "Sécurité des systèmes", "Protection des données"],
    color: "#ff6b35",
  },
  {
    name: "Système & Réseau",
    items: ["TCP/IP · OSI", "Sockets POSIX", "Administration Linux", "Scripting système", "Gestion mémoire"],
    color: "#00d4ff",
  },
  {
    name: "Soft Skills",
    items: ["Résolution de problèmes", "Travail en équipe", "Autonomie", "Gestion de projet", "Curiosité & apprentissage"],
    color: "#00d4ff",
  },
  {
    name: "Outils",
    items: ["Git", "Linux", "Vim", "Bash scripts", "42 Norm"],
    color: "rgba(255,255,255,0.3)",
  },
];

const langs = [
  { name: "Français", level: "Natif" },
  { name: "English", level: "Bilingual — operational" },
  { name: "Español", level: "Intermédiaire" },
];

export default function Competences() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="competences" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="label mb-4">03 / Compétences</p>
          <h2
            className="font-sans font-black text-[#f0ede8] leading-none tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Stack technique
          </h2>
        </motion.div>

        {/* Domains grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {domains.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="block w-3 h-px"
                  style={{ background: d.color }}
                />
                <p
                  className="mono text-[0.6rem] tracking-[0.25em] uppercase"
                  style={{ color: d.color, opacity: 0.8 }}
                >
                  {d.name}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {d.items.map((item) => (
                  <span
                    key={item}
                    className="mono text-[0.72rem] tracking-[0.04em] px-2.5 py-1
                      text-text-muted cursor-default
                      hover:text-text transition-colors duration-200"
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        />

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex flex-wrap gap-10"
        >
          {langs.map((l) => (
            <div key={l.name} className="flex items-baseline gap-2.5">
              <span className="font-sans font-semibold text-sm text-[#f0ede8]">
                {l.name}
              </span>
              <span className="mono text-[0.62rem] text-text-dim">— {l.level}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
