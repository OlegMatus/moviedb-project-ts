export interface IPagination<DATA> {
    currentPage: number,
    totalPages: number,
    prevPage: string,
    nextPage: string,
    results: DATA[]
}