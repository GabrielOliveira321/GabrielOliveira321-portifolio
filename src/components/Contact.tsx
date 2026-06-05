import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from "react-icons/fi";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Contato via Portfólio - ${formState.name}&body=${encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-dark-muted mb-4">
            Vamos conversar? Estou disponível para novas oportunidades
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-dark-border">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-dark-muted uppercase tracking-wider">
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-dark-text hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-dark-border">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-dark-muted uppercase tracking-wider">
                  Telefone
                </p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm text-dark-text hover:text-accent transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-dark-border">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-dark-muted uppercase tracking-wider">
                  Localização
                </p>
                <p className="text-sm text-dark-text">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dark-border bg-dark-card text-dark-muted hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <FiLinkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dark-border bg-dark-card text-dark-muted hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <FiGithub className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dark-muted mb-1.5"
              >
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-dark-text text-sm placeholder:text-dark-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark-muted mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-dark-text text-sm placeholder:text-dark-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-muted mb-1.5"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-dark-text text-sm placeholder:text-dark-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                placeholder="Sua mensagem..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:-translate-y-0.5"
            >
              {submitted ? (
                <>
                  <FiSend className="w-4 h-4" />
                  Mensagem Enviada! ✓
                </>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
