import {useContext} from "react";

import {Context, ContextState} from "../hoc";
import {IContextProps, IState} from "../interfaces";
import {IStateResult} from "../types";

const useAppContext = (): IContextProps => useContext(Context)
const useStateContext = (): IStateResult<IState> => useContext(ContextState)

export {
    useAppContext,
    useStateContext
}