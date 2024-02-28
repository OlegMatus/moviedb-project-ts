import React from 'react';
import {FC, PropsWithChildren} from 'react';
// import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {

}

const MoviesPagination: FC<IProps> = () => {
// const {} = useAppContext();

    return (
        <div>
            MoviesPagination
        </div>
    );
};

export {MoviesPagination};