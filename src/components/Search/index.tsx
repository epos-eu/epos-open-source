import React, { useState, useEffect } from "react";
import { SearchBarContainer, SearchIcon, DropdownContainer } from "./styles"; // Adjust import as necessary
import SearchResults from "../SearchResults";
import SearchInput from "../../common/InputSearch";
import Popup from "../../common/pop-up";
import { SearchContents } from "../../hooks/SearchContent";

// Type for the static search content (pages)
type Page = {
  id: number;
  title: string;
  content: string;
  path: string;
};

const SearchBar: React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredPages, setFilteredPages] = useState<Page[]>([]);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    if (searchItem.trim() === "") {
      setFilteredPages([]);
    } else {
      const filtered = SearchContents.filter((page) =>
        page.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        page.content.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilteredPages(filtered);
    }
  }, [searchItem]);

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
      {searchItem && filteredPages.length === 0 && <p>No pages found</p>}
      <Popup trigger={popUp} setTrigger={setPopUp}>
        {filteredPages.length > 0 && <SearchResults items={filteredPages} />}
      </Popup>
    </DropdownContainer>
  );
};

export default SearchBar;
