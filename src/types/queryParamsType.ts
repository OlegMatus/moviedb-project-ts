export type QueryParams = {
    page: string;
    id: string;
    pageSize:string;
    prevPage: () => void;
    nextPage: () => void;
}