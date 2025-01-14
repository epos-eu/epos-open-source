import { useState, useEffect } from 'react';
import { SearchContents } from './SearchContent';

// Define the return type of the hook for search content
interface UseSearchContentsResult {
  pages: typeof SearchContents;  // Use the type of SearchContents directly
  loading: boolean;
  error: Error | null;
}

// Define the SearchResultsApi hook
export const SearchResultsApi = (): UseSearchContentsResult => {
  const [pages, setPages] = useState<typeof SearchContents>(SearchContents);
  const [loading, setLoading] = useState<boolean>(false); // No loading since it's static
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Set loading state to true when we start
    setLoading(true);

    try {
      // Simulate an API call or process if needed
      setPages(SearchContents);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      setLoading(false);
    }
  }, []);

  return { pages, loading, error };
};
