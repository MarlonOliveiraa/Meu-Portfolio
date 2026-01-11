import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import featuredImage from '@/assets/projects/saas-dashboard.jpg';

const FeaturedProject = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 px-6 lg:px-16 overflow-hidden">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 glow-text-subtle">
            Projeto em Destaque
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Plataforma de Analytics Empresarial
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Large Mockup */}
          <motion.div
            style={{ scale: imageScale, opacity: imageOpacity }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden rounded-lg border border-border group-hover:border-primary/30 transition-colors duration-500">
              <img 
                src={featuredImage} 
                alt="Featured Project - Analytics Dashboard" 
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Problem */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
                O Desafio
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Uma empresa de médio porte processava dados de vendas manualmente, 
                gerando relatórios em planilhas que levavam dias para serem consolidados. 
                A falta de visibilidade em tempo real impactava decisões críticas.
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
                A Decisão
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Arquitetei uma plataforma de analytics em tempo real, com dashboards 
                interativos e processamento de dados automatizado. Cada visualização 
                foi pensada para responder perguntas específicas do negócio.
              </p>
            </div>

            {/* Result */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
                O Resultado
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Redução de 90% no tempo de geração de relatórios. Decisões que 
                levavam dias passaram a ser tomadas em minutos, com dados precisos 
                e atualizados em tempo real.
              </p>
            </div>

            {/* Metrics */}
            <div className="flex gap-8 pt-4">
              <div>
                <span className="text-3xl font-bold text-primary glow-text-subtle">90%</span>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Menos tempo</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-primary glow-text-subtle">50K+</span>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Registros/dia</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-primary glow-text-subtle">3</span>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Meses dev</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'D3.js'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted/50 rounded border border-border hover:border-primary/30 hover:text-primary transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default FeaturedProject;
