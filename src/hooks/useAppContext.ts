import {useContext} from "react";

import {Context, ContextState, ContextTheme, ThemeType} from "../hoc";
import {IContextProps, IState} from "../interfaces";
import {IStateResult} from "../types";
// import {ContextTheme} from "../hoc/ContextThemeProvider";

const useAppContext = (): IContextProps => useContext(Context)
const useStateContext = (): IStateResult<IState> => useContext(ContextState)
// const useThemeContext = () => useContext(ContextTheme);
// const useThemeContext = () => {
//     const context = useContext(ContextTheme);
//     if (!context) {
//         throw new Error('useThemeContext повинно використовуватися в середовищі ContextThemeProvider');
//     }
//     return context;
// };
interface IUseThemeContext {
    theme: ThemeType;
    switchTheme: () => void;
}
const useThemeContext = (): IUseThemeContext => {
    return useContext(ContextTheme) as IUseThemeContext;
};
export {
    useAppContext,
    useStateContext,
    useThemeContext
}