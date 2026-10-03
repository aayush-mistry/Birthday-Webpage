import { motion } from 'framer-motion';

interface OpeningScreenProps {
  onStart: () => void;
}

export default function OpeningScreen({ onStart }: OpeningScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col items-center justify-center text-center px-4"
    >
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="font-serif text-3xl md:text-5xl tracking-wider mb-12 text-white/90"
      >
        I made something for you...
      </motion.h1>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={onStart}
        className="group px-8 py-3 rounded-full glass-panel text-lg tracking-widest hover:bg-white/10 transition-all duration-300"
      >
        Start <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
      </motion.button>
    </motion.div>
  );
}
