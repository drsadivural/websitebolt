import React, { useEffect, useState } from 'react';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { OllamaService } from '../../services/ollama';
import { useChat } from '../../hooks/useChat';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ollamaService = new OllamaService({
  model: 'mistral'
});

const ChatContainer: React.FC = () => {
  const [isModelReady, setIsModelReady] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);
  const { messages, isLoading, error, sendMessage, resetChat } = useChat(ollamaService);

  useEffect(() => {
    const initializeModel = async () => {
      try {
        const isAvailable = await ollamaService.checkModelAvailability();
        
        if (!isAvailable) {
          setModelError('Downloading model...');
          await ollamaService.pullModel();
        }
        
        setIsModelReady(true);
        setModelError(null);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setModelError(errorMessage);
        setIsModelReady(false);
      }
    };

    initializeModel();
  }, []);

  if (modelError) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-800 rounded-lg p-4">
        <div className="text-center max-w-md">
          <AlertCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-gray-300 mb-4">{modelError}</p>
          {modelError.includes('Unable to connect') && (
            <a
              href="https://ollama.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              Install Ollama
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[600px] bg-gray-800 rounded-lg">
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput
        onSendMessage={sendMessage}
        onReset={resetChat}
        isLoading={isLoading}
        disabled={!isModelReady}
      />
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg m-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}
    </div>
  );
};

export default ChatContainer;