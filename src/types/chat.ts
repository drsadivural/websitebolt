export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface OllamaConfig {
  model: string;
  baseUrl?: string;
}

export interface ModelParams {
  temperature?: number;
  top_p?: number;
  top_k?: number;
  num_ctx?: number;
  max_tokens?: number;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
}