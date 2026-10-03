import { motion } from 'framer-motion';

interface SchoolMemoriesProps {
  onNext: () => void;
}

export default function SchoolMemories({ onNext }: SchoolMemoriesProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col h-[90vh] overflow-y-auto custom-scrollbar"
    >
      <div className="text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="font-serif text-2xl text-white/70 mb-4"
        >
          But these pictures aren't really what I wanted to talk about...
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
          className="font-serif text-3xl md:text-4xl"
        >
          I was thinking about where all of this started.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 2 }}
        className="flex-grow flex flex-col items-center gap-12 pb-24"
      >
        {/* Placeholder memory entries */}
        {[1, 2, 3].map((num) => (
          <div key={num} className="w-full max-w-2xl bg-[#fdfbf7] text-neutral-800 p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] rotate-[-1deg] transform transition-transform hover:rotate-0">
            <h3 className="font-handwriting text-3xl font-bold mb-4 border-b-2 border-dashed border-neutral-300 pb-2">
              Memory {num}
            </h3>
            <p className="font-serif text-lg leading-relaxed text-neutral-600">
              [School Memory {num} placeholder. The actual memory will be added here later. It will describe something funny, nostalgic, or meaningful from our school days.]
            </p>
          </div>
        ))}

        <div className="mt-12 text-center w-full">
          <button
            onClick={onNext}
            className="group px-8 py-3 rounded-full border border-white/30 text-white text-lg tracking-widest hover:bg-white/10 transition-all duration-300"
          >
            Next <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
