// SearchResults.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Replace this with your actual data source
  const data = [
    { title: 'Page 1', content: 'This is page 1 content.' },
    { title: 'Page 2', content: 'This is page 2 content.' },
    // Add more searchable data here
  ];

  const results = data.filter(item => 
    item.content.toLowerCase().includes(query?.toLowerCase() || '')
  );

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <ul>
        {results.length > 0 ? (
          results.map((result, index) => (
            <li key={index}>
              <h2>{result.title}</h2>
              <p>{result.content}</p>
            </li>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
