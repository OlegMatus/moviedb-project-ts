import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    movieDetails: IMovie
}

const MovieInfo: FC<IProps> = ({movieDetails}) => {
    const {original_title, original_language, release_date} = movieDetails;

    return (
        <div>
            <div>original_title: {original_title}</div>
            <div>original_language: {original_language}</div>
            <div>release_date: {release_date}</div>

        </div>
    );
};

export {MovieInfo};