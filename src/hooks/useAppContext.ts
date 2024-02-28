import {useContext} from "react";

import {Context, ContextState} from "../hoc";
import {IContextProps} from "../interfaces";
import {IStateResult} from "../types";

const useAppContext = (): IContextProps => useContext(Context)
const useStateContext = (): IStateResult<IContextProps> => useContext(ContextState)

export {
    useAppContext,
    useStateContext
}