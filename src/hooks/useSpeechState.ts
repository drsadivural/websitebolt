import { useState, useEffect } from 'react';

type Phoneme = 'rest' | 'aa' | 'eh' | 'ih' | 'oh' | 'uh';

export const useSpeechState = () => {
  const [currentPhoneme, setCurrentPhoneme] = useState<Phoneme>('rest');

  useEffect(() => {
    let frameId: number;
    let lastUpdate = 0;
    const updateInterval = 100; // Milliseconds between phoneme changes

    const updatePhoneme = (timestamp: number) => {
      if (timestamp - lastUpdate >= updateInterval) {
        // Randomly select a new phoneme
        const phonemes: Phoneme[] = ['rest', 'aa', 'eh', 'ih', 'oh', 'uh'];
        const newPhoneme = phonemes[Math.floor(Math.random() * phonemes.length)];
        setCurrentPhoneme(newPhoneme);
        lastUpdate = timestamp;
      }
      frameId = requestAnimationFrame(updatePhoneme);
    };

    frameId = requestAnimationFrame(updatePhoneme);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return { currentPhoneme };
};