import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import saasDashboard from '@/assets/projects/inicial-bovfort.png';
import analytics from '@/assets/projects/categorias-bovfort.png';
import thirdScreen from '@/assets/projects/rebanho-bovfort.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProject = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const images = [saasDashboard, analytics, thirdScreen];

  console.log(images);


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

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-40 px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Projeto em Destaque
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Bov Fort — Gestão de Gado de Corte
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* IMAGEM — SEM CONTAINER */}
          <motion.div
              style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
              className="relative group"
            >
              <div className="relative w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={images[activeImage]}
                  src={images[activeImage]}
                  alt="Bov Fort App"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full h-auto object-contain drop-shadow-2xl select-none"
                />
              </AnimatePresence>

            </div>


              <button onClick={prevImage} className="absolute -left-12 top-1/2 -translate-y-1/2 ...">
                <ChevronLeft />
              </button>

              <button onClick={nextImage} className="absolute -right-12 top-1/2 -translate-y-1/2 ...">
                <ChevronRight />
              </button>
            </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
                O Desafio
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Produtores rurais realizavam o controle do rebanho de forma manual,
                dificultando o acompanhamento de peso, ciclos e custos.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
                A Decisão
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Desenvolvemos um aplicativo simples e direto, pensado para uso
                em campo e tomada de decisão rápida.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary/80">
                O Resultado
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Maior controle do rebanho, menos erros operacionais e decisões
                baseadas em dados atualizados.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
