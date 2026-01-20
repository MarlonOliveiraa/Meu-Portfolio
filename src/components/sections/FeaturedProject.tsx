import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import saasDashboard from '@/assets/projects/inicial-bovfort.png';
import analytics from '@/assets/projects/categorias-bovfort.png';
import ecommerce from '@/assets/projects/rebanho-bovfort.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const FeaturedProject = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const images = [saasDashboard, analytics, ecommerce];

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
  <section
    ref={sectionRef}
    className="relative py-24 lg:py-40 px-6 lg:px-16 overflow-hidden"
  >
    <div className="absolute top-0 left-0 right-0 section-divider" />
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />

    <div className="max-w-6xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="inline-block text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 glow-text-subtle">
          Projeto em Destaque
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Bov Fort — Gestão de Gado de Corte
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* 🔥 IMAGEM (COM SETAS) */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative overflow-hidden rounded-lg border border-border group-hover:border-primary/30 transition-colors duration-500">
            <img
              src={images[activeImage]}
              alt="Featured Project"
              className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

            {/* Setas */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2
                         opacity-0 group-hover:opacity-100
                         transition-all duration-300
                         bg-background/80 hover:bg-background
                         border border-border
                         rounded-full p-3 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2
                         opacity-0 group-hover:opacity-100
                         transition-all duration-300
                         bg-background/80 hover:bg-background
                         border border-border
                         rounded-full p-3 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-primary/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* O Desafio */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
              O Desafio
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              {/* Uma empresa de médio porte processava dados de vendas manualmente,
              gerando relatórios em planilhas que levavam dias para serem consolidados. */}
              Produtores rurais realizavam o controle do rebanho de forma manual ou em anotações dispersas, dificultando o acompanhamento de peso, ciclos, custos
              e tomada de decisão no manejo.
            </p>
          </div>

          {/* A Decisão */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
              A Decisão
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Desenvolvemos um aplicativo focado na gestão do gado de corte, centralizando informações do rebanho em uma interface simples, 
              acessível e pensada para uso em campo, mesmo em rotinas operacionais intensas.
            </p>
          </div>

          {/* O Resultado */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
              O Resultado
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Maior controle do rebanho, redução de erros operacionais e decisões mais
              rápidas baseadas em dados atualizados diretamente no aplicativo.
            </p>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 section-divider" />
  </section>
);
};
export default FeaturedProject;
