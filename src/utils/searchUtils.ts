import { SearchResult, SearchOptions } from '../types/search';
import { searchData } from '../data/searchData';
import { createSearchIndex } from './searchIndex';
import { calculateRelevance } from './relevanceUtils';

const searchIndex = createSearchIndex(searchData);

export const searchContent = async (
  query: string,
  options: SearchOptions = {}
): Promise<SearchResult[]> => {
  if (!query.trim()) return [];

  const terms = query.toLowerCase().trim().split(' ');
  const resultIds = new Set<string>();
  
  // Find matching documents for each term
  terms.forEach(term => {
    Object.keys(searchIndex).forEach(indexTerm => {
      if (indexTerm.includes(term)) {
        searchIndex[indexTerm].forEach(id => resultIds.add(id));
      }
    });
  });

  // Get full results
  let results = Array.from(resultIds)
    .map(id => searchData.find(item => item.id === id))
    .filter((item): item is SearchResult => !!item);

  // Apply filters if provided
  if (options.filters) {
    if (options.filters.categories?.length) {
      results = results.filter(item => 
        options.filters?.categories?.includes(item.category)
      );
    }
    if (options.filters.types?.length) {
      results = results.filter(item => 
        options.filters?.types?.includes(item.type)
      );
    }
  }

  // Calculate relevance and sort
  results = results.map(result => ({
    ...result,
    relevance: calculateRelevance(result, query)
  })).sort((a, b) => (b.relevance || 0) - (a.relevance || 0));

  // Apply limit if provided
  if (options.limit) {
    results = results.slice(0, options.limit);
  }

  return results;
};