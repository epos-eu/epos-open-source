import { SearchResult , ResultItems , LinkItems} from './styles';  // Assuming you're using styled-components or similar
type Page = {
  id: number;
  content: string;
  path: string;
};

interface ItemsListProps {
  items: Page[];  // `items` should be an array of `Page`
  setTrigger: (value: boolean) => void;
}

const SearchResults: React.FC<ItemsListProps> = ({ items , setTrigger }) => {
  const handleLinkClick = () => {
    if (setTrigger) {
      setTrigger(false); // Close the popup
    }
  };
  return (
    <div>
      <SearchResult>
        {items.map((item) => (
          <LinkItems key={item.id} href={`#${item.path}`} onClick={handleLinkClick}>
            <ResultItems>
              {item.content}
            </ResultItems>
          </LinkItems>
        ))}
      </SearchResult>
    </div>
  );
};

export default SearchResults;
