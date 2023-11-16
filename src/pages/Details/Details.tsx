import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../../hooks/useDetails';
import CastList from './subComponents/CastList';
import MovieDetail from './subComponents/MovieDetail';
import Recommendations from './subComponents/Recommendations';
import Trailer from './subComponents/Trailer';
import { Loading } from '../../components/Loading';

export default function Details() {
  // const navigate = useNavigate();
  const { id } = useParams();
  const { movie: { credits, recommendations, videos, ...rest }, loading, refetch } = useMovieDetails(id!);

  // const handleClick = () => {
  //   navigate('/popular');
  // };

  useEffect(() => {
    refetch();
  }, [ id ]);

  if (loading) {
    return <Loading  />;
  }

  return (
    <>
      <MovieDetail movie={rest} />
      <CastList list={credits?.cast || []} />
      {!!videos?.results.length && <Trailer video={videos.results[0]} />}
      {!!recommendations?.results.length && <Recommendations list={recommendations.results}  />}
    </>
  );
}