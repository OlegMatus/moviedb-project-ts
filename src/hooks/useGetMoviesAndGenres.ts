import {AxiosError} from "axios";

import {IContextProps, IGenre, IGenres, IMovie, IMovies} from "../interfaces";
import {genresService, moviesService} from "../services";
import {useAppState} from "./useAppState";

const useGetMoviesAndGenres = (): IContextProps => {
    const [movies, setMovies] = useAppState<IMovie[]>([]);
    const [genres, setGenres] = useAppState<IGenre[]>([]);
    const [moviesByGenres, setMoviesByGenres] = useAppState<IMovie[]>([]);
    const [selectedGenre, setSelectedGenre] = useAppState(null);

    const getMovies = async (page: number, pageSize: number) => {
        try {
            const response = await moviesService.getAll(page, pageSize).then()
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

    const getGenres = async () => {
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
    const getMoviesByGenres = async (genreId: string, page: number) => {
        try {
            const response = await moviesService.getByGenres(genreId, page).then();
            const movies = response.data.results;

            setMoviesByGenres(movies)
            // const filteredMovies = movies.filter((movie) => movie.genre_ids.includes(+genreId))
        } catch (e) {

        }
    }

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
        moviesByGenres,
        getGenres,
        getMovies,
        getMoviesByGenres
    } as IContextProps
}

export {
    useGetMoviesAndGenres
}