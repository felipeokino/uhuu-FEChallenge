import React from 'react';
import { useFilteredMovies } from '../../hooks/useFilteredMovies';
import Movies from '../../components/Movies';

import { useSearchParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function MoviesByGenres() {
  const { movies } = useFilteredMovies();
  const [ filters, setFilters ] = useSearchParams();
  const actualPage = filters.get('page')??1;

  const previousPage = () => {
    filters.set('page', (+actualPage-1).toString());
    setFilters(filters);
  };
  const nextPage = () => {
    filters.set('page', (+actualPage+1).toString());
    setFilters(filters);
  };

  return (
    <div>
      <Movies  movies={movies}/>
      <Button onClick={previousPage}>-</Button>
      <Button onClick={nextPage}>+</Button>
    </div>
  );
}