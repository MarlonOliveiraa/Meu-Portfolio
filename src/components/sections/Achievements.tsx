import { motion } from 'framer-motion';

import hackathon1Img from '@/assets/achievements/hackathon-senac.jpg';
import hackathon2Img from '@/assets/achievements/hackathon-sindsuper.jpg';
import hackathon3Img from '@/assets/achievements/hackathon-voucher.jpg';

interface Achievement {
  number: string;
  label: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    number: "2º",
    label: "Hackathon Senac Decola",
    description: "Solução inovadora em tecnologia e saúde com meu time GenMek",
    image: hackathon1Img
  },
  {
    number: "3º",
    label: "Missão Sindsuper",
    description: "Sistema de gestão inteligente de escalas para supermercados",
    image: hackathon2Img
  },
  {
    number: "1º",
    label: "Hackathon Voucher Desenvolvedor",
    description: "Sistema de gestão de finanças para pequenos empreendedores",
    image: hackathon3Img
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/5]"
            >
              <img 
                src={achievement.image} 
                alt={achievement.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-background/70 group-hover:bg-background/60 transition-colors duration-300" />
              
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
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

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
