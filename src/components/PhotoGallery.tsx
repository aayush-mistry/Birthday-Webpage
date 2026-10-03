import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoGalleryProps {
  onNext: () => void;
}

// These are placeholder image paths as requested
const photos = [
  '/assets/images/photo1.jpg',
  '/assets/images/photo2.jpg',
  '/assets/images/photo3.jpg',
  '/assets/images/photo4.jpg',
  '/assets/images/photo5.jpg',
];

const captions = [
  "Some pictures don't need a story.",
  "They just remind me of someone.",
  "And somehow...",
  "I ended up collecting quite a few.",
  "..."
];

export default function PhotoGallery({ onNext }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (currentIndex < photos.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 5000); // Change photo every 5 seconds
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const rotations = [-2, 3, -1, 4, -3];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute flex flex-col items-center justify-center w-full"
        >
          <div 
            className="polaroid relative max-w-sm md:max-w-md w-full mb-8 transform"
            style={{ rotate: `${rotations[currentIndex % rotations.length]}deg` }}
          >
            <div className="aspect-[3/4] w-full bg-neutral-800 overflow-hidden relative border border-white/10 flex items-center justify-center">
              {/* Image placeholder for development */}
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-600 text-sm">
                Image Placeholder
                <br />
                {photos[currentIndex]}
              </div>
              <img 
                src={photos[currentIndex]} 
                alt="Memory" 
                className="w-full h-full object-cover relative z-10 opacity-50"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="font-serif text-xl md:text-2xl text-center tracking-wide min-h-[4rem]"
          >
            {captions[currentIndex]}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            onClick={onNext}
            className="absolute bottom-12 group px-8 py-3 rounded-full glass-panel text-lg tracking-widest hover:bg-white/10 transition-all duration-300 z-50"
          >
            Continue <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
