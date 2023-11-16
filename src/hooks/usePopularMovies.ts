import { useCallback, useEffect, useState } from 'react';
import { TMovieBasic } from '../@types/movies';
import { HTTP } from '../services/http';
import { AxiosClient } from '../services/Clients/axiosClient';
import { AxiosResponse } from 'axios';
import { useSearchParams } from 'react-router-dom';

export const usePopularMovies = () => {
  const [ movies, setMovieBasics ] = useState<TMovieBasic[]>([]);
  const [ loading, setLoading ] = useState(false);
  const [ filters ] = useSearchParams();
  const genres = filters.get('with_genres') || '';
  const lastPage = +(filters.get('page') ?? 1);

  const stopLoading = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const fetchPopularMovies = async () => {
    const client = new HTTP(new AxiosClient());
    const response = await client.get<AxiosResponse<{results: TMovieBasic[] }>>(`/movie/popular?language=pt-BR&page=${lastPage}`).finally(() =>{
      stopLoading();
    });
        
    
    setMovieBasics(response.data.results);
  };
  const fetchFilteredMovies = async () => {
    const hasFilter = genres ? `&with_genres=${genres}`: '';
    const client = new HTTP(new AxiosClient());

    const response = await client.get<AxiosResponse<{ results: TMovieBasic[]}>>(`/discover/movie?language=pt-BR&page=${lastPage}${hasFilter}`).finally(() =>{
      stopLoading();
    });
    
    setMovieBasics(response.data.results);
  };

  useEffect(() => {
    (async () => {
      
      
      const hasFilter = genres? `&with_genres=${genres}`: '';
      if (hasFilter)
        await fetchFilteredMovies();
      else {
        setLoading(true);
        await fetchPopularMovies();
      }
      
    })();
  }, [ filters ]);

  return {
    movies,
    loading,
  };
};