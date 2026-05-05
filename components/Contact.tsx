"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitFork, Link } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "alexandrelfrc@gmail.com",
    href: "mailto:alexandrelfrc@gmail.com",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/Alexlechat",
    href: "https://github.com/Alexlechat",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "linkedin.com/in/alexandre-lefranc",
    href: "https://linkedin.com/in/alexandre-lefranc",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
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
          <p className="label mb-4">04 / Contact</p>
          <h2
            className="font-sans font-black text-[#f0ede8] leading-none tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            Recruiter<br />line
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-24">
          {/* Left — context */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-base text-text-muted leading-relaxed mb-8 max-w-sm">
              Disponible pour un stage en cybersécurité.
              Sécurité des systèmes, architecture réseaux, protection des données.
              Basé à Lyon — mobilité France entière.
            </p>

            <div
              className="mono text-sm text-text-dim leading-relaxed p-4"
              style={{ border: "1px solid rgba(255,107,53,0.2)", borderLeft: "2px solid #ff6b35" }}
            >
              <span style={{ color: "#ff6b35" }}>PROFIL · </span>
              Parcours atypique — Finance → International → Code.
              Formation technique intensive (42 Lyon).
            </div>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 group transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <c.icon size={15} className="text-text-dim shrink-0 group-hover:text-[#00d4ff] transition-colors" />
                <div>
                  <p className="mono text-xs tracking-[0.12em] uppercase text-text-dim mb-0.5">
                    {c.label}
                  </p>
                  <p className="mono text-base text-text-muted group-hover:text-[#f0ede8] transition-colors">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
