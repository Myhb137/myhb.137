import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../data/projects";

const pipeline = [
  "20,000 records",
  "feature engineering",
  "model comparison",
  "XGBoost",
  "SHAP",
  "FastAPI",
];

const metrics = [
  { label: "R²", value: "96.75%", sub: "coefficient of determination" },
  { label: "MAE", value: "1.10", sub: "mean absolute error" },
  { label: "RMSE", value: "1.39", sub: "root mean square error" },
];

function FeaturedProject({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-rule mb-1 group"
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left: info */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-rule">
          <div className="flex items-center justify-between mb-6">
            <span
              className="font-mono text-signal"
              style={{ fontSize: "10px", letterSpacing: "0.12em" }}
            >
              FEATURED · {project.n}
            </span>
            <span
              className="font-mono text-muted"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              {project.year}
            </span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-ink mb-3 leading-tight">
            {project.name}
          </h3>
          <p
            className="font-mono text-muted mb-6"
            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
          >
            {project.tag}
          </p>

          <div className="mb-6">
            <p
              className="font-mono text-muted mb-2"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              PROBLEM
            </p>
            <p className="text-ink text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="mb-8">
            <p
              className="font-mono text-muted mb-2"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              APPROACH
            </p>
            <p className="text-ink text-sm leading-relaxed">{project.built}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-muted border border-rule px-2 py-0.5"
                style={{ fontSize: "10px", letterSpacing: "0.06em" }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border border-ink text-ink px-4 py-2 hover:bg-ink hover:text-canvas transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              style={{ letterSpacing: "0.08em" }}
            >
              GITHUB &rarr;
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs bg-signal text-ink px-4 py-2 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                style={{ letterSpacing: "0.08em" }}
              >
                LIVE DEMO &#8599;
              </a>
            )}
          </div>
        </div>

        {/* Right: metrics + pipeline */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          {/* Pipeline */}
          <div className="mb-10">
            <p
              className="font-mono text-muted mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.12em" }}
            >
              INPUT &rarr; MODEL &rarr; OUTPUT
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {pipeline.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span
                    className="font-mono text-ink border border-rule px-3 py-1.5 text-xs"
                    style={{ fontSize: "11px" }}
                  >
                    {step}
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="text-muted text-xs">&rarr;</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <p
              className="font-mono text-muted mb-5"
              style={{ fontSize: "10px", letterSpacing: "0.12em" }}
            >
              EVALUATION METRICS
            </p>
            <div className="grid grid-cols-3 gap-px bg-rule">
              {metrics.map((m) => (
                <div key={m.label} className="bg-canvas p-4">
                  <p
                    className="font-mono text-muted mb-1"
                    style={{ fontSize: "10px", letterSpacing: "0.1em" }}
                  >
                    {m.label}
                  </p>
                  <p
                    className="font-mono text-signal font-medium mb-1"
                    style={{ fontSize: "22px" }}
                  >
                    {m.value}
                  </p>
                  <p
                    className="font-mono text-muted leading-tight"
                    style={{ fontSize: "9px", letterSpacing: "0.05em" }}
                  >
                    {m.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onSelect(project)}
            className="mt-8 font-mono text-xs text-muted hover:text-ink transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
          >
            VIEW FULL DETAIL &rarr;
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectRow({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <button
        onClick={() => onSelect(project)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="w-full text-left border-b border-rule py-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        style={{
          backgroundColor: hovered ? "rgba(0,0,0,0.02)" : "transparent",
          transition: "background-color 0.15s ease",
        }}
      >
        <div className="flex items-start md:items-center gap-4 md:gap-0">
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.15 }}
            className="font-mono text-muted shrink-0 w-8 md:w-12"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            {project.n}
          </motion.span>

          <div className="flex-1 md:grid md:grid-cols-[1fr_auto_auto_auto] md:items-center md:gap-8">
            <h3 className="font-serif text-xl md:text-2xl text-ink mb-1 md:mb-0">
              {project.name}
            </h3>

            <span
              className="font-mono text-muted hidden md:block"
              style={{ fontSize: "10px", letterSpacing: "0.08em" }}
            >
              {project.tag}
            </span>

            <span
              className="font-mono text-muted hidden md:block"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              {project.year}
            </span>

            <motion.span
              animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-ink hidden md:block"
              style={{ fontSize: "16px" }}
              aria-hidden="true"
            >
              &rarr;
            </motion.span>
          </div>
        </div>

        <div className="md:hidden mt-2 ml-8">
          <span
            className="font-mono text-muted"
            style={{ fontSize: "10px", letterSpacing: "0.08em" }}
          >
            {project.tag} &middot; {project.year}
          </span>
        </div>
      </button>
    </motion.div>
  );
}

interface ProjectsProps {
  onSelect: (p: Project) => void;
}

export default function Projects({ onSelect }: ProjectsProps) {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-t border-rule py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-muted mb-6"
            style={{ letterSpacing: "0.12em" }}
          >
            02 &mdash; SELECTED WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-ink leading-tight max-w-2xl"
          >
            Projects built at the intersection of math, data, and systems.
          </motion.h2>
        </div>

        <FeaturedProject project={featured} onSelect={onSelect} />

        <div className="mt-12">
          <p
            className="font-mono text-muted mb-6 border-b border-rule pb-4"
            style={{ fontSize: "10px", letterSpacing: "0.12em" }}
          >
            MORE WORK
          </p>
          {rest.map((project, i) => (
            <ProjectRow key={project.n} project={project} index={i} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
