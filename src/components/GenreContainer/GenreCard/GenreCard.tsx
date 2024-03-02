import React, {FC, PropsWithChildren} from 'react';
import {Link} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import css from "../GenreBadget/GenreBadge.module.css";

interface IProps extends PropsWithChildren {
    genre: IGenre
}

const GenreCard: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    return (
            <div className={css.GenreBadge} style={{fontFamily: 'Segoe UI Historic', 'fontSize': 17}}>
                <Link to={`/genres/${id}`}>
                    {name}
                </Link>
            </div>
    );
};

export {GenreCard};