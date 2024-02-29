import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo} from "../../components";
import {useAppState} from "../../hooks";
import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";
import css from "./MovieDetailsPage.module.css"

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {
    const [movieDetails, setMovieDetails] = useAppState<IMovie>(null);
    const {id} = useParams();

    useEffect(() => {
        moviesService.getById(+id).then(({data}) => setMovieDetails(data)
        )
    }, [id, setMovieDetails]);

    return (
        <div className={css.MovieDetailsBlock}>
            {movieDetails && <MovieInfo movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};