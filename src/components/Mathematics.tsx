import { motion } from "framer-motion";

const concepts = [
  {
    title: "Linear Algebra",
    eq: "Ax = b",
    desc: "Matrix decompositions, eigenvalues, and vector spaces underpin dimensionality reduction and model optimization.",
  },
  {
    title: "Probability",
    eq: "P(A|B) = P(B|A)·P(A) / P(B)",
    desc: "Probabilistic reasoning informs uncertainty quantification, classification boundaries, and generative modeling.",
  },
  {
    title: "Statistics",
    eq: "μ = (1/n) Σxᵢ",
    desc: "Hypothesis testing, distribution fitting, and statistical significance guide honest model evaluation.",
  },
  {
    title: "Optimization",
    eq: "arg min θ  J(θ)",
    desc: "Gradient descent, convex programming, and constraint handling are the engines behind model training.",
  },
  {
    title: "Numerical Methods",
    eq: "xₙ₊₁ = xₙ − α∇f(xₙ)",
    desc: "Iterative solvers, root-finding, and numerical differentiation give computational handles on theory.",
  },
  {
    title: "Operations Research",
    eq: "max cᵀx  s.t. Ax ≤ b",
    desc: "Linear programming and combinatorial optimization connect mathematical structure to real decisions.",
  },
];

export default function Mathematics() {
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
              04 &mdash; MATHEMATICS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Before machine learning,
              <br />
              <em>there was mathematics.</em>
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
              My mathematical background shapes how I approach machine learning:
              thinking in terms of structure, optimization, probability, and
              numerical behavior.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
          {concepts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-canvas p-8 group hover:bg-ink transition-colors duration-300 cursor-default"
            >
              <p
                className="font-mono text-muted mb-3 group-hover:text-ink transition-colors"
                style={{ fontSize: "10px", letterSpacing: "0.12em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>

              <h3 className="font-serif text-xl text-ink mb-4 group-hover:text-canvas transition-colors">
                {c.title}
              </h3>

              <div
                className="font-mono text-signal mb-5 leading-relaxed"
                style={{ fontSize: "13px" }}
                aria-label={`Equation: ${c.eq}`}
              >
                {c.eq}
              </div>

              <p
                className="text-muted leading-relaxed group-hover:text-canvas/70 transition-colors"
                style={{ fontSize: "13px" }}
              >
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
