"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const entries = [
  {
    year: "2024 —",
    title: "École 42 Lyon",
    subtitle: "Développeur · Architecture Réseaux — En cours",
    tags: ["C", "Bash", "Linux", "Architecture réseaux", "Sécurité"],
    desc: "Formation par le pair, pas de cours magistraux. Projets validés par les pairs uniquement — aucune tolérance pour le code qui compile sans fonctionner. Fort intérêt pour la sécurité des systèmes et la protection des données.",
    accent: "cyan",
  },
  {
    year: "2019 — 2024",
    title: "Séjour International",
    subtitle: "Australie · Nouvelle-Zélande · Colombie · Mexique",
    tags: ["Autonomie", "Gestion de projet", "Adaptabilité"],
    desc: "Expériences professionnelles dans divers secteurs (minier, construction, pêche). Développement d'une autonomie forte et d'une capacité d'adaptation dans des environnements exigeants.",
    accent: "orange",
  },
  {
    year: "2016 — 2018",
    title: "Analyste Financier",
    subtitle: "Linagrain, Europe — CDI",
    tags: ["IFRS", "Consolidation financière", "15 pays"],
    desc: "Responsable consolidation financière IFRS pour 15 pays. Liaison directe avec les directeurs de pays. Rigueur analytique et gestion de données complexes à grande échelle.",
    accent: "violet",
  },
];

const accentColor: Record<string, string> = {
  cyan: "#00d4ff",
  orange: "#ff6b35",
  violet: "#a78bfa",
};

export default function Parcours() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="parcours" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="label mb-4">01 / Parcours</p>
          <h2
            className="font-sans font-black text-[#f0ede8] leading-none tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Trajectoire
          </h2>
          <p className="mono text-base text-text-muted mt-4 max-w-md">
            Rigueur analytique, expérience terrain internationale, reconversion technique complète à 42 Lyon.
          </p>
        </motion.div>

        {/* Timeline entries */}
        <div className="space-y-0">
          {entries.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.18 }}
              className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10"
              style={{
                borderTop: `1px solid ${
                  i === 0 ? accentColor[e.accent] + "40" : "rgba(255,255,255,0.07)"
                }`,
              }}
            >
              {/* Year column */}
              <div className="flex flex-col">
                <span
                  className="mono text-sm tracking-[0.15em] font-bold mb-1"
                  style={{ color: accentColor[e.accent] }}
                >
                  {e.year}
                </span>
                {/* Accent dot */}
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mt-1"
                  style={{
                    background: accentColor[e.accent],
                    boxShadow:
                      e.accent !== "dim"
                        ? `0 0 8px ${accentColor[e.accent]}80`
                        : "none",
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-sans font-black text-[#f0ede8] leading-tight mb-1"
                  style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)" }}
                >
                  {e.title}
                </h3>
                <p className="mono text-sm text-text-muted mb-4">
                  {e.subtitle}
                </p>

                {e.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {e.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono text-xs tracking-[0.08em] uppercase px-2.5 py-1"
                        style={{
                          border: `1px solid ${accentColor[e.accent]}40`,
                          color: accentColor[e.accent],
                          opacity: 0.8,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-base text-text-muted leading-relaxed max-w-xl">
                  {e.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mono text-sm text-text-dim mt-10 max-w-lg"
          style={{ borderLeft: "2px solid rgba(255,107,53,0.3)", paddingLeft: "1rem" }}
        >
          Profil ciblé : cybersécurité, sécurité des systèmes, architecture réseaux.
          Combiner l&apos;expérience internationale et la rigueur analytique avec la maîtrise technique acquise à 42.
        </motion.p>
      </div>
    </section>
  );
}
