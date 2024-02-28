import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {MoviesList} from "../../components";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {

    return (
        <div>
          <MoviesList/>
        </div>
    );
};

export {MoviesPage};