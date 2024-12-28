import React, { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onReset: () => void;
  isLoading: boolean;
  disabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  onReset,
  isLoading,
  disabled
}) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || disabled) return;
    
    onSendMessage(input.trim());
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-700 p-4">
      <form onSubmit={handleSubmit} className="flex items-end space-x-2">
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={disabled ? 'Loading model...' : 'Type your message...'}
            className="w-full p-3 bg-gray-700 text-white rounded-lg resize-none max-h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading || disabled}
            rows={1}
          />
        </div>
        <button
          type="submit"
          disabled={!input.trim() || isLoading || disabled}
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={onReset}
          disabled={isLoading || disabled}
          className="p-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;