import { FiHeart, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-border bg-dark-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-dark-muted">
            <span>© 2025 {personalInfo.name}. Feito com</span>
            <FiHeart className="w-3.5 h-3.5 text-primary fill-primary" />
            <span>e React + TypeScript</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-dark-muted hover:text-primary hover:bg-dark-card transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-dark-muted hover:text-primary hover:bg-dark-card transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-dark-muted hover:text-primary hover:bg-dark-card transition-all"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
