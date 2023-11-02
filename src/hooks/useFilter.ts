import { useEffect, useState } from 'react';
import { useSessionStorage } from './useSessisonStorage';

export const useFilter = () => {
  const [ filters, setFilters ] = useState<string[]>([]);
  const { storageValue, setItem } = useSessionStorage('movies_genres');

  useEffect(() => {
    if (storageValue !== filters) {
      setFilters(storageValue);
    }
  }, [ storageValue, filters ]);

  const teste = (value: string[]) => {
    setItem(value);
    setFilters(value);
  };

  return {
    filters,
    setFilters: teste
  };
};