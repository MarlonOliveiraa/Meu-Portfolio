import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="text-muted-foreground text-lg mb-6 font-light tracking-wide">
              Olá, eu sou
            </p>
            <div className="space-y-6">
              <p className="text-foreground text-xl lg:text-2xl font-light leading-relaxed">
                Desenvolvedor focado em criar experiências digitais que combinam{' '}
                <span className="text-primary glow-text-subtle font-medium">
                  design intencional
                </span>{' '}
                com{' '}
                <span className="text-primary glow-text-subtle font-medium">
                  código de alta qualidade
                </span>.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Acredito que tecnologia deve ser invisível — o que importa é o impacto 
                que ela gera. Cada linha de código que escrevo tem um propósito claro.
              </p>
            </div>
            
            {/* Subtle CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10"
            >
              <a 
                href="#trajetoria" 
                className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="text-sm font-medium tracking-widest uppercase">
                  Conhecer trajetória
                </span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Name & Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col items-center lg:items-end"
          >
            {/* Profile Photo - Square with subtle blue border */}
            <div className="relative mb-8">
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-60" />
              {/* Square photo container */}
              <div className="relative w-68 h-68 lg:w-72 lg:h-72 overflow-hidden border border-primary/20 bg-background/50">
                {/* Inner subtle blue line */}
                <div className="absolute inset-0 border border-primary/10" />
                <img 
                  src={profilePhoto} 
                  alt="Lucas Silva" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] brightness-[0.95]"
                />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-px bg-primary/40" />
                <div className="absolute top-0 left-0 h-4 w-px bg-primary/40" />
                <div className="absolute bottom-0 right-0 w-4 h-px bg-primary/40" />
                <div className="absolute bottom-0 right-0 h-4 w-px bg-primary/40" />
              </div>
            </div>
            
            {/* Name */}
            <div className="text-right">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">LUCAS</span>
                <span className="block text-primary glow-text mt-2">SILVA</span>
              </h1>
              <p className="text-muted-foreground text-sm font-medium tracking-[0.3em] mt-4 uppercase">
                Developer & Designer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
