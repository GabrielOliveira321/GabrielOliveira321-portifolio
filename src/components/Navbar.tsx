import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          GR
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-dark-muted hover:text-dark-text hover:bg-dark-card"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-lg text-dark-muted hover:text-primary hover:bg-dark-card transition-all"
          aria-label="Menu"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
        >
          {isMobileOpen ? (
            <FiX className="w-5 h-5" />
          ) : (
            <FiMenu className="w-5 h-5" />
          )}
        </button>
      </div>

      {isMobileOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border"
        >
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-dark-muted hover:text-dark-text hover:bg-dark-card"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
