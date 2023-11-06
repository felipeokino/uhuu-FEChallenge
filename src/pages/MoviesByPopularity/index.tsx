import React from 'react';
import Movies from '../../components/Movies';
import { usePopularMovies } from '../../hooks/usePopularMovies';
import ListGenres from '../../components/ListGenres';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';

const MAX_PAGE = 500;
export default function Home() {
  const { movies, loading  } = usePopularMovies();
  
  if (loading)
    return <Loading />;
  
  return (
    <div>
      <ListGenres  />
      <Movies movies={movies} />
      <Pagination totalPages={MAX_PAGE} />
    </div>
  );
}
