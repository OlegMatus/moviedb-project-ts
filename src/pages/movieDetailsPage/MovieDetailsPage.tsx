import React, {useEffect} from 'react';
import {FC, PropsWithChildren} from 'react';

import {MovieInfo} from "../../components";
import {useAppState} from "../../hooks";
import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";
import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {
const [movieDetails, setMovieDetails] = useAppState<IMovie>(null);
const {id} = useParams();

    useEffect(() => {
        moviesService.getById(+id).then(({data}) => setMovieDetails(data))
    }, [id, setMovieDetails]);

    return (
        <div>
            {movieDetails && <MovieInfo movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};