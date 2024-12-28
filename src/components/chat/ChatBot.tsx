import React, { useState } from 'react';
import { MessageSquare, X, Minimize2, Maximize2 } from 'lucide-react';
import ChatContainer from './ChatContainer';
import AnimatedCharacter from './AnimatedCharacter';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-[#6E56CF] text-white rounded-full shadow-lg hover:bg-[#5B46B3] transition-all duration-300 group"
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed ${isMinimized ? 'bottom-6 right-6 w-auto' : 'bottom-6 right-6 w-[400px]'} transition-all duration-300 z-50`}>
          {isMinimized ? (
            <button
              onClick={() => setIsMinimized(false)}
              className="flex items-center space-x-3 p-4 bg-[#1A1A1A] text-white rounded-lg shadow-lg hover:bg-[#2B2B2B] transition-all duration-300"
            >
              <AnimatedCharacter
                isListening={isListening}
                isSpeaking={isSpeaking}
                emotion="neutral"
              />
              <span>Chat with AI Assistant</span>
              <Maximize2 className="w-5 h-5" />
            </button>
          ) : (
            <div className="bg-[#1A1A1A] rounded-lg shadow-xl overflow-hidden border border-[#2B2B2B]">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#2B2B2B]">
                <div className="flex items-center space-x-3">
                  <AnimatedCharacter
                    isListening={isListening}
                    isSpeaking={isSpeaking}
                    emotion="neutral"
                  />
                  <div>
                    <h3 className="text-white font-medium">AI Assistant</h3>
                    <p className="text-[#B3B3B3] text-sm">
                      {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Online'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-2 text-[#B3B3B3] hover:text-white rounded-lg hover:bg-[#2B2B2B] transition-colors"
                    aria-label="Minimize chat"
                  >
                    <Minimize2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-[#B3B3B3] hover:text-white rounded-lg hover:bg-[#2B2B2B] transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Container */}
              <ChatContainer
                onStartSpeaking={() => setIsSpeaking(true)}
                onStopSpeaking={() => setIsSpeaking(false)}
                onStartListening={() => setIsListening(true)}
                onStopListening={() => setIsListening(false)}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;