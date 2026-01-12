import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mouseX, setMouseX] = useState(0);
  const mouseXMotion = useMotionValue(0);
  const glowX = useTransform(mouseXMotion, [0, 1], ['0%', '100%']);

  useEffect(() => {
    mouseXMotion.set(mouseX);
  }, [mouseX, mouseXMotion]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setMouseX(x);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onMouseMove={handleMouseMove}
        className="relative w-full py-12 px-6 lg:px-16 bg-black"
      >
        {/* Animated glowing line that follows mouse */}
        <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />
        <motion.div 
          className="absolute top-0 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]"
          style={{ left: glowX }}
        />
        <motion.div 
          className="absolute top-0 h-[2px] w-16 bg-primary/60"
          style={{ left: glowX }}
        />

        {/* Main horizontal content */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            
            {/* Left - Signature */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <span className="text-foreground font-bold tracking-[0.3em] text-sm uppercase">
                Marlon Oliveira
              </span>
              <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent mt-2" />
            </motion.div>

            {/* Center - Positioning Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center flex-1 max-w-2xl relative"
            >
              {/* Subtle pulsing glow behind text */}
              <motion.div
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"
              />
              
              <p className="relative text-muted-foreground/90 text-sm lg:text-base tracking-wide">
                <span className="text-foreground font-semibold">Penso como negócio.</span>
                {' '}
                <span className="text-muted-foreground/70">Executo como engenheiro.</span>
              </p>
              <p className="relative text-primary/60 text-xs lg:text-sm mt-2 font-light tracking-wider">
                Código é ferramenta — produto é o objetivo.
              </p>
            </motion.div>

            {/* Right - Year + Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground/60 hover:text-primary transition-colors duration-300 group"
                >
                  <Linkedin className="w-4 h-4 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground/60 hover:text-primary transition-colors duration-300 group"
                >
                  <Github className="w-4 h-4 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]" />
                </a>
                <a 
                  href="mailto:contato@lucassilva.dev" 
                  className="text-muted-foreground/60 hover:text-primary transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 group-hover:drop-shadow-[0_0_6px_hsl(var(--primary))]" />
                </a>
              </div>
              
              <div className="h-4 w-px bg-muted-foreground/20" />
              
              <span className="text-muted-foreground/40 text-xs tracking-widest font-light">
                © {currentYear}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom glow accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </motion.footer>

      {/* Back to Top - Epilogue Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-black py-16 flex flex-col items-center justify-center"
      >
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="group flex flex-col items-center gap-4 text-muted-foreground/40 hover:text-primary/70 transition-colors duration-500"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <ArrowUp className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-500" />
            <div className="absolute inset-0 w-5 h-5 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          <span className="text-xs tracking-[0.4em] uppercase font-light group-hover:text-primary/60 transition-colors duration-500">
            Voltar ao início
          </span>
          
          <span className="text-[10px] text-muted-foreground/20 font-light italic tracking-wide group-hover:text-muted-foreground/40 transition-colors duration-500">
            releia sob outra perspectiva
          </span>
        </motion.button>
      </motion.div>
    </>
  );
};

export default Footer;
