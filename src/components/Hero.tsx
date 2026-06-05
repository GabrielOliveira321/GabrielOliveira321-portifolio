import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-card/50 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-dark-muted font-mono">
            Disponível para oportunidades
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="text-dark-text">Olá, eu sou</span>
          <br />
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-dark-muted mb-2 font-light"
        >
          {personalInfo.role}{" "}
          <span className="text-accent font-medium">
            • {personalInfo.subtitle}
          </span>
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-dark-muted text-sm mb-8"
        >
          <FiMapPin className="w-4 h-4" />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base md:text-lg text-dark-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projetos"
            className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:-translate-y-0.5"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3.5 border border-dark-border hover:border-primary/50 text-dark-text font-semibold rounded-xl transition-all duration-300 hover:bg-dark-card"
          >
            Entre em Contato
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-dark-border bg-dark-card/50 text-dark-muted hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-dark-border bg-dark-card/50 text-dark-muted hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl border border-dark-border bg-dark-card/50 text-dark-muted hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)]"
            aria-label="Email"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-dark-muted hover:text-primary transition-colors duration-300"
          >
            <span className="text-xs font-mono tracking-widest uppercase">
              Scroll
            </span>
            <FiArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
