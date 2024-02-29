import React, {FC, PropsWithChildren, useEffect} from 'react';

import {MovieCard} from "../MovieCard";
import {useAppContext, useAppQuery} from "../../../hooks";
import css from "./MoviesList.module.css"

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {
    const {movies, getMovies, genres, getGenres} = useAppContext();
    const {page} = useAppQuery();

    useEffect(() => {
        getMovies(+page);
    }, [page]);

    return (
        <div className={css.MoviesListContainer}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};