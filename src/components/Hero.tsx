import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function MathCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    const PAD = { l: 44, r: 28, t: 28, b: 44 };
    const plotW = W - PAD.l - PAD.r;
    const plotH = H - PAD.t - PAD.b;

    // Seeded pseudo-random for consistent visualization
    const rng = (seed: number) => {
      const x = Math.sin(seed + 1) * 10000;
      return x - Math.floor(x);
    };

    const N = 38;
    const points: [number, number][] = (
      Array.from({ length: N }, (_, i) => {
        const x = rng(i * 7.3);
        const noise = (rng(i * 13.7) - 0.5) * 0.22;
        const y = Math.max(0.04, Math.min(0.96, 0.68 * x + 0.14 + noise));
        return [x, y] as [number, number];
      })
    ).sort((a, b) => a[0] - b[0]);

    const meanX = points.reduce((s, p) => s + p[0], 0) / N;
    const meanY = points.reduce((s, p) => s + p[1], 0) / N;
    const num = points.reduce((s, p) => s + (p[0] - meanX) * (p[1] - meanY), 0);
    const den = points.reduce((s, p) => s + (p[0] - meanX) ** 2, 0);
    const slope = num / den;
    const intercept = meanY - slope * meanX;

    const toX = (x: number) => PAD.l + x * plotW;
    const toY = (y: number) => H - PAD.b - y * plotH;

    let startTime: number | null = null;

    const draw = (ts: number) => {
      if (!startTime) startTime = ts;
      const t = prefersReduced ? 9999 : ts - startTime;

      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "#DCDCD7";
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(toX(i / 4), PAD.t);
        ctx.lineTo(toX(i / 4), H - PAD.b);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(PAD.l, toY(i / 4));
        ctx.lineTo(W - PAD.r, toY(i / 4));
        ctx.stroke();
      }

      // Axes
      ctx.strokeStyle = "#DCDCD7";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(PAD.l, PAD.t);
      ctx.lineTo(PAD.l, H - PAD.b);
      ctx.lineTo(W - PAD.r, H - PAD.b);
      ctx.stroke();

      // Axis arrow tips
      ctx.fillStyle = "#DCDCD7";
      ctx.beginPath();
      ctx.moveTo(W - PAD.r, H - PAD.b);
      ctx.lineTo(W - PAD.r - 5, H - PAD.b - 3);
      ctx.lineTo(W - PAD.r - 5, H - PAD.b + 3);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(PAD.l, PAD.t);
      ctx.lineTo(PAD.l - 3, PAD.t + 5);
      ctx.lineTo(PAD.l + 3, PAD.t + 5);
      ctx.fill();

      // Axis labels
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillStyle = "#999999";
      ctx.textAlign = "center";
      ctx.fillText("x₁", PAD.l + plotW / 2, H - 10);
      ctx.save();
      ctx.translate(10, PAD.t + plotH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText("ŷ", 0, 0);
      ctx.restore();

      // Data points — staggered appearance
      const ptDuration = 2200;
      const ptAlphaIn = 200;
      ctx.fillStyle = "#111111";
      for (let i = 0; i < N; i++) {
        const appearAt = (i / N) * ptDuration;
        if (t < appearAt) continue;
        const alpha = Math.min(1, (t - appearAt) / ptAlphaIn) * 0.65;
        ctx.globalAlpha = alpha;
        const [px, py] = points[i];
        ctx.beginPath();
        ctx.arc(toX(px), toY(py), 2.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Residual lines (subtle)
      if (t > 2400) {
        const lAlpha = Math.min(0.15, ((t - 2400) / 400) * 0.15);
        ctx.globalAlpha = lAlpha;
        ctx.strokeStyle = "#777777";
        ctx.lineWidth = 0.5;
        for (let i = 0; i < N; i++) {
          const [px, py] = points[i];
          const predicted = slope * px + intercept;
          ctx.beginPath();
          ctx.moveTo(toX(px), toY(py));
          ctx.lineTo(toX(px), toY(predicted));
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      // Regression line
      if (t > 2600) {
        const progress = Math.min(1, (t - 2600) / 1000);
        const lineAlpha = Math.min(1, (t - 2600) / 300);

        const x1 = 0;
        const x2 = progress;
        const y1 = intercept;
        const y2 = slope * progress + intercept;

        ctx.globalAlpha = lineAlpha;
        ctx.strokeStyle = "#AAFF00";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(toX(x1), toY(y1));
        ctx.lineTo(toX(x2), toY(y2));
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Line end dot
        if (progress > 0.95) {
          ctx.globalAlpha = lineAlpha;
          ctx.fillStyle = "#AAFF00";
          ctx.beginPath();
          ctx.arc(toX(x2), toY(y2), 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      // Labels
      if (t > 3800) {
        const la = Math.min(1, (t - 3800) / 500);
        ctx.globalAlpha = la;
        ctx.font = "9px 'JetBrains Mono', monospace";

        ctx.fillStyle = "#AAFF00";
        ctx.textAlign = "left";
        const midX = toX(0.55);
        const midY = toY(slope * 0.55 + intercept) - 10;
        ctx.fillText("ŷ = wx + b", midX, midY);

        ctx.fillStyle = "#999999";
        ctx.textAlign = "right";
        ctx.fillText("loss ↓", W - PAD.r - 2, PAD.t + 14);
        ctx.textAlign = "left";
        ctx.fillText("gradient", PAD.l + 4, PAD.t + 14);

        ctx.globalAlpha = 1;
      }

      if (!prefersReduced) {
        animRef.current = requestAnimationFrame(draw);
      }
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-14">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-3.5rem)] py-20">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-mono text-xs text-muted mb-8"
              style={{ letterSpacing: "0.12em" }}
            >
              SYSTEM STATUS:{" "}
              <span className="text-signal" style={{ letterSpacing: "0.05em" }}>
                ONLINE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-tight mb-5"
            >
              I build systems
              <br />
              <em>from data.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono text-xs text-muted mb-6"
              style={{ letterSpacing: "0.1em" }}
            >
              Mathematics &times; Data Science &times; Machine Learning
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted text-base leading-relaxed max-w-md mb-10"
            >
              Mathematics student building machine learning systems, analytical
              tools, and digital products &mdash; from exploratory analysis and
              optimization to deployed APIs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-canvas font-mono text-xs tracking-widest hover:bg-signal hover:text-ink transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                style={{ letterSpacing: "0.1em" }}
              >
                VIEW SELECTED WORK &#8600;
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink text-ink font-mono text-xs tracking-widest hover:bg-ink hover:text-canvas transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                style={{ letterSpacing: "0.1em" }}
              >
                {"LET'S TALK"} &#8599;
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex flex-wrap gap-x-6 gap-y-1"
            >
              {["ALGERIA", "MATHEMATICS", "DATA SCIENCE / ML", "2026"].map(
                (item) => (
                  <span
                    key={item}
                    className="font-mono text-muted"
                    style={{ fontSize: "10px", letterSpacing: "0.12em" }}
                  >
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right: Canvas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden md:block"
          >
            <div
              className="relative border border-rule"
              style={{ height: "420px" }}
            >
              <MathCanvas />

              {/* Corner annotations */}
              <span
                className="absolute top-3 left-3 font-mono text-muted"
                style={{ fontSize: "9px", letterSpacing: "0.1em" }}
              >
                REGRESSION MODEL
              </span>
              <span
                className="absolute bottom-3 right-3 font-mono text-muted"
                style={{ fontSize: "9px", letterSpacing: "0.1em" }}
              >
                n = 20,000
              </span>
            </div>

            <div className="flex justify-between mt-3">
              <span
                className="font-mono text-muted"
                style={{ fontSize: "9px", letterSpacing: "0.1em" }}
              >
                LAT: 36.7&deg; / LNG: 3.05&deg;
              </span>
              <span
                className="font-mono text-muted"
                style={{ fontSize: "9px", letterSpacing: "0.1em" }}
              >
                MODEL / XGBOOST
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span
            className="font-mono text-muted"
            style={{ fontSize: "9px", letterSpacing: "0.1em" }}
          >
            01 / 07 PROJECTS
          </span>
          <span
            className="font-mono text-muted"
            style={{ fontSize: "9px", letterSpacing: "0.1em" }}
          >
            R&sup2; = 0.9925
          </span>
        </div>
      </div>
    </section>
  );
}
