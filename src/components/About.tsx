import { motion } from "framer-motion";

const pillars = [
  {
    label: "Mathematics gives me",
    value: "the foundation.",
  },
  {
    label: "Data gives me",
    value: "the evidence.",
  },
  {
    label: "Engineering makes it",
    value: "useful.",
  },
];

const disciplines = [
  "Mathematics",
  "Data Science",
  "Machine Learning",
  "Analytics",
  "AI Systems",
  "UI/UX",
  "Frontend Development",
];

export default function About() {
  return (
    <section id="about" className="border-t border-rule py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-muted"
              style={{ letterSpacing: "0.12em" }}
            >
              05 — ABOUT
            </motion.p>
          </div>

          <div className="md:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]"
            >
              A mathematician building
              <br />
              <em>with data.</em>
            </motion.h2>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-12 gap-12">

          {/* STORY */}
          <div className="md:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-6 max-w-2xl"
            >
              <p className="text-ink text-lg md:text-xl leading-relaxed">
                I'm a Mathematics student from Algeria who became deeply
                interested in the space where mathematics, data, and technology
                meet.
              </p>

              <p className="text-muted leading-relaxed">
                My path into data science started from mathematics, but it
                quickly expanded beyond theory. I wanted to understand how
                mathematical ideas could become models, how data could reveal
                patterns, and how those models could eventually become useful
                products.
              </p>

              <p className="text-muted leading-relaxed">
                Since then, I've been building projects across data analysis,
                machine learning, AI systems, and frontend development. I enjoy
                going beyond training a model — exploring the data, engineering
                features, evaluating results, understanding why a model behaves
                the way it does, and building the interface or API around it.
              </p>

              <p className="text-muted leading-relaxed">
                That's also why my work sits between disciplines. I care about
                the mathematics behind an algorithm, the quality of the data
                feeding it, and the experience of the person eventually using
                the result.
              </p>
            </motion.div>

            {/* DISCIPLINES */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-1.5 mt-10"
            >
              {disciplines.map((d) => (
                <span
                  key={d}
                  className="font-mono text-muted border border-rule px-2.5 py-1"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {d}
                </span>
              ))}
            </motion.div>
          </div>

          {/* PHILOSOPHY */}
          <div className="md:col-span-5 flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-t border-rule"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="border-b border-rule py-7 flex items-baseline gap-4"
                >
                  <span className="text-muted text-sm leading-relaxed flex-1">
                    {p.label}
                  </span>

                  <span className="font-serif text-xl md:text-2xl text-ink italic">
                    {p.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CURRENT DIRECTION */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <div
                className="font-mono text-[10px] text-muted mb-3"
                style={{ letterSpacing: "0.1em" }}
              >
                CURRENT DIRECTION
              </div>

              <p className="text-ink leading-relaxed">
                Deepening my work in machine learning and AI while building
                practical systems that turn data into decisions.
              </p>
            </motion.div>

            {/* STATUS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-2 mt-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal" />

              <span
                className="font-mono text-[10px] text-muted"
                style={{ letterSpacing: "0.1em" }}
              >
                BUILDING · LEARNING · EXPLORING
              </span>
            </motion.div>

          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 md:mt-32 pt-8 border-t border-rule"
        >
          <p className="font-serif text-2xl md:text-4xl text-ink leading-tight max-w-4xl">
            I don't want to just use models.
            <br />
            I want to understand them,
            <em> build them,</em> and make them useful.
          </p>

          <p
            className="font-mono text-muted mt-6"
            style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
            }}
          >
            The combination is intentional.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
