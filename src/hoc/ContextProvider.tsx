import React, {createContext, FC, PropsWithChildren} from 'react';

import {IContextProps, IMovie} from "../interfaces";
import { useAppState} from "../hooks";
import {IStateResult} from "../types";
// import {useParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const Context = createContext<IContextProps>(null);
const ContextState  = createContext<IStateResult<IMovie[]>>(null);

const ContextProvider: FC<IProps> = ({children}) => {
    const state = useAppState(null);
    // const query = useAppQuery();
    // const {genres_ids, page} = useParams();

    const getMovies = async (page: number) => {

    };

    const getGenres = async () => {

    };

    return (
        <div>
            <Context.Provider value={{movies: [], genres: [], getMovies, getGenres}}>
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