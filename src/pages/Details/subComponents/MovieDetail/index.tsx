import React from 'react';

import CircularProgressComponent from '../../../../components/CircularProgress';
import { formatImageUrl, extractYear, formatDate } from '../../../../utils';
import { PosterImage, DetailsContainer, Title, DetailsLine, UserRating, Container } from '../../Details.styles';
import { TMovieCompleted } from '../../../../@types/movies';

type MovieDetailProps = {
  movie: Partial<TMovieCompleted>
}
export default function MovieDetail({ movie }: MovieDetailProps) {
  const { title, release_date = '', release_dates, poster_path = '', vote_average=0, overview, genres } = movie;
  const ageCertification = release_dates?.results?.find(releaseData => releaseData.iso_3166_1 === 'BR')?.release_dates[0].certification;

  const dotDivider = <i>&middot;</i>;
  return (
    <Container>
      <PosterImage
        src={formatImageUrl(poster_path)}
        alt={`Poster do filme ${title}`}
      />
      <DetailsContainer>
        <Title>{title} ({extractYear(release_date)})</Title>
        <DetailsLine>
          <span>
            {ageCertification} anos
          </span>
          {dotDivider}
          <span>{formatDate(release_date)}</span>
          {dotDivider}
          <span>
            {
              genres?.map(genre => genre.name).join(', ')
            }
          </span>
          {dotDivider}
          <span>
            {}
          </span>
        </DetailsLine>
        <UserRating>
          <CircularProgressComponent 
            progress={+(vote_average*10).toFixed(0)}
            strokeWidth={4}
            radius={30}
          />
          <span>Avaliação dos usuários</span>
        </UserRating>
        <p>
          <span>Sinopse</span>
          {overview}
        </p>       
      </DetailsContainer>
    </Container>
  );
}