import {IRes} from "../types";
import {apiService} from "./api.service";
import {urls} from "../constants";
import {IGenre} from "../interfaces/genreInterface";

const genresService = {
    getAll: (): IRes<IGenre[]> => apiService.get(urls.genres)
};

export {genresService};