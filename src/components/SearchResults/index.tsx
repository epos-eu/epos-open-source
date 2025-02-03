import { SearchResult , ResultItems , LinkItems} from './styles';  // Assuming you're using styled-components or similar
type Page = {
  id: number;
  content: string;
  path: string;
};

interface ItemsListProps {
  items: Page[];  // `items` should be an array of `Page`
}

const SearchResults: React.FC<ItemsListProps> = ({ items }) => {
  return (
    <div>
      <SearchResult>
        {items.map((item) => (
          <ResultItems key={item.id}>
            <LinkItems href={`#${item.path}`}>
              {item.content}
            </LinkItems>
          </ResultItems>
        ))}
      </SearchResult>
    </div>
  );
};

export default SearchResults;
