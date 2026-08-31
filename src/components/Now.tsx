import { motion } from "framer-motion";

const items = [
  {
    label: "LEARNING",
    value: "Advanced Machine Learning",
    detail: "Deep diving into theory and implementation.",
  },
  {
    label: "BUILDING",
    value: "Practical ML systems and data products",
    detail: "End-to-end pipelines that reach production.",
  },
  {
    label: "EXPLORING",
    value: "AI systems + automation",
    detail: "LLMs, agents, and intelligent workflows.",
  },
  {
    label: "LOOKING FOR",
    value: "Data Scientist · ML Engineer · Data Analyst",
    detail: "Full-time, internship, or focused engagements.",
  },
];

export default function Now() {
  return (
    <section className="border-t border-rule py-24 md:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <p
            className="font-mono text-canvas/40"
            style={{ fontSize: "10px", letterSpacing: "0.12em" }}
          >
            NOW &mdash; 2026
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            <span
              className="font-mono text-canvas/40"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              LIVE
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-canvas/10">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-8 border border-canvas/10 group hover:border-canvas/20 transition-colors"
            >
              <p
                className="font-mono text-signal mb-4"
                style={{ fontSize: "10px", letterSpacing: "0.14em" }}
              >
                {item.label}
              </p>
              <p className="font-serif text-canvas text-xl leading-snug mb-3">
                {item.value}
              </p>
              <p
                className="font-mono text-canvas/40"
                style={{ fontSize: "11px", letterSpacing: "0.04em" }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
