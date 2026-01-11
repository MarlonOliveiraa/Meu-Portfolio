import { motion } from 'framer-motion';

interface ImpactStatementProps {
  statement: string;
  highlight?: string;
}

const ImpactStatement = ({ statement, highlight }: ImpactStatementProps) => {
  // If highlight is provided, wrap it in a span
  const renderStatement = () => {
    if (!highlight) {
      return <span>{statement}</span>;
    }
    
    const parts = statement.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-primary glow-text-subtle">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative py-32 lg:py-48 px-6 lg:px-16 bg-background overflow-hidden">
      {/* Absolute black background */}
      <div className="absolute inset-0 bg-[hsl(222_47%_2%)]" />
      
      {/* Subtle blue line at top */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent glow-line"
      />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-3xl lg:text-5xl xl:text-6xl font-light text-foreground leading-tight tracking-tight"
        >
          "{renderStatement()}"
        </motion.blockquote>
        
        {/* Subtle bottom accent */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-12 h-px bg-primary/40"
        />
      </div>
      
      {/* Subtle blue line at bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent glow-line"
      />
    </section>
  );
};

export default ImpactStatement;
