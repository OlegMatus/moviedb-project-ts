import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import {basePosterURL} from "../../constants";

interface IProps extends PropsWithChildren {
    poster_path: string,
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({poster_path, movie}) => {

    return (
        <div>
            <img src={`${basePosterURL}/${poster_path}`} alt={movie.title}/>
        </div>
    );
};

export {PosterPreview};