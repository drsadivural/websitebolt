import { OllamaConfig, ChatMessage, ModelParams } from '../types/chat';

const OLLAMA_BASE_URL = 'http://localhost:11434';

export class OllamaService {
  private modelName: string;
  private controller: AbortController | null = null;

  constructor(config: OllamaConfig) {
    this.modelName = config.model;
  }

  async checkModelAvailability(): Promise<boolean> {
    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.models?.some((model: any) => model.name === this.modelName) ?? false;
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Unable to connect to Ollama service. Please ensure Ollama is running.');
      }
      throw error;
    }
  }

  async pullModel(): Promise<boolean> {
    try {
      const response = await fetch(`${OLLAMA_BASE_URL}/api/pull`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.modelName })
      });

      if (!response.ok) {
        throw new Error(`Failed to pull model: ${response.statusText}`);
      }

      return true;
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Unable to connect to Ollama service. Please ensure Ollama is running.');
      }
      throw error;
    }
  }

  // ... rest of the class implementation remains the same
}