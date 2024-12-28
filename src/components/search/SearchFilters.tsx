import React from 'react';
import { SearchFilters as SearchFiltersType } from '../../types/search';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFilterChange: (filters: SearchFiltersType) => void;
  categories: string[];
  types: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
  categories,
  types
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-white mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 rounded bg-gray-700 border-gray-600"
                checked={filters.categories?.includes(category) || false}
                onChange={(e) => {
                  const newCategories = e.target.checked
                    ? [...(filters.categories || []), category]
                    : (filters.categories || []).filter(c => c !== category);
                  onFilterChange({ ...filters, categories: newCategories });
                }}
              />
              <span className="ml-2 text-gray-300">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-white mb-2">Types</h3>
        <div className="space-y-2">
          {types.map(type => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 rounded bg-gray-700 border-gray-600"
                checked={filters.types?.includes(type) || false}
                onChange={(e) => {
                  const newTypes = e.target.checked
                    ? [...(filters.types || []), type]
                    : (filters.types || []).filter(t => t !== type);
                  onFilterChange({ ...filters, types: newTypes });
                }}
              />
              <span className="ml-2 text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;