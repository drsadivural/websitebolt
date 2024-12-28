import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useSpeechState } from '../../hooks/useSpeechState';
import { useCharacterAnimation } from '../../hooks/useCharacterAnimation';

interface AnimatedCharacterProps {
  isListening: boolean;
  isSpeaking: boolean;
  emotion?: 'neutral' | 'happy' | 'thinking' | 'surprised';
}

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({
  isListening,
  isSpeaking,
  emotion = 'neutral'
}) => {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  const { currentPhoneme } = useSpeechState();
  const { playAnimation } = useCharacterAnimation(svgRef);

  useEffect(() => {
    playAnimation(emotion, isSpeaking ? currentPhoneme : null);
  }, [emotion, isSpeaking, currentPhoneme, playAnimation]);

  return (
    <div className={`relative w-16 h-16 ${isListening ? 'animate-pulse' : ''}`}>
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        className={`w-full h-full ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
      >
        {/* Base Circle */}
        <circle cx="50" cy="50" r="45" className="fill-current opacity-20" />
        
        {/* Face Container */}
        <g className="transform-origin-center">
          {/* Eyes */}
          <g className="eye-group">
            <circle cx="35" cy="45" r="5" className="fill-current" />
            <circle cx="65" cy="45" r="5" className="fill-current" />
            {/* Blinking Animation */}
            <rect
              x="30"
              y="42"
              width="10"
              height="6"
              className="fill-current eye-lid"
              style={{ opacity: 0 }}
            />
            <rect
              x="60"
              y="42"
              width="10"
              height="6"
              className="fill-current eye-lid"
              style={{ opacity: 0 }}
            />
          </g>

          {/* Mouth */}
          <g className="mouth-group">
            {/* Default Smile */}
            <path
              d="M 30 60 Q 50 70 70 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="mouth-base"
            />
            
            {/* Speaking Animation Overlay */}
            <path
              d="M 35 65 Q 50 75 65 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="mouth-speaking"
              style={{ opacity: 0 }}
            />
          </g>
        </g>

        {/* Pulse Animation for Listening State */}
        <circle
          cx="50"
          cy="50"
          r="48"
          className={`stroke-current fill-none ${
            isListening ? 'animate-ping' : ''
          }`}
          style={{ opacity: isListening ? 0.2 : 0 }}
        />
      </svg>
    </div>
  );
};

export default AnimatedCharacter;