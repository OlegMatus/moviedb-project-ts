import {IContextProps, IMovie} from "../interfaces";
// import {moviesService} from "../services";
// import {useAppState} from "./useAppState";
// import {useEffect} from "react";
// import {useParams} from "react-router-dom";
// import {IGenre} from "../interfaces/genreInterface";
//
// const useGetMoviesAndGenres = (): IContextProps => {
//     const [movies, setMovies] = useAppState<IMovie[]>([]);
//     const [genres, setGenres] = useAppState<IGenre[]>([]);
//     const {genres_ids, page} = useParams();
//
//
//     const getMovies = async (page: number) => {
//
//         try {
//             const {data} = moviesService.getAll(page).then()
//             setMovies()
//         } catch (e) {
//
//         }
//     };
//
//     const getGenres = async (genres_ids: number) => {
//
//         try {
//             const {data: {results}} = moviesService.getByGenres(genres_ids).then();
//         } catch (e) {
//
//
//         }
//     };
//
//     useEffect(() => {
//         getMovies(+page);
//         getGenres(+genres_ids)
//     }, [getMovies,getGenres,page,genres_ids]);
//
//     return {
//         movies,
//         genres,
//         getMovies,
//         getGenres,
//     }
//
// }
//
// export {
//     useGetMoviesAndGenres
// }