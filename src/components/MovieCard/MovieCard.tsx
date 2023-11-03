import React from 'react';

import { TMovieBasic } from '../../@types/movies';
import { formatImageUrl } from '../../utils';
import { CardContainer, CardImage } from './MovieCard.styles';
import { useNavigate } from 'react-router-dom';

type MovieCardProps = {
  movie: TMovieBasic
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { title,  poster_path } = movie;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <CardContainer onClick={handleClick}>
      <CardImage src={formatImageUrl(poster_path)} alt="" loading='lazy' />
      <span style={{ color: 'white' }}>{title}</span>
    </CardContainer>
  );
}