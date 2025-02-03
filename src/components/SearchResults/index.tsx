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
          <LinkItems key={item.id} href={item.path}>
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
