import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Loader } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { SearchResult } from '../../types/search';

interface SearchInputProps {
  onSearch: (query: string) => Promise<void>;
  isLoading: boolean;
  results: SearchResult[];
  onResultClick: (result: SearchResult) => void;
  onClose: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  isLoading,
  results,
  onResultClick,
  onClose
}) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > -1 ? prev - 1 : prev);
        break;
      case 'Enter':
        if (selectedIndex > -1 && results[selectedIndex]) {
          onResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        onClose();
        break;
    }
  };

  const highlightMatch = (text: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? (
        <span key={i} className="bg-blue-500/30 text-blue-200">{part}</span>
      ) : part
    );
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-4 pl-12 text-lg bg-gray-800 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          autoComplete="off"
        />
        <div className="absolute left-4 top-5">
          {isLoading ? (
            <Loader className="w-5 h-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="w-5 h-5 text-gray-400" />
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {query && results.length > 0 && (
        <div className="mt-2 max-h-96 overflow-y-auto bg-gray-800 rounded-lg border border-gray-700">
          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => onResultClick(result)}
              className={`w-full text-left p-4 hover:bg-gray-700 transition-colors ${
                index === selectedIndex ? 'bg-gray-700' : ''
              }`}
            >
              <div className="text-white font-medium mb-1">
                {highlightMatch(result.title)}
              </div>
              <div className="text-sm text-gray-400">
                {highlightMatch(result.description)}
              </div>
              <div className="flex items-center mt-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  {result.category}
                </span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                  {result.type}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {query && !isLoading && results.length === 0 && (
        <div className="mt-2 p-4 bg-gray-800 rounded-lg border border-gray-700 text-gray-400">
          No results found for "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchInput;