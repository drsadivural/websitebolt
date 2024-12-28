import { SearchResult } from '../types/search';

export const calculateRelevance = (result: SearchResult, query: string): number => {
  let score = 0;
  const queryTerms = query.toLowerCase().split(' ');
  
  queryTerms.forEach(term => {
    // Title matches (highest weight)
    if (result.title.toLowerCase().includes(term)) score += 3;
    
    // Description matches
    if (result.description.toLowerCase().includes(term)) score += 2;
    
    // Keyword matches
    if (result.keywords?.some(k => k.toLowerCase().includes(term))) score += 1;
    
    // Exact matches bonus
    if (result.title.toLowerCase() === term) score += 2;
    if (result.keywords?.some(k => k.toLowerCase() === term)) score += 1;
  });
  
  // Category and type matches
  if (result.category.toLowerCase().includes(query.toLowerCase())) score += 1;
  if (result.type.toLowerCase().includes(query.toLowerCase())) score += 1;
  
  return score;
};