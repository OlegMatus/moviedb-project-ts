import {IGenre} from "./genreInterface";
import {IMovie} from "./movieInterface";

export interface IContextProps {
    movies: IMovie[];
    genres: IGenre[];
    getMovies: (page: number) => Promise<void>;
    getGenres: () => Promise<void>;
}