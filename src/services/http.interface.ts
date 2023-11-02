export interface IHTTP {
    get<O>(url: string): Promise<O>;
}