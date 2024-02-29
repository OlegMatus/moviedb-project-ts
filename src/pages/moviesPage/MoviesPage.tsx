import React, {FC, PropsWithChildren} from 'react';

import {MoviesList} from "../../components";
import {MoviesPagination} from "../../components/MoviesPagination";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {


    return (
        <div>
            <MoviesList/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesPage};