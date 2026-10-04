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
        {/* Memory entries */}
        {[
          {
            title: "Memory 1",
            content: `Remember 8th Std S.S notebook submission?
So at that time mari almost half book lakhvani baki hati and mam e almost badha boys ne class ni bahar besadiya ta and jya sudhi compelete nai thay tya sudhi java nata devana.
So we thought k mam (Rama mam) masti karta hase and then 8th period ni bell vagi ane jenu complete hase ene java didha.
Jenu baki hase enu check karva Shree Neha mam ne appoint kariya ta. And that time i didnt exepect k tu mane bachai lais . Like te vakhte aapde sarkhi rite vaat pan nata karta.
So tu mane Mam pase lai gai and mam bija koi jode vaat karvama busy hata .
And at that moment i was like "E neha keh ne mam ne keh ne . And tu bi akrai ne haa have kau chu ne shanti rakh" and aa vastu me tane koni mari ne kehto hato 😂😂😂.
Ej time thi mane thayu khotu ane jode atla time thi kutra bilada ni jem jhagadto hato. Aam to chokri sari che .😂😂`
          },
          {
            title: "Memory 2",
            content: `[Remember 10th ma hu last bench per besto shiv ne badha jode tyare amari masti thi kantali ne Hitendra sir e mane first bench and shiv ne second bench per besadiya ta. 
            To tyare jevo sir no lecture patto hu pachad avi ne shiv sathe besi jato.
            Tyar no incident yaad aayo , koik no lecture hato ane apde thodu masti karta hata ane suddenly tu mane Aayush bhaiya kai ne bolavti hati masti ma😂😂.
            To tyare khabar nai kem mane evu thayu k tu seriously ke che ane I started crying like a baby😂.And tu pachad thi pug mari ne kehti hati oye chup thai jaa😂😂.
            Aa incident yaad kari ne mane haji bi hasu aave che]`
          },
          {
            title: "Memory 3",
            content: `[Yaad che jyare tu tara per Multani ni maati lagavti hati.To e vakte tu ene mast sukava deti hati ane jyare e nikdti to bapa taru modhu laal laal thai jatu .To e vakhte tara gaal bi lal tameta jeva thai jata.
            Tyare me evu kehto k aa tametu to maruj che. Tya me taru naam tametu padiyu hatu😂😂😂]`
          }
        ].map((memory, index) => (
          <div key={index} className="w-full max-w-2xl bg-[#fdfbf7] text-neutral-800 p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] rotate-[-1deg] transform transition-transform hover:rotate-0">
            <h3 className="font-handwriting text-3xl font-bold mb-4 border-b-2 border-dashed border-neutral-300 pb-2">
              {memory.title}
            </h3>
            <p className="font-serif text-lg leading-relaxed text-neutral-600 whitespace-pre-line">
              {memory.content}
            </p>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-3xl mt-8 px-6 text-center"
        >
          <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed">
            [So atlu j nai mare haji vadhare kehvu hatu. But I guess its too late. So better che k e badhu have mari pase j reh.]
          </p>
        </motion.div>

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
