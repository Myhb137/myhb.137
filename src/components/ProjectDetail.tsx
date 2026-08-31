import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const isMLProject = (tag: string) =>
  tag.toLowerCase().includes("machine learning") ||
  tag.toLowerCase().includes("optimization") ||
  tag.toLowerCase().includes("data analysis") ||
  tag.toLowerCase().includes("ai system") ||
  tag.toLowerCase().includes("full-stack");

export default function ProjectDetail({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: "rgba(17,17,17,0.4)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 bg-canvas overflow-y-auto"
            style={{ width: "min(100vw, 640px)", borderLeft: "1px solid #DCDCD7" }}
            role="dialog"
            aria-modal="true"
            aria-label={`Project detail: ${project.name}`}
          >
            {/* Header */}
            <div className="sticky top-0 bg-canvas border-b border-rule px-8 py-5 flex items-center justify-between">
              <div>
                <p
                  className="font-mono text-muted"
                  style={{ fontSize: "10px", letterSpacing: "0.12em" }}
                >
                  {project.n} / PROJECT
                </p>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-xs text-muted hover:text-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink px-2 py-1"
                style={{ letterSpacing: "0.1em" }}
                aria-label="Close project detail"
              >
                &times; CLOSE
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-10">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight flex-1 pr-4">
                  {project.name}
                </h2>
                <span
                  className="font-mono text-muted shrink-0 mt-2"
                  style={{ fontSize: "10px", letterSpacing: "0.1em" }}
                >
                  {project.year}
                </span>
              </div>

              <p
                className="font-mono text-muted mb-10"
                style={{ fontSize: "10px", letterSpacing: "0.1em" }}
              >
                {project.tag}
              </p>

              {/* Problem */}
              <Section label="PROBLEM">
                <p className="text-ink text-sm leading-relaxed">{project.problem}</p>
              </Section>

              {/* Approach / Built */}
              <Section label={isMLProject(project.tag) ? "APPROACH & SYSTEM" : "WHAT WAS BUILT"}>
                <p className="text-ink text-sm leading-relaxed">{project.built}</p>
              </Section>

              {/* ML-specific fields */}
              {isMLProject(project.tag) && project.n === "01" && (
                <>
                  <Section label="DATASET">
                    <p className="text-ink text-sm leading-relaxed">
                      20,000 student records with behavioral and academic features.
                    </p>
                  </Section>
                  <Section label="EVALUATION METRICS">
                    <div className="grid grid-cols-3 gap-px bg-rule">
                      {[
                        { k: "R²", v: "99.25%", d: "coefficient of determination" },
                        { k: "MAE", v: "1.10", d: "mean absolute error" },
                        { k: "RMSE", v: "1.39", d: "root mean square error" },
                      ].map((m) => (
                        <div key={m.k} className="bg-canvas p-4">
                          <p
                            className="font-mono text-muted mb-1"
                            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
                          >
                            {m.k}
                          </p>
                          <p
                            className="font-mono text-signal"
                            style={{ fontSize: "20px" }}
                          >
                            {m.v}
                          </p>
                          <p
                            className="font-mono text-muted mt-1 leading-tight"
                            style={{ fontSize: "9px" }}
                          >
                            {m.d}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Section>
                  <Section label="INTERPRETABILITY">
                    <p className="text-ink text-sm leading-relaxed">
                      SHAP values used to explain individual predictions and identify
                      the most influential features globally.
                    </p>
                  </Section>
                  <Section label="DEPLOYMENT">
                    <p className="text-ink text-sm leading-relaxed">
                      Trained model served through a FastAPI prediction API, enabling
                      integration with downstream applications.
                    </p>
                  </Section>
                </>
              )}

              {project.tag.toLowerCase().includes("ui/ux") && (
                <>
                  <Section label="DESIGN PROCESS">
                    <p className="text-ink text-sm leading-relaxed">
                      UX research, user flow mapping, wireframing, and high-fidelity
                      prototyping in Figma. Emphasis on local cultural context and
                      avoiding generic travel platform patterns.
                    </p>
                  </Section>
                  <Section label="DELIVERABLES">
                    <p className="text-ink text-sm leading-relaxed">
                      Complete design system including component library, typography
                      scale, color tokens, and production-ready prototypes.
                    </p>
                  </Section>
                </>
              )}

              {/* Impact */}
              <Section label="RESULTS">
                <p className="text-ink text-sm leading-relaxed">{project.impact}</p>
              </Section>

              {/* Tech stack */}
              <Section label="TECHNOLOGY">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-ink border border-rule px-2.5 py-1"
                      style={{ fontSize: "11px", letterSpacing: "0.04em" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Section>

              {/* Links */}
              <Section label="LINKS">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs border border-ink text-ink px-4 py-2 hover:bg-ink hover:text-canvas transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    GITHUB &rarr;
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs bg-signal text-ink px-4 py-2 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                      style={{ letterSpacing: "0.08em" }}
                    >
                      LIVE DEMO &#8599;
                    </a>
                  )}
                </div>
              </Section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8 pb-8 border-b border-rule last:border-b-0">
      <p
        className="font-mono text-muted mb-3"
        style={{ fontSize: "10px", letterSpacing: "0.12em" }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}
