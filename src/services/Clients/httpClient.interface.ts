export interface IHTTPClient {
    get<O>(url: string): Promise<O>;
}