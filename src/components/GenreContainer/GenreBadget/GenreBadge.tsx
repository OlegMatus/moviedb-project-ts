import React from 'react';
import {FC, PropsWithChildren} from 'react';
import {IGenre} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreBadge: FC<IProps> = ({genre}) => {
const {id, name} = genre;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {GenreBadge};