import { SearchResult } from './styles';  // Assuming you're using styled-components or similar
type Page = {
  id: number;
  title: string;
  content: string;
  path: string;
};

interface ItemsListProps {
  items: Page[];  // `items` should be an array of `Page`
}

const SearchResults: React.FC<ItemsListProps> = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.path}>
              <strong>{item.title}</strong>: {item.content}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
