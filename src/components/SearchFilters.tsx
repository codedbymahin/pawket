
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterOptions) => void;
  availableFilters: {
    types?: string[];
    breeds?: string[];
    locations?: string[];
    categories?: string[];
  };
}

interface FilterOptions {
  type?: string;
  breed?: string;
  location?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onFilter, availableFilters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({});
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (key: keyof FilterOptions, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearFilter = (key: keyof FilterOptions) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({});
    onFilter({});
  };

  const activeFiltersCount = Object.keys(filters).length;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search pets, products, or services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch} variant="default">
          Search
        </Button>
        <Button
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          className="relative"
        >
          <Filter size={16} className="mr-2" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-600">Active filters:</span>
          {Object.entries(filters).map(([key, value]) => (
            <Badge key={key} variant="secondary" className="flex items-center gap-1">
              {key}: {value}
              <X
                size={14}
                className="cursor-pointer hover:text-red-500"
                onClick={() => clearFilter(key as keyof FilterOptions)}
              />
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear all
          </Button>
        </div>
      )}

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {availableFilters.types && (
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Type</label>
                <Select value={filters.type || ""} onValueChange={(value) => handleFilterChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableFilters.types.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {availableFilters.breeds && (
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Breed</label>
                <Select value={filters.breed || ""} onValueChange={(value) => handleFilterChange('breed', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select breed" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableFilters.breeds.map((breed) => (
                      <SelectItem key={breed} value={breed}>{breed}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {availableFilters.locations && (
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                <Select value={filters.location || ""} onValueChange={(value) => handleFilterChange('location', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableFilters.locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Sort By</label>
              <Select value={filters.sortBy || ""} onValueChange={(value) => handleFilterChange('sortBy', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
