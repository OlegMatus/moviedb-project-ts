import React, {createContext, FC, PropsWithChildren} from 'react';

import {IAppContext} from "../interfaces/myContextInterface";
import {useAppState} from "../hooks/useAppState";

interface IProps extends PropsWithChildren {
T: T
}

const Context = createContext<IAppContext>(null);

const ContextProvider: FC<IProps> = ({children}) => {
   const state = useAppState<T>();

    return (
        <div>
            <Context.Provider value={state}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};