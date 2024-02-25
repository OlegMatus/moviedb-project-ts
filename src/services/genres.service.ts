import {IRes} from "../types";
import {apiService} from "./api.service";
import {urls} from "../constants";
import {IMovie} from "../interfaces";

const genresService = {
    getAll: (): IRes<IMovie[]> => apiService.get(urls.genres)
};

export {genresService};