import {AxiosError} from "axios";

import {IContextProps, IGenre, IGenres, IMovie, IMovies} from "../interfaces";
import {genresService, moviesService} from "../services";
import {useAppState} from "./useAppState";

const useGetMoviesAndGenres = (): IContextProps => {
    const [movies, setMovies] = useAppState<IMovie[]>([]);
    const [genres, setGenres] = useAppState<IGenre[]>([]);

    const getMovies = async (page: number) => {

        try {
            const response = await moviesService.getAll(page).then()
            const moviesData: IMovies = response.data;

            if (moviesData && moviesData.results) {
                setMovies(moviesData.results);
            } else {
                console.error("Invalid response structure for movies");
            }
        } catch (error) {
            handleAxiosError(error as AxiosError)

        }
    };

    const getGenres = async (genreId: number) => {

        try {
            const response = await genresService.getAll().then();
            const genresData: IGenres = response.data;

            if (genresData && genresData.genres) {
                setGenres(genresData.genres);
            } else {
                console.error("Invalid response structure for genres");
            }
        } catch (error) {
            handleAxiosError(error as AxiosError)
        }
    };

    const handleAxiosError = (error: AxiosError) => {
        if (error.response) {
            console.error("Error response:", error.response.data)
        } else if (error.request) {
            console.error("No response received:", error.request)
        } else {
            console.error("Error:", error.message)
        }
    }
    return {
        genres,
        movies,
        getGenres,
        getMovies
    }
}

export {
    useGetMoviesAndGenres
}