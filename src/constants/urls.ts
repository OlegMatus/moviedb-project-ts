const baseMovieURL = process.env.REACT_APP_MOVIE_API;
const basePosterURL = process.env.REACT_APP_POSTER;

// const baseTrailerURL = process.env.REACT_APP_TRAILER;


const movies = '/discover/movie';
const genres = "/genre/movie/list";
const searchMovie = '/search/movie';

const urls = {
    movies: {
        base: movies,
        byId: (movie_id: number): string => `${movies}/${movie_id}`
    },
    genres,
    searchMovie
}

export {
    baseMovieURL,
    basePosterURL,
    urls
}