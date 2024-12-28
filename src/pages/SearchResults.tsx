import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ArrowRight, Filter } from 'lucide-react';
import { searchContent } from '../utils/searchUtils';
import { SearchResult, SearchFilters as SearchFiltersType } from '../types/search';
import SearchFilters from '../components/search/SearchFilters';
import { searchData } from '../data/searchData';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFiltersType>({});

  // Extract unique categories and types for filters
  const categories = Array.from(new Set(searchData.map(item => item.category)));
  const types = Array.from(new Set(searchData.map(item => item.type)));

  useEffect(() => {
    const performSearch = async () => {
      setIsLoading(true);
      const searchResults = await searchContent(query, { filters });
      setResults(searchResults);
      setIsLoading(false);
    };

    performSearch();
  }, [query, filters]);

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Search className="w-6 h-6 text-blue-400 mr-3" />
            <h1 className="text-2xl font-bold text-white">
              Search Results for "{query}"
            </h1>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-gray-300"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          {showFilters && (
            <div className="w-64 shrink-0">
              <SearchFilters
                filters={filters}
                onFilterChange={setFilters}
                categories={categories}
                types={types}
              />
            </div>
          )}

          <div className="flex-1">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
              </div>
            ) : results.length > 0 ? (
              <div className="grid gap-6">
                {results.map((result) => (
                  <a
                    key={result.id}
                    href={result.url}
                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-white mb-2">
                          {result.title}
                        </h2>
                        <p className="text-gray-300 mb-4">{result.description}</p>
                        <div className="flex items-center text-sm">
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                            {result.category}
                          </span>
                          <span className="mx-2 text-gray-500">•</span>
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                            {result.type}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-300 text-lg">
                  No results found for "{query}". Try different keywords or browse our products and solutions.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;