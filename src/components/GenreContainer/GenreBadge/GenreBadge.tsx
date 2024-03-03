import React, {FC, PropsWithChildren, useEffect} from 'react';

import {GenreCard} from "../GenreCard";
import {useAppContext, useAppQuery} from "../../../hooks";

interface IProps extends PropsWithChildren {

}

const GenreBadge: FC<IProps> = () => {
    const {genres, getGenres, getMoviesByGenres} = useAppContext();
    const {page} = useAppQuery();

    useEffect(() => {
        getGenres()
    }, []);

    return (
        <div>
            {genres.map((genre) => <GenreCard key={genre.id} genre={genre} page={page}
                                              getMoviesByGenres={getMoviesByGenres}/>)}
        </div>
    );
};

export {GenreBadge};