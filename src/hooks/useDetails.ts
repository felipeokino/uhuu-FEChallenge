import { useEffect, useState } from 'react';
import { TMovieCompleted } from '../@types/movies';
import { HTTP } from '../services/http';
import { AxiosClient } from '../services/Clients/axiosClient';
import { AxiosResponse } from 'axios';

export const useMovieDetails = (id: string) => {
  const [ movie, setMovie ] = useState<TMovieCompleted>({} as TMovieCompleted);
 
  useEffect(() => {
    (async () => {
      const client = new HTTP(new AxiosClient());
      const response = await client.get<AxiosResponse<TMovieCompleted>>(`/movie/${id}?language=pt-BR`);

      setMovie(response.data);
      
    })();
  }, [ ]);
  
  return {
    movie
  };
};