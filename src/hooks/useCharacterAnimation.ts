import { useCallback, RefObject } from 'react';

type EmotionState = 'neutral' | 'happy' | 'thinking' | 'surprised';
type Phoneme = 'rest' | 'aa' | 'eh' | 'ih' | 'oh' | 'uh';

export const useCharacterAnimation = (svgRef: RefObject<SVGSVGElement>) => {
  const playAnimation = useCallback((
    emotion: EmotionState,
    phoneme: Phoneme | null
  ) => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const mouthBase = svg.querySelector('.mouth-base');
    const mouthSpeaking = svg.querySelector('.mouth-speaking');
    const eyeGroup = svg.querySelector('.eye-group');
    const eyeLids = svg.querySelectorAll('.eye-lid');

    // Reset transforms
    eyeGroup?.setAttribute('transform', '');
    mouthBase?.setAttribute('d', '');
    
    // Apply emotion-specific animations
    switch (emotion) {
      case 'happy':
        mouthBase?.setAttribute('d', 'M 30 60 Q 50 75 70 60');
        eyeGroup?.setAttribute('transform', 'scale(0.9 1.1)');
        break;
      case 'thinking':
        mouthBase?.setAttribute('d', 'M 35 65 Q 50 65 65 65');
        eyeGroup?.setAttribute('transform', 'translate(5 0)');
        break;
      case 'surprised':
        mouthBase?.setAttribute('d', 'M 35 65 Q 50 55 65 65');
        eyeGroup?.setAttribute('transform', 'scale(1.2)');
        break;
      default:
        mouthBase?.setAttribute('d', 'M 30 60 Q 50 70 70 60');
    }

    // Apply phoneme animations when speaking
    if (phoneme && mouthSpeaking) {
      const phonemeShapes = {
        rest: 'M 35 65 Q 50 65 65 65',
        aa: 'M 35 70 Q 50 80 65 70',
        eh: 'M 35 65 Q 50 70 65 65',
        ih: 'M 35 63 Q 50 65 65 63',
        oh: 'M 35 65 Q 50 75 65 65',
        uh: 'M 35 67 Q 50 72 65 67'
      };

      mouthSpeaking.setAttribute('d', phonemeShapes[phoneme]);
      mouthSpeaking.style.opacity = '1';
    } else if (mouthSpeaking) {
      mouthSpeaking.style.opacity = '0';
    }

    // Blinking animation
    if (Math.random() < 0.01) { // 1% chance per frame
      eyeLids.forEach(lid => {
        lid.animate([
          { opacity: 0 },
          { opacity: 1 },
          { opacity: 0 }
        ], {
          duration: 150,
          easing: 'ease-in-out'
        });
      });
    }
  }, [svgRef]);

  return { playAnimation };
};