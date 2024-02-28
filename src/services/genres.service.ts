import {IRes} from "../types";
import {apiService} from "./api.service";
import {urls} from "../constants";
import {IGenres} from "../interfaces";

const genresService = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genres)
};

export {genresService};