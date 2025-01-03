import React, { useState, useEffect } from "react";
import { SearchBarContainer, SearchIcon, DropdownContainer } from "./styles"; // Adjust import as necessary
import SearchResults from "../SearchResults";
import SearchInput from "../../common/InputSearch";
import { SearchResultsApi } from "../../hooks";
import Popup from "../../common/pop-up";

type User = {
  firstName: string;
  id: number;
};

const SearchBar: React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const { users, loading, error } = SearchResultsApi();
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    if (searchItem.trim() === "") {
      setFilteredUsers([]);
    } else {
      const filtered = users.filter((user) =>
        user.firstName.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [users, searchItem]);

  const filterItems = (searchTerm: string) => {
    setSearchItem(searchTerm);
  };

  return (
    <DropdownContainer>
      <button
        onClick={() => setPopUp(true)}
        aria-label="Open search popup"
        style={{ all: "unset", cursor: "pointer" }}
      >
        <SearchBarContainer>
          <SearchIcon />
          <SearchInput onChangeCallback={filterItems} />
        </SearchBarContainer>
      </button>
      {searchItem && filteredUsers.length === 0 && <p>No users found</p>}
      <Popup trigger={popUp} setTrigger={setPopUp}>
        {loading && <p>Loading...</p>}
        {error && <p>There was an error loading the users</p>}
        {!loading && !error && <SearchResults items={filteredUsers} />}
      </Popup>
    </DropdownContainer>
  );
};

export default SearchBar;
