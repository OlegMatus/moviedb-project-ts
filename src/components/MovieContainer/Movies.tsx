import React from 'react';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {

    return (
        <div>
            Movies
        </div>
    );
};

export {Movies};