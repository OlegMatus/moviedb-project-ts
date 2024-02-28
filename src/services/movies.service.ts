import {IRes} from "../types";
import {apiService} from "./api.service";
import {urls} from "../constants";
import {IMovie, IMovies} from "../interfaces";

const moviesService = {
    getAll: (page: number): IRes<IMovie> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByGenres: (genre_ids: number): IRes<IMovies[]> => apiService.get(urls.movies.base, {params: {genre_ids}})
};

export {moviesService};