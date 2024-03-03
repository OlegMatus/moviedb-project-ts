import React, {ChangeEvent, useEffect, useState} from 'react';
import {useLocation,} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {moviesService} from "../../../services";
import {MovieCard} from "../MovieCard";
import css from "./SearchMovie.module.css"
import {MoviesPagination} from "../../MoviesPagination";

const SearchMovie = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<IMovie[]>([]);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');

    const search = async () => {
        try {
            const response = await moviesService.getByQuery(searchQuery, +page || 1);
            setSearchResults(response.data.results);
        } catch (e) {
            console.error('Error searching movies:', e);
        }
    }

    useEffect(() => {

        if (searchQuery.trim() !== '') {
            search();
        }
    }, [location.search]);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }
    const handleSearch = () => {
        search()
    }

    return (
        <div>
            <div className={css.SearchMovie}>
                <div className={css.input_block}>
                    <input type="text" placeholder={'searchMovie'} value={searchQuery} onChange={handleChange}/>
                    <button onClick={handleSearch}>search</button>
                </div>
                <div className={css.movies_block}>
                    {searchResults.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
            <div>
                <MoviesPagination/>
            </div>
        </div>
    );
};

export {SearchMovie};