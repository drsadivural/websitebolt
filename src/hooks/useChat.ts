import { useState, useCallback } from 'react';
import { OllamaService } from '../services/ollama';
import { ChatMessage, ChatState, ModelParams } from '../types/chat';

const DEFAULT_PARAMS: ModelParams = {
  temperature: 0.7,
  top_p: 0.9,
  top_k: 40,
  num_ctx: 4096,
  max_tokens: 2048
};

export const useChat = (ollamaService: OllamaService) => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null
  });

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = { role: 'user', content };
    
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null
    }));

    try {
      let responseContent = '';
      
      await ollamaService.generateResponse(
        [...state.messages, userMessage],
        DEFAULT_PARAMS,
        (chunk) => {
          responseContent += chunk;
          setState(prev => ({
            ...prev,
            messages: [
              ...prev.messages,
              { role: 'assistant', content: responseContent }
            ]
          }));
        }
      );

      setState(prev => ({
        ...prev,
        isLoading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
    }
  }, [state.messages, ollamaService]);

  const resetChat = useCallback(() => {
    setState({
      messages: [],
      isLoading: false,
      error: null
    });
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
    resetChat
  };
};