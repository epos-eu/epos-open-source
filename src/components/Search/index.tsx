// SearchBar.tsx
import React, { useState ,useEffect } from 'react';
import { SearchBarContainer, SearchIcon, DropdownContainer } from './styles'; // Adjust import as necessary
import SearchResults from '../SearchResults';
import SearchInput from '../../common/InputSearch';
import { SearchResultsApi } from '../../hooks';

const SearchBar: React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const {users, loading, error} = SearchResultsApi()

  useEffect(() => {
    // Update filtered users when users are fetched or searchItem changes
    if (searchItem === '') {
      setFilteredUsers([]);  // Clear results if no search term is provided
    } else {
      const filteredItems = users.filter((user) =>
        user.firstName.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilteredUsers(filteredItems);  // Set filtered users based on search term
    }
  }, [users, searchItem]);  

   // Filter items based on search term
   const filterItems = (searchTerm: string) => {
    setSearchItem(searchTerm); // Update the search term

    // If search term is empty, show all users, else filter by first name
    if (searchTerm.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered); // Update filtered users
    }
  };

  return (
    <DropdownContainer>
        <SearchBarContainer>
         <SearchIcon>
         </SearchIcon>
            <SearchInput onChangeCallback={filterItems} />
        </SearchBarContainer>
        {searchItem && filteredUsers.length === 0 && (
        <p>No users found</p>
      )}
        {loading && <p>Loading...</p>}
        {error && <p>There was an error loading the users</p>}
       { !loading && !error && (<SearchResults items={filteredUsers} />)}

    </DropdownContainer>
  );
};

export default SearchBar;


type User = {
  firstName: string;
  id:number
};