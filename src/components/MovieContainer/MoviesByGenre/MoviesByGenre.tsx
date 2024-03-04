import React, {FC, PropsWithChildren} from 'react';
import {Link} from "react-router-dom";

import css from "../MovieCard/MovieCard.module.css";
import {PosterPreview} from "../../Poster";
import {StarsRating} from "../../Rating";
import {IMovie} from "../../../interfaces";

interface IProps extends PropsWithChildren {
    moviesByGenres: IMovie[],
    onGenreClick: (genreId: number) => void
}

const MoviesByGenre: FC<IProps> = ({moviesByGenres, onGenreClick}) => {

    return (
        <div className={css.MovieCard}>
            <div>
                {moviesByGenres.map((movie) => (
                    <div key={movie.id} className={css.card_block}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.poster_path ? (
                                <PosterPreview poster_path={movie.poster_path} movie={movie}/>
                            ) : (
                                <div className={css.noPoster}>No Poster Available</div>
                            )}
                        </Link>
                        <StarsRating vote_average={movie.vote_average}/>
                        <b>{movie.original_title}</b>
                    </div>
                ))}
            </div>
        </div>
    );
};


export {MoviesByGenre};