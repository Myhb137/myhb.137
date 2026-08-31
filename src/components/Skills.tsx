import { useState } from "react";
import { motion } from "framer-motion";
import { groups } from "../data/skills";

export default function Skills() {
  return (
    <section id="stack" className="border-t border-rule py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted mb-6"
            style={{ letterSpacing: "0.12em" }}
          >
            03 &mdash; STACK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-ink leading-tight max-w-2xl"
          >
            The tools I reach for &mdash; picked for the problem, not the resume.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-rule">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="bg-canvas p-8 md:p-10"
            >
              <p
                className="font-mono text-muted mb-6"
                style={{ fontSize: "10px", letterSpacing: "0.12em" }}
              >
                {group.title.toUpperCase()}
              </p>

              <ul className="space-y-0">
                {group.items.map((item, i) => (
                  <SkillItem key={item} item={item} index={i} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ item, index }: { item: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="border-b border-rule py-3 flex items-center justify-between cursor-default group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transition: "background-color 0.12s ease" }}
    >
      <span
        className="font-mono text-ink transition-colors duration-150 text-sm"
        style={{
          color: hovered ? "#111111" : "#444444",
        }}
      >
        {item}
      </span>
      <span
        className="font-mono text-muted ml-4"
        style={{
          fontSize: "10px",
          letterSpacing: "0.1em",
          opacity: hovered ? 0.5 : 0.2,
          transition: "opacity 0.12s ease",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </li>
  );
}
