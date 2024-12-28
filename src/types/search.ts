export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: string;
  keywords?: string[];
  relevance?: number;
}

export interface SearchFilters {
  categories?: string[];
  types?: string[];
}

export interface SearchOptions {
  filters?: SearchFilters;
  limit?: number;
}