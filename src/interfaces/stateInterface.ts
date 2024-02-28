import {IMovie} from "./movieInterface";
import {IGenre} from "./genreInterface";

export interface IState {
    movies: IMovie [],
    genres: IGenre []
}