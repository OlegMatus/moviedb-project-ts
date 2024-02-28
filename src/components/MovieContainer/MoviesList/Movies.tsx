import React, {FC, PropsWithChildren, useEffect} from 'react';

import {useAppQuery, useStateContext} from "../../../hooks";
import {moviesService} from "../../../services";
import {Movie} from "../MovieCard";


interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = ({children}) => {
    // const [movies, setMovies] = useAppState<IMovie[]>([]);
    const [movies, setMovies] = useStateContext();
    const {page} = useAppQuery();


    useEffect(() => {
        moviesService.getAll(+page).then(({data}) => {
            console.log(data.results);
            // setMovies(data.results))
        })
    }, [page, setMovies]);

    console.log(movies)
    return (
        <div>
            {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};