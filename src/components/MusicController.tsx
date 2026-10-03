import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface MusicControllerProps {
  isPlaying: boolean;
  toggle: () => void;
}

export default function MusicController({ isPlaying, toggle }: MusicControllerProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={toggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-panel text-accent hover:text-white transition-colors"
      aria-label="Toggle Music"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </motion.button>
  );
}
