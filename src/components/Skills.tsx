import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool } from "react-icons/fi";
import { skills } from "../data/portfolio";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  items: { name: string }[];
  color: string;
  delay: number;
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
  },
};

function SkillCategory({ icon, title, items, color, delay }: SkillCategoryProps) {
  const colors = colorMap[color] || colorMap.primary;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded-2xl bg-gradient-card border border-dark-border glow-effect hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-xl ${colors.bg} ${colors.text}`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-dark-text">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg ${colors.bg} ${colors.text} border ${colors.border} hover:scale-105 transition-transform cursor-default`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory
            icon={<FiCode className="w-5 h-5" />}
            title="Frontend"
            items={skills.frontend}
            color="primary"
            delay={0.1}
          />
          <SkillCategory
            icon={<FiServer className="w-5 h-5" />}
            title="Backend"
            items={skills.backend}
            color="accent"
            delay={0.2}
          />
          <SkillCategory
            icon={<FiTool className="w-5 h-5" />}
            title="Ferramentas"
            items={skills.tools}
            color="primary"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
