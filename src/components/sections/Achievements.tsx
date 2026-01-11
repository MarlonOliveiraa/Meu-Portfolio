import { motion } from 'framer-motion';

import workspaceImg from '@/assets/achievements/workspace.jpg';
import conferenceImg from '@/assets/achievements/conference.jpg';
import codingImg from '@/assets/achievements/coding.jpg';
import teamImg from '@/assets/achievements/team.jpg';

interface Achievement {
  number: string;
  label: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    number: "+50",
    label: "Projetos",
    description: "Entregues com excelência",
    image: workspaceImg
  },
  {
    number: "+4",
    label: "Anos",
    description: "De experiência focada",
    image: conferenceImg
  },
  {
    number: "+10k",
    label: "Usuários",
    description: "Impactados diretamente",
    image: codingImg
  },
  {
    number: "100%",
    label: "Compromisso",
    description: "Com qualidade e resultado",
    image: teamImg
  }
];

const Achievements = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Conquistas
          </h2>
          <p className="text-muted-foreground font-light">
            Números que refletem comprometimento e impacto real.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/5]"
            >
              {/* Background Image */}
              <img 
                src={achievement.image} 
                alt={achievement.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Dark overlay for consistency */}
              <div className="absolute inset-0 bg-background/70 group-hover:bg-background/60 transition-colors duration-300" />
              
              {/* Subtle blue accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                <span className="block text-3xl lg:text-4xl xl:text-5xl font-bold text-primary glow-text-subtle mb-2">
                  {achievement.number}
                </span>
                <span className="block text-foreground font-semibold text-base lg:text-lg mb-1">
                  {achievement.label}
                </span>
                <span className="block text-muted-foreground text-xs lg:text-sm font-light">
                  {achievement.description}
                </span>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
