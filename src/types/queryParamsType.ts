export type QueryParams = {
    page: string;
    pageSize:string;
    prevPage: () => void;
    nextPage: () => void;
}