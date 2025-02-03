import React, { useState, useEffect } from "react";
import { SearchBarContainer, IconWrapper, DropdownContainer , PopSerachInput , SerachButtonInput} from "./styles"; // Adjust import as necessary
import SearchResults from "../SearchResults";
import SearchInput from "../../common/InputSearch";
import Popup from "../../common/pop-up";
import { SearchContents } from "../../hooks/SearchContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// Type for the static search content (pages)
type Page = {
  id: number;
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
          <SerachButtonInput placeholder="Type to search"/>
           <IconWrapper>
            <FontAwesomeIcon icon={faSearch} />
            </IconWrapper>
        </SearchBarContainer>
      </button>
      {searchItem && filteredPages.length === 0 && <p>No results found</p>}
      <Popup trigger={popUp} setTrigger={setPopUp}>
        <PopSerachInput>
        <SearchInput onChangeCallback={filterItems} />
        </PopSerachInput>
        {filteredPages.length > 0 && <SearchResults items={filteredPages} setTrigger={setPopUp} />}
      </Popup>
    </DropdownContainer>
  );
};

export default SearchBar;
