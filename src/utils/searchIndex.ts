import { SearchResult, SearchIndex } from '../types/search';

// Create an inverted index for faster searching
export const createSearchIndex = (data: SearchResult[]): SearchIndex => {
  const index: SearchIndex = {};
  
  data.forEach((item) => {
    const terms = [
      ...item.title.toLowerCase().split(' '),
      ...item.description.toLowerCase().split(' '),
      item.category.toLowerCase(),
      item.type.toLowerCase(),
      ...(item.keywords || []).map(k => k.toLowerCase())
    ];
    
    terms.forEach((term) => {
      if (!index[term]) {
        index[term] = [];
      }
      if (!index[term].includes(item.id)) {
        index[term].push(item.id);
      }
    });
  });
  
  return index;
};