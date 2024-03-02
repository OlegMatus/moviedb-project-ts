import React, {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {basePosterURL} from "../../constants";
import css from "./PosterPrewiev.module.css"
import {StarsRating} from "../Rating";

interface IProps extends PropsWithChildren {
    poster_path: string,
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({poster_path, movie}) => {

    return (
        <div className={css.Poster}>
            <img src={`${basePosterURL}/${poster_path}`} alt={movie.title} style={{width:220, height:300}}/>
        </div>
    );
};

export {PosterPreview};