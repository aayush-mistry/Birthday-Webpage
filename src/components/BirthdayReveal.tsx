import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function BirthdayReveal() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence timing
    const timers = [
      setTimeout(() => setPhase(1), 3000), // Show "Okay... enough emotional damage."
      setTimeout(() => setPhase(2), 6000), // Hide text
      setTimeout(() => {
        setPhase(3); // Show Happy Birthday
        fireConfetti();
      }, 7500), 
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const fireConfetti = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f0e6d2', '#ffffff', '#ffd700']
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f0e6d2', '#ffffff', '#ffd700']
      }));
    }, 250);
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-black">
      {/* Dynamic background particles/glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black opacity-50"></div>

      <AnimatePresence mode="wait">
        {phase === 1 && (
          <motion.div
            key="damage"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.5 }}
            className="text-center absolute z-10"
          >
            <p className="font-sans text-xl md:text-3xl tracking-[0.2em] text-white/70">
              Okay... enough emotional damage.
            </p>
          </motion.div>
        )}

        {phase === 3 && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center z-20 text-center w-full max-w-5xl px-4"
          >
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
              className="font-serif text-5xl md:text-7xl lg:text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#fff] to-[#f0e6d2] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            >
              HAPPY BIRTHDAY
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 2 }}
              className="font-handwriting text-5xl md:text-7xl text-[#f0e6d2] mb-16"
            >
              [HER NAME]
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 2 }}
              className="relative p-2 glass-panel rounded-lg max-w-sm w-full animate-float"
            >
              <div className="aspect-[3/4] w-full bg-neutral-900 rounded overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm">
                  Final Photo Placeholder
                  <br />
                  /assets/images/final-photo.jpg
                </div>
                <img 
                  src="/assets/images/final-photo.jpg" 
                  alt="Birthday Girl" 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
