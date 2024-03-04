import React, {FC, PropsWithChildren, useEffect} from 'react';

import {GenreCard} from "../GenreCard";
import {useAppContext, useAppQuery} from "../../../hooks";
import css from "./GenreList.module.css"

interface IProps extends PropsWithChildren {

}

const GenreList: FC<IProps> = () => {
    const {genres, getGenres, getMoviesByGenres} = useAppContext();
    const {page} = useAppQuery();

    useEffect(() => {
        getGenres()
    }, []);

    return (
        <div className={css.Main}>
            {genres.map((genre) => <GenreCard key={genre.id} genre={genre} page={page}
                                              getMoviesByGenres={getMoviesByGenres}/>)}
        </div>
    );
};

export {GenreList};