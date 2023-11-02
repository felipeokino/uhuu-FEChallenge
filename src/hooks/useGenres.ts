import { useEffect, useState } from 'react';
import { HTTP } from '../services/http';
import { AxiosClient } from '../services/Clients/axiosClient';
import { AxiosResponse } from 'axios';
import { TGenres } from '../@types/genres';

export const useGenres = () => {
  const [ genres, setGenres ] = useState<TGenres[]>([]);

  useEffect(() => {
    (async () => {
      const client = new HTTP(new AxiosClient());
      const response = await client.get<AxiosResponse<{genres: TGenres[]}>>('/genre/movie/list');
      setGenres(response.data.genres);
    })();
  }, []);

  return {
    genres
  };
};