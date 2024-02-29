import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {id, original_title} = movie;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {original_title}</div>
        </div>
    );
};

export {MovieCard};