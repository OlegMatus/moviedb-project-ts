import React, {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../../interfaces";
import {PosterPreview} from "../../Poster";
import css from "./MovieInfo.module.css"

interface IProps extends PropsWithChildren {
    movieDetails: IMovie
}

const MovieInfo: FC<IProps> = ({movieDetails}) => {
    const {original_title, original_language, release_date, poster_path} = movieDetails;

    return (
        <div className={css.MovieInfoMain}>
            <div className={css.poster_block}>
                <PosterPreview poster_path={poster_path} movie={movieDetails}/>
                <div>{original_title}</div>
                <div>{original_language}</div>
                <div>{release_date}</div>
            </div>
        </div>
    );
};

export {MovieInfo};