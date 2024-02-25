import {IRes} from "../types";
import {apiService} from "./api.service";
import {urls} from "../constants";
import {IMovie} from "../interfaces";

const moviesService = {
    getAll: (): IRes<void> => apiService.get(urls.movies.base),
    getById: (id: number): IRes<IMovie[]> => apiService.get(urls.movies.byId(id))
};

export {moviesService};