import React, {FC, PropsWithChildren} from 'react';

import {MoviesList} from "../../components";
import {MoviesPagination} from "../../components/MoviesPagination";
import css from "./MoviesPage.module.css"
import style from "./MoviesPage.module.css"

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {

    return (
        <div className={css.MoviesPage}>
        <div className={css.page_block}>
            <MoviesList/>
        </div>
            <div className={style.page_block_forPagination}>
                <MoviesPagination/>
            </div>
        </div>
    );
};

export {MoviesPage};