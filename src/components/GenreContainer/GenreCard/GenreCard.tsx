import React, {FC, PropsWithChildren} from 'react';
import {Link} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import css from "./Card.module.css";

interface IProps extends PropsWithChildren {
    genre: IGenre,
    page: string,
    getMoviesByGenres: (genreId: string, page: number) => void
}

const GenreCard: FC<IProps> = ({genre, getMoviesByGenres, page}) => {
    const {id, name} = genre;

    const handleClick = () => {
        getMoviesByGenres((id).toString(), +page);
    };

    return (
        <div className={css.genre_block}>
            <Link to={`/genres/${id}`} state={genre.id} onClick={handleClick}>
                {name}
            </Link>
        </div>
    );
};

export {GenreCard};