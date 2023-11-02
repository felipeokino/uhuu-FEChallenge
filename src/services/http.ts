
import { IHTTPClient } from './Clients/httpClient.interface';
import { IHTTP } from './http.interface';


export class HTTP implements IHTTP {
  constructor(private readonly httpClient:IHTTPClient){}
  async get<O>(url: string): Promise<O> {
    return await this.httpClient.get(url);
  }
}