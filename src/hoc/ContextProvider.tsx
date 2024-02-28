import React, {createContext, FC, PropsWithChildren} from 'react';

import {IContextProps, IState} from "../interfaces";
import {useAppQuery, useAppState} from "../hooks";
import {IStateResult} from "../types";
import {useGetMoviesAndGenres} from "../hooks/useGetMoviesAndGenres";

interface IProps extends PropsWithChildren {

}

const Context = createContext<IContextProps>(null);
const ContextState = createContext<IStateResult<IContextProps>>(null);

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useAppState(null);
    const {movies, genres, getGenres, getMovies} = useGetMoviesAndGenres();
    const {page, prevPage, nextPage} = useAppQuery();

    return (
        <div>
            <Context.Provider value={{movies, genres, getMovies, getGenres, page, prevPage, nextPage}}>
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