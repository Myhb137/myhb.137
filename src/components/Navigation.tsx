import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "STACK", href: "#stack" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(247,247,244,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #DCDCD7" : "1px solid transparent",
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="font-mono text-xs tracking-widest text-ink font-medium"
            style={{ letterSpacing: "0.15em" }}
          >
            MHB / LAB
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-widest text-muted hover:text-ink transition-colors duration-200"
                style={{ letterSpacing: "0.12em" }}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-2 ml-4">
              <span
                className="w-1.5 h-1.5 rounded-full bg-signal"
                style={{ animation: "pulse 2.5s ease-in-out infinite" }}
              />
              <span
                className="font-mono text-xs text-muted"
                style={{ fontSize: "10px", letterSpacing: "0.1em" }}
              >
                AVAILABLE
              </span>
            </div>
          </div>

          <button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-px bg-ink transition-all duration-200"
              style={{
                transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-px bg-ink transition-all duration-200"
              style={{
                transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-canvas flex flex-col pt-14"
          >
            <nav className="flex flex-col px-6 pt-12 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-mono text-xs tracking-widest text-muted hover:text-ink transition-colors border-b border-rule pb-8"
                  style={{ letterSpacing: "0.15em" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                <span
                  className="font-mono text-xs text-muted"
                  style={{ fontSize: "10px", letterSpacing: "0.1em" }}
                >
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </>
  );
}
