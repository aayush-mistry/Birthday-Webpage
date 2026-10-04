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
        Okay... I also realized there are some things I wish I could have done differently.
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
          [I know ke me je bhulo kari hati ena mate hu maafi deserve nathi karto. And kadach e bhulo na karane tu mane yaad to karis🙂.]
        </p>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90 opacity-80">
          [Mane haji pan yaad che e jhagda vakte tu mane call kari kari ne samjhav ti hati k na karis jhagdo nitar badhu kharab thai jase. And e vakhte hu na maniyo,me e ek jhagda na lidhe badhu ghumavi didhu.
          And e vakhte thi e Neha jene mari sathe comfort feel thatu hatu e bi ene bi ghumavi didhu. From that movement ek ek karine hu almost mara badha loved ones ne ghumavi didha. Mane haji e vaat no regret che k kadach me jhagdo na kariyo hot to aaje life alag aj hot.
          But thik che this is what i deserve.]
        </p>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90 opacity-70">
          [NEHA I AM REALLY SORRY FOR EVERYTHING.EK EK WORD JENE TANE HURT KARIYU HOI ,JENA KARANE TU RADI HOI,I AM REALLY VERY SORRYYY.
          BBYE🙂.]
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
