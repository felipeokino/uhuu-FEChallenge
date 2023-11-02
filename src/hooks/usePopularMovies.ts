import { useEffect, useState } from 'react';
import { TMovieBasic } from '../@types/movies';
import { HTTP } from '../services/http';
import { AxiosClient } from '../services/Clients/axiosClient';
import { AxiosResponse } from 'axios';

export const usePopularMovies = () => {
  const [ movies, seTMovieBasics ] = useState<TMovieBasic[]>([]);
 
  useEffect(() => {
    (async () => {
      const client = new HTTP(new AxiosClient());
      const response = await client.get<AxiosResponse<{results: TMovieBasic[]}>>('/movie/popular?language=pt-BR');

      seTMovieBasics(response.data.results);
      
    })();
  }, [ ]);


  
  return {
    movies
  };
};