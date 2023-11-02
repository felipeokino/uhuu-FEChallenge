import React from 'react';
import Movies from '../../components/Movies';
import { usePopularMovies } from '../../hooks/usePopularMovies';

export default function Home() {
  const { movies } = usePopularMovies();
  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}
