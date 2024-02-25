const baseMovieURL = process.env.REACT_APP_MOVIE_API;
const basePosterURL = process.env.REACT_APP_POSTER;


const movies = 'discover/movie';
const genres = "genre/movie/list";
const searchMovie = 'search/movie'

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `${movies}/${id}`
    },
    genres,
    searchMovie
}

export {
    baseMovieURL,
    basePosterURL,
    urls
}