import axios, { AxiosInstance } from 'axios';
import { IHTTPClient } from './httpClient.interface';

export class AxiosClient implements IHTTPClient {
  private api:AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      }
    });
  }
  get<O>(url: string): Promise<O> {
    return this.api.get(url);
  }
    
}