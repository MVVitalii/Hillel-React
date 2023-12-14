import { useCallback, useEffect, useMemo, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortController = useMemo(() => new AbortController(), []);

  const getData = useCallback(async () => {
    const signal = abortController.signal;
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, [abortController.signal, url]);

  useEffect(() => {
    getData();

    return () => {
      abortController.abort();
    };
  }, [abortController, getData]);
  return {
    data,
    isLoading,
    error,
    refetch: getData,
  };
};

export default useFetch;
