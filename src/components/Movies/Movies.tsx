import React from 'react';
import { Carousel } from '../Carousel';
import MovieCard from '../MovieCard';
import { TMovieBasic } from '../../@types/movies';

type TMovieBasicsProps = {
  movies: TMovieBasic[]
}
export default function Movies({ movies }: TMovieBasicsProps) {
  
  return (
    <Carousel.Container>
      {
        movies.map(movie => (
          <Carousel.Item key={movie.id}>
            <MovieCard key={movie.id} movie={movie}/>
          </Carousel.Item>
        ))
      }
    </Carousel.Container>
  );
}
