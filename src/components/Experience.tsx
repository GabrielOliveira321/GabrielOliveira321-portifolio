import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Experiência</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0 md:pl-16"
            >
              <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-dark-bg hidden md:block" />

              <div className="p-6 rounded-2xl bg-gradient-card border border-dark-border glow-effect hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                      <FiBriefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-text">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-dark-muted bg-dark-bg/50 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-dark-muted mb-4">{exp.location}</p>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-dark-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
