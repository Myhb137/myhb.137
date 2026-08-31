export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal" />
            <span
              className="font-mono text-ink"
              style={{ fontSize: "11px", letterSpacing: "0.12em" }}
            >
              MHB / LAB
            </span>
          </div>

          <p
            className="font-mono text-muted"
            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
          >
            Data &middot; Mathematics &middot; Systems
          </p>

          <div className="text-right">
            <p
              className="font-mono text-muted"
              style={{ fontSize: "10px", letterSpacing: "0.1em" }}
            >
              &copy; 2026
            </p>
            <p
              className="font-mono text-muted mt-0.5"
              style={{ fontSize: "9px", letterSpacing: "0.06em" }}
            >
              Built with React &middot; Tailwind &middot; too much coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
