import React from 'react';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {
    vote_average: number
}

const StarsRating: FC<IProps> = ({vote_average}) => {

    return (
        <div>
            StarsRating
        </div>
    );
};

export {StarsRating};