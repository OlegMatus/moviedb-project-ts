import axios from "axios";

import {baseMovieURL} from "../constants";

const apiService = axios.create({baseURL: baseMovieURL});

export {
    apiService
};