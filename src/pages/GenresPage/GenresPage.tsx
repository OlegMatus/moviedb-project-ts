import React, {FC, PropsWithChildren} from 'react';

import {GenreList} from "../../components";
import css from "./GenresPage.module.css"

interface IProps extends PropsWithChildren {

}
const GenresPage: FC<IProps> = () => {

    return (
        <div className={css.GenrePageMain}>
            <div className={css.genre_block}>
                <GenreList/>
            </div>
        </div>
    );
};

export {GenresPage};