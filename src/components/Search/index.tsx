// SearchBar.tsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchBarContainer, SearchInput, SearchButton, SearchIcon, DropdownContainer } from './styles'; // Adjust import as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to control input visibility
  const history = useHistory();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    if (query.trim()) {
      history.push(`/search?query=${encodeURIComponent(query)}`); // Navigate to search results page
      setQuery(''); // Clear input after search
      setIsOpen(false); // Close input after search
    }
  };

  const toggleSearchInput = () => {
    setIsOpen((prev) => !prev); // Toggle the input visibility
  };

  return (
    <DropdownContainer>
        <SearchBarContainer>
         <SearchIcon onClick={toggleSearchInput}>
        <FontAwesomeIcon icon={faSearch} />
         </SearchIcon>
         {isOpen && (
          <form onSubmit={handleSearch}>
            <SearchInput
              type="text"
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              placeholder="Search..."
              required
            />
          </form>
          )}
        </SearchBarContainer>
    </DropdownContainer>
  );
};

export default SearchBar;
