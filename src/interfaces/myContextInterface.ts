// import {IGenre} from "./genreInterface";
// import {IMovie} from "./movieInterface";

import {IGenre} from "./genreInterface";
import {IMovie} from "./movieInterface";

export interface IContextProps {
    movies: IMovie[];
    genres: IGenre[];
    getMovies: (page: number) => Promise<void>;
    getGenres: (genres_ids: number) => Promise<void>;

    page: string;
    prevPage: () => void;
    nextPage: () => void;
}