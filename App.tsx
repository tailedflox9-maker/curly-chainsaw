import React, { useState, useRef, useEffect } from 'react';
import SaveTheDateScreen from './components/SaveTheDateScreen';
import BlessingsScreen from './components/BlessingsScreen';
import BrideGroomScreen from './components/BrideGroomScreen';
import CeremonyScreen from './components/CeremonyScreen';
import TimelineScreen from './components/TimelineScreen';
import RsvpScreen from './components/RsvpScreen';
import ThankYouScreen from './components/ThankYouScreen';
import MusicToggle from './components/MusicToggle';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsMusicPlaying(true); 
  };
  
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="bg-[#FBF9F1] text-[#333333] min-h-screen">
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      <MusicToggle isPlaying={isMusicPlaying} onToggle={toggleMusic} />

      {!isOpened ? (
        <SaveTheDateScreen onOpen={handleOpenInvitation} />
      ) : (
        <>
          <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <BlessingsScreen />
            <BrideGroomScreen />
            <CeremonyScreen />
            <TimelineScreen />
            <RsvpScreen />
            <ThankYouScreen />
          </div>
        </>
      )}
    </div>
  );
};

export default App;