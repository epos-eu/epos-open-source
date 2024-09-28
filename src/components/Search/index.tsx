// SearchBar.tsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchBarContainer, SearchInput, SearchButton } from './styles';
const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const history = useHistory();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    if (query.trim()) {
      history.push(`/search?query=${encodeURIComponent(query)}`); // Navigate to search results page
      setQuery(''); // Clear input after search
    }
  };

  return (
    <SearchBarContainer>
    <form onSubmit={handleSearch}>
      <SearchInput
        type="text"
        value={query}
        onChange={(e:any) => setQuery(e.target.value)}
        placeholder="Search..."
        required
      />
      <SearchButton type="submit">Search</SearchButton>
    </form>
  </SearchBarContainer>
  );
};

export default SearchBar;
