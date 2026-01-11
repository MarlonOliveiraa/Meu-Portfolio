import { motion } from 'framer-motion';

interface NarrativeTransitionProps {
  text: string;
  className?: string;
}

const NarrativeTransition = ({ text, className = "" }: NarrativeTransitionProps) => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className={`py-24 lg:py-32 px-6 ${className}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="section-divider mb-12" />
        <p className="text-muted-foreground text-lg lg:text-xl font-light italic leading-relaxed opacity-70">
          "{text}"
        </p>
        <div className="section-divider mt-12" />
      </div>
    </motion.section>
  );
};

export default NarrativeTransition;
