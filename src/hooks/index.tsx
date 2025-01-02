import { useState, useEffect } from 'react';

// Define the User type based on the API response structure
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  // Add other properties from the API response if needed
}

// Define the return type of the hook
interface UseGetUsersResult {
  users: User[];
  loading: boolean;
  error: Error | null;
}

export const SearchResultsApi = (): UseGetUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => {
        console.error(err);
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
};
