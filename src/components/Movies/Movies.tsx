import React from 'react';

import MovieCard from '../MovieCard';
import { TMovieBasic } from '../../@types/movies';
import { Container } from './Movies.styles';

type TMovieBasicsProps = {
  movies: TMovieBasic[]
}
export default function Movies({ movies }: TMovieBasicsProps) {
  
  return (
    <Container>
      {
        movies.map(movie => (
          
          <MovieCard key={movie.id} movie={movie}/>
          
        ))
      }
    </Container>
  );
}
