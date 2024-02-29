import React, {FC, PropsWithChildren, useEffect} from 'react';

import {GenreCard} from "../GenreCard";
import {useAppContext} from "../../../hooks";
import css from "./GenreBadge.module.css"

interface IProps extends PropsWithChildren {

}

const GenreBadge: FC<IProps> = () => {
    const {genres, getGenres} = useAppContext();

    useEffect(() => {
        getGenres()

    }, []);

    return (
        <div className={css.Main}>
            {genres.map((genre) => <GenreCard key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreBadge};