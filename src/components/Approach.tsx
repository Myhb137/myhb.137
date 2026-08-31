import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    label: "Understand",
    desc: "Define the problem clearly before touching the data. Clarify success metrics and constraints.",
  },
  {
    n: "02",
    label: "Explore",
    desc: "EDA to uncover distributions, correlations, outliers, and data quality issues.",
  },
  {
    n: "03",
    label: "Engineer",
    desc: "Transform raw data into informative features. Domain knowledge applied systematically.",
  },
  {
    n: "04",
    label: "Model",
    desc: "Select and train models with proper baselines. Compare systematically, not arbitrarily.",
  },
  {
    n: "05",
    label: "Evaluate",
    desc: "Measure honestly on held-out data. Interpret predictions with SHAP for transparency.",
  },
  {
    n: "06",
    label: "Deploy",
    desc: "Turn the model into an accessible, maintained API. Engineering matters as much as science.",
  },
];

export default function Approach() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="border-t border-rule py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-muted mb-6"
              style={{ letterSpacing: "0.12em" }}
            >
              01 &mdash; APPROACH
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              I don&apos;t start with the model.
              <br />
              <em>I start with the problem.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-muted leading-relaxed max-w-md">
              Good machine learning is rarely about choosing the fanciest
              algorithm. I focus on understanding the data, defining the right
              features, evaluating the model honestly, and turning the result
              into something usable.
            </p>
          </motion.div>
        </div>

        {/* Process steps */}
        <div className="border-t border-rule pt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-rule">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onMouseEnter={() => setHovered(step.n)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(step.n)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                role="button"
                aria-label={`${step.n} ${step.label}: ${step.desc}`}
                className="bg-canvas p-6 cursor-default group relative"
                style={{ minHeight: "160px" }}
              >
                <p
                  className="font-mono text-muted mb-3"
                  style={{ fontSize: "10px", letterSpacing: "0.12em" }}
                >
                  {step.n}
                </p>
                <p className="font-mono text-xs text-ink font-medium mb-4" style={{ letterSpacing: "0.06em" }}>
                  {step.label}
                </p>

                <div
                  className="transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: hovered === step.n ? "80px" : "0",
                    opacity: hovered === step.n ? 1 : 0,
                  }}
                >
                  <p className="text-muted leading-snug" style={{ fontSize: "12px" }}>
                    {step.desc}
                  </p>
                </div>

                <div
                  className="absolute bottom-6 right-6 font-mono text-signal transition-opacity duration-200"
                  style={{
                    fontSize: "14px",
                    opacity: hovered === step.n ? 1 : 0,
                  }}
                >
                  &rarr;
                </div>

                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 -right-px w-px h-6 bg-rule"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
