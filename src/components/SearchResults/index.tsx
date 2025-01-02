import { SearchResult } from './styles';
type User = {
    firstName: string;
    id: number;
    // Add other properties if needed
  };
  
  interface ItemsListProps {
    items: User[]; // `items` should be an array of `User`
  }
  const SearchResults: React.FC<ItemsListProps> = ({ items }) => {
    return (
      <>
          <SearchResult>
            {items.map((item) => (
              <li key={item.id}>{item.firstName}</li>
            ))}
          </SearchResult>
      </>
    );
  };
  
  export default SearchResults;
  