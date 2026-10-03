import { useState, useRef, useEffect } from 'react';
import OpeningScreen from './components/OpeningScreen.tsx';
import PhotoGallery from './components/PhotoGallery.tsx';
import SchoolMemories from './components/SchoolMemories.tsx';
import ApologySection from './components/ApologySection.tsx';
import BirthdayReveal from './components/BirthdayReveal.tsx';
import MusicController from './components/MusicController.tsx';

export type Section = 'opening' | 'photos' | 'memories' | 'apology' | 'birthday';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('opening');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
      setIsMusicPlaying(true);
    }
    setCurrentSection('photos');
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const advanceSection = (nextSection: Section) => {
    setCurrentSection(nextSection);
    // Increase volume for birthday reveal if playing
    if (nextSection === 'birthday' && audioRef.current) {
      audioRef.current.volume = 1.0;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark text-accent flex flex-col font-sans transition-colors duration-1000">
      <audio 
        ref={audioRef} 
        src="/assets/audio/happy-birthday.mp3" 
        loop
      />
      
      {currentSection !== 'opening' && (
        <MusicController isPlaying={isMusicPlaying} toggle={toggleMusic} />
      )}

      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {currentSection === 'opening' && (
          <OpeningScreen onStart={startExperience} />
        )}
        
        {currentSection === 'photos' && (
          <PhotoGallery onNext={() => advanceSection('memories')} />
        )}
        
        {currentSection === 'memories' && (
          <SchoolMemories onNext={() => advanceSection('apology')} />
        )}
        
        {currentSection === 'apology' && (
          <ApologySection onNext={() => advanceSection('birthday')} />
        )}
        
        {currentSection === 'birthday' && (
          <BirthdayReveal />
        )}
      </main>
    </div>
  );
}

export default App;
