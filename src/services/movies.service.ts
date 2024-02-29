import {IRes} from "../types";
import {apiService} from "./api.service";
import {urls} from "../constants";
import {IMovie, IMovies} from "../interfaces";

const moviesService = {
    getAll: (page: number, pageSize: number): IRes<IMovies> => apiService.get(urls.movies.base, {params: {page, pageSize}}),
    getById: (id: number): IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByGenres: (genreId: number): IRes<IMovies[]> => apiService.get(urls.movies.base, {params: {genreId}})
};

export {moviesService};