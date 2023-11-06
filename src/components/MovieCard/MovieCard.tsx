import React, { useState } from 'react';

import { TMovieBasic } from '../../@types/movies';
import { formatImageUrl, transformDateToSimpleMonth } from '../../utils';
import { CardContainer, CardImage } from './MovieCard.styles';
import { useNavigate } from 'react-router-dom';
import { LoadingSkeleton } from '../Loading';

type MovieCardProps = {
  movie: TMovieBasic,
  withReleaseDate?: boolean
}

export default function MovieCard({ movie, withReleaseDate = false }: MovieCardProps) {
  const { title,  poster_path } = movie;
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };
  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <CardContainer onClick={handleClick}>
   
      <CardImage src={formatImageUrl(poster_path)} alt="" loading='lazy' onLoad={handleImageLoaded} hidden={isLoading}/>
      {isLoading && <LoadingSkeleton />}
      <div>
        <span>
          {title}
        </span>
        {
          withReleaseDate && (
            <span>
              {transformDateToSimpleMonth(movie.release_date)}
            </span>
          )
        }
      </div>
    </CardContainer>
  );
}