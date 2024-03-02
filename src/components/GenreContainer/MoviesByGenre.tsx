import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    filteredMovie: IMovie
}

const MoviesByGenre: FC<IProps> = ({filteredMovie}) => {
    const {id,original_title} = filteredMovie;


    return (
        <div style={{display: "flex", flexFlow: "column"}}>
            <div>{id}</div>
            <div>{original_title}</div>
        </div>
    );
};

export {MoviesByGenre};