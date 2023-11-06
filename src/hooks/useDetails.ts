import { useEffect, useState } from 'react';
import { TMovieCompleted } from '../@types/movies';
import { HTTP } from '../services/http';
import { AxiosClient } from '../services/Clients/axiosClient';
import { AxiosResponse } from 'axios';

export const useMovieDetails = (id: string) => {
  const [ movie, setMovie ] = useState<TMovieCompleted>({} as TMovieCompleted);
  const [ loading, setLoading ] = useState(true);
  
  const fetchMovieDetails = async () => {
    const client = new HTTP(new AxiosClient());
    const response = await client.get<AxiosResponse<TMovieCompleted>>(`/movie/${id}?language=pt-BR&append_to_response=videos,credits,runtime,recommendations,release_dates`).finally(() => {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    });

    setMovie(response.data);
  };
  
  useEffect(() => {
    (async () => {
      fetchMovieDetails();
    })();
  }, [ ]);

  const refetch = async () => {
    setLoading(true);
    await fetchMovieDetails();
  };
  
  return {
    movie,
    loading,
    refetch
  };
};