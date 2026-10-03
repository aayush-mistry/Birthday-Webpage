import { motion } from 'framer-motion';

interface ApologySectionProps {
  onNext: () => void;
}

export default function ApologySection({ onNext }: ApologySectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] text-center"
    >
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="font-sans text-xl text-white/50 tracking-widest mb-16"
      >
        Okay... jokes apart.
      </motion.p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 2 }}
        className="font-serif text-3xl md:text-5xl leading-tight mb-16"
      >
        There are some things I've wanted to say.
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 2 }}
        className="w-full text-left space-y-8 p-8 md:p-12 glass-panel rounded-2xl relative"
      >
        <div className="absolute top-0 left-12 w-8 h-[1px] bg-white/20 -translate-y-1/2"></div>
        <div className="absolute top-0 left-12 w-[1px] h-8 bg-white/20 -translate-y-1/2"></div>
        
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90">
          [Apology message will be added here.]
        </p>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90 opacity-80">
          [It will be about apologizing for things I have done that hurt you, childish mistakes, and times I made you cry.]
        </p>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90 opacity-70">
          [Asking you to forgive me.]
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1.5 }}
        className="mt-20"
      >
        <button
          onClick={onNext}
          className="group px-8 py-3 text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="border-b border-white/30 pb-1">Continue</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
