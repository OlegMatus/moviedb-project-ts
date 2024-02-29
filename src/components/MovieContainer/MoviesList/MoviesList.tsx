import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {MovieCard} from "../MovieCard";
import {useAppContext} from "../../../hooks";
import {GenreBadge} from "../../GenreContainer";


interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const {movies, getMovies, genres, getGenres} = useAppContext();
    const {genreId, page} = useParams()

    useEffect(() => {
        getMovies(+page);
    }, [page]);


    useEffect(() => {
        getGenres(+genreId)

    }, []);

    return (
        <div>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            {genres.map((genre) => <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {MoviesList};