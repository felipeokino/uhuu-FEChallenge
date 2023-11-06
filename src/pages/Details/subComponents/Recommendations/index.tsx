import React from 'react';
import { TMovieBasic } from '../../../../@types/movies';
import MovieCard from '../../../../components/MovieCard';
import SectionTitle from '../SectionTitle';
import { SectionContainer } from '../common.styles';

type RecommendationProps = {
  list: TMovieBasic[]
}
export default function Recommendations({ list = [] }: RecommendationProps) {
  return (
    <SectionContainer>
      <SectionTitle title='Recomendações' />
      <div style={{ display: 'flex', overflowX: 'auto', gap: '12px' }}>
        {
          list.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </SectionContainer>
  );
}