import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {IGenre} from "../../../interfaces";
import css from "../GenreBadget/GenreBadge.module.css";

interface IProps extends PropsWithChildren {
genre: IGenre
}

const GenreCard: FC<IProps> = ({genre}) => {
const {name} = genre;

    return (
            <div className={css.GenreBadge}>{name}</div>
    );
};

export {GenreCard};