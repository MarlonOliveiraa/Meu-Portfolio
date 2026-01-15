import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  companyUrl?: string;
}

const timelineData: TimelineItem[] = [
  {
    period: "Mar 2024 – Jan 2024",
    title: "Senac Hub Academy",
    description: "Formação em análise e desenvolvimento de sistemas, com foco em lógica, estruturação de soluções, boas práticas de código e resolução de problemas orientada ao negócio.",
    companyUrl: "https://www.ms.senac.br"
  },
  {
    period: "Dez 2024 – Jun 2025",
    title: "NextMed Tecnologia",
    description: "Atuação no desenvolvimento e manutenção de interfaces para sistemas de gestão médica, com foco em usabilidade, desempenho e integração com serviços internos.",
    companyUrl: "https://nextmed.com.br"
  },
  {
    period: "Ago 2025 – Jan 2026",
    title: "Baikal Security",
    description: "Desenvolvedor fullstack, criando soluções robustas e escaláveis para sistemas de segurança.",
    companyUrl: "https://baikalsec.com"
  }
];


const TimelineItemComponent = ({ 
  item, 
  index, 
  isActive, 
  isPast 
}: { 
  item: TimelineItem; 
  index: number; 
  isActive: boolean;
  isPast: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative pl-8 lg:pl-20 transition-opacity duration-700 ${
        isPast ? 'opacity-40' : isActive ? 'opacity-100' : 'opacity-60'
      }`}
    >
      {/* Dot on timeline */}
      <motion.div 
        className={`absolute left-0 lg:left-8 top-1 -translate-x-1/2 rounded-full transition-all duration-500 ${
          isActive 
            ? 'w-3 h-3 bg-primary glow-line' 
            : 'w-2 h-2 bg-primary/50'
        }`}
        animate={isActive ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Year badge */}
      <a
        href={item.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block text-sm font-semibold tracking-wider mb-2
          underline underline-offset-4
          transition-colors duration-300
          ${
            isActive
              ? 'text-primary decoration-primary'
              : 'text-primary/60 decoration-primary/40 hover:text-primary hover:decoration-primary'
          }
        `}
      >
        {item.period}
      </a>


      {/* Content */}
      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
        isActive ? 'text-foreground' : 'text-foreground/70'
      }`}>
        {item.title}
      </h3>
      <p className="text-muted-foreground font-light leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Update active index based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * timelineData.length),
      timelineData.length - 1
    );
    setActiveIndex(newIndex);
  });

  return (
    <section id="trajetoria" className="py-24 lg:py-32 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trajetória
          </h2>
          <p className="text-muted-foreground font-light">
            Uma linha do tempo de aprendizado contínuo e crescimento intencional.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Background line */}
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px bg-border" />
          
          {/* Progress line with glow */}
          <motion.div 
            className="absolute left-0 lg:left-8 top-0 w-px bg-primary origin-top"
            style={{ 
              scaleY: scrollYProgress,
              boxShadow: '0 0 10px hsl(210 100% 50% / 0.6), 0 0 20px hsl(210 100% 50% / 0.3)'
            }}
          />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItemComponent
                key={item.period}
                item={item}
                index={index}
                isActive={index === activeIndex}
                isPast={index < activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
