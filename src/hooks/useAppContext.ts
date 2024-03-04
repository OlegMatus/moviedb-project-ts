import {useContext} from "react";

import {Context, ContextState} from "../hoc";
import {IContextProps, IState} from "../interfaces";
import {IStateResult} from "../types";
import {ThemeContext, ThemeContextProps} from "../hoc/ContextThemeProvider";

const useAppContext = (): IContextProps => useContext(Context)
const useStateContext = (): IStateResult<IState> => useContext(ContextState)
const useThemeContext = (): ThemeContextProps => {
    const useThemeContext = useContext(ThemeContext);

    if (!useThemeContext) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }

    return useThemeContext;
};

export {
    useAppContext,
    useStateContext,
    useThemeContext
}