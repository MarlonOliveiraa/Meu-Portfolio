import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'subtle' | 'glow' | 'wide';
}

const SectionDivider = ({ variant = 'subtle' }: SectionDividerProps) => {
  const widthMap = {
    subtle: 'w-24',
    glow: 'w-32',
    wide: 'w-48'
  };

  return (
    <div className="relative py-8 flex justify-center">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`${widthMap[variant]} h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent ${variant === 'glow' ? 'glow-line' : ''}`}
      />
    </div>
  );
};

export default SectionDivider;
