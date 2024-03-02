import React, {useEffect} from 'react';

import {GenreCard, MoviesByGenre} from "../../components";
import {useAppContext, useAppQuery} from "../../hooks";
import css from "../../components/GenreContainer/GenreBadget/GenreBadge.module.css";
import {useParams} from "react-router-dom";

const GenresPage = () => {
    const {genres, getGenres, moviesByGenres, getMoviesByGenres} = useAppContext();
    const {genreId} = useParams<{ genreId: string }>();
    const {page} = useAppQuery();


    useEffect(() => {
        getMoviesByGenres(genreId, +page)
    }, [genreId, page]);

    const filteredMovies = moviesByGenres.filter((movie) => movie.genre_ids.includes(+genreId))

    useEffect(() => {
        getGenres()

    }, []);

    return (
        <div className={css.Main}>
            <div>
                {genres.map((genre) => <GenreCard key={genre.id} genre={genre}/>)}
            </div>

            <div>
                {filteredMovies.map(movie => <MoviesByGenre key={movie.id}
                                                                    filteredMovie={movie}/>)}
            </div>
        </div>
    );
};

export {GenresPage};