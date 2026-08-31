import { motion } from "framer-motion";

const contacts = [
  {
    label: "EMAIL",
    display: "mohamedyahiabenaissa@gmail.com",
    href: "mailto:mohamedyahiabenaissa@gmail.com",
    sub: "Preferred method",
  },
  {
    label: "GITHUB",
    display: "@myhb137",
    href: "https://github.com/myhb137",
    sub: "Code & projects",
  },
  {
    label: "LINKEDIN",
    display: "Mohamed Yahia Benaissa",
    href: "https://www.linkedin.com/in/myhb137/",
    sub: "Professional profile",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-rule py-24 md:py-32">
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
              06 &mdash; CONTACT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Have a problem
              <br />
              <em>worth modeling?</em>
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
              {"I'm"} open to Data Scientist, ML Engineer, and Analyst roles &mdash;
              full-time, internships, or focused freelance engagements.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-rule">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-canvas p-8 group hover:bg-ink transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-inset"
            >
              <p
                className="font-mono text-muted mb-4 group-hover:text-canvas/50 transition-colors"
                style={{ fontSize: "10px", letterSpacing: "0.12em" }}
              >
                {c.label}
              </p>
              <p
                className="font-mono text-ink text-sm mb-2 group-hover:text-canvas transition-colors leading-snug break-all"
                style={{ letterSpacing: "0.02em" }}
              >
                {c.display}
              </p>
              <p
                className="font-mono text-muted group-hover:text-canvas/40 transition-colors"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                {c.sub}
              </p>
              <div
                className="mt-6 font-mono text-signal"
                style={{ fontSize: "14px" }}
                aria-hidden="true"
              >
                &#8599;
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
