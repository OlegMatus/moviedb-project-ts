import React, {FC, PropsWithChildren} from 'react';

import {GenreBadge} from "../../components";
import css from "../../components/GenreContainer/GenreBadge/GenreBadge.module.css";

interface IProps extends PropsWithChildren {

}
const GenresPage: FC<IProps> = () => {

    return (
        <div className={css.Main}>
            <div>
                <GenreBadge/>
            </div>
        </div>
    );
};

export {GenresPage};