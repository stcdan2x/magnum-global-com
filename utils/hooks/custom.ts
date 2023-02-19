import { useEffect, useState } from 'react';
import tailwindConfig from '../../tailwind.config';

export const useMediaQuery = (query: string): boolean => {
  const { screens }: any = tailwindConfig?.theme;
  const parsedQuery =
    query in screens ? `(min-width: ${screens[query]})` : query;

  const getIsMatched = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(parsedQuery).matches;
    }
    return false;
  };

  const [isMatched, setIsMatched] = useState<boolean>(
    getIsMatched(parsedQuery)
  );

  function handleChange() {
    setIsMatched(getIsMatched(parsedQuery));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(parsedQuery);

    handleChange();

    if (matchMedia) {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia) {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [parsedQuery]);

  return isMatched;
};
