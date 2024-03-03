import React, {FC, PropsWithChildren, useEffect, useState} from 'react';

import {MovieCard} from "../MovieCard";
import {useAppContext} from "../../../hooks";
import css from "./MoviesList.module.css"
import {IMovie} from "../../../interfaces";
import {MoviesByGenre} from "../MoviesByGenre";

interface IProps extends PropsWithChildren {
    page: number,
    movies: IMovie[],
    getMovies: (page: number) => void
}

const MoviesList: FC<IProps> = ({page, movies, getMovies}) => {
    const [selectedGenre, setSelectedGenre] = useState<number>(null);
    const {moviesByGenres,getMoviesByGenres} = useAppContext();

    const handleGenreClick = (genreId: number) => {
        setSelectedGenre(genreId);
        getMoviesByGenres((genreId).toString(), page)
    }

    useEffect(() => {
        getMovies(+page);
    }, [page]);

    return (
        <div className={css.MoviesListContainer}>
                {selectedGenre !== null ? (
                    <MoviesByGenre moviesByGenres={moviesByGenres} onGenreClick={handleGenreClick}/>
                ) : (
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)
                )}
        </div>
    );
};

export {MoviesList};