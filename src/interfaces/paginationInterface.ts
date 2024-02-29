export interface IPagination<DATA> {
    current_page: number,
    total_pages: number,
    total_results: number,
    prevPage: string,
    nextPage: string,
    results: DATA[]
}