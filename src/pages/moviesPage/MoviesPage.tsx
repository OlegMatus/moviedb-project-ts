import React, {FC, PropsWithChildren} from 'react';

import {MoviesList} from "../../components";
import {MoviesPagination} from "../../components/MoviesPagination";
import css from "./MoviesPage.module.css"
import style from "./MoviesPage.module.css"
import {useAppContext, useAppQuery} from "../../hooks";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {
    const {movies, getMovies} = useAppContext();
    const {page} = useAppQuery();

    return (
        <div className={css.MoviesPage}>
            <div className={css.page_block}>
                <MoviesList movies={movies} getMovies={getMovies} page={+page}/>
            </div>
            <div className={style.page_block_forPagination}>
                <MoviesPagination/>
            </div>
        </div>
    );
};

export {MoviesPage};