import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        {/* Framing line */}
        <div className="relative p-8 lg:p-12">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-primary/50 to-transparent" />
          <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-primary/50 to-transparent" />

          <div className="text-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
              Visão
            </h2>
            
            <p className="text-foreground text-xl lg:text-2xl font-light leading-relaxed">
              Tecnologia não é o fim, é o meio.
            </p>
            
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Minha missão é criar soluções que resolvam problemas reais, 
              com simplicidade elegante e impacto duradouro. Cada projeto 
              é uma oportunidade de construir algo que importa — algo que 
              as pessoas lembrem não pelo código, mas pela experiência.
            </p>

            <p className="text-primary glow-text-subtle text-lg font-medium mt-8">
              Construir com propósito. Entregar com excelência.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vision;
