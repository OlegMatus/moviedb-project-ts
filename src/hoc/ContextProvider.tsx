import React, {createContext, FC, PropsWithChildren} from 'react';

import {IContextProps, IState} from "../interfaces";
import {useAppState} from "../hooks";
import {IStateResult} from "../types";
import {useGetMoviesAndGenres} from "../hooks/useGetMoviesAndGenres";

const Context = createContext<IContextProps>(null);
const ContextState = createContext<IStateResult<IState>>(null);

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useAppState(null);
    const {movies, genres,moviesByGenres, getGenres, getMovies, getMoviesByGenres, } = useGetMoviesAndGenres();

    return (
        <div>
            <Context.Provider value={{movies, genres,moviesByGenres, getMovies, getGenres, getMoviesByGenres}}>
                <ContextState.Provider value={state}>
                    {children}
                </ContextState.Provider>
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context,
    ContextState
};