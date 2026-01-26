import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Target, Zap, Heart, TrendingUp, RefreshCcw } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiTypescript,
  SiRubyonrails,
  SiPhp,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiLinux,
  SiDocker
} from 'react-icons/si';

const hardSkills = [
  { name: "React / Next.js", icon: SiReact },
  { name: "Angular", icon: SiAngular },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Ruby on Rails", icon: SiRubyonrails },
  { name: "PHP", icon: SiPhp },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Git / CI/CD", icon: SiGit },
  { name: "Linux", icon: SiLinux },
  { name: "Docker", icon: SiDocker }
];


const softSkills = [
  {
    name: "Comunicação Clara",
    icon: Users,
    description: "Traduzir complexidade técnica em soluções compreensíveis para o time e stakeholders"
  },
  {
    name: "Pensamento Crítico",
    icon: Lightbulb,
    description: "Questionar requisitos, decisões e soluções antes da execução"
  },
  {
    name: "Metodologias Ágeis (Scrum)",
    icon: RefreshCcw,
    description: "Atuação em times ágeis com foco em entregas iterativas, cerimônias e melhoria contínua"
  },
  {
    name: "Foco em Resultado",
    icon: TrendingUp,
    description: "Entregar valor real ao usuário, não apenas funcionalidades"
  },
  {
    name: "Adaptabilidade",
    icon: Zap,
    description: "Aprender rápido, lidar bem com mudanças e novos contextos"
  }
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Competências
          </h2>
          <p className="text-muted-foreground font-light">
            A combinação de técnica e mentalidade que define minha abordagem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Hard Skills</h3>
            </div>

            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-start py-3 border-b border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Soft Skills</h3>
            </div>

            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 py-3 border-b border-border/50"
                >
                  <skill.icon className="w-5 h-5 text-primary/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm font-light">{skill.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
