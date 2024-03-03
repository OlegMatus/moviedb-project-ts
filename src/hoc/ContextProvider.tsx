import React, {createContext, FC, PropsWithChildren} from 'react';

import {IContextProps, IState} from "../interfaces";
import {useAppState} from "../hooks";
import {IStateResult} from "../types";
import {useGetMoviesAndGenres} from "../hooks/useGetMoviesAndGenres";

const Context = createContext<IContextProps>(null);
const ContextState = createContext<IStateResult<IState>>(null);

export type ThemeType = 'light' | 'dark';
const defaultTheme: ThemeType = 'light';

const ContextTheme = createContext<{ theme: ThemeType, switchTheme: () => void }>({
    theme: defaultTheme,
    switchTheme: () => {}
});

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useAppState(null);
    const {movies, genres, moviesByGenres, getGenres, getMovies, getMoviesByGenres,} = useGetMoviesAndGenres();
    const [theme, setTheme] = useAppState<ThemeType>(defaultTheme);

    const switchTheme = () => {
        setTheme((prevTheme: ThemeType) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <div>
            <ContextTheme.Provider value={{theme, switchTheme}}>
                <Context.Provider value={{movies, genres, moviesByGenres, getMovies, getGenres, getMoviesByGenres}}>
                    <ContextState.Provider value={state}>
                        {children}
                    </ContextState.Provider>
                </Context.Provider>
            </ContextTheme.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context,
    ContextState,
    ContextTheme
};