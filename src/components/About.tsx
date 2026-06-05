import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCalendar } from "react-icons/fi";
import { education, certifications } from "../data/portfolio";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Sobre Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-card border border-dark-border glow-effect"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <FiBookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text">Formação</h3>
            </div>

            {education.map((edu, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <p className="font-medium text-dark-text">{edu.degree}</p>
                <p className="text-sm text-dark-muted">{edu.institution}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-dark-muted">
                  <FiCalendar className="w-3 h-3" />
                  <span>Conclusão: {edu.conclusion}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-card border border-dark-border glow-effect"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <FiAward className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-dark-text">
                Certificações
              </h3>
            </div>

            {certifications.map((cert, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <p className="font-medium text-dark-text">{cert.name}</p>
                <p className="text-sm text-dark-muted">{cert.institution}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-dark-muted">
                  <FiCalendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
