import {IGenre} from "./genreInterface";
import {IMovie} from "./movieInterface";

export interface IContextProps {
    movies: IMovie[];
    genres: IGenre[];
    moviesByGenres: IMovie[];
    getMovies: (page: number) => Promise<void>;
    getMoviesByGenres: (id: string, page: number) => Promise<void>
    getGenres: () => Promise<void>;
}