import axios, { AxiosInstance } from 'axios';
import { IHTTPClient } from './httpClient.interface';

export class AxiosClient implements IHTTPClient {
  private api:AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWRlOWU1Nzg2ODlkOTM0MmQyY2M4NjkxZjQ5NDI1ZiIsInN1YiI6IjY1NDJkNDQzMTM2NTQ1MDBmYzhhZDI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0XKuacD88Jupbta32Kz9RvNqNm-bviMGnTZ92X8gLTw',
      }
    });
  }
  get<O>(url: string): Promise<O> {
    return this.api.get(url);
  }
    
}