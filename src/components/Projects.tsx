import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";
import { projects } from "../data/portfolio";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative p-6 rounded-2xl bg-gradient-card border border-dark-border glow-effect hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-white shadow-lg shadow-primary/30">
          <FiStar className="w-3 h-3" />
          Destaque
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-dark-text group-hover:text-primary transition-colors mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-dark-muted mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.highlights.map((h, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-mono rounded-lg bg-dark-bg text-dark-muted border border-dark-border"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-dark-muted hover:text-primary transition-colors"
        >
          <FiGithub className="w-4 h-4" />
          Código
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-dark-muted hover:text-accent transition-colors"
        >
          <FiExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 bg-dark-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-dark-muted mb-4">
            Alguns dos projetos que desenvolvi e me orgulho
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
