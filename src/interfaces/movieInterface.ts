import {IGenre} from "./genreInterface";

export interface IMovie extends IMovies {
    id: number,
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    genres: IGenre[];
}

export interface IMovies {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}